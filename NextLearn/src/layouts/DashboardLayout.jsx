import React from "react";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <Topbar />
      <div className="flex justify-between">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
