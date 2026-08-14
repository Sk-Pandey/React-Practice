import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <nav>
      <h1>NextLearn</h1>

      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>

      {user && <p>Logged in as: {user.email}</p>}
    </nav>
  );
};
export default Navbar;
