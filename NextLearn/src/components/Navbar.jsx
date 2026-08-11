import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>NextLearn</h1>

      <div>
        <NavLink to="/">Home</NavLink>

        <NavLink to="/courses">Courses</NavLink>

        <NavLink to="/login">Login</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
