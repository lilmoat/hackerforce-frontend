/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { GrSearch } from "react-icons/gr";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import BackgroundImage from "@/components/BackgroundImage";
import Icon from "@/components/Icon";
import { CoursesData } from "@/data/data";
import { CourseCardProps } from "@/types/type";

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

const CourseCard = ({
  title,
  xp,
  difficulty,
  reward,
  progress,
  image,
  rating,
  reviews,
}: CourseCardProps) => (
  <div className="lg:w-[392px] w-full flex flex-col gap-4">
    <div className="w-full h-[286px] relative">
      <img
        className="w-full h-full rounded-3xl object-cover"
        src={image}
        alt={title}
      />
      <div className="w-full px-4 py-2 absolute bottom-0 bg-[#2f3132] rounded-bl-2xl rounded-br-2xl flex justify-between items-center gap-3">
        <div className="h-[8.88px] w-full relative">
          <div className="w-full h-full bg-[#181a1b] rounded-full"></div>
          <div
            className="absolute top-0 left-0 h-full bg-[#d44244] rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span className="text-white text-sm font-bold">{progress}%</span>
      </div>
      <div className="px-2 py-1 left-[8px] top-[8px] absolute bg-[#2f3132] rounded-[100px] justify-start items-center gap-1 inline-flex">
        <Icon name="StarIcon" className="w-4 h-4 text-white" />
        <div className="text-center text-white text-sm font-bold font-['Inconsolata'] leading-tight">
          {rating}
        </div>
        <div className="text-center text-[#a0a0a0] text-sm font-normal font-['Inconsolata'] leading-tight">
          ({reviews} Reviews)
        </div>
      </div>
    </div>
    <h2 className="text-white text-2xl font-['Orbitron']">{title}</h2>
    <div className="flex gap-2 font-inconsolata w-full items-center justify-between">
      <span className="text-[#a0a0a0] text-sm font-bold rounded-md bg-[#25252586] p-1">
        Aquirable XP: {xp}
      </span>
      <span className="text-[#a0a0a0] text-sm font-bold rounded-md bg-[#25252586] p-1">
        Difficulty: {difficulty}
      </span>
      <span className="text-[#d44244] text-sm font-bold rounded-md bg-[#25252586] p-1">
        {reward}
      </span>
    </div>
    <button className="font-orbitron w-full h-10 bg-[#972123] hover:bg-[#7a1b1f] duration-200 rounded-lg text-white text-base font-medium">
      Begin
    </button>
  </div>
);
