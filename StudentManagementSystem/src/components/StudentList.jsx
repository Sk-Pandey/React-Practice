import React from "react";
import StudentCard from "./StudentCard";

const StudentList = ({ students, search, deleteStudent, editFn }) => {
  const result = students.filter((student) => {
    return (
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.course.toLowerCase().includes(search.toLowerCase()) ||
      student.age.toLowerCase().includes(search.toLowerCase())
    );
  });
  return (
    <div>
      <h1 className="text-center text-2xl font-bold">Students List</h1>
      <div className="flex justify-center items-center flex-wrap p-12 gap-8">
        {result.length > 0 ? (
          result.map((student) => {
            return (
              <StudentCard
                student={student}
                key={student.id}
                deleteStudent={deleteStudent}
                editFn={editFn}
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
