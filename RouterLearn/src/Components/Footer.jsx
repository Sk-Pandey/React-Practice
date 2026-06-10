import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h2 className="text-xl font-bold">React Router App</h2>

            <p className="text-gray-400 text-sm mt-1">
              Learning React Router & Tailwind CSS.
            </p>
          </div>

          <div className="flex gap-6">
            <NavLink className="hover:text-blue-400 transition" to="/">
              Home
            </NavLink>

            <NavLink className="hover:text-blue-400 transition" to="/about">
              About
            </NavLink>

            <NavLink className="hover:text-blue-400 transition" to="/contact">
              Contact
            </NavLink>
          </div>
        </div>

        <hr className="my-6 border-gray-700" />

        <p className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} React Router App. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
