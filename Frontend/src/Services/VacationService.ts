import axios from "axios";
import VacationModel from "../Models/VacationModel"
import { VacationActionType, vacationsStore } from "../Redux/VacationState";
import appConfig from "../Utils/AppConfig";
import notify from "../Utils/Notify";

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
        vacationsStore.dispatch({type: VacationActionType.Follow, payload: vacationId})
    }
    catch(err:any){
       notify.error(err);

    }
    
   }
   public async unfollow(vacationId: number): Promise<void>{

    try {
        await axios.delete(appConfig.unfollowVacationUrl + vacationId)
        vacationsStore.dispatch({type: VacationActionType.Unfollow, payload: vacationId})
        vacationsStore.dispatch({type: VacationActionType.DeleteFollower, payload: vacationId})
    }
    catch (err: any) {
       notify.error(err);
    };
};

    };

const vacationService = new VacationService();

export default vacationService;