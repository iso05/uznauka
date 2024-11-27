import home from "../../assets/home.png";
import "../../index.css";

export default function Home() {
  return (
    <div className="py-28 w-full md:py-10 sm:px-5 flex flex-col xl:flex-row xl:px-28 justify-center items-center">
      <div className="text-center xl:text-left">
        <p className="text-[#c2c2c2] font-[600] uppercase tracking-widest lg:leading-7">
          Ваша статья готова?
        </p>
        <h3 className="text-[#005bc1] text-[25px] md:text-[40px] font-semibold">
          Лучший выбор для вас
        </h3>
        <h1 className="text-[#005bc1] lg:leading-[70px] mb-4 text-[45px] md:text-[90px] font-semibold tracking-widest">
          Uznauka.uz
        </h1>
        <h6 className="text-[#2a2a2a] text-lg leading-8">
          Полный набор услуг по публикации и обслуживанию различных материалов
          конференций.
        </h6>
        <a href="#about">
          <button className="bg-[#086ad8] text-white px-14 py-4 rounded-md mt-5">
            Подробнее
          </button>
        </a>
      </div>
      <div className="animation-home">
        <img src={home} className="w-[300px] md:w-[700px]" alt="Home Image" />
      </div>
    </div>
  );
}
