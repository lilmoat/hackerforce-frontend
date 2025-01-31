import { useRef, useState } from "react";
import Icon from "./Icon";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const elem = useRef<HTMLDivElement>(null as unknown as HTMLDivElement);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  useOnClickOutside(elem, () => setDropdownOpen(false));
  return (
    <header
      className="bg-transparent text-white py-4 px-[50px] flex justify-between items-center w-full font-orbitron font-medium z-50"
      ref={elem}
    >
      <div className="flex items-center space-x-1">
        <div className="w-8 h-8 relative">
          <Icon name="Logo" size={32} className="" />
        </div>
        <span className="text-xl font-bold">HACKERFORCE</span>
      </div>

      <nav className="hidden md:flex space-x-7">
        <a href="#" className="hover:text-red duration-200">
          Home
        </a>
        <a href="#" className="hover:text-red duration-200">
          About us
        </a>
        <div className="relative">
          <button
            className="flex items-center space-x-1 hover:text-red duration-200"
            onClick={() => setDropdownOpen(true)}
          >
            <span className="flex items-center justify-center gap-1">
              Learn <IoIosArrowDown />
            </span>
          </button>
          {isDropdownOpen && (
            <div className="w-[166px] h-[189.99px] absolute z-50">
              <div className="z-2 w-[164px] h-[178px] top-[10.75px] bg-dark absolute rounded-lg shadow-[0px_4px_32px_0px_rgba(0,0,0,0.70)] border border-[#2f3132] flex-col justify-center items-center inline-flex">
                <div className="self-stretch grow shrink cursor-pointer basis-0 px-3 py-2 border-b border-[#2f3132] justify-start items-center gap-2.5 inline-flex">
                  <Icon
                    name="PracticeIcon"
                    size={16}
                    className="hover:text-red duration-200 text-white"
                  />{" "}
                  <div className="text-white text-xs font-medium font-['Orbitron'] leading-tight">
                    Practice
                  </div>
                </div>
                <div className="self-stretch grow shrink cursor-pointer basis-0 px-3 py-2 border-b border-[#2f3132] justify-start items-center gap-2.5 inline-flex">
                  <Icon
                    name="SectionsIcon"
                    size={16}
                    className="hover:text-red duration-200 text-white"
                  />{" "}
                  <div className="text-white text-xs font-medium font-['Orbitron'] leading-tight">
                    Sections
                  </div>
                </div>
                <div className="self-stretch grow shrink cursor-pointer basis-0 px-3 py-2 border-b border-[#2f3132] justify-start items-center gap-2.5 inline-flex">
                  <Icon
                    name="CatalogIcon"
                    size={16}
                    className="hover:text-red duration-200 text-white"
                  />{" "}
                  <div className="text-white text-xs font-medium font-['Orbitron'] leading-tight">
                    Catalog
                  </div>
                </div>
                <div className="self-stretch grow shrink cursor-pointer basis-0 px-3 py-2 border-b border-[#2f3132] justify-start items-center gap-2.5 inline-flex">
                  <Icon
                    name="ChambersIcon"
                    size={16}
                    className="hover:text-red duration-200 text-white"
                  />{" "}
                  <div className="text-white text-xs font-medium font-['Orbitron'] leading-tight">
                    Chambers
                  </div>
                </div>
                <div className="self-stretch grow shrink cursor-pointer basis-0 px-3 py-2 justify-start items-center gap-2.5 inline-flex">
                  <Icon
                    name="ColosseumsIcon"
                    size={16}
                    className="hover:text-red duration-200 text-white"
                  />{" "}
                  <div className="text-white text-xs font-medium font-['Orbitron'] leading-tight">
                    Colosseums
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <a href="#" className="hover:text-red duration-200">
          Shop
        </a>
        <a href="#" className="hover:text-red duration-200">
          Contact us
        </a>
      </nav>

      <div className="h-9 px-6 py-2 bg-red hover:bg-bright-red cursor-pointer duration-200 rounded-lg justify-center items-center gap-1 inline-flex">
        <div className="text-white text-sm font-medium font-['Orbitron'] leading-tight">
          Login/Register
        </div>
      </div>
    </header>
  );
};

export default Header;
