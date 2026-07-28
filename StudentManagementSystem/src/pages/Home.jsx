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
      newError.name = "Name is required";
      hasError = true;
    }
    if (!formData.age) {
      newError.age = "Age is required";
      hasError = true;
    }
    if (!formData.course) {
      newError.course = "Course is required";
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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form Section */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <StudentForm
              formData={formData}
              setFormData={setFormData}
              addStudent={addStudent}
              editId={editId}
              errors={errors}
              setErrors={setErrors}
            />
          </div>

          {/* Right Column: Search & Directory Grid */}
          <div className="lg:col-span-7 space-y-6">
            <SearchBar search={search} setSearch={setSearch} />
            <StudentList
              students={students}
              search={search}
              deleteStudent={deleteStudent}
              editFn={editFn}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
