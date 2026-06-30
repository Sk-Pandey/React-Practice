import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data";
const UserDetail = () => {
  const { id } = useParams();
  const name = data.find((item) => item.id == id);
  return (
    <div>
      <h1>
        The user Id is {id} and name is {name.name}
      </h1>
      <Link to="/users">Back To Users</Link>
    </div>
  );
};

export default UserDetail;
