
import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import UserModel from "../../../Models/UserModel";
import { authStore } from "../../../Redux/AuthState";
import Login from "../../AuthArea/Login/Login";
import Register from "../../AuthArea/Register/Register";
import About from "../../DataArea/About/About";
import AddVacation from "../../DataArea/AddVacation/AddVacation";
import Reports from "../../DataArea/Reports/Reports";
import UpdateVacation from "../../DataArea/UpdateVacation/UpdateVacation";
import VacationList from "../../DataArea/VacationList/VacationList";
import PageNotFound from "../PageNotFound/PageNotFound";

function Routing(): JSX.Element {

    const [user, setUser] = useState<UserModel>()


    useEffect( () => {
        setUser(authStore.getState().user);

        authStore.subscribe(()=> {
            setUser(authStore.getState().user)
        })
    },[]);
    
    return (
        <Routes>

            {!user && <>
            <Route path="/register" element={<Register />} /> 
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Login />} />

            </>}
            {user && user.role === "Admin" &&  <>
            
            <Route path="/admin/vacations" element={<VacationList />}/>
            <Route path="/admin/vacations/add" element={<AddVacation />}/>
            <Route path="/admin/vacations/edit/:vacationId" element={<UpdateVacation />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/admin/reports" element={<Reports/>}/>
            <Route path="/" element={<Navigate to="/admin/vacations" />} />

            </>
            }
            {user && user.role === "User" && <>

            <Route path="/users/vacations"  element={<VacationList />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/" element={<Navigate to="/users/vacations" />} />
            </>} 
            
            <Route path="*" element={<PageNotFound />} />
        
        </Routes>
    );
}

export default Routing;
