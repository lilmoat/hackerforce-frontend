import Icon from "@/components/Icon";
import { Icons } from "@/components/Icons/Icons";
import Image from "next/image";
import Link from "next/link";

interface SectionCardProps {
  title: string;
  description: string;
  coursesCompleted: number;
  totalCourses: number;
  bgImage: string;
  blur?: boolean;
}

const sectionData: SectionCardProps[] = [
  {
    title: "Malware",
    description:
      "We take great pride in ensuring the satisfaction of our customers, which is why we guarantee that the products we sell will bring happiness to each and every customer.",
    coursesCompleted: 12,
    totalCourses: 24,
    bgImage: "/imgs/section/panel1.png",
  },
  {
    title: "Malware",
    description:
      "We take great pride in ensuring the satisfaction of our customers.",
    coursesCompleted: 12,
    totalCourses: 24,
    bgImage: "/imgs/section/panel2.png",
    blur: true,
  },
  {
    title: "Malware",
    description:
      "We take great pride in ensuring the satisfaction of our customers.",
    coursesCompleted: 12,
    totalCourses: 24,
    bgImage: "/imgs/section/panel3.png",
    blur: true,
  },
  {
    title: "Malware",
    description:
      "We take great pride in ensuring the satisfaction of our customers.",
    coursesCompleted: 12,
    totalCourses: 24,
    bgImage: "/imgs/section/panel4.png",
    blur: true,
  },
];

export default function Section() {
  return (
    <div className="w-full md:mt-12 mt-[70px] relative flex flex-col items-center justify-center pb-20">
      <div className="w-full max-w-[1440px] xl:p-[100px] md:p-10 lg:p-12 p-5 flex flex-col items-center justify-center relative">
        <BackgroundImage />
        <HeaderSection />
        <ContentSection />
      </div>
      {sectionData.map((section, index) => (
        <SectionCard key={index} {...section} />
      ))}
    </div>
  );
}

const BackgroundImage = () => (
  <div className="absolute top-16 right-0 bottom-0 -z-50">
    <Image src="/Bg2.png" alt="Background" width={719} height={700} priority />
  </div>
);

const HeaderSection = () => (
  <div className="py-[50px] flex flex-col items-center gap-5">
    <div className="px-2 bg-[#972123] flex items-center gap-2.5">
      <span className="text-white text-xl font-['Inconsolata']">Learn</span>
    </div>
    <h1 className="text-white md:text-[88px] text-[40px] font-bold font-['Orbitron'] uppercase">
      Sections
    </h1>
    <p className="text-[#a0a0a0] md:text-xl text-base font-['Inconsolata'] text-center">
      Step into the realm of relentless digital pursuit and harness the power of
      hacking.
    </p>
  </div>
);

const ContentSection = () => (
  <div className="flex flex-col md:flex-row justify-center items-center gap-[60px] mt-5">
    {["Study", "Practice", "Rewards"].map((title, index) => (
      <div key={index} className="flex flex-col items-center gap-4">
        <Icon name={"UpIcon"} className="w-10 h-10 text-white" size={30} />
        <h2 className="text-white text-2xl font-semibold font-['Orbitron']">
          {title}
        </h2>
        <p className="text-[#a0a0a0] text-lg font-['Inconsolata'] text-center">
          Our genuine care for customer satisfaction is what sets us apart.
        </p>
      </div>
    ))}
  </div>
);

const SectionCard = ({
  title,
  description,
  coursesCompleted,
  totalCourses,
  bgImage,
  blur,
}: SectionCardProps) => (
  <div
    className={`w-full xl:p-[100px] p-5 bg-cover bg-center bg-no-repeat flex justify-between items-center lg:gap-[100px] gap-3 ${
      blur ? "blur-md" : ""
    }`}
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    <div className="flex flex-col gap-4">
      <Link
        href="/course"
        className="text-white hover:text-[#838282] duration-200 md:text-[60px] text-[40px] font-medium font-['Orbitron'] uppercase"
      >
        {title}
      </Link>
      <p className="text-[#a0a0a0] lg:text-xl xl:text-2xl text-sm font-['Inconsolata'] leading-loose w-[320px] sm:w-[400px] md:w-full">
        {description}
      </p>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="flex items-center gap-2">
          <span className="text-white text-lg font-['Inconsolata']">
            Courses:
          </span>
          <div className="relative w-[150px] h-2">
            <div className="absolute w-full h-2.5 bg-white/20 rounded-full"></div>
            <div
              className="absolute w-[58.59px] h-2.5 bg-[#d44245] rounded-full"
              style={{ width: `${(coursesCompleted / totalCourses) * 100}%` }}
            ></div>
          </div>
          <span className="text-[#d44245] text-lg font-['Inconsolata']">
            {coursesCompleted}/{totalCourses}
          </span>
        </div>
        <span className="text-white text-lg font-['Inconsolata']">
          One new course since April 23
        </span>
      </div>
    </div>
    <Icon
      name={"UpIcon"}
      color="white"
      className="lg:w-[80px] lg:h-[80px] w-[40px] h-[40px] text-white"
    />
  </div>
);
