import Image from "next/image";
import Link from "next/link";

export default function ComingSoon() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <BackgroundImage />
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-center text-[#a0a0a0] text-xl font-normal font-['Inconsolata']">
          Hacker Shop
        </p>
        <h1 className="xl:w-[862px] text-center text-transparent bg-clip-text bg-gradient-to-r from-darker via-white to-darker xl:text-[100px] text-[50px] font-semibold font-['Orbitron']">
          Coming Soon
        </h1>

        <Link
          href={"/"}
          className="px-6 py-3 bg-[#972123] duration-200 rounded-lg text-white text-base font-orbitron font-medium hover:bg-[#7a1b1f]"
        >
          Take me back{" "}
        </Link>
      </div>
    </div>
  );
}

// 🔹 Background Image
const BackgroundImage = () => (
  <div className="absolute top-16 right-0 bottom-0 -z-50">
    <Image src="/Bg2.png" alt="Background" width={719} height={700} priority />
  </div>
);
