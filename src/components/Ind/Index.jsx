import React from "react";
import Slider from "../Slider/Slider";
import Counter from "../Counter/Counter";

const Index = () => {
  return (
    <div className="pt-[100px] ">
      <div className="text-center text-[#086ad8] text-[50px] font-semibold">
        Журналы индекса
      </div>
      {/* <Slider /> */}
      <Counter />
    </div>
  );
};

export default Index;
