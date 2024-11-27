import React from "react";

const Cover = ({ img, link }) => {
  return (
    <div className="relative">
      <div className="w-[300px] md:w-[350px] h-[450px] md:h-[550px] relative">
        <img src={img} className="w-full h-full object-cover pb-5" alt="" />
        <a href={link} className="w-full inline-block" target="_blank">
          <button className="bg-[#086ad8] text-white px-14 py-2 absolute bottom-0 w-full">
            Подробнее
          </button>
        </a>
      </div>
    </div>
  );
};

export default Cover;
