import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import VacationModel from "../../../Models/VocationModel";
import vacationServiceAdmin from "../../../Services/VacationServiceAdmin";

import "./AdminVacationCard.css";

interface AdminVacationCard {
  vacation: VacationModel;
  deleteVacation: (vacationID: number) => Promise<void>;
}
function AdminVacationCard(props: AdminVacationCard): JSX.Element {
  const [vacation, setVacation] = useState<VacationModel>();

  function formatTime(time: string): string {
    const d = new Date(time);
    return d.toLocaleDateString("he-IL");
  }

  

  async function deleteMe() {
    try {
      if (!window.confirm("Are you sure?")) return;
      await props.deleteVacation(props.vacation.vacationId);
      alert("Vacation has been deleted!");
    } catch (err: any) {
      alert(err.message);
    }
  }

  

  return (
    <div className="AdminVacationCard">
      <NavLink to={"/admin/vacations/edit/" + props.vacation.vacationId}>
        <button className="edit">Edit ✏️</button>
      </NavLink>

      <div>
        <button onClick={deleteMe} className="delete">
          Delete 🗑️
        </button>
      </div>
      <img src={props.vacation.imageUrl} />
      <div className="destination">{props.vacation.destination}</div>
      <div className="date">
        🗓️{formatTime(props.vacation.startDate)} —{" "}
        {formatTime(props.vacation.endDate)}
      </div>
      <div className="description">{props.vacation.description}</div>
      <div className="price">{props.vacation.price}$</div>
    </div>
  );
}

export default AdminVacationCard;
