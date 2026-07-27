import React from "react";
import StudentCard from "./StudentCard";

const StudentList = ({ students, search, deleteStudent }) => {
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
              <StudentCard
                student={student}
                key={student.id}
                deleteStudent={deleteStudent}
              />
            );
          })}
      </div>
    </div>
  );
};

export default StudentList;
