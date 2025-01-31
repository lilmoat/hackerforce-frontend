import Image from "next/image";

// 🔹 About Statistics Data
const aboutStats = [
  { value: "350", label: "Case Secured" },
  { value: "5", label: "Years of Experience" },
  { value: "100", label: "Subs Member" },
];

export default function About() {
  return (
    <section className="relative max-w-[1440px] py-[100px]">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-start items-center gap-[100px]">
        {/* Left Column (Icon & Image) */}
        <div className="flex flex-col gap-6 w-[358px]">
          <AboutHeader />
          <Image
            src="/imgs/about/about1.png"
            alt="About Image"
            width={358}
            height={343}
            className="rounded-2xl"
          />
        </div>

        {/* Right Column (Text & Stats) */}
        <div className="flex-1 flex flex-col justify-between gap-10">
          {/* Description */}
          <div className="flex flex-col gap-5">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-darker text-[55px] font-bold font-orbitron uppercase">
              The art of ethical hacking offensively, defensively.
            </h2>
            <p className="text-[#a0a0a0] text-lg font-inconsolata leading-relaxed">
              We take great pride in ensuring the satisfaction of our customers,
              which is why we guarantee that the products we sell will bring
              happiness to each and every customer. Our genuine care for
              customer satisfaction is what sets us apart.
            </p>
          </div>

          {/* Stats Section */}
          <AboutStats />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-start items-center gap-[100px] mt-12">
        {/* Left Column (Description & Actions) */}
        <div className="flex flex-col gap-8 w-[358px]">
          <p className="text-[#a0a0a0] text-lg font-inconsolata leading-relaxed">
            We take great pride in ensuring the satisfaction of our customers.
            <br />
            <br />
            That's why we proudly guarantee the quality and reliability of our
            products.
          </p>
          <AboutActions />
        </div>

        {/* Right Column (Image) */}
        <Image
          src="/imgs/about/about2.png"
          alt="About Image"
          width={600}
          height={400}
          className="rounded-2xl"
        />
      </div>
    </section>
  );
}

/* ------------------ COMPONENTS ------------------ */

// 🔹 About Header (Icon & Title)
const AboutHeader = () => (
  <div className="flex items-center gap-6">
    <Image
      src="/imgs/about/aboutIcon.png"
      alt="Icon"
      width={80}
      height={80}
      className="rounded-2xl"
    />
    <h2 className="text-white text-[40px] font-orbitron font-medium">
      About Us
    </h2>
  </div>
);

// 🔹 About Statistics
const AboutStats = () => (
  <div className="flex gap-20">
    {aboutStats.map((stat, index) => (
      <div key={index} className="flex flex-col items-start gap-1">
        <div className="text-white text-[62px] font-orbitron">
          {stat.value} <span className="text-[#e09b6b]">+</span>
        </div>
        <p className="text-[#a0a0a0] text-xl font-inconsolata">{stat.label}</p>
      </div>
    ))}
  </div>
);
// 🔹 About Actions (Buttons)
const AboutActions = () => (
  <div className="flex gap-4">
    <button className="px-6 py-3 bg-[#2f3132] rounded-lg text-white text-base font-orbitron font-medium">
      Register
    </button>
    <button className="px-6 py-3 bg-[#972123] rounded-lg text-white text-base font-orbitron font-medium">
      Login
    </button>
  </div>
);
