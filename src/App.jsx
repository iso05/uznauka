import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Magazines from "./components/Magazines/Magazines";
import Index from "./components/Ind/Index";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import { useEffect } from 'react';

const App = () => {

  useEffect(() => {
    try {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      script.async = true;
      script.crossOrigin = 'anonymous';
      // Replace YOUR_PUBLISHER_ID with your actual AdSense publisher ID
      script.dataset.adClient = 'ca-pub-5047998189921732';
      document.head.appendChild(script);
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <div className="">
      <Navbar />
      <div className="lg:container mx-auto">
        <Home />
        <About />
        <Magazines />
        <Index />
        <Footer />
      </div>
    </div>
  );
};

export default App;
