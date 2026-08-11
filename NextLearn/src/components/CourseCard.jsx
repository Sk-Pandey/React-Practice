import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>{course.title}</h2>

      <p>{course.description}</p>

      <p>₹{course.price}</p>

      <p>{course.duration}</p>

      <button onClick={() => navigate(`/courses/${course.id}`)}>
        View Details
      </button>
    </div>
  );
};

export default CourseCard;
