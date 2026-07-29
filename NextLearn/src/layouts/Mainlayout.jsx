import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Mainlayout = () => {
  return (
    <div className="flex justify-between h-screen items-center flex-col ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Mainlayout;
