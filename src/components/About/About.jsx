import React from "react";
import { useTranslation } from "react-i18next";
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, []);
  const { t } = useTranslation();

  return (
    <div
      className="pb-10 pt-10 bg-gray-50 px-7 lg:px-20"
      id="about"
      data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"
    >
      <div className="text-center pt-10 pb-5 text-[35px] md:text-[50px] font-semibold">
        {t("haqida.sar1")}
      </div>
      <div className="pb-5">
        <b className="text-[#696969]">{t("haqida.sar1")}</b> - {t("haqida.p1")}
      </div>
      <div className="pb-5">
        <b className="text-[#696969]">{t("haqida.sar1")}</b>

        <span>{t("haqida.2p")}</span>
      </div>
      <div>
        <b className="text-[#696969]">{t("haqida.sar2")}</b>
        <span>{t("haqida.p3")}</span>
      </div>
      <div className="mt-5">{t("haqida.p4")}</div>
      <div>
        <h4 className="text-center my-5 text-[35px] md:text-[50px] font-semibold">
          {t("haqida.os1")}
        </h4>
        <ul>
          <li>{t("haqida.li1")}</li>
          <li>{t("haqida.li2")}</li>
          <li>{t("haqida.li3")}</li>
          <li>{t("haqida.li4")}</li>
          <li>{t("haqida.li5")}</li>
          <li>{t("haqida.li6")}</li>
        </ul>
      </div>
      <div className="mt-5">
        <b className="text-[#696969]">{t("haqida.sar3")} </b>
        {t("haqida.p5")}
      </div>
      <div className="mt-3">
        <b className="text-[#696969]">{t("haqida.sar4")} </b> {t("haqida.p6")}
      </div>

    <div className="mt-3 ad-container">
      <ins className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-format="fluid"
      data-ad-layout-key="-fb+5w4e+db+86"
      data-ad-client="ca-pub-5047998189921732"
      data-ad-slot="5554813692"></ins>
    </div>

    </div>
    
  );
};

export default About;
