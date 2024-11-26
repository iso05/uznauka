import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

import img1 from "../../assets/swiper/img.png";
import img2 from "../../assets/swiper/img_1.png";
import img3 from "../../assets/swiper/img_2.png";
import img4 from "../../assets/swiper/img_3.png";
import img5 from "../../assets/swiper/img_4.png";
import img6 from "../../assets/swiper/img_5.png";
import img7 from "../../assets/swiper/img_6.png";

const Slider = () => {
  return (
    <div className="h-[200px]">
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 700,
            slidesPerView: 3,
          },
          // when window width is >= 768px
          769: {
            width: 1400,
            slidesPerView: 5,
            spaceBetween: 80,
          },
        }}
        slidesPerView={5}
        spaceBetween={10}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={9000}
        modules={[Pagination, Autoplay]}
        className="mySwiper mt-[100px] w-full"
      >
        <SwiperSlide className="group mx-10">
          <img
            src={img1}
            alt=""
            className="transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-lg object-cover hover:scale-150"
          />
        </SwiperSlide>
        <SwiperSlide className="group mx-10">
          <img
            src={img2}
            alt=""
            className="transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-lg object-cover hover:scale-105"
          />
        </SwiperSlide>
        <SwiperSlide className="group mx-10">
          <img
            src={img3}
            alt=""
            className="transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-lg object-cover hover:scale-105"
          />
        </SwiperSlide>
        <SwiperSlide className="group mx-10">
          <img
            src={img4}
            alt=""
            className="transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-lg object-cover hover:scale-105"
          />
        </SwiperSlide>
        <SwiperSlide className="group mx-10">
          <img
            src={img5}
            alt=""
            className="transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-lg object-cover hover:scale-105"
          />
        </SwiperSlide>
        <SwiperSlide className="group mx-10">
          <img
            src={img6}
            alt=""
            className="transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-lg object-cover hover:scale-105"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
