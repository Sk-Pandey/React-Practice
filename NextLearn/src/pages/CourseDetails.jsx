import { useNavigate, useParams } from "react-router-dom";
import { courses } from "../data/courses";

const CourseDetails = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const course = courses.find((course) => course.id === Number(courseId));

  if (!course) {
    return <h1>Course Not Found</h1>;
  }

  return (
    <main>
      <button onClick={() => navigate("/")}>← Back</button>

      <h1>{course.title}</h1>

      <p>{course.description}</p>

      <p>Price: ₹{course.price}</p>

      <p>Duration: {course.duration}</p>

      <button>Enroll Now</button>
    </main>
  );
};

export default CourseDetails;
