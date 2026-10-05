import React from "react";
import { useTranslation } from "react-i18next";
import { FaBook, FaCheck, FaExternalLinkAlt, FaFileAlt } from "react-icons/fa";

const Cover = ({ img, link, title, issn, frequency, scope }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/80 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-rose-950/15 transition-all duration-500 flex flex-col h-full group hover:-translate-y-2 hover:border-rose-500/40">
      {/* Cover Image Frame */}
      <div className="relative h-80 w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 border-b border-slate-850 flex items-center justify-center p-6 select-none">
        {/* Glowing backdrop filter */}
        <div className="absolute inset-0 bg-rose-500/5 group-hover:bg-rose-500/10 rounded-full blur-3xl opacity-50 transition-all duration-500"></div>
        
        {/* 3D Floating Book Cover Graphic */}
        <div className="relative z-10 transition-all duration-500 transform group-hover:scale-105 group-hover:-rotate-3 group-hover:translate-y-[-4px] max-h-[220px] aspect-[3/4] flex-shrink-0 flex items-stretch select-none">
          {/* The Front Cover */}
          <div className="relative z-20 w-[95%] shadow-[0_15px_30px_rgba(0,0,0,0.6)] group-hover:shadow-[0_20px_45px_rgba(0,0,0,0.8)] overflow-hidden rounded-l-sm border border-slate-950">
            <img 
              src={img} 
              className="h-full w-full object-cover" 
              alt={`${title} Cover`} 
            />
            {/* Left book spine shadow simulation */}
            <div className="absolute top-0 bottom-0 left-0 w-2.5 bg-gradient-to-r from-black/55 via-black/20 to-transparent"></div>
            {/* High-end journal spine gloss reflection */}
            <div className="absolute top-0 bottom-0 left-2.5 w-1 bg-white/5"></div>
          </div>

          {/* Simulated Stacked Paper Pages (Right Edge - White paper look) */}
          <div className="relative z-10 w-[5%] bg-slate-50 border border-l-0 border-slate-350 rounded-r-[3px] shadow-[3px_5px_15px_rgba(0,0,0,0.3)]"
               style={{
                 backgroundImage: "repeating-linear-gradient(to bottom, #e2e8f0, #e2e8f0 1px, #ffffff 1px, #ffffff 3px)"
               }}>
          </div>
        </div>

        {/* Open Access Badge */}
        <div className="absolute top-4 left-4 bg-emerald-600/90 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-md flex items-center gap-1.5 border border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
          {t("cover.openAccess")}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-7 flex flex-col flex-grow space-y-5">
        {/* Journal Title */}
        <div className="space-y-2">
          <h4 className="text-lg md:text-xl font-bold font-serif-editorial text-white group-hover:text-rose-450 transition-colors duration-300 min-h-[56px] leading-snug">
            {title}
          </h4>
          <div className="inline-flex items-center gap-1.5 bg-slate-950/80 px-2.5 py-1 rounded-md text-[10px] text-slate-400 font-mono border border-slate-850">
            <FaBook size={10} className="text-rose-500" />
            <span>e-ISSN: {issn}</span>
          </div>
        </div>

        {/* Glassmorphic details block */}
        <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-850">
          <span className="bg-slate-950/40 border border-slate-850 px-3 py-1.5 rounded-lg text-[10px] text-slate-400 font-medium tracking-wide flex items-center gap-1">
            {t("cover.frequency")}: <strong className="text-slate-200">{frequency}</strong>
          </span>
          <span className="bg-slate-950/40 border border-slate-850 px-3 py-1.5 rounded-lg text-[10px] text-slate-400 font-medium tracking-wide flex items-center gap-1.5">
            <FaCheck className="text-emerald-550 text-[9px]" /> 
            <span>{t("cover.review")}</span>
          </span>
        </div>

        {/* Scope description text if available */}
        {scope && (
          <p className="text-xs text-slate-400/90 line-clamp-2 leading-relaxed pt-1">
            {scope}
          </p>
        )}

        <div className="pt-4 mt-auto grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          <a 
            href="https://t.me/SCIENTIFICRESEARCHERUZ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white text-xs font-bold text-center py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 border border-transparent shadow-lg hover:shadow-rose-950/20 active:scale-95"
          >
            <FaFileAlt size={10} />
            <span>{t("cover.submit")}</span>
          </a>
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full border border-slate-700/80 hover:border-slate-500 bg-slate-800/30 hover:bg-slate-800/60 text-slate-200 hover:text-white text-xs font-bold text-center py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 shadow-sm"
          >
            <span>{t("cover.site")}</span>
            <FaExternalLinkAlt size={9} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cover;

