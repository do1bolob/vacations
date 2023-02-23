import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import VacationModel from "../../../Models/VocationModel";
import vacationServiceAdmin from "../../../Services/VacationServiceAdmin";
import notify from "../../../Utils/Notify";
import "./UpdateVacation.css";

function UpdateVacation(): JSX.Element {

    const [vacation, setVacation] = useState<VacationModel>();
    const {register, handleSubmit, formState, setValue} = useForm<VacationModel>();
    const navigate = useNavigate();
    const params = useParams();
    const today = new Date()

    useEffect( ()=> {
        vacationServiceAdmin.getOneVacation(+params.vacationId)
        .then(vacation => {
            setValue("vacationId", vacation.vacationId);
            setValue("destination", vacation.destination);
            setValue("description", vacation.description);
            setValue("startDate", vacation.startDate);
            setValue("endDate", vacation.endDate);
             setValue("price", vacation.price);
             setVacation(vacation);
        })
        .catch(err => alert(err.message))
    },[])

    async function send(vacation: VacationModel) {

        const startTime = new Date(vacation.startDate);
        const endTime = new Date(vacation.endDate);
        if(endTime.getTime() < startTime.getTime()) {
            notify.success("Back to the Future is impossible!")
             return;
        }
        
        
        try{
            vacation.image = (vacation.image as unknown as FileList )[0];
            await vacationServiceAdmin.updateVocation(vacation);
            notify.success("Vacation has been updated")
            navigate("/admin/vacations")

            // navigate(-1)
        }   
        catch(err:any) {
            notify.error(err)
        }
    }

    return (
        <div className="UpdateVacation">

            <h3>Edit Vacation</h3>
        
        <form onSubmit={handleSubmit(send)}>
            <input type="hidden" {...register("vacationId")}/>

          
            <label>Destination</label>
                <input type="text" {...register("destination")} required minLength={2} maxLength={100}/>
                
                <label>Start Time</label>
                <input type="date" {...register("startDate")} required />

                <label>End Time</label>
                <input type="date" {...register("endDate")} required />

                <label>Description</label>
                <input type="text" {...register("description")} required minLength={10} maxLength={1000}/>

                <label>Price</label>
                <input type="number"{...register("price")} required min={0} max={10000}/>

                <label>Image</label>
                <input type="file" accept="image/*" {...register("image", VacationModel.imageValidation)}/>
                <span>{formState.errors.image?.message}</span>

                <img src={vacation?.imageUrl} />
                <button className="button">Update</button>

        </form>
			
        </div>
    );
}

export default UpdateVacation;
