import React from "react";
import img1 from "../../assets/swiper/img.png";
import img2 from "../../assets/swiper/img_1.png";
import img3 from "../../assets/swiper/img_2.png";
import img4 from "../../assets/swiper/img_3.png";
import img5 from "../../assets/swiper/img_4.png";
import img6 from "../../assets/swiper/img_5.png";
import img7 from "../../assets/swiper/img_6.png";

const Slider = () => {
  const logos = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <div className="w-full bg-slate-950 py-12 border-y border-slate-900 overflow-hidden relative">
      {/* Soft gradient fade on left and right edges */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>

      <div className="flex overflow-hidden">
        {/* Double the list for seamless marquee effect */}
        <div className="animate-marquee flex gap-8 items-center py-2 pr-8">
          {logos.map((logo, index) => (
            <div 
              key={`logo-1-${index}`}
              className="bg-white/90 hover:bg-white border border-slate-200/50 rounded-2xl px-5 py-3.5 flex items-center justify-center h-16 w-36 sm:w-40 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 cursor-pointer flex-shrink-0"
            >
              <img
                src={logo}
                alt="Indexing Partner"
                className="max-h-8 max-w-full object-contain filter contrast-110 opacity-90 hover:opacity-100 transition-opacity duration-200"
              />
            </div>
          ))}
        </div>
        <div className="animate-marquee flex gap-8 items-center py-2 pr-8" aria-hidden="true">
          {logos.map((logo, index) => (
            <div 
              key={`logo-2-${index}`}
              className="bg-white/90 hover:bg-white border border-slate-200/50 rounded-2xl px-5 py-3.5 flex items-center justify-center h-16 w-36 sm:w-40 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 cursor-pointer flex-shrink-0"
            >
              <img
                src={logo}
                alt="Indexing Partner"
                className="max-h-8 max-w-full object-contain filter contrast-110 opacity-90 hover:opacity-100 transition-opacity duration-200"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;

