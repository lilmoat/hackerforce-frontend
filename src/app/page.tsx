"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex items-center justify-start flex-col max-w-[1224px] gap-[19px] h-screen overflow-hidden pt-[70px] max-h-[95vh] relative">
      <div className="absolute top-0 left-0 w-full h-full -z-50">
        <Image layout="fill" alt="Background" src={"/Bg.png"} />
      </div>
      <div className="-z-50 absolute w-[983px] h-[985px] top-1/2 rounded-full overflow-hidden shadow-[inset_0px_0px_112px_20px_#434343,0px_0px_114px_#434343cc,0px_0px_20px_5px_#434343] [background:radial-gradient(50%_50%_at_50%_50%,rgba(24,26,27,0.6)_0%,rgba(24,26,27,0)_100%)]">
        <motion.img
          className="absolute w-[1966px] h-[965px] object-cover" // Doubled width for seamless effect
          alt="Map"
          src={"/map2.png"}
          animate={{
            x: ["0%", "-100%", "0%"], // Move left infinitely
          }}
          transition={{
            duration: 25, // Adjust speed
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
      <div className="h-7 px-2 bg-[#972123] justify-center items-center gap-2.5 inline-flex">
        <div className="text-center text-white text-xl font-normal font-inconsolata leading-7">
          {`Welcome to HackerForce`}
        </div>
      </div>
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-darker text-[88px] font-bold font-orbitron uppercase leading-[106px] text-center">
        {`digital pursuit & harness the power of hacking.`}
      </h1>
      <div className="w-[856.29px] text-center text-white text-xl font-normal font-['Inconsolata'] leading-[30px]">
        {`Step into the realm of relentless digital pursuit and harness the power
        of hacking. Our content will immerse you in the art of ethical hacking
        offensively, defensively while leaning the latest and most powerful
        techniques.`}
      </div>
      <div className="absolute bottom-3 flex flex-col gap-4 justify-center items-center w-full">
        <div className="relative w-[100px] h-[100px]">
          <Image layout="fill" alt="Background" src={"/Group.png"} />
        </div>
        <div className="w-[700px] h-[76px] px-5 py-4 bg-[#1d1f20] rounded-2xl border border-[#2f3132] justify-center items-center gap-6 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
            <div className="self-stretch text-white text-sm font-medium font-['Orbitron'] leading-tight">
              We use cookies!
            </div>
            <div className="self-stretch">
              <span className="text-[#a0a0a0] text-sm font-normal font-['Inconsolata'] leading-tight">
                By using hackerforce.com, you agree to our{" "}
              </span>
              <span className="text-white text-sm font-normal font-['Inconsolata'] underline leading-tight cursor-pointer">
                Cookie Policy.
              </span>
            </div>
          </div>
          <div className="justify-start items-center gap-4 flex">
            <div className="px-6 py-2 bg-red hover:bg-bright-red duration-200 cursor-pointer rounded-lg justify-center items-center gap-1 flex">
              <div className="text-white text-sm font-medium font-['Orbitron'] leading-tight">
                Accept
              </div>
            </div>
            <div className="px-6 py-2 bg-[#2f3132] hover:bg-[#212424] cursor-pointer duration-200 rounded-lg justify-center items-center gap-1 flex">
              <div className="text-white text-sm font-medium font-['Orbitron'] leading-tight">
                Decline
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
