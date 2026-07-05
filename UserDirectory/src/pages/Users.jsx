import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(9)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-5 animate-pulse"
            >
              {/* Name */}
              <div className="h-5 bg-gray-300 rounded w-3/4 mx-auto mb-4"></div>

              {/* Email */}
              <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>

              {/* Phone */}
              <div className="h-4 bg-gray-200 rounded w-5/6 mb-3"></div>

              {/* Buttons */}
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <>
        <div className="flex items-center justify-center min-h-[60vh] px-4">
          <div className="max-w-md w-full bg-white border border-red-200 rounded-xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-red-100">
              <span className="text-3xl">⚠️</span>
            </div>

            <h2 className="mt-4 text-2xl font-bold text-red-600">
              Oops! Something went wrong
            </h2>

            <p className="mt-2 text-gray-600">
              We couldn't load the user data. Please check your internet
              connection or try again later.
            </p>

            <button
              onClick={() => window.location.reload()}
              className="mt-6 px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
            >
              Retry
            </button>
          </div>
        </div>
      </>
    );
  }
  return <div>Users</div>;
};

export default Users;
