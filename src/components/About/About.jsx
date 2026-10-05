import React from "react";
import { useTranslation } from "react-i18next";
import { 
  FaChartLine, 
  FaGlobe, 
  FaGraduationCap, 
  FaUniversity, 
  FaHandshake, 
  FaFileSignature,
  FaCalendarAlt,
  FaBullhorn
} from "react-icons/fa";

const About = () => {
  const { t } = useTranslation();

  const taskIcons = [
    <FaChartLine className="text-rose-500 text-2xl" />,
    <FaGlobe className="text-rose-500 text-2xl" />,
    <FaGraduationCap className="text-rose-500 text-2xl" />,
    <FaUniversity className="text-rose-500 text-2xl" />,
    <FaHandshake className="text-rose-500 text-2xl" />,
    <FaFileSignature className="text-rose-500 text-2xl" />
  ];

  const tasksKeys = ["li1", "li2", "li3", "li4", "li5", "li6"];

  return (
    <section 
      id="about" 
      className="py-20 md:py-28 bg-slate-950 text-slate-300 px-4 sm:px-6 lg:px-8 overflow-hidden relative bg-manuscript-lines border-t border-slate-900"
      data-aos="fade-up" 
      data-aos-duration="1000"
    >
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold font-serif-editorial text-white">
            {t("haqida.sar1")}
          </h2>
          <div className="w-24 h-1 bg-rose-600 mx-auto rounded-full"></div>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Mission, Target, Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-900/60 p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white border-b border-slate-800/80 pb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-600"></span>
                {t("haqida.sar2")}
              </h3>
              
              <div className="space-y-4 text-slate-400 leading-relaxed text-sm md:text-base">
                <p>
                  <strong className="text-white font-semibold">{t("haqida.sar1")}</strong> — {t("haqida.p1")}
                </p>
                <p>
                  <strong className="text-white font-semibold">{t("haqida.sar1")}</strong> {t("haqida.2p")}
                </p>
                <p>
                  {t("haqida.p3")}
                </p>
                <p className="pt-2 text-xs md:text-sm text-slate-500 italic">
                  {t("haqida.p4")}
                </p>
              </div>
            </div>

            {/* Publication Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-rose-955/20 border border-rose-900/30 p-5 rounded-xl flex items-start gap-3">
                <FaBullhorn className="text-rose-500 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white text-xs md:text-sm uppercase tracking-wider">{t("haqida.sar3")}</h4>
                  <p className="text-xs text-slate-400 mt-1">{t("haqida.p5")}</p>
                </div>
              </div>
              <div className="bg-rose-955/20 border border-rose-900/30 p-5 rounded-xl flex items-start gap-3">
                <FaCalendarAlt className="text-rose-500 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white text-xs md:text-sm uppercase tracking-wider">{t("haqida.sar4")}</h4>
                  <p className="text-xs text-slate-400 mt-1">{t("haqida.p6")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission Cards */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold font-serif-editorial text-white text-center lg:text-left">
              {t("haqida.os1")}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {tasksKeys.map((key, i) => (
                <div 
                  key={key} 
                  className="bg-slate-900/40 border border-slate-800 hover:border-rose-550/40 p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-850 group-hover:bg-rose-600/20 transition-colors duration-300">
                    {taskIcons[i]}
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mt-4">
                    {t(`haqida.${key}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
