import React, { useState } from "react";
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
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);
  const addStudent = () => {
    if (editId) {
      setStudents(
        students.map((student) =>
          student.id === editId ? { ...formData, id: uuidv4() } : student,
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
    if (formData.name && formData.age > 0 && formData.course) {
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
    } else {
      alert("Enter valid value");
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
