export default function CookieModal() {
  return (
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
  );
}
