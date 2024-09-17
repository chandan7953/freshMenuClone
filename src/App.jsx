import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SlidingBanner from "./components/SlidingBanner";
import Categories from "./components/Categories";
import FooterSection from "./components/FooterSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <SlidingBanner />
      <Categories />
      <FooterSection />
    </div>
  );
};

export default App;
