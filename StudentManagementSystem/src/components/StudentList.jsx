import React from "react";
import StudentCard from "./StudentCard";

const StudentList = ({ students, search, deleteStudent }) => {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold">Students List</h1>
      <div className="flex justify-center items-center flex-wrap p-12 gap-8">
        {students.length > 0 ? (
          students
            .filter((student) => {
              return student.name.toLowerCase().includes(search.toLowerCase());
            })
            .map((student) => {
              return (
                <StudentCard
                  student={student}
                  key={student.id}
                  deleteStudent={deleteStudent}
                />
              );
            })
        ) : (
          <h1 className="text-3xl font-extrabold font-serif text-gray-400">
            No Student Found
          </h1>
        )}
      </div>
    </div>
  );
};

export default StudentList;
