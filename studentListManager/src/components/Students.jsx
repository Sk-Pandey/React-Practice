import React, { useState } from "react";
import deleteImg from "../assets/delete.png";
import { v4 as uuidv4 } from "uuid";
const Students = () => {
  // state for name input
  const [name, setName] = useState("");
  // state for storing student list
  const [students, setStudents] = useState([]);

  //  function for adding student into list
  const addStudents = () => {
    if (name.trim() !== "") {
      setStudents([
        ...students,
        {
          id: uuidv4(),
          name: name,
        },
      ]);
      setName("");
    }
  };
  // function for delete student from list
  const dltStudent = (dltId) => {
    setStudents(students.filter((obj) => obj.id !== dltId));
  };
  return (
    <div>
      {/*input Form.............. */}
      <div className="flex justify-center items-center mt-8">
        <fieldset className="fieldset">
          <legend className="fieldset-legend">What is your name?</legend>
          <input
            type="text"
            className="input focus:outline-none focus:ring-0 focus:shadow-none focus:border-indigo-500"
            placeholder="Type here"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addStudents();
              }
            }}
          />
          <button className="btn btn-soft btn-success" onClick={addStudents}>
            Add Student
          </button>
        </fieldset>
      </div>

      {/* List of students............... */}
      <ul className="list bg-base-100 rounded-box shadow-md">
        <li className="p-4 pb-2 text-lg opacity-60 tracking-wide">
          Students List
        </li>
        {students.map((student) => (
          <li className="list-row" key={student.id}>
            <div></div>
            <div className="text-xs capitalize font-semibold opacity-60">
              {student.name}
            </div>
            <button
              className="delete-btn cursor-pointer"
              onClick={() => dltStudent(student.id)}
            >
              <img
                src={deleteImg}
                className="w-8 bg-rose-600 rounded-lg"
                alt=""
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Students;
