import home from "../../assets/home.png";
import "../../index.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaSearch, FaCheckCircle, FaBookOpen, FaArrowRight } from "react-icons/fa";

export default function Home() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "ru";

  const [searchQuery, setSearchQuery] = useState("");

  const localJournals = [
    {
      id: "sas",
      nameUz: "Fan va Jamiyat (SAS)",
      nameEn: "Science and Society (SAS)",
      nameRu: "Наука и Общество (SAS)",
      url: "https://journal.uznauka.uz/index.php/sas",
      issn: "2181-3329",
    },
    {
      id: "medicine",
      nameUz: "Tibbiyotda Ilmiy Tendensiyalar",
      nameEn: "Scientific Trends in Medicine",
      nameRu: "Научные тенденции в медицине",
      url: "https://journal.uznauka.uz/index.php/medicine",
      issn: "2181-3337",
    },
    {
      id: "exactscience",
      nameUz: "Aniq Fanlarda Innovatsiyalar",
      nameEn: "Innovations in Exact Science",
      nameRu: "Инновации в точных науках",
      url: "https://journal.uznauka.uz/index.php/exactscience",
      issn: "2181-3345",
    },
    {
      id: "lawpolicy",
      nameUz: "Huquq, Siyosat va Jamiyat",
      nameEn: "Law, Policy and Society",
      nameRu: "Право, политика и общество",
      url: "https://journal.uznauka.uz/index.php/lawpolicy",
      issn: "2181-3353",
    },
    {
      id: "socialscience",
      nameUz: "Ijtimoiy Soha va Innovatsiyalar",
      nameEn: "Social Area and Innovations (Socialscience)",
      nameRu: "Социальная сфера и инновации",
      url: "https://journal.uznauka.uz/index.php/socialscience",
      issn: "2181-3361",
    }
  ];

  const filteredJournals = searchQuery.trim() === ""
    ? []
    : localJournals.filter(j => {
        const q = searchQuery.toLowerCase();
        return j.nameUz.toLowerCase().includes(q) ||
               j.nameEn.toLowerCase().includes(q) ||
               j.nameRu.toLowerCase().includes(q);
      });

  return (
    <section className="relative overflow-hidden pt-36 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white px-4 sm:px-6 lg:px-8">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Typography & Search */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-8" data-aos="fade-right" data-aos-duration="1000">
          
          {/* Subheading / Status Indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse"></span>
            {t("home.stat")}
          </div>

          {/* Main Titles */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl text-slate-300 font-medium font-sans">
              {t("home.b")}
            </h3>
            <h1 className="text-5xl md:text-7xl font-bold font-serif-editorial tracking-tight text-white leading-tight">
              Uz<span className="red-gradient-text font-serif-editorial">Nauka.uz</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              {t("home.ha6")}
            </p>
          </div>

          {/* Search Bar Container */}
          <div className="max-w-xl mx-auto lg:mx-0 relative">
            <div className="flex bg-slate-900 border border-slate-700 focus-within:border-rose-600 rounded-xl overflow-hidden shadow-xl p-1.5 transition-all duration-300">
              <div className="flex items-center pl-3 text-slate-400">
                <FaSearch />
              </div>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t("home.searchPlaceholder")}
                className="w-full bg-transparent border-0 text-white placeholder-slate-500 focus:ring-0 text-sm py-2 px-3 focus:outline-none"
              />
              <button 
                onClick={() => searchQuery.trim() !== "" && setSearchQuery("")}
                className="bg-rose-600 hover:bg-rose-700 text-white font-bold px-6 py-2 rounded-lg text-sm transition-colors duration-200"
              >
                {searchQuery.trim() !== "" ? t("home.clear") : t("home.search")}
              </button>
            </div>

            {/* Interactive Search Results */}
            {filteredJournals.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-slate-900/95 border border-slate-800 rounded-xl shadow-2xl p-4 z-20 space-y-3 backdrop-blur-md">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider text-left">{t("home.searchResults")}</p>
                <div className="grid grid-cols-1 gap-2.5 max-h-60 overflow-y-auto">
                  {filteredJournals.map(j => (
                    <div 
                      key={j.id} 
                      onClick={() => window.open(j.url, '_blank')}
                      className="bg-slate-950/80 hover:bg-rose-950/20 border border-slate-800 hover:border-rose-650/40 p-3.5 rounded-lg flex items-center justify-between cursor-pointer transition-all duration-200 group text-left"
                    >
                      <div>
                        <h5 className="text-sm font-bold text-white group-hover:text-rose-500 transition-colors">
                          {currentLang === "uz" ? j.nameUz : currentLang === "en" ? j.nameEn : j.nameRu}
                        </h5>
                        <p className="text-[11px] text-slate-500 font-mono mt-0.5">e-ISSN: {j.issn}</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-slate-900 group-hover:bg-rose-600/20 flex items-center justify-center transition-colors">
                        <FaArrowRight className="text-slate-400 group-hover:text-rose-500 group-hover:translate-x-1 transition-all" size={10} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Trending tags */}
            <div className="flex flex-wrap gap-2 mt-3 justify-center lg:justify-start text-xs text-slate-500">
              <span>{t("home.example")}</span>
              <button onClick={() => setSearchQuery("sas")} className="hover:text-rose-500 transition-colors">SAS</button>
              <span>•</span>
              <button onClick={() => setSearchQuery(currentLang === "uz" ? "tibbiyot" : currentLang === "en" ? "medicine" : "медицина")} className="hover:text-rose-500 transition-colors">
                {currentLang === "uz" ? "Tibbiyot" : currentLang === "en" ? "Medicine" : "Медицина"}
              </button>
              <span>•</span>
              <button onClick={() => setSearchQuery(currentLang === "uz" ? "huquq" : currentLang === "en" ? "law" : "право")} className="hover:text-rose-500 transition-colors">
                {currentLang === "uz" ? "Huquq" : currentLang === "en" ? "Law" : "Право"}
              </button>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start items-center pt-2">
            <a 
              href="https://journal.uznauka.uz/index.php/sas" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white px-8 py-4 rounded-xl text-base font-bold shadow-lg hover:shadow-rose-600/20 hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0 flex items-center gap-2"
            >
              <span>{t("home.but1")}</span>
              <FaArrowRight size={14} />
            </a>
            <a 
              href="#about"
              className="border border-slate-700 hover:border-slate-500 text-white hover:bg-slate-800/40 px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200"
            >
              {t("home.aboutUs")}
            </a>
          </div>

          {/* Badges / Impact Indicators */}
          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-800 max-w-md mx-auto lg:mx-0">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-1">
              <div className="flex items-center gap-2 text-rose-500">
                <FaBookOpen />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-sans">Open Access</span>
              </div>
              <span className="text-[10px] text-slate-500">{t("home.oaDesc")}</span>
            </div>
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-1">
              <div className="flex items-center gap-2 text-rose-500">
                <FaCheckCircle />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-sans">Peer-Reviewed</span>
              </div>
              <span className="text-[10px] text-slate-500">{t("home.prDesc")}</span>
            </div>
          </div>

        </div>

        {/* Right Column: Visual Graphic */}
        <div className="lg:col-span-5 flex justify-center items-center" data-aos="fade-left" data-aos-duration="1000">
          <div className="relative group">
            {/* Glowing Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-blue-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            
            {/* Main Illustration */}
            <div className="animation-home relative z-10 select-none">
              <img
                src={home} 
                className="w-80 md:w-[500px] xl:w-[460px] h-auto max-w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform duration-500"
                alt="UzNauka Premium Portal Illustration"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

