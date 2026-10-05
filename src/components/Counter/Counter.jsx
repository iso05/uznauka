import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import { FaFileAlt, FaBookOpen, FaUsers, FaNewspaper } from "react-icons/fa";

const Counter = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1500) {
        setActive(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    {
      icon: <FaFileAlt className="text-rose-600 text-3xl" />,
      endVal: 500,
      startVal: 200,
      labelKey: "Countr.c1",
    },
    {
      icon: <FaBookOpen className="text-rose-600 text-3xl" />,
      endVal: 5,
      startVal: 0,
      labelKey: "Countr.c2",
    },
    {
      icon: <FaUsers className="text-rose-600 text-3xl" />,
      endVal: 7,
      startVal: 0,
      labelKey: "Countr.c3",
    },
    {
      icon: <FaNewspaper className="text-rose-600 text-3xl" />,
      endVal: 120, // Give it a realistic count, e.g. 120+ posts or news
      startVal: 20,
      labelKey: "Countr.c4",
    },
  ];

  return (
    <section className="bg-slate-900 border-t border-slate-800 text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl bg-slate-950/40 border border-slate-800/60 w-full max-w-[240px] hover:border-rose-500/30 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-800/80 group-hover:bg-rose-500/10 transition-colors duration-300">
                {stat.icon}
              </div>
              <div className="space-y-1">
                <span className="text-4xl md:text-5xl font-bold tracking-tight block font-sans">
                  {active ? (
                    <CountUp start={stat.startVal} end={stat.endVal} duration={2.5} />
                  ) : (
                    stat.endVal
                  )}
                  <span className="text-rose-600 font-bold">+</span>
                </span>
                <span className="text-sm md:text-base text-slate-400 font-semibold tracking-wide block uppercase pt-1">
                  {t(stat.labelKey)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
