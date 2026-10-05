import React, { useState } from "react";
import footerImg from "../../assets/logo_uz.png";
import { useTranslation } from "react-i18next";
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaTelegram, 
  FaLinkedin, 
  FaFacebook 
} from "react-icons/fa";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "ru";

  const [activeModal, setActiveModal] = useState(null);

  const modalData = {
    terms: {
      title: t("foot.terms"),
      content: currentLang === "uz" ? (
        <>
          <p className="font-bold text-white mb-1">1. Shartlarning qabul qilinishi</p>
          <p className="mb-3">UzNauka veb-saytiga kirish orqali siz ushbu Foydalanish shartlariga rioya qilishga rozilik bildirasiz.</p>
          <p className="font-bold text-white mb-1">2. Veb-saytdan foydalanish</p>
          <p className="mb-3">Siz ushbu veb-saytdan faqat ilmiy tadqiqotlar, maqolalar yuborish va ilmiy nashrlarni o'qish bilan bog'liq qonuniy maqsadlarda foydalanishga rozilik bildirasiz. Veb-sayt faoliyatiga zarar yetkazadigan har qanday harakatlar taqiqlanadi.</p>
          <p className="font-bold text-white mb-1">3. Intellektual mulk</p>
          <p className="mb-3">Barcha kontent, logotiplar va materiallar UzNauka va tegishli mualliflarning intellektual mulki hisoblanadi. Ruxsatsiz nusxa ko'chirish taqiqlanadi.</p>
          <p className="font-bold text-white mb-1">4. Javobgarlikni cheklash</p>
          <p className="mb-3">Tashqi havolalar yoki uchinchi tomon kontentining mutloq to'g'riligiga kafolat bermaymiz. Saytdan foydalanish o'z xavf-xataringiz ostida amalga oshiriladi.</p>
        </>
      ) : currentLang === "en" ? (
        <>
          <p className="font-bold text-white mb-1">1. Acceptance of Terms</p>
          <p className="mb-3">By accessing UzNauka, you agree to comply with and be bound by these Terms of Service.</p>
          <p className="font-bold text-white mb-1">2. Website Use</p>
          <p className="mb-3">You agree to use this website only for lawful purposes related to academic research, manuscript submission, and reading scientific publications. Any actions that damage website functionality are prohibited.</p>
          <p className="font-bold text-white mb-1">3. Intellectual Property</p>
          <p className="mb-3">All content, logos, and materials are the intellectual property of UzNauka and respective authors. Unauthorized copying or redistribution is prohibited.</p>
          <p className="font-bold text-white mb-1">4. Limitation of Liability</p>
          <p className="mb-3">We do not guarantee the absolute accuracy of external links or third-party content. Use of the website is at your own risk.</p>
        </>
      ) : (
        <>
          <p className="font-bold text-white mb-1">1. Согласие с Условиями</p>
          <p className="mb-3">Доступ к сайту UzNauka означает ваше согласие с настоящими Условиями использования.</p>
          <p className="font-bold text-white mb-1">2. Использование сайта</p>
          <p className="mb-3">Вы соглашаетесь использовать этот сайт только в законных целях, связанных с академическими исследованиями, отправкой рукописей и чтением научных публикаций. Запрещены любые действия, наносящие вред работе сайта.</p>
          <p className="font-bold text-white mb-1">3. Интеллектуальная собственность</p>
          <p className="mb-3">Весь контент, логотипы и материалы являются интеллектуальной собственностью UzNauka и соответствующих авторов. Несанкционированное копирование запрещено.</p>
          <p className="font-bold text-white mb-1">4. Ограничение ответственности</p>
          <p className="mb-3">Мы не гарантируем абсолютную точность внешних ссылок или стороннего контента. Использование сайта осуществляется на ваш собственный риск.</p>
        </>
      )
    },
    privacy: {
      title: t("foot.privacy"),
      content: currentLang === "uz" ? (
        <>
          <p className="font-bold text-white mb-1">1. Ma'lumotlarni yig'ish</p>
          <p className="mb-3">Ushbu Maxfiylik siyosati UzNauka saytidan foydalanganingizda ma'lumotlaringiz qanday yig'ilishi, ishlatilishi va himoyalanishini tushuntiradi. Biz siz ixtiyoriy taqdim etgan ma'lumotlardan tashqari shaxsiy ma'lumotlarni yig'maymiz.</p>
          <p className="font-bold text-white mb-1">2. Google AdSense va Cookie-fayllar</p>
          <p className="mb-3">Biz reklama ko'rsatish uchun uchinchi tomon reklama kompaniyalaridan, xususan Google AdSense-dan foydalanamiz. Google sizning ushbu va internetdagi boshqa saytlarga tashrifingiz asosida reklama ko'rsatish uchun cookie-fayllardan foydalanadi. Foydalanuvchilar Google reklama sozlamalari orqali shaxsiylashtirilgan reklamalardan voz kechishlari mumkin.</p>
          <p className="font-bold text-white mb-1">3. Ma'lumotlar xavfsizligi</p>
          <p className="mb-3">Biz foydalanuvchilarimiz ma'lumotlarini ruxsatsiz kirish, o'zgartirish yoki yo'q qilishdan himoya qilish uchun barcha zarur xavfsizlik choralarini ko'ramiz.</p>
          <p className="font-bold text-white mb-1">4. Aloqa</p>
          <p className="mb-3">Agar maxfiylik shartlari bo'yicha savollaringiz bo'lsa, ilmiyizlanuvchi@gmail.com elektron pochtasi orqali bog'lanishingiz mumkin.</p>
        </>
      ) : currentLang === "en" ? (
        <>
          <p className="font-bold text-white mb-1">1. Data Collection</p>
          <p className="mb-3">This Privacy Policy explains how UzNauka collects, uses, and protects your information when you visit our website. We do not collect personal identification information unless voluntarily submitted.</p>
          <p className="font-bold text-white mb-1">2. Google AdSense and Cookies</p>
          <p className="mb-3">We use third-party advertising companies, specifically Google AdSense, to serve ads. Google uses cookies to serve ads based on your visits to our site and other sites on the Internet. Users may opt out of personalized advertising by visiting Google Ad Settings.</p>
          <p className="font-bold text-white mb-1">3. Data Security</p>
          <p className="mb-3">We take appropriate security measures to protect your data against unauthorized access, alteration, disclosure, or destruction.</p>
          <p className="font-bold text-white mb-1">4. Contact Information</p>
          <p className="mb-3">If you have any questions about this Privacy Policy, you may contact us at ilmiyizlanuvchi@gmail.com.</p>
        </>
      ) : (
        <>
          <p className="font-bold text-white mb-1">1. Сбор информации</p>
          <p className="mb-3">Настоящая Политика конфиденциальности объясняет, как UzNauka собирает, использует и защищает вашу информацию при посещении нашего сайта. Мы не собираем личную информацию, если вы не предоставите ее добровольно.</p>
          <p className="font-bold text-white mb-1">2. Google AdSense и файлы cookie</p>
          <p className="mb-3">Мы используем сторонние рекламные компании, в частности Google AdSense, для показа рекламы. Google использует файлы cookie для показа объявлений на основе ваших посещений этого и других сайтов в Интернете. Пользователи могут отключить персонализированную рекламу в настройках рекламных предпочтений Google.</p>
          <p className="font-bold text-white mb-1">3. Безопасность данных</p>
          <p className="mb-3">Мы принимаем надлежащие меры безопасности для защиты ваших данных от несанкционированного доступа, изменения, раскрытия или уничтожения.</p>
          <p className="font-bold text-white mb-1">4. Контактная информация</p>
          <p className="mb-3">По вопросам касательно политики конфиденциальности вы можете связаться с нами по адресу ilmiyizlanuvchi@gmail.com.</p>
        </>
      )
    }
  };

  const journalLinks = [
    { name: t("navbar.j1"), url: "https://journal.uznauka.uz/index.php/sas" },
    { name: t("navbar.j2"), url: "https://journal.uznauka.uz/index.php/medicine" },
    { name: t("navbar.j3"), url: "https://journal.uznauka.uz/index.php/exactscience" },
    { name: t("navbar.j4"), url: "https://journal.uznauka.uz/index.php/lawpolicy" },
    { name: t("navbar.j5"), url: "https://journal.uznauka.uz/index.php/socialscience" },
  ];

  return (
    <footer 
      className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-8 px-4 sm:px-6 lg:px-8"
      id="contact"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 pb-12 border-b border-slate-900">
        
        {/* Column 1: Branding & Description */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center gap-3">
            <img src={footerImg} className="h-10 md:h-12 w-auto object-contain brightness-110" alt="UzNauka Logo" />
            <span className="text-white font-serif-editorial text-xl font-bold tracking-wider">
              Uz<span className="text-rose-600">Nauka</span>
            </span>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed">
            {t("foot.fot1")}
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#" className="w-9 h-9 bg-slate-900 hover:bg-rose-600 hover:text-white rounded-lg flex items-center justify-center text-slate-400 transition-all duration-300">
              <FaTelegram size={18} />
            </a>
            <a href="#" className="w-9 h-9 bg-slate-900 hover:bg-rose-600 hover:text-white rounded-lg flex items-center justify-center text-slate-400 transition-all duration-300">
              <FaLinkedin size={18} />
            </a>
            <a href="#" className="w-9 h-9 bg-slate-900 hover:bg-rose-600 hover:text-white rounded-lg flex items-center justify-center text-slate-400 transition-all duration-300">
              <FaFacebook size={18} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links (Journals) */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-white font-serif-editorial text-base font-bold tracking-wide uppercase">
            {t("foot.jurnallar")}
          </h4>
          <ul className="space-y-2 text-sm">
            {journalLinks.map((j, i) => (
              <li key={i}>
                <a 
                  href={j.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rose-500 transition-colors duration-200 block truncate"
                >
                  {j.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact details */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-white font-serif-editorial text-base font-bold tracking-wide uppercase">
            {t("foot.adres")}
          </h4>
          <ul className="space-y-4 text-xs md:text-sm">
            <li className="flex gap-3 items-start">
              <FaMapMarkerAlt className="text-rose-600 mt-1 flex-shrink-0" />
              <span>{t("foot.adr")}</span>
            </li>
            <li className="flex gap-3 items-center">
              <FaPhoneAlt className="text-rose-600 flex-shrink-0" />
              <a href="tel:+998935271622" className="hover:text-rose-500 transition-colors">
                (+998) 93 527 16 22
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <FaEnvelope className="text-rose-600 flex-shrink-0" />
              <a href="mailto:ilmiyizlanuvchi@gmail.com" className="hover:text-rose-500 transition-colors truncate">
                ilmiyizlanuvchi@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Maps iframe */}
        <div className="lg:col-span-3">
          <div className="rounded-2xl overflow-hidden border border-slate-900 shadow-lg h-44 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.3987350229013!2d69.2463326755305!3d41.321942100052944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b75b8b45fe1%3A0xf388d40ca1e8aec8!2z0L_RgNC-0YHQv9C10LrRgiDQndCw0LLQvtC4IDMwLCAxMDAxMjksINCi0LDRiNC60LXQvdGCLCBUYXNoa2VudCwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1732617357204!5m2!1sru!2s"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-slate-600 gap-4">
        <p>
          &copy; {new Date().getFullYear()} {t("foot.prava")}
        </p>
        <div className="flex gap-6">
          <button onClick={() => setActiveModal('terms')} className="hover:text-slate-400 transition-colors focus:outline-none">{t("foot.terms")}</button>
          <button onClick={() => setActiveModal('privacy')} className="hover:text-slate-400 transition-colors focus:outline-none">{t("foot.privacy")}</button>
        </div>
      </div>

      {/* Modal Popup for Terms & Privacy */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden transform scale-100 transition-all duration-300">
            {/* Header */}
            <div className="px-6 py-5 border-b border-slate-800 flex justify-between items-center bg-slate-950/40">
              <h3 className="text-white font-serif-editorial text-lg font-bold tracking-wide">
                {modalData[activeModal].title}
              </h3>
              <button 
                onClick={() => setActiveModal(null)}
                className="text-slate-400 hover:text-white transition-colors duration-200 text-2xl font-bold focus:outline-none"
              >
                &times;
              </button>
            </div>
            
            {/* Body content */}
            <div className="p-6 overflow-y-auto text-sm text-slate-400 space-y-2 leading-relaxed max-h-[60vh] text-left">
              {modalData[activeModal].content}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-slate-800 flex justify-end bg-slate-950/40">
              <button 
                onClick={() => setActiveModal(null)}
                className="bg-rose-600 hover:bg-rose-700 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition-colors duration-200 shadow-md active:scale-95"
              >
                {currentLang === "uz" ? "Yopish" : currentLang === "en" ? "Close" : "Закрыть"}
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;

