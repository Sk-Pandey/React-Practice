import React, { useState } from "react";
import Navbar from "../components/Navbar";
import StudentForm from "../components/StudentForm";
import SearchBar from "../components/SearchBar";
import StudentList from "../components/StudentList";

const Home = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    age: "",
    course: "",
  });
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const deleteStudent = (dltid) => {
    setStudents(students.filter((student) => student.id !== dltid));
  };
  return (
    <div>
      <Navbar />
      <StudentForm
        formData={formData}
        setFormData={setFormData}
        students={students}
        setStudents={setStudents}
      />
      <SearchBar search={search} setSearch={setSearch} />
      <StudentList
        students={students}
        search={search}
        deleteStudent={deleteStudent}
      />
    </div>
  );
};

export default Home;
