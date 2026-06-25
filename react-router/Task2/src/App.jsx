import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar"; // 1. Double-check your naming & paths here
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      {/* 2. Swapped bg-neutral-50 for bg-zinc-950 and updated selection text colors */}
      <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-amber-400 selection:text-zinc-950 font-sans antialiased">
        {/* Your Sticky Navbar */}
        <Navbar />

        {/* 3. Wrap your page content in a max-width container with side padding */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
