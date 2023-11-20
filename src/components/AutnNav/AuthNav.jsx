import { NavLink } from "react-router-dom";

export const AuthNav = () => {
    return (
      <>
        <NavLink  to="/registration">
          Register
        </NavLink>
        <NavLink  to="/login">
          Log In
        </NavLink>
      </>
    );
  };