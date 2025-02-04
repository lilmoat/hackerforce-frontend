import BackgroundImage from "@/components/BackgroundImage";
import Icon from "@/components/Icon";
import Image from "next/image";
import { JSX } from "react";
import { FaStar } from "react-icons/fa";
import { FaHand } from "react-icons/fa6";
import { GiStarsStack } from "react-icons/gi";
import { HiKey } from "react-icons/hi";
import { HiPuzzlePiece } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

export default function Dashboard() {
  return (
    <div className="relative max-w-[1440px] xl:p-[100px] md:p-10 lg:p-12 p-5 md:mt-12 mt-[100px] min-h-screen">
      <BackgroundImage />
      <div className="py-[50px] xl:w-[1100px] lg:justify-start lg:items-start items-center justify-center gap-[50px] lg:flex-row flex flex-col">
        <Image
          width={150}
          height={150}
          src="/imgs/about/about1.png"
          priority
          alt="Avatar"
          className="rounded-full border-2 border-grey"
        />
        <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-6 inline-flex">
          <div className="lg:w-auto w-full grow shrink basis-0 flex-col lg:justify-start lg:items-start items-center justify-center gap-2 flex">
            <div className="self-stretch text-white text-[32px] font-bold font-['Orbitron'] uppercase text-center lg:text-left">
              Jackthefile
            </div>
            <div className="rounded-lg justify-start items-center gap-2 inline-flex">
              <IoLocationSharp className="text-white/50" size={22} />
              <div className="text-white text-lg font-medium font-['Inconsolata'] leading-relaxed">
                Vinius, Lithuania
              </div>
            </div>
          </div>
          <div className="self-stretch md:justify-between justify-center gap-4 md:items-center items-center flex flex-col md:flex-row md:w-full font-inconsolata">
            <div className="w-full justify-center items-center gap-2 grid grid-cols-3 md:grid-cols-5">
              <div className="justify-start items-start gap-2 flex">
                <FaStar className="mt-[3px] text-red" />
                <div className="flex-col justify-center items-start inline-flex">
                  <div className="text-white text-base font-normal leading-normal font-inconsolata">
                    Beginner
                  </div>
                  <div className="text-[#a0a0a0] text-sm font-normal font-['Inconsolata'] leading-tight">
                    1+ Month
                  </div>
                </div>
              </div>
              <div className="justify-start items-start gap-2 flex">
                <FaHand className="mt-[3px] text-red" />
                <div className="flex-col justify-center items-start inline-flex">
                  <div className="text-white text-base font-normal leading-normal font-inconsolata">
                    Newbie
                  </div>
                  <div className="text-[#a0a0a0] text-sm font-normal font-['Inconsolata'] leading-tight">
                    2 Cert
                  </div>
                </div>
              </div>
              <div className="justify-start items-start gap-2 flex">
                <HiPuzzlePiece className="mt-[1px] text-red" size={20} />
                <div className="flex-col justify-center items-start inline-flex">
                  <div className="text-white text-base font-normal leading-normal font-inconsolata">
                    Skilled
                  </div>
                  <div className="text-[#a0a0a0] text-sm font-normal font-['Inconsolata'] leading-tight">
                    3 Courses
                  </div>
                </div>
              </div>
              <div className="justify-start items-start gap-2 flex">
                <GiStarsStack className=" text-red" size={20} />

                <div className="flex-col justify-center items-start inline-flex">
                  <div className="text-white text-base font-normal leading-normal font-inconsolata">
                    Master
                  </div>
                  <div className="text-[#a0a0a0] text-sm font-normal font-['Inconsolata'] leading-tight">
                    18 Machines
                  </div>
                </div>
              </div>
              <div className="justify-start items-start gap-2 flex">
                <HiKey className=" text-red" size={20} />

                <div className="flex-col justify-center items-start inline-flex">
                  <div className="text-white text-base font-normal leading-normal font-inconsolata">
                    647
                  </div>
                  <div className="text-[#a0a0a0] text-sm font-normal font-['Inconsolata'] leading-tight">
                    Total Keys
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-start items-center gap-2 flex w-full md:w-auto">
              <div className="w-full lg:w-auto truncate p-3 bg-white/10 rounded-lg backdrop-blur-[32px] justify-center items-center gap-3 flex overflow-hidden text-white">
                Edit profile
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-14 w-full border-b border-[#2f3132] justify-start items-center gap-2 inline-flex">
        <div className="justify-start items-center flex">
          <div className="px-4 py-4 border-b border-[#d44244] justify-center items-center gap-3 flex">
            <div className="text-[#d44244] text-base font-medium font-['Orbitron'] leading-normal">
              Dashboard
            </div>
          </div>
          <div className="px-4 py-4 justify-center cursor-not-allowed blur-sm items-center gap-3 flex">
            <div className="text-white text-base font-medium font-['Orbitron'] leading-normal">
              Achieve
            </div>
          </div>
          <div className="px-4 py-4 justify-center cursor-not-allowed blur-sm items-center gap-3 flex">
            <div className="text-white text-base font-medium font-['Orbitron'] leading-normal">
              Friends
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-start justify-center gap-10 mt-5 flex-col md:flex-row">
        <div className="flex-col justify-start items-start gap-6 inline-flex w-full">
          <div className="self-stretch flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch justify-between items-center inline-flex gap-3">
              <div className="grow shrink basis-0 self-stretch text-white md:text-xl text-md font-medium font-['Orbitron'] leading-loose">
                In-Progress
              </div>
              <div className="h-9 px-4 py-1.5 bg-[#1d1f20] rounded-lg border border-[#2f3132] justify-start items-center gap-3 flex">
                <Icon name="Search" size={20} color="#a0a0a0" />
                <input
                  className="text-[#a0a0a0] placeholder:text-grey text-base font-medium font-['Orbitron'] leading-normal w-[130px] outline-none bg-transparent"
                  placeholder="search"
                />
              </div>
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch px-4 py-3 bg-[#1d1f20] rounded-2xl justify-start items-center gap-4 inline-flex">
                <div className="grow shrink basis-0 h-5 justify-start items-center flex gap-2">
                  <div className="text-[#d44244] text-sm font-bold font-['Inconsolata'] leading-tight">
                    Module
                  </div>
                  <div className="text-white text-sm font-medium font-['Orbitron'] leading-tight">
                    Start Trek
                  </div>
                </div>
                <IoIosArrowDown className="text-white/50" />
              </div>
              <div className="self-stretch px-4 py-3 bg-[#1d1f20] rounded-2xl justify-start items-start gap-4 inline-flex">
                <div className="w-full flex-col justify-start items-start gap-4 inline-flex">
                  <div className="self-stretch justify-start items-center inline-flex gap-3">
                    <div className="text-[#d44244] text-sm font-bold font-['Inconsolata'] leading-tight">
                      Module
                    </div>
                    <div className="text-white text-sm font-medium font-['Orbitron'] leading-tight">
                      Kerberos
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-start gap-4 inline-flex lg:flex-row flex-col">
                    <div className="w-[80px] h-[80px] justify-center items-center flex">
                      <Image
                        width={80}
                        height={80}
                        src="/imgs/about/about1.png"
                        priority
                        alt="Avatar"
                        className="rounded-xl border-2 border-grey"
                      />
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                      <div className="self-stretch text-white text-base font-semibold font-['Orbitron'] leading-normal">
                        Kerberos
                      </div>
                      <div className="self-stretch h-10 flex-col justify-start items-start flex">
                        <div className="self-stretch justify-start items-start gap-2 inline-flex">
                          <div className="text-center text-[#a0a0a0] text-sm font-bold font-['Inconsolata'] leading-tight">
                            Current unit:
                          </div>
                          <div className="text-center text-white text-sm font-bold font-['Inconsolata'] leading-tight">
                            Asrep-Roasting
                          </div>
                        </div>
                        <div className="self-stretch justify-start items-start gap-2 inline-flex">
                          <div className="text-center text-[#a0a0a0] text-sm font-bold font-['Inconsolata'] leading-tight">
                            You have spend 2 hours on this course
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch justify-start items-center gap-6 inline-flex">
                        <div className="grow shrink basis-0 self-stretch flex-col justify-between items-start inline-flex">
                          <div className="self-stretch justify-between items-start inline-flex">
                            <div className="text-center text-[#a0a0a0] text-sm font-bold font-['Inconsolata'] leading-tight">
                              Unit Statistics
                            </div>
                            <div className="text-white text-sm font-bold font-['Inconsolata'] leading-tight">
                              4/10
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <IoIosArrowDown className="text-white/50" />
              </div>
              <div className="self-stretch px-4 py-3 bg-[#1d1f20] rounded-2xl justify-start items-center gap-4 inline-flex">
                <div className="grow shrink basis-0 h-5 justify-start items-center flex gap-2">
                  <div className="text-[#d44244] text-sm font-bold font-['Inconsolata'] leading-tight">
                    Colosseum
                  </div>
                  <div className="text-white text-sm font-medium font-['Orbitron'] leading-tight">
                    Demon Hack
                  </div>
                </div>
                <IoIosArrowDown className="text-white/50" />
              </div>
              <div className="self-stretch px-4 py-3 bg-[#1d1f20] rounded-2xl justify-start items-center gap-4 inline-flex">
                <div className="grow shrink basis-0 h-5 justify-start items-center flex gap-2">
                  <div className="text-[#d44244] text-sm font-bold font-['Inconsolata'] leading-tight">
                    Chambers
                  </div>
                  <div className="text-white text-sm font-medium font-['Orbitron'] leading-tight">
                    Rat X
                  </div>
                </div>
                <IoIosArrowDown className="text-white/50" />
              </div>
              <div className="self-stretch px-4 py-3 bg-[#1d1f20] rounded-2xl justify-start items-center gap-4 inline-flex">
                <div className="grow shrink basis-0 h-5 justify-start items-center flex gap-2">
                  <div className="text-[#d44244] text-sm font-bold font-['Inconsolata'] leading-tight">
                    Colosseum
                  </div>
                  <div className="text-white text-sm font-medium font-['Orbitron'] leading-tight">
                    Demon Hack
                  </div>
                </div>
                <IoIosArrowDown className="text-white/50" />
              </div>
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-4 flex blur-sm cursor-not-allowed">
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="grow shrink basis-0 self-stretch text-white text-xl font-medium font-['Orbitron'] leading-loose">
                Scheduled Exams
              </div>
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch px-3 py-2 bg-[#1d1f20] rounded-2xl justify-start items-center gap-3 inline-flex">
                <div className="p-2 bg-[#181a1b] rounded-full border border-[#2f3132] justify-start items-center gap-2.5 flex">
                  <div className="w-4 h-4 relative  overflow-hidden"></div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-center items-start inline-flex">
                  <div className="self-stretch text-white text-sm font-bold font-['Inconsolata'] leading-tight">
                    Exam for Barbados
                  </div>
                  <div className="self-stretch text-[#a0a0a0] text-xs font-bold font-['Inconsolata'] leading-[18px]">
                    July 23, 2024 - 08:00 AM
                  </div>
                </div>
                <div className="w-4 h-4 relative  overflow-hidden"></div>
              </div>
              <div className="self-stretch px-3 py-2 bg-[#1d1f20] rounded-2xl justify-start items-center gap-3 inline-flex">
                <div className="p-2 bg-[#181a1b] rounded-full border border-[#2f3132] justify-start items-center gap-2.5 flex">
                  <div className="w-4 h-4 relative  overflow-hidden"></div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-center items-start inline-flex">
                  <div className="self-stretch text-white text-sm font-bold font-['Inconsolata'] leading-tight">
                    Exam for Barbados
                  </div>
                  <div className="self-stretch text-[#a0a0a0] text-xs font-bold font-['Inconsolata'] leading-[18px]">
                    July 23, 2024 - 08:00 AM
                  </div>
                </div>
                <div className="w-4 h-4 relative  overflow-hidden"></div>
              </div>
              <div className="self-stretch px-3 py-2 bg-[#1d1f20] rounded-2xl justify-start items-center gap-3 inline-flex">
                <div className="p-2 bg-[#181a1b] rounded-full border border-[#2f3132] justify-start items-center gap-2.5 flex">
                  <div className="w-4 h-4 relative  overflow-hidden"></div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-center items-start inline-flex">
                  <div className="self-stretch text-white text-sm font-bold font-['Inconsolata'] leading-tight">
                    Exam for Barbados
                  </div>
                  <div className="self-stretch text-[#a0a0a0] text-xs font-bold font-['Inconsolata'] leading-[18px]">
                    July 23, 2024 - 08:00 AM
                  </div>
                </div>
                <div className="w-4 h-4 relative  overflow-hidden"></div>
              </div>
              <div className="self-stretch px-3 py-2 bg-[#1d1f20] rounded-2xl justify-start items-center gap-3 inline-flex">
                <div className="p-2 bg-[#181a1b] rounded-full border border-[#2f3132] justify-start items-center gap-2.5 flex">
                  <div className="w-4 h-4 relative  overflow-hidden"></div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-center items-start inline-flex">
                  <div className="self-stretch text-white text-sm font-bold font-['Inconsolata'] leading-tight">
                    Exam for Barbados
                  </div>
                  <div className="self-stretch text-[#a0a0a0] text-xs font-bold font-['Inconsolata'] leading-[18px]">
                    July 23, 2024 - 08:00 AM
                  </div>
                </div>
                <div className="w-4 h-4 relative  overflow-hidden"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-center items-start gap-6 inline-flex w-full blur-sm cursor-not-allowed">
          <div className="self-stretch justify-start items-center gap-6 inline-flex">
            <div className="grow shrink basis-0 p-4 bg-[#1d1f20] rounded-2xl border border-[#2f3132] flex-col justify-center items-center gap-3 inline-flex">
              <div className="self-stretch justify-start items-center gap-3 inline-flex">
                <div className="grow shrink basis-0 text-white text-base font-medium font-['Orbitron'] leading-tight">
                  Monthly Statistic
                </div>
              </div>
              <div className="self-stretch h-[52px] flex-col justify-start items-start gap-3 flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-[#6c7174] text-xs font-medium font-['Orbitron'] leading-[18px]">
                    Chamber owned
                  </div>
                  <div className="text-[#eeeeee] text-sm font-medium font-['Orbitron'] leading-tight">
                    4
                  </div>
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-[#6c7174] text-xs font-medium font-['Orbitron'] leading-[18px]">
                    Colosseum owned
                  </div>
                  <div className="text-right text-[#eeeeee] text-sm font-medium font-['Orbitron'] leading-tight">
                    1
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[52px] flex-col justify-start items-start gap-3 flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-[#6c7174] text-xs font-medium font-['Orbitron'] leading-[18px]">
                    Hour Studied
                  </div>
                  <div className="text-[#eeeeee] text-sm font-medium font-['Orbitron'] leading-tight">
                    71
                  </div>
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-[#6c7174] text-xs font-medium font-['Orbitron'] leading-[18px]">
                    Couse Competed
                  </div>
                  <div className="text-[#eeeeee] text-sm font-medium font-['Orbitron'] leading-tight">
                    5
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-[#6c7174] text-xs font-medium font-['Orbitron'] leading-[18px]">
                  Total XP Acquired
                </div>
                <div className="text-[#eeeeee] text-sm font-medium font-['Orbitron'] leading-tight">
                  4500
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Mock Data
const user = {
  name: "Jackthefile",
  location: "Vinius, Lithuania",
  avatar: "/imgs/about/about1.png",
  stats: [
    {
      icon: <FaStar className="text-red" />,
      label: "Beginner",
      subLabel: "1+ Month",
    },
    {
      icon: <FaHand className="text-red" />,
      label: "Newbie",
      subLabel: "2 Cert",
    },
    {
      icon: <HiPuzzlePiece className="text-red" />,
      label: "Skilled",
      subLabel: "3 Courses",
    },
    {
      icon: <GiStarsStack className="text-red" />,
      label: "Master",
      subLabel: "18 Machines",
    },
    {
      icon: <HiKey className="text-red" />,
      label: "647",
      subLabel: "Total Keys",
    },
  ],
};

// ✅ **Profile Info Component**
const ProfileInfo = ({ name, location, avatar }: typeof user) => (
  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
    <Image
      width={150}
      height={150}
      src={avatar}
      priority
      alt="Avatar"
      className="rounded-full border-2 border-grey"
    />
    <div className="flex flex-col gap-4">
      <h1 className="text-white text-2xl font-bold uppercase text-center lg:text-left">
        {name}
      </h1>
      <div className="flex items-center gap-2">
        <IoLocationSharp className="text-white/50" size={22} />
        <p className="text-white text-lg font-medium">{location}</p>
      </div>
    </div>
  </div>
);

// ✅ **Profile Stats Component**
const ProfileStats = ({ stats }: { stats: typeof user.stats }) => (
  <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
    {stats.map((stat, index) => (
      <StatItem
        key={index}
        icon={stat.icon}
        label={stat.label}
        subLabel={stat.subLabel}
      />
    ))}
  </div>
);

// ✅ **Reusable Statistic Item**
const StatItem = ({
  icon,
  label,
  subLabel,
}: {
  icon: JSX.Element;
  label: string;
  subLabel: string;
}) => (
  <div className="flex items-start gap-2">
    {icon}
    <div className="flex flex-col">
      <p className="text-white text-base">{label}</p>
      <p className="text-[#a0a0a0] text-sm">{subLabel}</p>
    </div>
  </div>
);

// ✅ **Main Profile Component**
const UserProfile = () => (
  <div className="flex flex-col gap-6">
    <ProfileInfo
      name={user.name}
      location={user.location}
      avatar={user.avatar}
      stats={[]}
    />
    <ProfileStats stats={user.stats} />
    <div className="w-full md:w-auto flex justify-center">
      <button className="bg-white/10 text-white p-3 rounded-lg backdrop-blur-lg hover:bg-white/20 transition">
        Edit Profile
      </button>
    </div>
  </div>
);
