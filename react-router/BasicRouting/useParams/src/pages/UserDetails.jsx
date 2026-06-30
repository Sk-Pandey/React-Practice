import React from "react";

import { useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();

  return (
    <>
      <h1>User Details</h1>

      <h2>User Id : {id}</h2>
    </>
  );
}

export default UserDetails;
