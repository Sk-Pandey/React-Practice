import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    `text-2xl font-bold px-2 py-1 rounded-lg transition-colors duration-200
   ${
     isActive
       ? "bg-amber-400 text-black"
       : "hover:bg-amber-100 hover:text-black"
   }`;
  return (
    <div className="flex justify-around py-4 w-full">
      <NavLink className={navLinkClass} to="/">
        Home
      </NavLink>
      <NavLink className={navLinkClass} to="about">
        About
      </NavLink>
      <NavLink className={navLinkClass} to="contact">
        Contact
      </NavLink>
      <NavLink className={navLinkClass} to="courses">
        Courses
      </NavLink>
      <NavLink className={navLinkClass} to="login">
        Login
      </NavLink>
    </div>
  );
};

export default Navbar;
