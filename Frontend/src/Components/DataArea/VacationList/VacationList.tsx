import axios from "axios";
import { useEffect, useState } from "react";
import {  NavLink } from "react-router-dom";
import UserModel from "../../../Models/UserModel";
import VacationModel from "../../../Models/VocationModel";
import { authStore } from "../../../Redux/AuthState";
import { vacationsStore } from "../../../Redux/VacationState";
import vacationService from "../../../Services/VacationService";
import vacationServiceAdmin from "../../../Services/VacationServiceAdmin";
import appConfig from "../../../Utils/AppConfig";
import AdminVacationCard from "../AdminVacationCard/AdminVacationCard";
import Pagination from "../Pagination/Pagination";
import UserVacationCard from "../UserVacationCard/UserVacationCard";
import "./VacationList.css";

function VacationList(): JSX.Element {
  const [vacations, setVacations] = useState<VacationModel[]>([]);
  const [user, setUser] = useState<UserModel>();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [vacationPerPage, setVacationPerPage] = useState(10);
  const [showNotStarted, setShowNotStarted] = useState(false);
  const [showInProgress, setShowInProgress] = useState(false);
  const [showFollowed, setFollowVacation] = useState(false);
  

  useEffect(() => {
    setUser(authStore.getState().user);
    const unsubscribe = authStore.subscribe(() => {
      setUser(authStore.getState().user);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    vacationsStore.subscribe(() => {
      const vacations = vacationsStore.getState().vacations;
      const dupVacations = [...vacations];
      setVacations(dupVacations);
    });
  }, []);

  useEffect(() => {
    if (user) {
      if (user.role === "User") {
        vacationService
          .getAllVacationsForUser()
          .then((dbVacation) => setVacations(dbVacation))
          .catch((err) => alert(err.message));
      } else if (user.role === "Admin") {
        vacationServiceAdmin
          .getAllVacationsForAdmin()
          .then((dbVacation) => setVacations(dbVacation))
          .catch((err) => alert(err.message));
      }
    }
  }, [user]);

  useEffect(() => {
    const getVacation = async () => {
      setLoading(true);
      const res = await axios.get<VacationModel[]>(
        appConfig.getAllVacationToUserUrl
      );
      setVacations(res.data);
      setLoading(false);
    };
    getVacation();
  }, []);

  async function deleteVacation(vacationID: number) {
    try {
      await vacationServiceAdmin.deleteVacation(vacationID);
      const duplicateVacation = [...vacations];
      const index = duplicateVacation.findIndex(
        (v) => v.vacationId === vacationID
      );
      duplicateVacation.splice(index, 1);
      setVacations(duplicateVacation);
    } catch (err: any) {
      alert(err.message);
    }
  }
  function vacationNotStarted(vacationId: any): boolean {
    const currentDate = new Date();
    const vacation = vacations.find((v) => v.vacationId === vacationId);
    if (vacation) {
      const vacationDate = new Date(vacation.startDate);
      return vacationDate > currentDate;
    }
    return false;
  }
  
  let filteredVacations;
  if (showNotStarted) {
    filteredVacations = vacations.filter((v) => vacationNotStarted(v.vacationId));
  } else if (showInProgress) {
    filteredVacations = vacations.filter(
      (v) =>
        new Date(v.startDate) <= new Date() && new Date(v.endDate) >= new Date()
    );
  } else if(showFollowed) {
    filteredVacations = vacations.filter((v) => v.isFollowing === 1)
  } else (filteredVacations = vacations);


  const lastVacationIndex = currentPage * vacationPerPage;
  const firstVacationIndex = lastVacationIndex - vacationPerPage;
  const currentVacation = filteredVacations.slice(
    firstVacationIndex,
    lastVacationIndex
  );



  return (
    <div className="VacationList">
      {user && user.role === "User" && (
        <div>
          <span className="select">
            <div>
              <button
                onClick={() => setShowNotStarted(!showNotStarted)}
                className="btn"
              >
                {showNotStarted
                  ? "Show all vacations"
                  : "Show only not started vacations"}
              </button>
              <button
                onClick={() => setShowInProgress(!showInProgress)}
                className="btn"
              >
                {showInProgress
                  ? "Show all vacations"
                  : "Show only vacations in progress"}
              </button>
              <button
                onClick={() => setFollowVacation(!showFollowed)}
                className="btn"
              >
                {showFollowed
                  ? "Show all vacations"
                  : "Show only followed vacation"}
              </button>
            </div>
          </span>
          {currentVacation.map((v) => (
            <UserVacationCard key={v.vacationId} vacation={v} />
          ))}
          <Pagination
            vacationPerPage={vacationPerPage}
            totalVacations={filteredVacations.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
      

      {user && user.role === "Admin" && (
        <div>
          <div>
            <NavLink to="/admin/vacations/add">Add Vacation</NavLink>
          </div>
          <div>
            <NavLink to="/admin/reports/">Reports</NavLink>
          </div>
          {vacations.map((v) => (
            <AdminVacationCard
              key={v.vacationId}
              vacation={v}
              deleteVacation={deleteVacation}
            />
          ))}
           <Pagination
            vacationPerPage={vacationPerPage}
            totalVacations={filteredVacations.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
}
export default VacationList;
