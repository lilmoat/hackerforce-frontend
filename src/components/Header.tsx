import { useRef, useState, useEffect } from "react";
import Icon from "./Icon";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const Header = () => {
  const elem = useRef<HTMLDivElement>(null as unknown as HTMLDivElement);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useOnClickOutside(elem, () => setDropdownOpen(false));
  return (
    <>
      {isClient && (
        <header
          className="fixed backdrop-blur-sm text-white py-4 px-5 flex justify-between items-center w-full font-orbitron font-medium z-50"
          ref={elem}
        >
          <div className="flex items-center space-x-1">
            <div className="w-8 h-8 relative">
              <Icon name="Logo" size={32} className="" />
            </div>
            <span className="md:text-xl text-lg font-bold">HACKERFORCE</span>
          </div>

          <nav className="hidden lg:flex space-x-7">
            <Link href="/shop" className="hover:text-red duration-200">
              Home
            </Link>
            <Link href="/about" className="hover:text-red duration-200">
              About us
            </Link>
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
                    <div className="blur-sm cursor-not-allowed self-stretch grow shrink basis-0 px-3 py-2 border-b border-[#2f3132] justify-start items-center gap-2.5 inline-flex">
                      <Icon
                        name="SectionsIcon"
                        size={16}
                        className="hover:text-red duration-200 text-white"
                      />{" "}
                      <div className="text-white text-xs font-medium font-['Orbitron'] leading-tight">
                        Sections
                      </div>
                    </div>
                    <div className="blur-sm cursor-not-allowed self-stretch grow shrink basis-0 px-3 py-2 border-b border-[#2f3132] justify-start items-center gap-2.5 inline-flex">
                      <Icon
                        name="CatalogIcon"
                        size={16}
                        className="hover:text-red duration-200 text-white"
                      />{" "}
                      <div className="text-white text-xs font-medium font-['Orbitron'] leading-tight">
                        Catalog
                      </div>
                    </div>
                    <div className="blur-sm cursor-not-allowed self-stretch grow shrink basis-0 px-3 py-2 border-b border-[#2f3132] justify-start items-center gap-2.5 inline-flex">
                      <Icon
                        name="ChambersIcon"
                        size={16}
                        className="hover:text-red duration-200 text-white"
                      />{" "}
                      <div className="text-white text-xs font-medium font-['Orbitron'] leading-tight">
                        Chambers
                      </div>
                    </div>
                    <div className="blur-sm cursor-not-allowed self-stretch grow shrink basis-0 px-3 py-2 justify-start items-center gap-2.5 inline-flex">
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
            <Link href="/shop" className="hover:text-red duration-200">
              Shop
            </Link>
            <Link href="/contact" className="hover:text-red duration-200">
              Contact us
            </Link>
          </nav>

          <div className="lg:flex hidden h-9 px-6 py-2 bg-red hover:bg-[#7a1b1f] cursor-pointer duration-200 rounded-lg justify-center items-center gap-1">
            <div className="text-white text-sm font-medium font-['Orbitron'] leading-tight">
              Login/Register
            </div>
          </div>
          <div className="lg:hidden">
            <Icon name="HamburgerIcon" size={24} />
          </div>
          {/* <div className="absolute top-[64px] bottom-0 left-0 right-0 bg-dark"></div> */}
        </header>
      )}
    </>
  );
};

export default Header;
