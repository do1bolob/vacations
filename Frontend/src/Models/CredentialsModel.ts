import { RegisterOptions } from "react-hook-form";

class CredentialsModel {
    
    public email: string;
    public password: string;


    public static emailValidation: RegisterOptions = {
        required: { value: true, message: "Missing email"},
        minLength: { value: 10, message: "Email must be minimum 10 chars"},
        maxLength: { value: 50, message: "Email can't exceeds 50 chars"},
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "format must be email@email.com"
          }
    };

    public static passwordValidation: RegisterOptions = {
        required: { value: true, message: "Missing Password"},
        minLength: { value: 4, message: "Password must be minimum 4 chars"},
        maxLength: { value: 20, message: "Password can't exceeds 20 chars"}
    };

}

export default CredentialsModel;
