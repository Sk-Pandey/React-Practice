import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Topbar = () => {
  const { user } = useContext(AuthContext);
  if (user) {
    return (
      <div>
        <h1>{user.email}</h1>
        <button className="btn btn-warning">logout</button>
      </div>
    );
  }
  return <div>Topbar</div>;
};

export default Topbar;
