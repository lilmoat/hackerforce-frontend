import Icon from "@/components/Icon";

// 🔹 Security Training Data
type IconName =
  | "OffensiveIcon"
  | "CloudIcon"
  | "DefensiveIcon"
  | "NetworkIcon"
  | "PhysicalIcon"
  | "ProgrammingIcon";

const securityCategories: {
  name: string;
  icon: IconName;
  description: string;
}[] = [
  {
    name: "Offensive Security",
    icon: "OffensiveIcon",
    description: "Master Active Directory and obliterate your targets.",
  },
  {
    name: "Cloud Security",
    icon: "CloudIcon",
    description:
      "Understand and secure cloud environments against modern threats.",
  },
  {
    name: "Defensive Security",
    icon: "DefensiveIcon",
    description: "Learn how to defend against sophisticated cyber attacks.",
  },
  {
    name: "Network Security",
    icon: "NetworkIcon",
    description:
      "Gain expertise in securing and hardening network infrastructure.",
  },
  {
    name: "Physical Security",
    icon: "PhysicalIcon",
    description:
      "Explore social engineering tactics and physical pentesting techniques.",
  },
  {
    name: "Programming",
    icon: "ProgrammingIcon",
    description:
      "Write powerful scripts and exploits to automate security tasks.",
  },
];

export default function Security() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#5f0001] to-[#972123] flex flex-col items-center gap-[50px]">
      <div className="w-full max-w-[1440px] gap-10 flex flex-col items-center xl:p-[100px] md:p-10 lg:p-12 p-5">
        {/* Header */}
        <SecurityHeader />

        {/* Security Categories Grid */}
        <div className="grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5 w-full">
          {securityCategories.map((category, index) => (
            <SecurityCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------ COMPONENTS ------------------ */

// 🔹 Header Section
const SecurityHeader = () => (
  <div className="flex flex-col items-start md:items-start gap-6">
    {/* Training Tag */}
    <div className="px-2 bg-[#181a1b] flex items-center">
      <span className="text-white text-xl font-inconsolata">Training</span>
    </div>

    {/* Title */}
    <h2 className="flex-1 text-white text-[40px] font-orbitron font-medium capitalize leading-[48px]">
      Security Training
    </h2>

    {/* Description */}
    <p className="flex-1 text-white text-lg font-inconsolata leading-relaxed">
      We specialize in hardware Pentesting, Physical Pentesting, Cloud
      Pentesting, Network Pentesting, Programming, and more, fostering expertise
      in the dynamic field of offensive cyber security training.
    </p>
  </div>
);

// 🔹 Security Training Card
const SecurityCard = ({
  category,
}: {
  category: { name: string; icon: IconName; description: string };
}) => (
  <div className="p-6 bg-white/5 rounded-lg flex gap-4 items-start">
    <Icon name={category.icon} className="w-9 h-9 text-white" />
    <div className="flex flex-col gap-2">
      <h3 className="text-white text-xl font-orbitron font-medium">
        {category.name}
      </h3>
      <p className="text-white text-base font-inconsolata leading-normal">
        {category.description}
      </p>
    </div>
  </div>
);
