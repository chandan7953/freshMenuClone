import React from "react";
import Navbar from "./components/Navbar";
import ImageSlider from "./components/ImageSlider";
import Categories from "./components/Categories";
import FooterSection from "./components/FooterSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <ImageSlider />
      <Categories />
      <FooterSection />
    </div>
  );
};

export default App;
