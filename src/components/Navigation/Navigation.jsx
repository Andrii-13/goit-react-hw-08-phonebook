import { useAuth } from "hooks";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
    // const { isLoggedIn } = useAuth();
  
    return (
      <>
        <NavLink to="/">
          Home
        </NavLink>
        {/* {isLoggedIn && ( */}
          <NavLink to="/honebook">
            Phonebook
          </NavLink>
        {/* )} */}
      </>
    );
  };