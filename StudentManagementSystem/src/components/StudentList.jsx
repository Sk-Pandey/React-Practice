import React from "react";

const StudentList = ({ students, search }) => {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold">Students List</h1>
      <div className="flex justify-center items-center flex-wrap p-12 gap-8">
        {students
          .filter((student) => {
            return student.name.toLowerCase().includes(search.toLowerCase());
          })
          .map((student) => {
            return (
              <div className="bg-emerald-400 p-4 rounded-lg">
                <h1 className="text-2xl text-black font-bold">
                  Name: {student.name}
                </h1>
                <h2 className="text-xl text-black font-bold">
                  Course: {student.course}
                </h2>
                <p className="text-lg text-black font-bold">
                  Age: {student.age}
                </p>
                <div className="space-x-4 mt-4">
                  <button className="font-semibold btn btn-primary">
                    Edit
                  </button>
                  <button className="font-semibold btn btn-gost">Delete</button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default StudentList;
