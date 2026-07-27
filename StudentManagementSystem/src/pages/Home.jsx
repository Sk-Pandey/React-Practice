import React, { useState } from "react";
import Navbar from "../components/Navbar";
import StudentForm from "../components/StudentForm";
import SearchBar from "../components/SearchBar";
import StudentList from "../components/StudentList";

const Home = () => {
  const [FormData, setFormData] = useState({
    name: "",
    age: "",
    course: "",
  });
  const [students, setStudents] = useState([]);
  return (
    <div>
      <Navbar />
      <StudentForm
        FormData={FormData}
        setFormData={setFormData}
        students={students}
        setStudents={setStudents}
      />
      <SearchBar />
      <StudentList />
    </div>
  );
};

export default Home;
