import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Home from "./assets/components/Home"; // Changed Hero to Home
import Footer from "./assets/components/Footer";
import About from "./assets/components/About";
import Shop from "./assets/components/Shop";
import Cosmetics from "./assets/components/Cosmetics";
import Contact from "./assets/components/Contact";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Routes>
        {/* Define routes for different components */}
        <Route path="/" element={<Home />} /> {/* Updated Hero to Home */}
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cosmetics" element={<Cosmetics />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
