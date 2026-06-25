import React from "react";
import { Routes, Route } from "react-router-dom";
const App = () => {
  function Home() {
    return <h1>Home Page</h1>;
  }

  function About() {
    return <h1>About Page</h1>;
  }

  function Contact() {
    return <h1>Contact Page</h1>;
  }
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
