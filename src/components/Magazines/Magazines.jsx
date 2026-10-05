import React from "react";
import Cover from "../Cover/Cover";
import img1 from "../../assets/cover/img_1.jpg";
import img2 from "../../assets/cover/img_2.jpg";
import img3 from "../../assets/cover/img_3.jpg";
import img4 from "../../assets/cover/img_4.jpg";
import img5 from "../../assets/cover/img_5.jpg";
import { useTranslation } from "react-i18next";

const Magazines = () => {
  const { t } = useTranslation();

  const journalData = [
    {
      img: img1,
      link: "https://journal.uznauka.uz/index.php/sas",
      title: t("navbar.j1"), // Science and Society
      issn: "2181-3329",
      frequency: t("jurnal.freq"),
      scope: t("jurnal.sas_scope")
    },
    {
      img: img2,
      link: "https://journal.uznauka.uz/index.php/medicine",
      title: t("navbar.j4"), // Medicine
      issn: "2181-3337",
      frequency: t("jurnal.freq"),
      scope: t("jurnal.med_scope")
    },
    {
      img: img3,
      link: "https://journal.uznauka.uz/index.php/exactscience",
      title: t("navbar.j5"), // Exact Sciences
      issn: "2181-3345",
      frequency: t("jurnal.freq"),
      scope: t("jurnal.exact_scope")
    },
    {
      img: img4,
      link: "https://journal.uznauka.uz/index.php/lawpolicy",
      title: t("navbar.j2"), // Law & Policy
      issn: "2181-3353",
      frequency: t("jurnal.freq"),
      scope: t("jurnal.law_scope")
    },
    {
      img: img5,
      link: "https://journal.uznauka.uz/index.php/socialscience",
      title: t("navbar.j3"), // Social Sciences
      issn: "2181-3361",
      frequency: t("jurnal.freq"),
      scope: t("jurnal.soc_scope")
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-slate-950 border-y border-slate-900 relative overflow-hidden bg-dot-matrix" data-aos="fade-up">
      {/* Ambient glowing blobs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-rose-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-5 mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-serif-editorial text-white leading-tight">
            {t("jurnal.s1")}
          </h2>
          <div className="w-24 h-1 bg-rose-600 mx-auto rounded-full"></div>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            {t("jurnal.desc")}
          </p>
        </div>

        {/* Journals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 justify-center items-stretch">
          {journalData.map((journal, index) => (
            <Cover
              key={index}
              img={journal.img}
              link={journal.link}
              title={journal.title}
              issn={journal.issn}
              frequency={journal.frequency}
              scope={journal.scope}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Magazines;

