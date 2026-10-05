import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import logo from "../../assets/logo_uz.png";
import { FaChevronDown, FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import i18n from "../../i18";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const journals = [
    { name: t("navbar.j1"), url: "https://journal.uznauka.uz/index.php/sas" },
    { name: t("navbar.j2"), url: "https://journal.uznauka.uz/index.php/lawpolicy" },
    { name: t("navbar.j3"), url: "https://journal.uznauka.uz/index.php/socialscience" },
    { name: t("navbar.j4"), url: "https://journal.uznauka.uz/index.php/medicine" },
    { name: t("navbar.j5"), url: "https://journal.uznauka.uz/index.php/exactscience" },
  ];

  const conferences = [
    { name: t("navbar.conf1"), url: "https://conference.uznauka.uz/index.php/ztfi/index" },
    { name: t("navbar.conf2"), url: "https://conference.uznauka.uz/index.php/zif/index" },
    { name: t("navbar.conf3"), url: "https://conference.uznauka.uz/index.php/zham/index" },
    { name: t("navbar.conf4"), url: "https://conference.uznauka.uz/index.php/zpp/index" },
    { name: t("navbar.conf5"), url: "https://conference.uznauka.uz/index.php/tsj/index" },
    { name: t("navbar.conf6"), url: "https://conference.uznauka.uz/index.php/ftm/index" },
    { name: t("navbar.conf7"), url: "https://conference.uznauka.uz/index.php/zmv/index" },
    { name: t("navbar.conf8"), url: "https://conference.uznauka.uz/index.php/ffm/index" },
  ];

  const langNames = {
    uz: "O'zbek",
    en: "English",
    ru: "Русский"
  };

  const currentLang = i18n.language || "ru";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "glass-navbar py-2 shadow-lg" 
          : "bg-slate-900/90 md:bg-slate-900/60 backdrop-blur-sm py-4 border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center gap-3">
              <img src={logo} className="h-10 md:h-12 w-auto object-contain brightness-110" alt="UzNauka Logo" />
              <span className="hidden lg:block text-white font-serif-editorial text-xl font-bold tracking-wider">
                Uz<span className="text-rose-600">Nauka</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-1 lg:space-x-4 items-center">
            <a 
              href="/" 
              className="text-slate-200 hover:text-rose-500 px-3 py-2 text-sm font-semibold tracking-wide transition-colors duration-200"
            >
              {t("navbar.Asosiy")}
            </a>
            <a 
              href="#about" 
              className="text-slate-200 hover:text-rose-500 px-3 py-2 text-sm font-semibold tracking-wide transition-colors duration-200"
            >
              {t("navbar.Haqida")}
            </a>

            {/* Journals Dropdown */}
            <Menu as="div" className="relative">
              <MenuButton className="flex items-center gap-1 text-slate-200 hover:text-rose-500 px-3 py-2 text-sm font-semibold tracking-wide transition-colors duration-200">
                {t("navbar.Jurnal")} <FaChevronDown size={10} className="mt-0.5 opacity-80" />
              </MenuButton>
              <MenuItems 
                transition
                className="absolute left-0 mt-2 w-80 origin-top-left rounded-lg bg-slate-900/95 border border-slate-800 p-2 text-slate-200 shadow-2xl backdrop-blur-md transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-150 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in"
              >
                {journals.map((j, i) => (
                  <MenuItem key={i}>
                    <a 
                      href={j.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-slate-300 hover:text-rose-500 hover:bg-slate-800/50 rounded-md transition duration-200 border-l-2 border-transparent hover:border-rose-500"
                    >
                      {j.name}
                    </a>
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>

            {/* Conferences Dropdown */}
            <Menu as="div" className="relative">
              <MenuButton className="flex items-center gap-1 text-slate-200 hover:text-rose-500 px-3 py-2 text-sm font-semibold tracking-wide transition-colors duration-200">
                {t("navbar.Konf")} <FaChevronDown size={10} className="mt-0.5 opacity-80" />
              </MenuButton>
              <MenuItems 
                transition
                className="absolute left-0 mt-2 w-96 max-h-[70vh] overflow-y-auto origin-top-left rounded-lg bg-slate-900/95 border border-slate-800 p-2 text-slate-200 shadow-2xl backdrop-blur-md transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-150 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in"
              >
                {conferences.map((c, i) => (
                  <MenuItem key={i}>
                    <a 
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-slate-300 hover:text-rose-500 hover:bg-slate-800/50 rounded-md transition duration-200 border-l-2 border-transparent hover:border-rose-500 leading-snug"
                    >
                      {c.name}
                    </a>
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>

            <a 
              href="#contact" 
              className="text-slate-200 hover:text-rose-500 px-3 py-2 text-sm font-semibold tracking-wide transition-colors duration-200"
            >
              {t("navbar.Aloqa")}
            </a>
          </nav>

          {/* Right Side Buttons: Language + Submit CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <Menu as="div" className="relative">
              <MenuButton className="flex items-center gap-2 text-slate-200 hover:text-rose-500 px-3 py-1.5 rounded-full border border-slate-700 hover:border-rose-500 text-sm font-semibold tracking-wide transition-all duration-200 bg-slate-800/30">
                <FaGlobe className="opacity-80" />
                <span>{langNames[currentLang]}</span>
                <FaChevronDown size={8} className="opacity-80" />
              </MenuButton>
              <MenuItems 
                transition
                className="absolute right-0 mt-2 w-32 origin-top-right rounded-lg bg-slate-900/95 border border-slate-800 p-1 text-slate-200 shadow-2xl backdrop-blur-md transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-150 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in"
              >
                {Object.keys(langNames).map((lang) => (
                  <MenuItem key={lang}>
                    <button
                      onClick={() => changeLanguage(lang)}
                      className={`w-full text-left px-3 py-2 text-sm rounded-md transition duration-200 ${
                        currentLang === lang 
                          ? "bg-rose-600 text-white font-bold" 
                          : "text-slate-300 hover:text-rose-500 hover:bg-slate-800/50"
                      }`}
                    >
                      {langNames[lang]}
                    </button>
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>

            {/* Premium CTA Button */}
            <a 
              href="https://journal.uznauka.uz/index.php/sas" 
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg hover:shadow-rose-600/10 hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0"
            >
              {t("home.but1")}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-3">
            {/* Language Globe Icon Button */}
            <Menu as="div" className="relative">
              <MenuButton className="p-2 rounded-full border border-slate-700 text-slate-200 hover:text-rose-500 transition-colors bg-slate-800/30">
                <FaGlobe />
              </MenuButton>
              <MenuItems 
                transition
                className="absolute right-0 mt-2 w-32 origin-top-right rounded-lg bg-slate-900/95 border border-slate-800 p-1 text-slate-200 shadow-2xl backdrop-blur-md transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-150 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in"
              >
                {Object.keys(langNames).map((lang) => (
                  <MenuItem key={lang}>
                    <button
                      onClick={() => changeLanguage(lang)}
                      className={`w-full text-left px-3 py-2 text-sm rounded-md transition duration-200 ${
                        currentLang === lang 
                          ? "bg-rose-600 text-white font-bold" 
                          : "text-slate-300 hover:text-rose-500 hover:bg-slate-800/50"
                      }`}
                    >
                      {langNames[lang]}
                    </button>
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>

            {/* Menu Trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-200 hover:text-white focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 h-screen overflow-y-auto px-4 pt-4 pb-20 space-y-3">
          <a
            href="/"
            onClick={() => setIsOpen(false)}
            className="block text-slate-200 hover:text-rose-500 px-3 py-3 rounded-md text-base font-semibold border-b border-slate-800"
          >
            {t("navbar.Asosiy")}
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block text-slate-200 hover:text-rose-500 px-3 py-3 rounded-md text-base font-semibold border-b border-slate-800"
          >
            {t("navbar.Haqida")}
          </a>

          {/* Journals Sublist */}
          <div className="px-3 py-2">
            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">{t("navbar.Jurnal")}</span>
            <div className="mt-2 pl-3 space-y-2 border-l border-slate-700">
              {journals.map((j, i) => (
                <a
                  key={i}
                  href={j.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-slate-300 hover:text-rose-500 py-1.5 text-sm"
                >
                  {j.name}
                </a>
              ))}
            </div>
          </div>

          {/* Conferences Sublist */}
          <div className="px-3 py-2">
            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">{t("navbar.Konf")}</span>
            <div className="mt-2 pl-3 space-y-2 border-l border-slate-700 max-h-60 overflow-y-auto">
              {conferences.map((c, i) => (
                <a
                  key={i}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-slate-300 hover:text-rose-500 py-1.5 text-xs leading-normal"
                >
                  {c.name}
                </a>
              ))}
            </div>
          </div>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-slate-200 hover:text-rose-500 px-3 py-3 rounded-md text-base font-semibold border-b border-slate-800"
          >
            {t("navbar.Aloqa")}
          </a>

          {/* Mobile CTA */}
          <div className="pt-6 px-3">
            <a
              href="https://journal.uznauka.uz/index.php/sas"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-gradient-to-r from-rose-600 to-rose-700 text-white py-3 rounded-lg font-bold shadow-lg"
            >
              {t("home.but1")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

