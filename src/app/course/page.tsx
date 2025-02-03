import BackgroundImage from "@/components/BackgroundImage";
import CourseCard from "@/components/CourseCard";
import { CoursesData } from "@/data/data";
import Link from "next/link";
import { GrSearch } from "react-icons/gr";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";

export default function Course() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[1440px] p-5 relative">
      <BackgroundImage />
      <BackButton />
      <Header />
      <SearchFilter />
      <div className="my-[100px] grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {CoursesData.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
}

const BackButton = () => (
  <div className="w-full flex items-center justify-start md:mt-[90px] mt-[60px] ">
    <Link
      href="/section"
      className="px-4 py-2 bg-[#2f3132] hover:bg-[#262829] rounded-lg flex items-center gap-3 duration-200"
    >
      <IoIosArrowBack color="white" />
      <span className="text-white text-base font-medium font-['Orbitron']">
        Back
      </span>
    </Link>
  </div>
);

const Header = () => (
  <div className="flex flex-col items-center gap-3 mt-10">
    <div className="px-2 bg-[#972123] flex items-center">
      <span className="text-white text-xl font-['Inconsolata']">Sections</span>
    </div>
    <h1 className="text-white sm:text-[88px] text-[50px] font-bold font-['Orbitron'] uppercase">
      Malware
    </h1>
    <p className="text-[#a0a0a0] text-xl font-['Inconsolata']">
      Recognize the evil of the world
    </p>
  </div>
);

const SearchFilter = () => (
  <div className="flex flex-col sm:flex-row gap-2 items-start mt-5">
    <div className="h-9 px-4 py-1.5 bg-[#1d1f20] border border-[#2f3132] rounded-lg flex items-center gap-3">
      <GrSearch color="#a0a0a0" />
      <input
        placeholder="Search"
        className="text-[#a0a0a0] w-[270px] text-base font-medium font-['Orbitron'] bg-transparent outline-none"
      />
    </div>
    <div className="px-4 py-2 bg-[#2f3132] rounded-lg flex items-center justify-center gap-3 cursor-pointer w-full md:w-auto">
      <span className="text-white text-sm font-['Orbitron']">Newest</span>
      <IoIosArrowDown color="white" />
    </div>
  </div>
);
