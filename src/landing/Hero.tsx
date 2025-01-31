"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CookieModal from "@/components/CookieModal";

// 🔹 Map Images Data
const mapImages = ["/WorldMap.png", "/WorldMap.png", "/WorldMap.png"];

export default function HeroSection() {
  return (
    <div className="relative max-w-[1440px] xl:px-[100px]">
      <div className="flex flex-col items-center gap-5 h-screen max-h-[85vh] relative mt-[70px] overflow-hidden">
        {/* Background Image */}
        <BackgroundImage />

        {/* Rotating Map */}
        <RotatingMap />

        {/* Hero Content */}
        <HeroHeader />
        <HeroText />

        {/* Footer Section */}
        <HeroFooter />
      </div>
    </div>
  );
}

/* ------------------ COMPONENTS ------------------ */

// 🔹 Background Image
const BackgroundImage = () => (
  <div className="absolute top-0 left-0 w-full h-full -z-50">
    <Image src="/Bg.png" alt="Background" layout="fill" priority />
  </div>
);

// 🔹 Rotating Map Animation
const RotatingMap = () => (
  <div className="-z-50 absolute w-[983px] h-[985px] top-1/2 rounded-full overflow-hidden shadow-[inset_0px_0px_112px_20px_#434343,0px_0px_114px_#434343cc,0px_0px_20px_5px_#434343] [background:radial-gradient(50%_50%_at_50%_50%,rgba(24,26,27,0.6)_0%,rgba(24,26,27,0)_100%)]">
    <motion.div
      className="flex w-[2949px] h-full"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      {mapImages.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt="Map"
          width={983}
          height={965}
          className={index % 2 === 1 ? "rotate-180" : ""}
        />
      ))}
    </motion.div>
  </div>
);

// 🔹 Hero Header (Title & Subtitle)
const HeroHeader = () => (
  <>
    <div className="h-7 px-2 bg-[#972123] flex justify-center items-center">
      <p className="text-white text-xl font-inconsolata">
        Welcome to HackerForce
      </p>
    </div>

    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-darker text-[88px] font-bold font-orbitron uppercase leading-[106px] text-center">
      Digital pursuit & harness the power of hacking.
    </h1>
  </>
);

// 🔹 Hero Description
const HeroText = () => (
  <p className="w-[856px] text-center text-white text-xl font-inconsolata leading-[30px]">
    Step into the realm of relentless digital pursuit and harness the power of
    hacking. Our content will immerse you in the art of ethical hacking,
    offensively and defensively, while learning the latest and most powerful
    techniques.
  </p>
);

// 🔹 Hero Footer (Icon & Cookie Modal)
const HeroFooter = () => (
  <div className="absolute bottom-6 flex flex-col gap-4 items-center w-full">
    <Image src="/Group.png" alt="Footer Icon" width={100} height={100} />
    <CookieModal />
  </div>
);
