import React from "react";
import { useNavigate } from "react-router-dom";

export const coursesList = [
  {
    courseId: "7b2f9d5c-8e41-4a73-9d4e-12c6f8b2a101",
    courseName: "React",
    price: 3999,
    duration: "6 Month",
  },
  {
    courseId: "c4a8e173-91f5-4f6d-bf9d-3d7a6c5b2202",
    courseName: "Next.js",
    price: 1499,
    duration: "2 Month",
  },
  {
    courseId: "e91b6d42-5af7-47c9-8c1d-84f2a1b3303",
    courseName: "C++",
    price: 999,
    duration: "3 Month",
  },
  {
    courseId: "2d73c9fa-6b58-4d8e-91ab-75e3d4f4404",
    courseName: "Java",
    price: 999,
    duration: "3 Month",
  },
  {
    courseId: "f8a1b2c3-9d4e-4f5a-b6c7-98d1e2f5505",
    courseName: "Full Stack",
    price: 4999,
    duration: "8 Month",
  },
];
const Courses = () => {
  const navigate = useNavigate();

  const viewCourse = (courseId) => {
    navigate(`/courses/${courseId}`);
  };
  return (
    <div className="min-h-screen bg-base-200 py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">
        📚 Ongoing Courses
      </h1>

      <div className="flex flex-wrap justify-center gap-8">
        {coursesList.map((batch) => (
          <div
            key={batch.courseId}
            className="card w-80 bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="h-40 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center rounded-t-xl">
              <h2 className="text-3xl font-bold text-white">
                {batch.courseName}
              </h2>
            </div>

            <div className="card-body">
              <div className="card-actions justify-end mt-4">
                <button
                  className="btn btn-primary w-full"
                  onClick={() => viewCourse(batch.courseId)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
