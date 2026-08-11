import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";

const Home = () => {
  return (
    <main>
      <h1>Welcome to NextLearn</h1>

      <p>Learn development by building real projects.</p>

      <section>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </section>
    </main>
  );
};

export default Home;
