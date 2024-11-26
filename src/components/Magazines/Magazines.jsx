import React from "react";
import Cover from "../Cover/Cover";
import img1 from "../../assets/cover/img_1.jpg";
import img2 from "../../assets/cover/img_2.jpg";
import img3 from "../../assets/cover/img_3.jpg";
import img4 from "../../assets/cover/img_4.jpg";
import img5 from "../../assets/cover/img_5.jpg";

const Magazines = () => {
  return (
    <div className="h-auto bg-[#f0f8ff] pb-14">
      <div className="text-center pt-[60px] text-[#086ad8] text-[50px] font-semibold">
        Hаши журналы
      </div>
      <div className="pt-14 gap-10 flex xl:flex-row flex-col flex-wrap items-center justify-center">
        <Cover
          img={img1}
          link={"https://journals.uznauka.uz/index.php/ojs/index"}
        />
        <Cover
          img={img2}
          link={"https://journals.uznauka.uz/index.php/stm/index"}
        />
        <Cover
          img={img3}
          link={"https://journals.uznauka.uz/index.php/ies/index"}
        />
        <Cover
          img={img4}
          link={"https://journals.uznauka.uz/index.php/lps/index"}
        />
        <Cover
          img={img5}
          link={"https://journals.uznauka.uz/index.php/sse/index"}
        />
      </div>
    </div>
  );
};

export default Magazines;
