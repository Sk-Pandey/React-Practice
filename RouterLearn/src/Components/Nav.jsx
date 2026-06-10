import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const navStyle = ({ isActive }) =>
    `px-4 py-2 rounded-lg transition-all duration-300 ${
      isActive ? "bg-white text-black" : "text-white hover:bg-gray-700"
    }`;

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-white text-2xl font-bold">React Router App</h1>

        <div className="flex gap-4">
          <NavLink className={navStyle} to="/">
            Home
          </NavLink>

          <NavLink className={navStyle} to="/about">
            About
          </NavLink>

          <NavLink className={navStyle} to="/contact">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
