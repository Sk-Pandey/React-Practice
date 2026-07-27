import React from "react";

const StudentForm = () => {
  return (
    <div>
      <div className="flex  justify-center items-center flex-col mt-4 space-y-4">
        <input
          type="text"
          id="name"
          className="input"
          placeholder="Enter Your Name"
        />
        <input
          type="number"
          id="age"
          className="input"
          placeholder="Enter Your Age"
        />
        <input
          type="text"
          id="course"
          className="input"
          placeholder="Enter Your Course"
        />
        <button className="btn  bg-success active:scale-95">Add Student</button>
      </div>
    </div>
  );
};

export default StudentForm;
