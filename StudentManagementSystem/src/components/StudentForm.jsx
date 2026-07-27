import React from "react";

const StudentForm = ({ FormData, SetFormData }) => {
  const inputhandler = (e) => {
    SetFormData({
      ...FormData,
      [e.name]: e.value,
    });
  };
  const addStudent = () => {
    if(FormData.name && FormData.age && FormData.course){
        
    }
  };
  return (
    <div>
      <div className="flex  justify-center items-center flex-col mt-4 space-y-4">
        <input
          type="text"
          id="name"
          className="input"
          placeholder="Enter Your Name"
          name="name"
          value={FormData.name}
          onChange={inputhandler}
        />
        <input
          type="number"
          id="age"
          className="input"
          placeholder="Enter Your Age"
          name="age"
          value={FormData.age}
          onChange={inputhandler}
        />
        <input
          type="text"
          id="course"
          className="input"
          placeholder="Enter Your Course"
          name="course"
          value={FormData.course}
          onChange={inputhandler}
        />
        <button className="btn  bg-success active:scale-95">Add Student</button>
      </div>
    </div>
  );
};

export default StudentForm;
