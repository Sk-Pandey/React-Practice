import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";

const Courses = () => {
  return (
    <main>
      <h1>All Courses</h1>

      <section>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </section>
    </main>
  );
};

export default Courses;
