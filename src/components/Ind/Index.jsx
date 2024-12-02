import React from "react";
import Slider from "../Slider/Slider";
import Counter from "../Counter/Counter";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();


  return (
    <div className="pt-[100px]" data-aos="fade-up">
      <div className="text-center text-[#086ad8] xxs:px-1 text-[35px] md:text-[50px] font-semibold">
        {t("inedks.ind")}
      </div>
      <Slider />
      <Counter />
    </div>
  );
};

export default Index;
