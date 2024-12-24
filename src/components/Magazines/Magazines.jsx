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

  return (
    <div className="h-auto bg-[#f0f8ff] pb-14" data-aos="fade-up">
      <div className="text-center pt-[60px] text-[#086ad8] text-[35px] md:text-[50px] font-semibold">
        {t("jurnal.s1")}
      </div>
      <div className="pt-14 gap-10 flex md:flex-row flex-col flex-wrap items-center justify-center">
        <Cover
          img={img1}
          link={"https://journal.uznauka.uz/index.php/sas"}
        />
        <Cover
          img={img2}
          link={"https://journal.uznauka.uz/index.php/medicine"}
        />
        <Cover
          img={img3}
          link={"https://journal.uznauka.uz/index.php/exscience"}
        />
        <Cover
          img={img4}
          link={"https://journal.uznauka.uz/index.php/lawpolicy"}
        />
        <Cover
          img={img5}
          link={"https://journal.uznauka.uz/index.php/socscience"}
        />
      </div>
    </div>
  );
};

export default Magazines;
