import Joi from "joi";
import { ValidationError } from "./client-errors";

class CredentialsModel {
    
    public email: string;
    public password: string;

    public constructor(credentials: CredentialsModel) {
        this.email = credentials.email;
        this.password = credentials.password;
    }

    public static validationSchema = Joi.object ({

        email: Joi.string().required().email({ minDomainSegments: 2 }).min(5).max(50),
        password: Joi.string().required().min(4).max(512)

    })

    public validate(): void {
        const result = CredentialsModel.validationSchema.validate(this);
        if(result.error) throw new ValidationError(result.error.message)

    }

}

export default CredentialsModel;
