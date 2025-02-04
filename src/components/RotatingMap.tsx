"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const RotatingMap = () => (
  <div className="-z-[40] absolute w-[983px] h-[985px] top-[50%] !bg-dark  rounded-full overflow-hidden shadow-[inset_0px_0px_112px_20px_#434343,0px_0px_114px_#434343cc,0px_0px_20px_5px_#434343] [background:radial-gradient(50%_50%_at_50%_50%,rgba(24,26,27,0.6)_0%,rgba(24,26,27,0)_100%)]">
    <motion.div
      className="flex w-[1966px] h-full"
      animate={{ x: ["0%", "-50%"] }} // Moves left continuously
      transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
    >
      <Image
        width={1983}
        height={965}
        style={{ objectFit: "cover" }}
        src="/WorldMap.png"
        alt="Map"
        priority
      />
    </motion.div>
  </div>
);

export default RotatingMap;
