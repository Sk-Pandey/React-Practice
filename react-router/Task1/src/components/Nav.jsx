import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/services">Services</Link>
      </nav>
    </div>
  );
};

export default Nav;
