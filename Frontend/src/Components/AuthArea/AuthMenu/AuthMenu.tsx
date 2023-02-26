import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import UserModel from "../../../Models/UserModel";
import { authStore } from "../../../Redux/AuthState";
import authService from "../../../Services/AuthService";
import "./AuthMenu.css";

function AuthMenu(): JSX.Element {
  const [user, setUser] = useState<UserModel>();
  const now = new Date();
  const hour = now.getHours();
  let message = '';
  
  if (hour >= 5 && hour < 12) {
    message = 'Good morning,';
  } else if (hour >= 12 && hour < 18 ) {
    message = 'Good afternoon,';
  } else if (hour >= 18 && hour < 24) {
    message = 'Good evening,';
  } else {
    message = 'Good night,';
  }

  useEffect(() => {
    setUser(authStore.getState().user);

    // Listen to AuthState changes:
    authStore.subscribe(() => {
      setUser(authStore.getState().user);
    });
  }, []);

  function logout(): void {
    authService.logout();
  }

  return (
    <div className="AuthMenu">
      {!user && (
        <>
          <span>{message} Explorer! | </span>

          <NavLink to="/login">Login</NavLink>

          <span> | </span>

          <NavLink to="/register">Register</NavLink>
        </>
      )}

      {user && (
        <>
          <span>
            {message} {user.firstName} {user.lastName} |{" "}
          </span>

          <NavLink to="/register" onClick={logout}>
            Logout{" "}
          </NavLink>
          <span> | </span>
          <NavLink to="/about">About</NavLink>
          <span> | </span>
          {user && user.role === "Admin" && (
            <NavLink to="/admin/vacations">Vacations</NavLink>
          )}
          {user && user.role === "User" && (
            <NavLink to="/users/vacations">Vacations</NavLink>

          )}
        </>
      )}
    </div>
  );
}

export default AuthMenu;
