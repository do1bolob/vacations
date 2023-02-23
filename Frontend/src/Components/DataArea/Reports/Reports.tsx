import "./Reports.css";
import { useEffect, useState } from "react";
import VacationModel from "../../../Models/VocationModel";
import UserModel from "../../../Models/UserModel";
import React from "react";
import { CSVLink } from "react-csv";
import { vacationsStore } from "../../../Redux/VacationState";
import vacationService from "../../../Services/VacationService";
import { ResponsiveContainer } from "recharts/types/component/ResponsiveContainer";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";


interface VacationData {
    destination: string;
    followerCount: number;
  }  
 
function Reports(): JSX.Element {
    const [vacations, setVacations] = useState<VacationModel[]>([]);
    const [following, setFollowing] = useState({
        label: vacations.map((v)=>v.destination),
        datasets: [{
            label: "followers",
            data: vacations.map((v)=>v.followersCount),
        }]
    })

    useEffect(() => {
        vacationService.getAllVacationsForUser()
        .then((dbVacation) => setVacations(dbVacation))
        .catch((err) => alert(err.message));
        },[]);


    const data = [
        ["vacations", "followers"]
    ];
    
    for(let vacation of vacations) {
        let vacationsList: any = [];
        vacationsList.push(vacation.destination);
        vacationsList.push(vacation.followersCount);
        data.push(vacationsList);
    }

    const vacationData: VacationData[] = vacations.map((vacation) => {
        const { destination, followersCount } = vacation;
        return { destination, followerCount: followersCount };
      });



    return (
        <div className="Reports">

            <button>
                    <CSVLink
        data={data}
        filename={"vacations.csv"}
        className="button"
        target="_blank"
        >
        Reports file
        </CSVLink>
        </button>

        <br/><br/>

        <BarChart width={1350} height={600} data={vacationData} className="chart">
        <CartesianGrid strokeDasharray="33" />
        <XAxis dataKey="destination" className="chart" tick={{ fill: "#000000"}}  tickLine={false}
  interval={0}/>
        <YAxis />
        <Tooltip />
        <Legend  className="chart"/>
          <Bar dataKey="followerCount" fill="#3399FF"  />
        </BarChart>


           


        </div>
    );
}

export default Reports;
