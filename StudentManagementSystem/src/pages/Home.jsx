import React, { useState } from "react";
import Navbar from "../components/Navbar";
import StudentForm from "../components/StudentForm";
import SearchBar from "../components/SearchBar";
import StudentList from "../components/StudentList";

const Home = () => {
  const [FormData, setFormData] = useState({
    name: "",
    age: null,
    course: "",
  });
  
  return (
    <div>
      <Navbar />
      <StudentForm FormData={FormData} setFormData={setFormData} />
      <SearchBar />
      <StudentList />
    </div>
  );
};

export default Home;
