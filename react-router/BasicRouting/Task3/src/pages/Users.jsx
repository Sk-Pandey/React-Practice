import React from "react";
import data from "../data";
import { Link } from "react-router-dom";

const Users = () => {
  return (
    <div>
      <h1>Welcome To Users</h1>
      {data.map((data) => (
        <Link to={`/users/${data.id}`}>{data.name}</Link>
      ))}
    </div>
  );
};

export default Users;
