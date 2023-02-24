import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import UserModel from "../../../Models/UserModel";
import authService from "../../../Services/AuthService";
import notify from "../../../Utils/Notify";

function Register(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<UserModel>();
  const navigate = useNavigate();

  async function send(user: UserModel) {
    try {
      await authService.register(user);
      notify.success("Welcome " + user.firstName);
      navigate("/users/vacations");
    } catch (err: any) {
      notify.error(err);
    }
  }

  return (
    <div className="Register Box">
      <h2>Register</h2>

      <form onSubmit={handleSubmit(send)}>
        <label>First name: </label>
        <input
          type="text" placeholder="👤enter your first name" {...register("firstName", UserModel.firstNameValidation)}
        />
        <span className="Err">{formState.errors.firstName?.message}</span>

        <label>Last name: </label>
        <input
          type="text" placeholder="👤enter your last name"  {...register("lastName", UserModel.lastNameValidation)}
        />
        <span className="Err">{formState.errors.lastName?.message}</span>

        <label>Email: </label>
        <input type="text" placeholder="✉️ enter your email" {...register("email", UserModel.emailValidation)} />
        <span className="Err">{formState.errors.email?.message}</span>

        <label>Password: </label>
        <input  type="password" placeholder="🔒 enter your password" {...register("password", UserModel.passwordValidation)}
        />
        <span className="Err">{formState.errors.password?.message}</span>

        <button className="button">Register</button>

        <p>Already have an account?</p>
        <a href="/login">Login</a>
      </form>
    </div>
  );
}

export default Register;
