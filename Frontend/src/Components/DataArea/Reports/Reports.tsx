import "./Reports.css";
import { useEffect, useState } from "react";
import VacationModel from "../../../Models/VacationModel";
import { CSVLink } from "react-csv";
import vacationService from "../../../Services/VacationService";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import notify from "../../../Utils/Notify";


interface VacationData {
    destination: string;
    followers: number;
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
        .catch((err) => notify.error(err));
        },[]);

    //Adding data for csv file
    const data = [
        ["vacations", "followers"]
    ];
    //Running and adding vacation and destination to arr
    
    for(let vacation of vacations) {
        let vacationsList: any = [];
        vacationsList.push(vacation.destination);
        vacationsList.push(vacation.followersCount);
        data.push(vacationsList);
    }

    const vacationData: VacationData[] = vacations.map((vacation) => {
        const { destination, followersCount } = vacation;
        return { destination, followers: followersCount };
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
        <CartesianGrid strokeDasharray="1" />
        <XAxis dataKey="destination" className="chart" tick={{ fill: "#000000"}}  tickLine={false}
  interval={0}/>
  <YAxis label={{ value: "number of followers", angle: -90, position: "insideLeft" }}/>

        <Tooltip />
        <Legend  className="chart"/>
          <Bar dataKey="followers" fill="#3399FF"  />
        </BarChart>


           


        </div>
    );
}

export default Reports;
