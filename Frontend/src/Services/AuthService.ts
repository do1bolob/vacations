import axios from "axios";
import CredentialsModel from "../Models/CredentialsModel";
import UserModel from "../Models/UserModel";
import { AuthActionType, authStore } from "../Redux/AuthState";
import { VacationActionType, vacationsStore } from "../Redux/VacationState";
import appConfig from "../Utils/AppConfig";

class AuthService {
    [x: string]: any;
    
    public async register(user: UserModel): Promise<void> {
        const response = await axios.post<string>(appConfig.registerUrl, user);

        const token = response.data;


        authStore.dispatch({ type: AuthActionType.Register, payload: token});
        
    }

    public async login(credentials: CredentialsModel): Promise<void> {
        const response = await axios.post<string>(appConfig.loginUrl, credentials);
        const token  = response.data;
        authStore.dispatch({type: AuthActionType.Login, payload:token})
    }

    public logout(): void {
        authStore.dispatch({type: AuthActionType.Logout});
        vacationsStore.dispatch({type: VacationActionType.FetchVacations, payload: []});
    }

    public isLoggedIn():boolean {
        return authStore.getState().token !==null
    }

}   


const authService = new AuthService();



export default authService;
