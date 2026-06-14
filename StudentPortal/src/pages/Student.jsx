import React from "react";
import students from "../Data/student.json";

const Student = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-10">
        Student Directory
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {students.map((student) => (
          <div
            key={student.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex flex-col items-center p-6">
              <img
                src={student.image}
                alt={student.name}
                className="w-28 h-28 rounded-full object-cover border-4 border-slate-200"
              />

              <h2 className="text-xl font-bold mt-4">{student.name}</h2>

              <p className="text-gray-500">{student.course}</p>

              <div className="w-full mt-5 space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Age</span>
                  <span>{student.age}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-medium">Year</span>
                  <span>{student.year}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-medium">CGPA</span>
                  <span>{student.cgpa}</span>
                </div>

                <div className="pt-2 border-t">
                  <p className="text-sm text-gray-600 break-all">
                    {student.email}
                  </p>
                </div>
              </div>

              <button className="mt-5 w-full bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-700 transition">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Student;
