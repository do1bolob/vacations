import axios from "axios";
import UserModel from "../Models/UserModel"
import VacationModel from "../Models/VocationModel"
import { VacationActionType, vacationsStore } from "../Redux/VacationState";
import appConfig from "../Utils/AppConfig";

class VacationServiceAdmin {

//    public async getAllVacationsForUser(): Promise <VacationModel[]>{

//     // let vacationService = vacationsStore.getState()

//     const response = await axios.get<VacationModel[]>(appConfig.getAllVacationToUserUrl);
//     const vacations = response.data;
//     return vacations;

//     }
    
    public async  getAllVacationsForAdmin(): Promise <VacationModel[]>{

        const response = await axios.get<VacationModel[]>(appConfig.getAllVacationToAdminUrl);
        const vacations = response.data;
        return vacations;
    
        }

    
        async  getOneVacation(vacationId: number): Promise<VacationModel> {

            let vacations = vacationsStore.getState().vacations;
            
            let vacation = vacations.find(v => v.vacationId === vacationId);

            if(!vacation) {

                const response = await axios.get<VacationModel>(appConfig.getAllVacationToAdminUrl + vacationId);
                vacation = response.data
            }

            return vacation;

        }

  
    public async  addVacation(vacation: VacationModel): Promise<void> {
        const headers = { "Content-Type": "multipart/form-data" }; // Tell axios that we're sending text and file to backend:
        const response = await axios.post<VacationModel>(appConfig.getAllVacationToAdminUrl,vacation, {headers})
        const addedVacation = response.data

    }

    public async updateVocation(vacation: VacationModel): Promise <void> {
        const headers = { "Content-Type": "multipart/form-data" }; // Tell axios that we're sending text and file to backend:
        console.log(vacation);
        const response = await axios.put<VacationModel>(appConfig.getAllVacationToAdminUrl + vacation.vacationId, vacation, {headers});
        const updatedVacation = response.data;

       vacationsStore.dispatch({type: VacationActionType.UpdateVacations, payload: updatedVacation})
    }
    
    public async  deleteVacation (vacationId: number): Promise<void>{
        await axios.delete(appConfig.getAllVacationToAdminUrl + vacationId)

    }
    // public async  getImageNameFromDBV(vacationId: number): Promise<string>{

    // }

}
const vacationServiceAdmin = new VacationServiceAdmin();

export default vacationServiceAdmin;