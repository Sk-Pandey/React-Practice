import React from "react";

const StudentCard = ({ student, deleteStudent }) => {
  return (
    <>
      <div className="bg-emerald-400 p-4 rounded-lg">
        <h1 className="text-2xl text-black font-bold">Name: {student.name}</h1>
        <h2 className="text-xl text-black font-bold">
          Course: {student.course}
        </h2>
        <p className="text-lg text-black font-bold">Age: {student.age}</p>
        <div className="space-x-4 mt-4">
          <button className="font-semibold btn btn-primary">Edit</button>
          <button
            className="font-semibold btn btn-gost"
            onClick={() => {
              deleteStudent(student.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default StudentCard;
