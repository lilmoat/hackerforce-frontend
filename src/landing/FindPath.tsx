import Icon from "@/components/Icon";

// 🔹 Path Options Data
const pathsData = [
  {
    title: "Just Starting?",
    description:
      "Don’t worry, we’ve all been there. We’ve got you covered. Select a beginner path from blue teaming, red teaming or even physical.",
    icon: "PracticeIcon",
  },
  {
    title: "Been there, done that?",
    description:
      "Have you been training for a while? Select a beginner path from blue teaming, red teaming or even physical.",
    icon: "UpIcon",
  },
  {
    title: "Master of many?",
    description:
      "A veteran in the sport? We’ve got some hardcore content for you. Select a beginner path from blue teaming, red teaming or even physical.",
    icon: "UpIcon" as const,
  },
];

export default function FindPath() {
  return (
    <section className="relative max-w-[1440px] px-[100px]">
      <div className="w-full py-[100px] flex flex-row items-center gap-[50px]">
        {/* Header */}
        <PathHeader />

        {/* Path Cards Grid */}
        <div className="grid grid-cols-1 gap-5 w-full">
          {pathsData.map((path, index) => (
            <PathCard key={index} path={path} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------ COMPONENTS ------------------ */

// 🔹 Header Section
const PathHeader = () => (
  <div className="w-[380px] flex flex-col gap-2">
    {/* Path Label */}
    <div className="px-2 bg-[#972123] w-[100px] flex justify-center items-center">
      <span className="text-white text-xl font-inconsolata">Path</span>
    </div>

    {/* Title */}
    <h2 className="text-white text-[40px] font-orbitron font-medium capitalize leading-[48px]">
      Find your path
    </h2>

    {/* Description */}
    <p className="text-[#a0a0a0] text-lg font-inconsolata leading-relaxed">
      Whether you’re just starting out, have some experience, or consider
      yourself an advanced practitioner, there’s an exciting and tailored path
      waiting for you to advance your skills.
    </p>
  </div>
);

// 🔹 Path Card Component
const PathCard = ({
  path,
}: {
  path: { title: string; description: string; icon: string };
}) => (
  <div className="p-6 bg-[#1d1e1f] rounded-lg flex gap-4">
    <Icon name={"UpIcon"} className="w-7 h-7 text-white" />
    <div className="flex flex-col gap-2">
      <h3 className="text-white text-xl font-orbitron font-medium">
        {path.title}
      </h3>
      <p className="text-[#a0a0a0] text-base font-inconsolata">
        {path.description}
      </p>
    </div>
  </div>
);
