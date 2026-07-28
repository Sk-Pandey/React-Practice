import React from "react";
const StudentForm = ({
  formData,
  setFormData,
  addStudent,
  editId,
  errors,
  setErrors,
}) => {
  const inputhandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <div>
      <div className="flex  justify-center items-center flex-col mt-4 space-y-4">
        <input
          type="text"
          id="name"
          className="input"
          placeholder="Enter Your Name"
          name="name"
          value={formData.name}
          onChange={inputhandler}
        />
        {errors.name && (
          <p className="text-red-400 text-start">{errors.name}</p>
        )}
        <input
          type="number"
          id="age"
          className="input"
          placeholder="Enter Your Age"
          name="age"
          value={formData.age}
          onChange={inputhandler}
        />
        {errors.age && <p className="text-red-400 text-start">{errors.age}</p>}
        <input
          type="text"
          id="course"
          className="input"
          placeholder="Enter Your Course"
          name="course"
          value={formData.course}
          onChange={inputhandler}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addStudent();
            }
          }}
        />
        {errors.course && (
          <p className="text-red-400 text-start">{errors.course}</p>
        )}
        <button
          className="btn  bg-success active:scale-95"
          onClick={addStudent}
        >
          {editId ? "Update Student" : "Add Student"}
        </button>
      </div>
    </div>
  );
};

export default StudentForm;
