import React from "react";
import { Link } from "react-router-dom";

const users = [
  {
    id: 1,
    name: "Shashikant",
  },
  {
    id: 2,
    name: "Rahul",
  },
  {
    id: 3,
    name: "Aman",
  },
];
function Users() {
  return (
    <>
      <h1>Users</h1>

      {users.map((user) => (
        <div key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </div>
      ))}
    </>
  );
}

export default Users;
