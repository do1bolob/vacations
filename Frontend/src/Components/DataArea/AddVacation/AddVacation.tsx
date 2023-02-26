import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import VacationModel from "../../../Models/VacationModel";
import vacationServiceAdmin from "../../../Services/VacationServiceAdmin";
import notify from "../../../Utils/Notify";
import "./AddVacation.css";

function AddVacation(): JSX.Element {

    const [vacations, setVacation] = useState<VacationModel[]>([])
    const {register, handleSubmit, formState} = useForm<VacationModel>()
    const navigate = useNavigate();
    const today = new Date()
    const [preview, setPreview] = useState<File | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!event.target.files) return;
      setPreview(event.target.files[0]);
    };

    useEffect (() => {
        
       vacationServiceAdmin.getAllVacationsForAdmin()
       .then(dbVacation => setVacation(dbVacation))
       .catch(err => notify.error(err))

    },[])

    async function send(vacation: VacationModel) {
        const startTime = new Date(vacation.startDate);
        const endTime = new Date(vacation.endDate);
        if(endTime.getTime() < startTime.getTime()) {
            notify.error("Back to the Future is impossible!")
             return;
        }
     
        try {
            vacation.image = (vacation.image as unknown as FileList)[0]
            await vacationServiceAdmin.addVacation(vacation);
            notify.success("Vacation has been added!");
            navigate("/admin/vacations")

        }
        catch(err: any) {
            notify.error(err)
        }
    }

    return (
        <div className="AddVacation">

            <h3>Add Vacation</h3>

            <form onSubmit={handleSubmit(send)}>

                <label>Destination: </label>
                <input type="text" {...register("destination")} placeholder="Add some vacation" required minLength={2} maxLength={50}/>

                <label>Start Time: </label>
                <input type="date" {...register("startDate")} required min={today.toISOString().split("T")[0]}/>

                <label>End Time: </label>
                <input type="date" {...register("endDate")} required min={today.toISOString().split("T")[0]}/>

                <label>Description: </label>
                <textarea className="textarea" {...register("description")} placeholder="Write some description"  required minLength={10} maxLength={1000}></textarea>

                <label>Price:</label>
                <input type="number"{...register("price")} placeholder="$" required min={0} max={10000}/>

                <label>Image: </label>
                    <img  style={{width:"250px",objectFit:"cover"}}
                    src={preview === null ? "": URL.createObjectURL(preview)} className="imgPreview"/>
                <input type="file" accept="image/*" {...register("image", VacationModel.imageValidation)} onChange={handleChange}/>
                <span>{formState.errors.image?.message}</span>

                <button className="button">Add</button>

            </form>
			
        </div>
    );
}

export default AddVacation;
