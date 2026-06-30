import React from "react";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-around",
          textDecoration: "none",
          width: "100vw",
        }}
      >
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "red" : "blue",
            textDecoration: "none",
          })}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "red" : "blue",
            textDecoration: "none",
          })}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "red" : "blue",
            textDecoration: "none",
          })}
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "red" : "blue",
            textDecoration: "none",
          })}
          to="/services"
        >
          Services
        </NavLink>
      </nav>
    </div>
  );
};

export default Nav;
