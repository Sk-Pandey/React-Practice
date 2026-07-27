import React from "react";

const StudentForm = ({ FormData, setFormData, students, setStudents }) => {
  const inputhandler = (e) => {
    setFormData({
      ...FormData,
      [e.target.name]: e.target.value,
    });
  };
  const addStudent = () => {
    if (FormData.name && FormData.age > 0 && FormData.course) {
      setStudents((prevStudents) => [...prevStudents, FormData]);
      setFormData({
        name: "",
        age: "",
        course: "",
      });
    } else {
      alert("Enter valid value");
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
        <button
          className="btn  bg-success active:scale-95"
          onClick={addStudent}
        >
          Add Student
        </button>
      </div>
    </div>
  );
};

export default StudentForm;
