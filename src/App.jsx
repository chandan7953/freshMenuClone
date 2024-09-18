import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import FooterSection from "./components/FooterSection";
import Home from "./Pages/Home";
import DeliveryPage from "./Pages/DeliveryPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/delivery" element={<DeliveryPage />} />
      </Routes>
      <FooterSection />
    </Router>
  );
};

export default App;
