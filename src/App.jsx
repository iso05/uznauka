import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Magazines from "./components/Magazines/Magazines";
import Index from "./components/Ind/Index";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Home />
      <About />
      <Magazines />
      <Index />
      <Footer />
    </div>
  );
};

export default App;
