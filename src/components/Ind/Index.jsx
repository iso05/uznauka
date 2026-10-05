import React from "react";
import Slider from "../Slider/Slider";
import Counter from "../Counter/Counter";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-slate-950 border-t border-slate-900 pt-24 overflow-hidden relative bg-diagonal-stripes" data-aos="fade-up">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-rose-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold font-serif-editorial text-white leading-tight">
            {t("inedks.ind")}
          </h2>
          <div className="w-24 h-1 bg-rose-600 mx-auto rounded-full"></div>
        </div>

        <Slider />
      </div>
      <Counter />
    </div>
  );
};

export default Index;
