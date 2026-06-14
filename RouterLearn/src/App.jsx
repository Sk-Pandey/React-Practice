import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Error from "./pages/Error";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Nav />

      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
