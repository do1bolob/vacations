import {createStore} from "redux"
import VacationModel from "../Models/VocationModel";

export class VacationsState {
    public vacations: VacationModel[] = [];
}

export enum VacationActionType {
    FetchVacations = "FetchVacations",
    AddVacations = "AddVacations",
    UpdateVacations = "UpdateVacations",
    DeleteVacations = "DeleteVacations",
    Follow = "Follow",
    Unfollow = "Unfollow",
    DeleteFollower = "DeleteFollower"
}

export interface VacationAction {
    type: VacationActionType;
    payload: any;
}

export function vacationsReducer (currentState = new VacationsState(), action: VacationAction) {

    const newState: VacationsState = {...currentState};

    switch(action.type) {

        case VacationActionType.FetchVacations:
            newState.vacations = action.payload;
            break;

        case VacationActionType.AddVacations:
            newState.vacations.push(action.payload);
            break;
        
        case VacationActionType.UpdateVacations:
            const indexToUpdate = newState.vacations.findIndex(v =>v.vacationId ===action.payload.vacationId);
        if(indexToUpdate >= 0) {
            newState.vacations[indexToUpdate] = action.payload
        }
        break;

        case VacationActionType.DeleteVacations:
        const indexToDelete = newState.vacations.findIndex(v => v.vacationId === action.payload);
        if(indexToDelete >= 0) {
            newState.vacations.splice(indexToDelete, 1);
        }
        break

        case VacationActionType.Follow:

        const followVacation = newState.vacations.find(v => v.vacationId === action.payload)
            followVacation.isFollowing = 1;
            followVacation.followersCount +=1;
        break;

        case VacationActionType.Unfollow:
            const unfollowVacation = newState.vacations.find(v => v.vacationId === action.payload)
               if( unfollowVacation.isFollowing === 1) {
                  unfollowVacation.isFollowing = 0;
               }
            break;


        case VacationActionType.DeleteFollower:
            const deleteFollowers = newState.vacations.find(f => f.vacationId === action.payload)
            deleteFollowers.followersCount -= 1;
            break;
    } 
    return newState

}

// export const vacations = createStore(vacationsReducer)

export const vacationsStore = createStore(vacationsReducer)