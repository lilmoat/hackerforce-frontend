export default function Question() {
  return (
    <section className="relative max-w-[1440px] xl:px-[100px]">
      <div className="p-[100px] flex-col justify-center items-center gap-[50px] inline-flex">
        <div className="self-stretch h-36 flex-col justify-start items-center gap-2 flex">
          <div className="px-2 bg-[#972123] justify-center items-center gap-2.5 inline-flex">
            <div className="text-center text-white text-xl font-normal font-['Inconsolata'] leading-7">
              Pricing
            </div>
          </div>
          <div className="self-stretch text-center text-white text-[40px] font-medium font-['Orbitron'] leading-[48px]">
            Frequently Asked Questions
          </div>
          <div className="w-[649.89px] text-center text-[#a0a0a0] text-lg font-normal font-['Inconsolata'] leading-relaxed">
            Whether you’re looking to pay monthly, or save some money in the
            long run and purchase a yearly subscription, we’ve got you covered.
          </div>
        </div>
        <div className="h-[280px] flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch p-4 bg-[#1d1e1f] rounded-lg justify-between items-center inline-flex">
            <div className="text-white text-base font-medium font-['Orbitron'] leading-normal">
              Who we are?
            </div>
            <div className="w-5 h-5 relative"></div>
          </div>
          <div className="self-stretch p-4 bg-[#972123]/0 rounded-lg border border-[#972123] justify-start items-start gap-2 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
              <div className="self-stretch text-white text-base font-medium font-['Orbitron'] leading-normal">
                what can I learn at HF
              </div>
              <div className="self-stretch text-[#a0a0a0] text-base font-normal font-['Inconsolata'] leading-normal">
                Whether you’re just starting out, have some experience, or
                consider yourself an advanced practitioner, there’s an exciting
                and tailored path waiting for you to advance your skills.
              </div>
            </div>
            <div className="w-5 h-5 relative origin-top-left rotate-90"></div>
          </div>
          <div className="self-stretch p-4 bg-[#1d1e1f] rounded-lg justify-between items-center inline-flex">
            <div className="text-white text-base font-medium font-['Orbitron'] leading-normal">
              Do we provide Labs?
            </div>
            <div className="w-5 h-5 relative"></div>
          </div>
        </div>
        <div className="self-stretch justify-center items-center gap-[50px] inline-flex">
          <div className="text-[#a0a0a0] text-2xl font-normal font-['Inconsolata'] leading-loose">
            Have a question? Contact us here
          </div>
          <div className="px-6 py-3 bg-[#972123] rounded-lg justify-center items-center gap-1 flex">
            <div className="text-white text-base font-medium font-['Orbitron'] leading-normal">
              Contact Us
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
