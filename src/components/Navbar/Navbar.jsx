import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import logo from "../../assets/logo_uz.png";
import til from "../../assets/svgs/til.svg";
import { FaChevronDown } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="bg-[#086AD8] z-40 sticky top-0 w-full flex justify-between items-center">
      <div>
        <img src={logo} className="w-[150px] pl-5 py-2" alt="" />
      </div>
      <ul className="flex gap-24 text-white items-center">
        <li className="text-2xl font-medium">
          <a href="/">Главная</a>
        </li>
        <li className="text-2xl font-medium">
          <a href="#about">О нас</a>
        </li>
        <li>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="text-xl flex items-center font-medium w-full text-white relative">
                <span className="text-2xl">Журнал</span>
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
                    Наука и общество
                  </a>
                </MenuItem>
                <MenuItem className="my-2 mx-2 relative">
                  <a
                    href="#"
                    className="block px-4 py-2 text-[#ababab] data-[focus]:bg-gray-100 data-[focus]:text-[#086ad8] data-[focus]:outline-none text-xl    after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#086ad8] after:transition-all after:duration-1000 hover:after:w-full"
                  >
                    Право, политика и общество
                  </a>
                </MenuItem>
                <MenuItem className="my-2 px-4 mx-2 relative">
                  <a
                    href="#"
                    className="block py-2 text-[#ababab] data-[focus]:bg-gray-100 data-[focus]:text-[#086ad8] data-[focus]:outline-none text-xl  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#086ad8] after:transition-all after:duration-1000 hover:after:w-full"
                  >
                    Социальные науки и образование
                  </a>
                </MenuItem>
                <MenuItem className="my-2 px-4 mx-2 relative">
                  <a
                    href="#"
                    className="block py-2 text-[#ababab] data-[focus]:bg-gray-100 data-[focus]:text-[#086ad8] data-[focus]:outline-none text-xl  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#086ad8] after:transition-all after:duration-1000 hover:after:w-full"
                  >
                    Научные тенденции в медицине
                  </a>
                </MenuItem>
                <MenuItem className="my-2 px-4 mx-2 relative">
                  <a
                    href="#"
                    className="block py-2 text-[#ababab] data-[focus]:bg-gray-100 data-[focus]:text-[#086ad8] data-[focus]:outline-none text-xl  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#086ad8] after:transition-all after:duration-1000 hover:after:w-full"
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
                <span className="text-2xl">Конференция</span>
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
                    АКТУАЛЬНЫЕ ПРОБЛЕМЫ ИСТОРИИ, ПОЛИТИКИ, ОБЩЕСТВА И ФИЛОСОФИИ
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
        <li className="text-2xl font-medium">
          <a href="#contact">Контакт</a>
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
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                  O'zbekcha
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                  English
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                  Русский
                </a>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
}
