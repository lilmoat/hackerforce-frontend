/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CookieModal from "@/components/CookieModal";

// 🔹 Map Images Data
const mapImages = ["/WorldMap.png", "/WorldMap.png"];

export default function HeroSection() {
  return (
    <section className="relative max-w-[1440px]">
      <div className="flex flex-col items-center gap-5 min-h-screen relative overflow-hidden md:px-5">
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
    </section>
  );
}

/* ------------------ COMPONENTS ------------------ */

// 🔹 Background Image
const BackgroundImage = () => (
  <div className="absolute top-0 left-0 w-full h-full -z-50">
    <Image src="/Bg.png" alt="Background" fill priority />
  </div>
);

// 🔹 Rotating Map Animation
const RotatingMap = () => (
  <div className="-z-[40] absolute w-[983px] h-[985px] top-[50%] !bg-dark  rounded-full overflow-hidden shadow-[inset_0px_0px_112px_20px_#434343,0px_0px_114px_#434343cc,0px_0px_20px_5px_#434343] [background:radial-gradient(50%_50%_at_50%_50%,rgba(24,26,27,0.6)_0%,rgba(24,26,27,0)_100%)]">
    <motion.div
      className="flex w-[1966px] h-full"
      animate={{ x: ["0%", "-50%"] }} // Moves left continuously
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    >
      <img
        className="w-[1983px] h-[965px] object-cover"
        src="/WorldMap.png"
        alt="Map"
      />
    </motion.div>
  </div>
);

// 🔹 Hero Header (Title & Subtitle)
const HeroHeader = () => (
  <>
    <div className="h-7 px-2 bg-[#972123] flex justify-center items-center md:mt-[170px] mt-[100px]">
      <p className="text-white text-xl font-inconsolata">
        Welcome to HackerForce
      </p>
    </div>

    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-darker xl:text-[88px] md:text-[60px] text-3xl font-bold font-orbitron uppercase xl:leading-[106px] sm:text-[40px] leading-10 md:leading-[70px] text-center">
      Digital pursuit & harness the power of hacking.
    </h1>
  </>
);

// 🔹 Hero Description
const HeroText = () => (
  <p className="lg:w-[856px] text-center text-white xl:text-xl text-base md:text-lg font-inconsolata leading-[30px] p-5">
    Step into the realm of relentless digital pursuit and harness the power of
    hacking. Our content will immerse you in the art of ethical hacking,
    offensively and defensively, while learning the latest and most powerful
    techniques.
  </p>
);

// 🔹 Hero Footer (Icon & Cookie Modal)
const HeroFooter = () => (
  <div className="flex flex-col gap-4 items-center w-full px-7 md:p-7">
    <a href="#about" aria-label="Go to About Section">
      <Image
        src="/Group.png"
        alt="Footer Icon"
        width={100}
        height={100}
        className="cursor-pointer"
      />
    </a>
    <CookieModal />
  </div>
);
