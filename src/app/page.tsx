"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import CookieModal from "@/components/CookieModal";
import About from "@/modules/About";
import Subscription from "@/modules/Subscription";
import FindPath from "@/modules/FindPath";
import Security from "@/modules/Security";
import Question from "@/modules/Question";

export default function Home() {
  return (
    <>
      <div className="relative max-w-[1440px] xl:px-[100px]">
        <div className="flex items-center justify-start flex-col gap-[19px] h-screen overflow-hidden max-h-[85vh] relative mt-[70px]">
          <div className="absolute top-0 left-0 w-full h-full -z-50">
            <Image layout="fill" alt="Background" src={"/Bg.png"} />
          </div>
          <div className="-z-50 absolute w-[983px] h-[985px] top-1/2 rounded-full overflow-hidden shadow-[inset_0px_0px_112px_20px_#434343,0px_0px_114px_#434343cc,0px_0px_20px_5px_#434343] [background:radial-gradient(50%_50%_at_50%_50%,rgba(24,26,27,0.6)_0%,rgba(24,26,27,0)_100%)]">
            <motion.div
              className="flex w-[1966px] h-full"
              animate={{ x: ["0%", "-50%"] }} // Moves left continuously
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <img
                className="w-[983px] h-[965px] object-cover"
                src="/map2.png"
                alt="Map"
              />
              <img
                className="w-[983px] h-[965px] object-cover rotate-180"
                src="/map2.png"
                alt="Map"
              />
              <img
                className="w-[983px] h-[965px] object-cover"
                src="/map2.png"
                alt="Map"
              />
            </motion.div>
          </div>
          <div className="h-7 px-2 bg-[#972123] justify-center items-center gap-2.5 inline-flex">
            <p className="text-center text-white text-xl font-normal font-inconsolata leading-7">
              {`Welcome to HackerForce`}
            </p>
          </div>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-darker text-[88px] font-bold font-orbitron uppercase leading-[106px] text-center">
            {`digital pursuit & harness the power of hacking.`}
          </h1>
          <p className="w-[856.29px] text-center text-white text-xl font-normal font-['Inconsolata'] leading-[30px]">
            {`Step into the realm of relentless digital pursuit and harness the power
        of hacking. Our content will immerse you in the art of ethical hacking
        offensively, defensively while leaning the latest and most powerful
        techniques.`}
          </p>
          <div className="absolute bottom-6 flex flex-col gap-4 justify-center items-center w-full">
            <div className="relative w-[100px] h-[100px]">
              <Image layout="fill" alt="Background" src={"/Group.png"} />
            </div>
            <CookieModal />
          </div>
        </div>
      </div>
      <About />
      <Subscription />
      <FindPath />
      <Security />
      <Question />
    </>
  );
}
