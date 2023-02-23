import axios from "axios";
import UserModel from "../Models/UserModel"
import VacationModel from "../Models/VocationModel"
import { VacationActionType, vacationsStore } from "../Redux/VacationState";
import appConfig from "../Utils/AppConfig";

class VacationService {
    [x: string]: any;

   public async getAllVacationsForUser(): Promise <VacationModel[]>{
    const response = await axios.get<VacationModel[]>(appConfig.getAllVacationToUserUrl);
    const vacations = response.data;
    vacationsStore.dispatch({type: VacationActionType.FetchVacations, payload: vacations})
    return vacations;

    }
    
   public async follow(vacationId: number): Promise<void>{ 
    try {
        const response = await axios.post(appConfig.followVacationUrl + vacationId);
        // const addedFollow = response.data;
        vacationsStore.dispatch({type: VacationActionType.Follow, payload: vacationId})
    }
    catch(err:any){
        console.log(err);

    }
    
   }
   public async unfollow(vacationId: number): Promise<void>{

    try {
        await axios.delete(appConfig.unfollowVacationUrl + vacationId)
        vacationsStore.dispatch({type: VacationActionType.Unfollow, payload: vacationId})
        vacationsStore.dispatch({type: VacationActionType.DeleteFollower, payload: vacationId})
    }
    catch (err: any) {
        alert(err)
    }
}

    }

const vacationService = new VacationService();

export default vacationService;