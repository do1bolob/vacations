import Joi from "joi";
import { ValidationError } from "./client-errors";
import RoleModel from "./role-model";

class UserModel {
  public userId: number;
  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;
  public role: RoleModel;

  public constructor(user: UserModel) {
    this.userId = user.userId;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.password = user.password;
    this.role = user.role;
  }

  public static validationSchema = Joi.object({
    userId: Joi.number().optional().positive().integer(),
    firstName: Joi.string().required().min(2).max(20),
    lastName: Joi.string().required().min(2).max(20),
    email: Joi.string().required().min(5).max(50),
    password: Joi.string().required().min(4).max(256),
    role: Joi.any().forbidden(),
  });

  public validate(): void {
    const result = UserModel.validationSchema.validate(this);
    if (result.error) throw new ValidationError(result.error.message);
  }
}

export default UserModel;
