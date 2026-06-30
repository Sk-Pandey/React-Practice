import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import Navbar from "./pages/Navbar";
import UserDetail from "./pages/UserDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetail />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
