import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import VacationModel from "../../../Models/VocationModel";
import vacationServiceAdmin from "../../../Services/VacationServiceAdmin";
import "./AddVacation.css";

function AddVacation(): JSX.Element {
  const [vacations, setVacation] = useState<VacationModel[]>([]);
  const { register, handleSubmit, formState } = useForm<VacationModel>();
  const navigate = useNavigate();
  const today = new Date();

  useEffect(() => {
    vacationServiceAdmin
      .getAllVacationsForAdmin()
      .then((dbVacation) => setVacation(dbVacation))
      .catch((err) => alert(err.message));
  }, []);

  async function send(vacation: VacationModel) {
    const startTime = new Date(vacation.startDate);
    const endTime = new Date(vacation.endDate);
    if (endTime.getTime() < startTime.getTime()) {
      alert("Back to the Future is impossible!");
      return;
    }

    try {
      vacation.image = (vacation.image as unknown as FileList)[0];
      await vacationServiceAdmin.addVacation(vacation);
      alert("Vacation has been added!");
      navigate("/admin/vacations");
    } catch (err: any) {
      alert(err.message);
    }
  }

  return (
    <div className="AddVacation">
      <h3>Add Vacation</h3>

      <form onSubmit={handleSubmit(send)}>
        <label>Destination: </label>
        <input
          type="text"
          {...register("destination")}
          required
          minLength={2}
          maxLength={100}
        />

        <label>Start Time: </label>
        <input
          type="date"
          {...register("startDate")}
          required
          min={today.toISOString().split("T")[0]}
        />

        <label>End Time: </label>
        <input
          type="date"
          {...register("endDate")}
          required
          min={today.toISOString().split("T")[0]}
        />

        <label>Description: </label>
        <input
          className="textarea"
          type="textarea"
          {...register("description")}
          required
          minLength={10}
          maxLength={1000}
        />

        <label>Price: </label>
        <input
          type="number"
          {...register("price")}
          required
          min={0}
          max={10000}
        />

        <label>Image: </label>
        <input
          type="file"
          accept="image/*"
          {...register("image", VacationModel.imageValidation)}
        />
        <span>{formState.errors.image?.message}</span>

        <button className="button">add</button>
      </form>
    </div>
  );
}

export default AddVacation;
