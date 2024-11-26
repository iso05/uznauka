import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

const Counter = () => {
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
          {active && <CountUp start={200} end={500} duration={3} />}+
        </span>
        <span className="text-[30px]">Статьи</span>
      </div>
      <div className="flex flex-col text-white">
        <span className="text-[50px] font-semibold">
          {active && <CountUp start={0} end={5} duration={3} />}+
        </span>
        <span className="text-[30px]">Журналы</span>
      </div>
      <div className="flex flex-col text-white">
        <span className="text-[50px] font-semibold">
          {active && <CountUp start={0} end={7} duration={3} />}+
        </span>
        <span className="text-[30px]">Конференции</span>
      </div>
      <div className="flex flex-col text-white">
        <span className="text-[50px] font-semibold">0+</span>
        <span className="text-[30px]">Посты</span>
      </div>
    </div>
  );
};

export default Counter;
