import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Icon from "./Icon";

export default function Footer() {
  return (
    <div className="lg:px-[50px] px-5 pt-8 flex-col justify-start items-center gap-6 inline-flex w-full z-50">
      <div className="border-b pb-3 border-[#2f3132] self-stretch lg:justify-between justify-center items-center flex flex-col md:flex-row gap-8 lg:gap-0 w-full">
        <div className="h-8 lg:justify-start justify-center items-center gap-1 flex">
          <div className="text-white text-base font-medium font-['Orbitron'] uppercase flex items-center gap-1">
            <Icon
              name="Logo"
              size={32}
              className="hover:text-red duration-200 text-white"
            />
            HackerForce
          </div>
        </div>
        <div className="lg:justify-start justify-center items-center gap-4 flex">
          <div className="text-white text-base font-medium font-['Orbitron'] leading-tight">
            Home
          </div>
          <div className="text-white text-base font-medium font-['Orbitron'] leading-tight">
            About Us
          </div>
          <div className="text-white text-base font-medium font-['Orbitron'] leading-tight">
            Pricing
          </div>
          <div className="text-white text-base font-medium font-['Orbitron'] leading-tight">
            FAQ
          </div>
        </div>
        <div className="justify-center items-center md:justify-start md:items-start gap-[26.67px] inline-flex">
          <FaFacebook className="cursor-pointer" size={24} color="white" />
          <FaTwitter className="cursor-pointer" size={24} color="white" />
          <FaInstagram className="cursor-pointer" size={24} color="white" />
          <FaLinkedin className="cursor-pointer" size={24} color="white" />
        </div>
      </div>
      <div className="md:pt-6 pb-4 justify-center items-center gap-4 flex md:flex-row flex-col-reverse">
        <div className="text-[#a0a0a0] text-lg font-normal font-['Inconsolata'] leading-normal">
          2024 Hackerforce. Allright Reserved
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="text-white text-sm font-medium font-['Orbitron'] leading-tight">
            Term & Condition
          </div>
          <div className="text-white text-sm font-medium font-['Orbitron'] leading-tight">
            Privacy Policy
          </div>
        </div>
      </div>
    </div>
  );
}
