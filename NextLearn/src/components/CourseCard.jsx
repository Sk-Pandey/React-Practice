const CourseCard = ({ course }) => {
  return (
    <div>
      <h2>{course.title}</h2>

      <p>{course.description}</p>

      <p>₹{course.price}</p>

      <p>{course.duration}</p>

      <button>View Details</button>
    </div>
  );
};

export default CourseCard;
