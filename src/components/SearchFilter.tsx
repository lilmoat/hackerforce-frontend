import { GrSearch } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";

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

export default SearchFilter;
