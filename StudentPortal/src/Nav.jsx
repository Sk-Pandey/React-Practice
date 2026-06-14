import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const active = ({ isActive }) =>
    `px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
      isActive
        ? "bg-white text-slate-900 shadow-md"
        : "text-white hover:bg-white/10 hover:scale-105"
    }`;

  return (
    <nav className="bg-slate-900 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-center gap-6 py-5">
        <NavLink to="/" className={active}>
          Home
        </NavLink>

        <NavLink to="/About" className={active}>
          About
        </NavLink>

        <NavLink to="/Contact" className={active}>
          Contact
        </NavLink>
        <NavLink to="/Student" className={active}>
          Student
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
