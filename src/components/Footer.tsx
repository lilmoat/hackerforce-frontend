import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaTwitterSquare,
} from "react-icons/fa";
import Icon from "./Icon";

export default function Footer() {
  return (
    <div className="h-[152px] px-[50px] pt-8 flex-col justify-start items-center gap-6 inline-flex w-full">
      <div className="self-stretch justify-between items-center inline-flex">
        <div className="h-8 justify-start items-center gap-1 flex">
          <div className="w-8 h-8 relative"></div>
          <div className="text-white text-base font-medium font-['Orbitron'] uppercase flex items-center gap-1">
            <Icon
              name="Logo"
              size={32}
              className="hover:text-red duration-200 text-white"
            />
            HackerForce
          </div>
        </div>
        <div className="justify-start items-center gap-4 flex">
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
        <div className="flex-col justify-center items-start gap-2 inline-flex">
          <div className="justify-start items-start gap-[26.67px] inline-flex">
            <FaFacebook className="cursor-pointer" size={24} color="white" />
            <FaTwitter className="cursor-pointer" size={24} color="white" />
            <FaInstagram className="cursor-pointer" size={24} color="white" />
            <FaLinkedin className="cursor-pointer" size={24} color="white" />
          </div>
        </div>
      </div>
      <div className="self-stretch pt-6 pb-4 border-t border-[#2f3132] justify-center items-center gap-4 inline-flex">
        <div className="text-[#a0a0a0] text-lg font-normal font-['Inconsolata'] leading-normal">
          2024 Hackerforce. Allright Reserved
        </div>
        <div className="text-white text-sm font-medium font-['Orbitron'] leading-tight">
          Term & Condition
        </div>
        <div className="text-white text-sm font-medium font-['Orbitron'] leading-tight">
          Privacy Policy
        </div>
      </div>
    </div>
  );
}
