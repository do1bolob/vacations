import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CredentialsModel from "../../../Models/CredentialsModel";
import UserModel from "../../../Models/UserModel";
import { authStore } from "../../../Redux/AuthState";
import authService from "../../../Services/AuthService";
import notify from "../../../Utils/Notify";


function Login(): JSX.Element {

    
    const [user, setUser] = useState<UserModel>()


    useEffect( () => {
        setUser(authStore.getState().user);

        authStore.subscribe(()=> {
            setUser(authStore.getState().user)
        })
    },[]);

    const { register, handleSubmit, formState } = useForm<CredentialsModel>();
    const navigate = useNavigate();

    async function send(credentials: CredentialsModel) {
        try {
            await authService.login(credentials);
            const user = authStore.getState().user;

            notify.success("Welcome back " + user.firstName);
            if(user && user.role === "Admin") {
            navigate("/admin/vacations/");
            }  
            else if(user && user.role === "User") {
            navigate("/users/vacations/");
                
            }
         
        }
        catch (err: any) {
            notify.error(err);
        }
    }

    return (
        <div className="Login Box">

            <h2>Login</h2>

            <form onSubmit={handleSubmit(send)}>

                <label>Email: </label>
                <input type="text" placeholder="✉️ enter your email" {...register("email", CredentialsModel.emailValidation)} />
                <span className="Err">{formState.errors.email?.message}</span>

                <label>Password: </label>
                <input type="password" placeholder="🔒 enter your password" {...register("password", CredentialsModel.passwordValidation)} />
                <span className="Err">{formState.errors.password?.message}</span>
                    
                <button className="button">Login</button>

                <p>Don't have an account?</p>
        <a href="/register">Register</a>

            </form>

        </div>
    );
}

export default Login;
