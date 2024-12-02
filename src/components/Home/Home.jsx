import home from "../../assets/home.png";
import "../../index.css";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="py-28 xl:h-screen h-auto w-full xl:py-2 xxs:px-5 flex flex-col xl:flex-row xl:px-28 xxs:justify-between justify-center items-center">
      <div className="text-center xl:text-left" data-aos="fade-right" data-aos-duration="2000">
        <p className="text-[#c2c2c2] xxs:py-5 font-[600] uppercase tracking-widest lg:leading-7">
          {t("home.stat")}
        </p>
        <h3 className="text-[#005bc1] text-[25px] md:text-[40px] font-semibold">
          {t("home.b")}
        </h3>
        <h1
          
          className="text-[#005bc1] lg:leading-[70px] my-10 mb-4 text-[45px] md:text-[90px] font-semibold tracking-widest"
        >
          Uznauka.uz
        </h1>
        <h6 className="text-[#2a2a2a] text-lg leading-8">{t("home.ha6")}</h6>
        <a href="#about">
          <button className="bg-[#086ad8] text-white px-14 py-4 rounded-md mt-5">
            {t("home.but1")}
          </button>
        </a>
      </div>
      <div className="animation-home" data-aos="fade-left" data-aos-duration="1000">
        <img
          src={home}
          className="w-[300px] md:w-[700px] xl:w-[550px]"
          alt="Home Image"
        />
      </div>
    </div>
  );
}
