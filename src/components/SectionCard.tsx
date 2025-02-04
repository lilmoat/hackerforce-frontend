import Icon from "@/components/Icon";
import { SectionCardProps } from "@/types/type";
import Link from "next/link";

const SectionCard = ({
  title,
  description,
  coursesCompleted,
  totalCourses,
  bgImage,
  blur,
}: SectionCardProps) => (
  <Link href={!blur ? "/course" : ""} className="w-full">
    <div
      className={`w-full xl:p-[100px] p-5 bg-cover group bg-center bg-no-repeat flex justify-between items-center lg:gap-[100px] gap-3 ${
        blur && "blur-md cursor-not-allowed"
      }`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex flex-col gap-4">
        <div className="text-white md:text-[60px] text-[40px] font-medium font-['Orbitron'] uppercase">
          {title}
        </div>
        <p className="text-[#a0a0a0] lg:text-xl xl:text-2xl text-sm font-['Inconsolata'] leading-loose sm:w-[400px] md:w-full">
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
      <div
        className={`opacity-0 ${
          !blur &&
          "group-hover:opacity-100 group-hover:translate-x-2 duration-200"
        } `}
      >
        <Icon
          name={"UpIcon"}
          color="white"
          className="lg:w-[80px] lg:h-[80px] w-[40px] h-[40px] text-white"
        />
      </div>
    </div>
  </Link>
);

export default SectionCard;
