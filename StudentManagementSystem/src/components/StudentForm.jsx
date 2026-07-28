import React from "react";
import { v4 as uuidv4 } from "uuid";
const StudentForm = ({ formData, setFormData, students, setStudents }) => {
  const inputhandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const addStudent = () => {
    if (formData.name && formData.age > 0 && formData.course) {
      setStudents((prevStudents) => [
        ...prevStudents,
        { ...formData, id: uuidv4() },
      ]);

      setFormData({
        id: "",
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
          value={formData.name}
          onChange={inputhandler}
        />
        <input
          type="number"
          id="age"
          className="input"
          placeholder="Enter Your Age"
          name="age"
          value={formData.age}
          onChange={inputhandler}
        />
        <input
          type="text"
          id="course"
          className="input"
          placeholder="Enter Your Course"
          name="course"
          value={formData.course}
          onChange={inputhandler}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addStudent();
            }
          }}
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
