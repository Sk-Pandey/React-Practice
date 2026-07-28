import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import StudentForm from "../components/StudentForm";
import SearchBar from "../components/SearchBar";
import StudentList from "../components/StudentList";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    age: "",
    course: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    age: "",
    course: "",
  });
  const [students, setStudents] = useState(
    JSON.parse(localStorage.getItem("studentData")) || [],
  );
  useEffect(() => {
    localStorage.setItem("studentData", JSON.stringify(students));
  }, [students]);

  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);
  const addStudent = () => {
    if (editId) {
      setStudents(
        students.map((student) =>
          student.id === editId ? { ...formData, id: student.id } : student,
        ),
      );

      setFormData({
        id: "",
        name: "",
        age: "",
        course: "",
      });
      setEditId(null);
      return;
    }
    const newError = {
      name: "",
      age: "",
      course: "",
    };
    let hasError = false;
    if (!formData.name) {
      newError.name = "Name is Required";
      hasError = true;
    }
    if (!formData.age) {
      newError.age = "Age is Required";
      hasError = true;
    }
    if (!formData.course) {
      newError.course = "Course is Required";
      hasError = true;
    }
    setErrors(newError);
    if (!hasError) {
      setStudents((prevStudents) => [
        ...prevStudents,
        { ...formData, id: uuidv4() },
      ]);

      setFormData({
        id: "",
        name: "",
        age: "",
        course: "",
      });
      setErrors({
        name: "",
        age: "",
        course: "",
      });
    }
  };
  const deleteStudent = (dltid) => {
    setStudents(students.filter((student) => student.id !== dltid));
  };
  const editFn = (Id) => {
    setEditId(Id);
    const student = students.find((student) => student.id === Id);
    setFormData(student);
  };
  return (
    <div>
      <Navbar />
      <StudentForm
        formData={formData}
        setFormData={setFormData}
        students={students}
        setStudents={setStudents}
        addStudent={addStudent}
        editId={editId}
        errors={errors}
        setErrors={setErrors}
      />
      <SearchBar search={search} setSearch={setSearch} />
      <StudentList
        students={students}
        search={search}
        deleteStudent={deleteStudent}
        editFn={editFn}
      />
    </div>
  );
};

export default Home;
