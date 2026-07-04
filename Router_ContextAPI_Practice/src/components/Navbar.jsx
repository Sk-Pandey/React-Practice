import React from "react";

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-blue-700 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">🏫Future School</h1>

          <ul className="flex gap-8 font-medium items-center">
            <li className="cursor-pointer hover:text-yellow-300">Home</li>
            <li className="cursor-pointer hover:text-yellow-300">Profile</li>
            <li className="cursor-pointer hover:text-yellow-300">
              <button className="bg-white text-black p-2 rounded-lg hover:bg-black hover:text-white transition duration-500 cursor-pointer">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
