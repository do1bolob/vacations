// import { UploadedFile } from "express-fileupload";
import { RegisterOptions } from "react-hook-form";

class VacationModel {

    public vacationId: number;
    public destination: string;
    public description: string;
    public startDate: string;
    public endDate: string;
    public price: number;
    public imageUrl: string;
    public image: File;
    public isFollowing: number
    public followersCount: number
   
    public static destinationValidation: RegisterOptions = {
        required: {value: true, message: "Missing destination!"}, 
        minLength: { value: 5, message: "Destination must be minimum 5 chars"},
        maxLength: { value: 50, message: "Destination can't exceeds 50"},
    }

    public static descriptionValidation: RegisterOptions = {
        required: {value: true, message: "Missing description!"}, 
        minLength: { value: 5, message: "Description must be minimum 5 chars"},
        maxLength: { value: 1000, message: "Destination can't exceeds 1000"},
    }

    public static startDateValidation: RegisterOptions = {
        required: {value: true, message: "Missing startDate!"}, 
    
    }

    public static endDateValidation: RegisterOptions = {
        required: {value: true, message: "Missing end!"}, 
    
    }

    public static priceValidation: RegisterOptions = {
        required: {value: true, message: "Missing description!"}, 
        min: { value: 0, message: "Price must be minimum 0"},
        max: { value: 10000, message: "Price can't exceeds 10000"},
    }


    public static imageValidation: RegisterOptions = {
        required: {value: true, message: "Missing image!"}, 
    
 }   



}

export default VacationModel