import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import logo from "../../assets/logo_uz.png";
import { FaChevronDown } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import i18n from "../../i18";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const translateUz = () => {
    i18n.changeLanguage("uz");
  };
  const translateEn = () => {
    i18n.changeLanguage("en");
  };
  const translateRu = () => {
    i18n.changeLanguage("ru");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (open) {
        setOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  return (
    <>
      <div className="bg-[#086AD8] md:hidden fixed z-50 w-full top-0">
        <div className="flex justify-between px-5 py-3">
          <button onClick={() => setOpen(!open)}>
            <GiHamburgerMenu size={25} color="white" />
          </button>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="flex items-center w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900 ">
                <IoGlobeOutline size={25} color="white" />
                <FaChevronDown
                  aria-hidden="true"
                  className="-mr-1 size-2 text-white"
                />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute top-7 right-0 z-10 mt-2 w-[100px] origin-top-right rounded-md bg-white shadow-xl ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <button
                    className="px-4 py-2 w-full text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                    onClick={translateUz}
                  >
                    O'zbekcha
                  </button>
                </MenuItem>
                <MenuItem>
                  <button
                    className="px-4 w-full py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                    onClick={translateEn}
                  >
                    {" "}
                    English{" "}
                  </button>
                </MenuItem>
                <MenuItem>
                  <button
                    className="px-4 w-full py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                    onClick={translateRu}
                  >
                    {" "}
                    Русский
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>
        <ul
          className={`h-screen ${
            open ? "flex opacity-100" : "hidden opacity-0"
          } transition-all duration-500 flex-col gap-10 px-10 py-10`}
        >
          <li className="text-white text-2xl">
            <a href="/" className="">
              Главная
            </a>
          </li>
          <li className="text-white text-2xl">
            <a href="#about" className="block">
              О нас
            </a>
          </li>
          <li>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="text-xl flex items-center font-medium w-full text-white relative">
                  <span className="text-2xl">{t("navbar.Jurnal")}</span>
                  <FaChevronDown
                    size={12}
                    aria-hidden="true"
                    className="text-white absolute right-[-18px] top-[13px]"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute top-7 left-0 z-10 mt-2 w-[270px] origin-top-right rounded-md bg-white shadow-xl ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">
                  <MenuItem className="my-2 mx-2 relative">
                    <a
                      href="https://journals.uznauka.uz/index.php/ojs/index"
                      className="block px-4 py-2 text-[#ababab] data-[focus]:bg-gray-100 data-[focus]:text-[#086ad8] data-[focus]:outline-none text-md after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#086ad8] after:transition-all after:duration-1000 hover:after:w-full"
                    >
                      {t("navbar.j1")}
                    </a>
                  </MenuItem>
                  <MenuItem className="my-2 mx-2 relative">
                    <a
                      href="#"
                      className="block px-4 py-2 text-[#ababab] data-[focus]:bg-gray-100 data-[focus]:text-[#086ad8] data-[focus]:outline-none text-md after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#086ad8] after:transition-all after:duration-1000 hover:after:w-full"
                    >
                      {t("navbar.j2")}
                    </a>
                  </MenuItem>
                  <MenuItem className="my-2 px-4 mx-2 relative">
                    <a
                      href="#"
                      className="block py-2 text-[#ababab] data-[focus]:bg-gray-100 data-[focus]:text-[#086ad8] data-[focus]:outline-none text-md  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#086ad8] after:transition-all after:duration-1000 hover:after:w-full"
                    >
                      Социальные науки и образование
                    </a>
                  </MenuItem>
                  <MenuItem className="my-2 px-4 mx-2 relative">
                    <a
                      href="#"
                      className="block py-2 text-[#ababab] data-[focus]:bg-gray-100 data-[focus]:text-[#086ad8] data-[focus]:outline-none text-md  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#086ad8] after:transition-all after:duration-1000 hover:after:w-full"
                    >
                      Научные тенденции в медицине
                    </a>
                  </MenuItem>
                  <MenuItem className="my-2 px-4 mx-2 relative">
                    <a
                      href="#"
                      className="block py-2 text-[#ababab] data-[focus]:bg-gray-100 data-[focus]:text-[#086ad8] data-[focus]:outline-none text-md  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#086ad8] after:transition-all after:duration-1000 hover:after:w-full"
                    >
                      Инновации в точных науках
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          </li>
          <li>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="text-xl flex items-center gap-x-2 font-medium w-full text-white relative">
                  <span className="text-2xl">{t("navbar.Konf")}</span>
                  <FaChevronDown
                    size={12}
                    aria-hidden="true"
                    className="text-white absolute right-[-20px] top-[12px]"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="h-[50vh] overflow-scroll absolute top-7 left-0 z-10 mt-2 w-[270px] origin-top-right rounded-md bg-white shadow-xl ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">
                  <MenuItem className="my-2 mx-2 relative">
                    <a
                      href="https://conf.uznauka.uz/index.php/zttf/issue/view/6"
                      className="block px-4 py-2 text-[#ababab] data-[focus]:bg-gray-100 data-[focus]:text-[#086ad8] data-[focus]:outline-none text-mdafter:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#086ad8] after:transition-all after:duration-1000 hover:after:w-full"
                    >
                      НАУЧНО-ИННОВАЦИОННЫЕ ИССЛЕДОВАНИЯ В СОВРЕМЕННОЙ МЕДИЦИНЕ И
                      ЕСТЕСТВЕННЫХ НАУКАХ
                    </a>
                  </MenuItem>
                  <MenuItem className="my-2 mx-2 relative">
                    <a
                      href="#"
                      className="block px-4 py-2 text-[#ababab] data-[focus]:bg-gray-100 data-[focus]:text-[#086ad8] data-[focus]:outline-none text-md   after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#086ad8] after:transition-all after:duration-1000 hover:after:w-full"
                    >
                      ОБСУЖДЕНИЕ РЕЗУЛЬТАТОВ СОВРЕМЕННОЙ НАУКИ И ИННОВАЦИОННЫХ
                      ИССЛЕДОВАНИЙ
                    </a>
                  </MenuItem>
                  <MenuItem className="my-2 px-4 mx-2 relative">
                    <a
                      href="#"
                      className="block py-2 text-[#ababab] data-[focus]:bg-gray-100 data-[focus]:text-[#086ad8] data-[focus]:outline-none text-md after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#086ad8] after:transition-all after:duration-1000 hover:after:w-full"
                    >
                      СОВРЕМЕННАЯ ПСИХОЛОГИЯ И ПЕДАГОГИКА: ПРОБЛЕМЫ И РЕШЕНИЯ
                    </a>
                  </MenuItem>
                  <MenuItem className="my-2 px-4 mx-2 relative">
                    <a
                      href="#"
                      className="block py-2 text-[#ababab] data-[focus]:bg-gray-100 data-[focus]:text-[#086ad8] data-[focus]:outline-none text-md after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#086ad8] after:transition-all after:duration-1000 hover:after:w-full"
                    >
                      АКТУАЛЬНЫЕ ПРОБЛЕМЫ ИСТОРИИ, ПОЛИТИКИ, ОБЩЕСТВА И
                      ФИЛОСОФИИ
                    </a>
                  </MenuItem>
                  <MenuItem className="my-2 px-4 mx-2 relative">
                    <a
                      href="#"
                      className="block py-2 text-[#ababab] data-[focus]:bg-gray-100 data-[focus]:text-[#086ad8] data-[focus]:outline-none text-md after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#086ad8] after:transition-all after:duration-1000 hover:after:w-full"
                    >
                      ФИЗИКА, ТЕХНИКА И МАТЕМАТИКА: МЕЖДИСЦИПЛИНАРНЫЕ НАУЧНЫЕ
                      ДИСКУССИИ
                    </a>
                  </MenuItem>
                  <MenuItem className="my-2 px-4 mx-2 relative">
                    <a
                      href="#"
                      className="block py-2 text-[#ababab] data-[focus]:bg-gray-100 data-[focus]:text-[#086ad8] data-[focus]:outline-none text-md after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#086ad8] after:transition-all after:duration-1000 hover:after:w-full"
                    >
                      НАУЧНО-ПРАКТИЧЕСКИЕ ПРОБЛЕМЫ СОВРЕМЕННОГО УПРАВЛЕНИЯ И
                      ЭКОНОМИКИ
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          </li>
          <li className="text-2xl text-white">
            <a href="#contact">Контакт</a>
          </li>
        </ul>
      </div>
      <div className="bg-[#086AD8] z-40 sticky top-0 w-full xxs:hidden  md:flex justify-between items-center">
        <div>
          <img src={logo} className="md:w-[150px] w-[100px] pl-5 py-2" alt="" />
        </div>
        <ul className="flex gap-10 lg:gap-20 text-white items-center">
          <li className="text-lg lg:text-2xl font-medium">
            <a href="/">{t("navbar.Asosiy")}</a>
          </li>
          <li className="text-lg lg:text-2xl font-medium">
            <a href="#about">{t("navbar.Haqida")}</a>
          </li>
          <li>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="text-xl flex items-center font-medium w-full text-white relative">
                  <span className="text-lg lg:text-2xl">
                    {t("navbar.Jurnal")}
                  </span>
                  <FaChevronDown
                    size={15}
                    aria-hidden="true"
                    className="text-white absolute right-[-20px] top-[9px]"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute top-7 left-0 z-10 mt-2 w-[350px] origin-top-right rounded-md bg-white shadow-xl ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">
                  <MenuItem className="my-2 mx-2 relative">
                    <a
                      href="https://journals.uznauka.uz/index.php/ojs/index"
                      className="block px-4 py-2 text-[#ababab] data-[focus]:bg-gray-100 data-[focus]:text-[#086ad8] data-[focus]:outline-none text-xl after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#086ad8] after:transition-all after:duration-1000 hover:after:w-full"
                    >
                      {t("navbar.j1")}
                    </a>
                  </MenuItem>
                  <MenuItem className="my-2 mx-2 relative">
                    <a
                      href="#"
                      className="block px-4 py-2 text-[#ababab] data-[focus]:bg-gray-100 data-[focus]:text-[#086ad8] data-[focus]:outline-none text-xl    after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#086ad8] after:transition-all after:duration-1000 hover:after:w-full"
                    >
                      {t("navbar.j2")}
                    </a>
                  </MenuItem>
                  <MenuItem className="my-2 px-4 mx-2 relative">
                    <a
                      href="#"
                      className="block py-2 text-[#ababab] data-[focus]:bg-gray-100 data-[focus]:text-[#086ad8] data-[focus]:outline-none text-xl  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#086ad8] after:transition-all after:duration-1000 hover:after:w-full"
                    >
                      {t("navbar.j3")}
                    </a>
                  </MenuItem>
                  <MenuItem className="my-2 px-4 mx-2 relative">
                    <a
                      href="#"
                      className="block py-2 text-[#ababab] data-[focus]:bg-gray-100 data-[focus]:text-[#086ad8] data-[focus]:outline-none text-xl  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#086ad8] after:transition-all after:duration-1000 hover:after:w-full"
                    >
                      {t("navbar.j4")}
                    </a>
                  </MenuItem>
                  <MenuItem className="my-2 px-4 mx-2 relative">
                    <a
                      href="#"
                      className="block py-2 text-[#ababab] data-[focus]:bg-gray-100 data-[focus]:text-[#086ad8] data-[focus]:outline-none text-xl  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#086ad8] after:transition-all after:duration-1000 hover:after:w-full"
                    >
                      {t("navbar.j5")}
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          </li>
          <li>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="text-xl flex items-center gap-x-2 font-medium w-full text-white relative">
                  <span className="text-lg lg:text-2xl">
                    {t("navbar.Konf")}
                  </span>
                  <FaChevronDown
                    size={15}
                    aria-hidden="true"
                    className="text-white absolute right-[-20px] top-[9px]"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute top-7 left-0 z-10 mt-2 w-[600px] origin-top-right rounded-md bg-white shadow-xl ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">
                  <MenuItem className="my-2 mx-2 relative">
                    <a
                      href="https://conf.uznauka.uz/index.php/zttf/issue/view/6"
                      className="block px-4 py-2 text-[#ababab] data-[focus]:bg-gray-100 data-[focus]:text-[#086ad8] data-[focus]:outline-none text-xl after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#086ad8] after:transition-all after:duration-1000 hover:after:w-full"
                    >
                      НАУЧНО-ИННОВАЦИОННЫЕ ИССЛЕДОВАНИЯ В СОВРЕМЕННОЙ МЕДИЦИНЕ И
                      ЕСТЕСТВЕННЫХ НАУКАХ
                    </a>
                  </MenuItem>
                  <MenuItem className="my-2 mx-2 relative">
                    <a
                      href="#"
                      className="block px-4 py-2 text-[#ababab] data-[focus]:bg-gray-100 data-[focus]:text-[#086ad8] data-[focus]:outline-none text-xl    after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#086ad8] after:transition-all after:duration-1000 hover:after:w-full"
                    >
                      ОБСУЖДЕНИЕ РЕЗУЛЬТАТОВ СОВРЕМЕННОЙ НАУКИ И ИННОВАЦИОННЫХ
                      ИССЛЕДОВАНИЙ
                    </a>
                  </MenuItem>
                  <MenuItem className="my-2 px-4 mx-2 relative">
                    <a
                      href="#"
                      className="block py-2 text-[#ababab] data-[focus]:bg-gray-100 data-[focus]:text-[#086ad8] data-[focus]:outline-none text-xl  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#086ad8] after:transition-all after:duration-1000 hover:after:w-full"
                    >
                      СОВРЕМЕННАЯ ПСИХОЛОГИЯ И ПЕДАГОГИКА: ПРОБЛЕМЫ И РЕШЕНИЯ
                    </a>
                  </MenuItem>
                  <MenuItem className="my-2 px-4 mx-2 relative">
                    <a
                      href="#"
                      className="block py-2 text-[#ababab] data-[focus]:bg-gray-100 data-[focus]:text-[#086ad8] data-[focus]:outline-none text-xl  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#086ad8] after:transition-all after:duration-1000 hover:after:w-full"
                    >
                      АКТУАЛЬНЫЕ ПРОБЛЕМЫ ИСТОРИИ, ПОЛИТИКИ, ОБЩЕСТВА И
                      ФИЛОСОФИИ
                    </a>
                  </MenuItem>
                  <MenuItem className="my-2 px-4 mx-2 relative">
                    <a
                      href="#"
                      className="block py-2 text-[#ababab] data-[focus]:bg-gray-100 data-[focus]:text-[#086ad8] data-[focus]:outline-none text-xl  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#086ad8] after:transition-all after:duration-1000 hover:after:w-full"
                    >
                      ФИЗИКА, ТЕХНИКА И МАТЕМАТИКА: МЕЖДИСЦИПЛИНАРНЫЕ НАУЧНЫЕ
                      ДИСКУССИИ
                    </a>
                  </MenuItem>
                  <MenuItem className="my-2 px-4 mx-2 relative">
                    <a
                      href="#"
                      className="block py-2 text-[#ababab] data-[focus]:bg-gray-100 data-[focus]:text-[#086ad8] data-[focus]:outline-none text-xl  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#086ad8] after:transition-all after:duration-1000 hover:after:w-full"
                    >
                      НАУЧНО-ПРАКТИЧЕСКИЕ ПРОБЛЕМЫ СОВРЕМЕННОГО УПРАВЛЕНИЯ И
                      ЭКОНОМИКИ
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          </li>
          <li className="text-lg lg:text-2xl font-medium">
            <a href="#contact">{t("navbar.Aloqa")}</a>
          </li>
        </ul>
        <div className="pr-6">
          {/* <img src={til} alt="" /> */}
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="flex items-center w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900 ">
                <IoGlobeOutline size={25} color="white" />
                <FaChevronDown
                  aria-hidden="true"
                  className="-mr-1 size-2 text-white"
                />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute top-7 right-0 z-10 mt-2 w-[100px] origin-top-right rounded-md bg-white shadow-xl ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <button
                    onClick={translateUz}
                    className="px-4 w-full py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    O'zbekcha
                  </button>
                </MenuItem>
                <MenuItem>
                  <button
                    onClick={translateEn}
                    className=" px-4 py-2 w-full text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    English
                  </button>
                </MenuItem>
                <MenuItem>
                  <button
                    onClick={translateRu}
                    className="block px-4 w-full py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    Русский
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </>
  );
}
