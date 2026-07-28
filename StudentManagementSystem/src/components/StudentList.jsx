import React from "react";
import StudentCard from "./StudentCard";

const StudentList = ({ students, search, deleteStudent, editFn }) => {
  const result = students.filter((student) => {
    return (
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.course.toLowerCase().includes(search.toLowerCase()) ||
      student.age.toString().includes(search)
    );
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-200">
          Enrolled Students{" "}
          <span className="text-xs font-normal text-slate-400 ml-1">
            ({result.length})
          </span>
        </h2>
      </div>

      {result.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {result.map((student) => (
            <StudentCard
              student={student}
              key={student.id}
              deleteStudent={deleteStudent}
              editFn={editFn}
            />
          ))}
        </div>
      ) : (
        <div className="bg-slate-900/50 border border-dashed border-slate-800 rounded-2xl p-12 text-center flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-slate-800/80 flex items-center justify-center text-slate-500 mb-3 text-2xl">
            🎓
          </div>
          <h3 className="text-base font-semibold text-slate-300">
            No Students Found
          </h3>
          <p className="text-xs text-slate-500 max-w-xs mt-1">
            {search
              ? "No records matched your search query. Try typing something else."
              : "Your student directory is currently empty. Add your first student using the form."}
          </p>
        </div>
      )}
    </div>
  );
};

export default StudentList;
