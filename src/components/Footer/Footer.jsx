import React from "react";
import footerImg from "../../assets/logo_uz.png";
import map from "../../assets/svgs/map.svg";
import mail from "../../assets/svgs/mail.svg";
import phone from "../../assets/svgs/phone.svg";

const Footer = () => {
  return (
    <div
      className="bg-[#212529] flex flex-col text-white px-5 md:px-20 pt-10"
      id="contact"
    >
      <div className="flex lg:flex-row flex-col justify-evenly">
        <div className="flex-1 flex flex-col justify-between items-center">
          <img src={footerImg} className="w-[200px] py-5" alt="" />
          <div className="text-white">
            Компания «УзНаука» - является премиальным представителем компаний,
            занимающих высокое уровен в сфере научных услуг, и является
            академической площадкой, широко продвигающей науку и инновации в
            Узбекистане.
          </div>
        </div>
        <div className="flex-1 flex-col flex justify-center px-2 md:px-10 py-5">
          <div className="mb-3 text-xl">Наш адрес</div>
          <div className="flex gap-10 my-2">
            <img src={map} alt="" />
            <span>г.Ташкент, ул.А.Навои, 30</span>
          </div>
          <div className="flex gap-10 my-2">
            <img src={phone} alt="" />
            <span>(+998)935271622</span>
          </div>
          <div className="flex gap-10 my-2">
            <img src={mail} alt="" />
            <span>ilmiyizlanuvchi@gmail.com</span>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.3987350229013!2d69.2463326755305!3d41.321942100052944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b75b8b45fe1%3A0xf388d40ca1e8aec8!2z0L_RgNC-0YHQv9C10LrRgiDQndCw0LLQvtC4IDMwLCAxMDAxMjksINCi0LDRiNC60LXQvdGCLCBUYXNoa2VudCwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1732617357204!5m2!1sru!2s"
            className="w-full xl:w-[500px] h-[200px] lg:h-[250px]"
            style={{ border: "0", borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="text-center text-lg pt-5 pb-2">
        &copy; 2024 uznauka.uz Все права защищены.
      </div>
    </div>
  );
};

export default Footer;
