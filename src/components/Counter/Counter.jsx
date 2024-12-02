import React, { useEffect, useState, useTransition } from "react";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";

const Counter = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(false);
  useEffect(() => {
    addEventListener("scroll", () => {
      if (scrollY > 2000) {
        setActive(true);
      }
    });
  }, []);

 


  return (
    <div className="text-center py-10 h-auto lg:h-[200px] bg-blue-600 flex lg:flex-row flex-col gap-10 items-center justify-evenly">
      <div className="flex flex-col text-white">
        <span className="text-[50px] font-semibold">
          {active ? <CountUp start={200} end={500} duration={3} /> : "500"}+
        </span>
        <span className="text-[30px]">{t("Countr.c1")}</span>
      </div>
      <div className="flex flex-col text-white">
        <span className="text-[50px] font-semibold">
          {active ? <CountUp start={0} end={5} duration={3} /> : 5}+
        </span>
        <span className="text-[30px]">{t("Countr.c2")}</span>
      </div>
      <div className="flex flex-col text-white">
        <span className="text-[50px] font-semibold">
          {active ? <CountUp start={0} end={7} duration={3} /> : 7}+
        </span>
        <span className="text-[30px]">{t("Countr.c3")}</span>
      </div>
      <div className="flex flex-col text-white">
        <span className="text-[50px] font-semibold">0+</span>
        <span className="text-[30px]">{t("Countr.c4")}</span>
      </div>
    </div>
  );
};

export default Counter;
