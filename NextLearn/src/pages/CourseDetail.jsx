import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { coursesList } from "./Courses";
const CourseDetail = () => {
  const { courseId } = useParams();
  const viewedCourse = coursesList.find(
    (course) => course.courseId === courseId,
  );
  const navigate = useNavigate();
  const goBack = () => {
    navigate(`/courses`);
  };
  const enrollHandle = () => {
    navigate(`/login`, { state: { tryingToEnroll: true } });
  };
  // if course not found
  if (!viewedCourse) {
    return <h1>Course Not Found</h1>;
  }
  return (
    <div
      key={viewedCourse.courseId}
      className="max-w-md mx-auto mt-10 bg-base-100 shadow-2xl rounded-xl overflow-hidden"
    >
      <div className="p-4">
        <button className="btn btn-circle btn-outline" onClick={goBack}>
          🔙
        </button>
      </div>

      <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
        <h2 className="text-4xl font-bold text-white">
          {viewedCourse.courseName}
        </h2>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex justify-between text-lg">
          <span className="font-semibold">💰 Price</span>
          <span>₹{viewedCourse.price}</span>
        </div>

        <div className="flex justify-between text-lg gap-2">
          <span className="font-semibold">⏳ Duration</span>
          <span>{viewedCourse.duration}</span>
        </div>

        <button
          className="btn btn-primary w-full mt-4"
          onClick={() => enrollHandle()}
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseDetail;
