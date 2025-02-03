import {
  CourseCardProps,
  IconName,
  SectionCardProps,
  TeamMember,
} from "@/types/type";

// 🔹 About Statistics Data
const AboutStatsData = [
  { value: "350", label: "Case Secured" },
  { value: "5", label: "Years of Experience" },
  { value: "100", label: "Subs Member" },
];

// 🔹 Path Options Data
const PathsData = [
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

// 🔹 FAQ Data
const FaqItemsData = [
  { question: "Who we are?", answer: "We are HackerForce Team" }, // Closed item
  {
    question: "What can I learn at HF?",
    answer:
      "Whether you’re just starting out, have some experience, or consider yourself an advanced practitioner, there’s an exciting and tailored path waiting for you to advance your skills.",
  }, // Open item
  { question: "Do we provide Labs?", answer: "Coming soon." }, // Closed item
];

const SecurityCategoriesData: {
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

// 🔹 Subscription Plans Data
const SubscriptionPlansData = [
  {
    price: "$12.99",
    type: "Monthly",
    duration: "1 month subscription",
    benefits: [
      "Access to all content",
      "Access chambers",
      "Access to Colosseums",
      "Become a HF Member",
    ],
    bgColor: "bg-[#1d1e1f]",
    buttonBg: "bg-[#972123]",
    textColor: "text-[#a0a0a0]",
  },
  {
    price: "$64.99",
    type: "BI-Annual",
    duration: "6 month subscription",
    benefits: [
      "Access to all content",
      "Access chambers",
      "Access to Colosseums",
      "1 Month free",
    ],
    bgColor: "bg-[#972123]",
    buttonBg: "bg-white",
    textColor: "text-white",
  },
  {
    price: "$129.99",
    type: "Yearly",
    duration: "12 month subscription",
    benefits: [
      "Access to all content",
      "Access chambers",
      "Access to Colosseums",
      "3 Months free",
    ],
    bgColor: "bg-[#1d1e1f]",
    buttonBg: "bg-[#972123]",
    textColor: "text-[#a0a0a0]",
  },
];

const CoursesData: CourseCardProps[] = [
  {
    title: "Intro to Ghidra",
    description: "Recognize the evil of the world.",
    xp: 500,
    difficulty: "VII",
    content: "intro",
    reward: "+2 Keys",
    progress: 20,
    image: "/imgs/course/course1.png",
    rating: 4.5,
    reviews: 25,
  },
  {
    title: "Binary Patching",
    description: "Recognize the evil of the world.",
    xp: 500,
    difficulty: "VII",
    content: "binary",
    reward: "+2 Keys",
    progress: 30,
    image: "/imgs/course/course2.png",
    rating: 4.5,
    reviews: 15,
  },
  {
    title: "Rev Eng Basics",
    description: "Recognize the evil of the world.",
    xp: 500,
    difficulty: "VII",
    content: "rev",
    reward: "+2 Keys",
    progress: 80,
    image: "/imgs/course/course3.png",
    rating: 4.5,
    reviews: 15,
  },
  {
    title: "REversing Wannacry",
    description: "Recognize the evil of the world.",
    xp: 500,
    difficulty: "VII",
    content: "reversing",
    reward: "+2 Keys",
    progress: 80,
    image: "/imgs/course/course4.png",
    rating: 4.5,
    reviews: 15,
  },
];

const TeamMembersData: TeamMember[] = [
  {
    name: "Ervin",
    role: "Founder",
    description:
      "That's why we proudly guarantee the quality and reliability of our products.",
    image: "/imgs/about/avatar1.png",
  },
  {
    name: "Remi",
    role: "Co-Founder",
    description:
      "That's why we proudly guarantee the quality and reliability of our products.",
    image: "/imgs/about/avatar2.png",
  },
  {
    name: "Lukas",
    role: "Developer",
    description:
      "That's why we proudly guarantee the quality and reliability of our products.",
    image: "/imgs/course/course4.png",
  },
];

const SectionCardData: SectionCardProps[] = [
  {
    title: "Malware",
    description:
      "We take great pride in ensuring the satisfaction of our customers, which is why we guarantee that the products we sell will bring happiness to each and every customer.",
    coursesCompleted: 12,
    totalCourses: 24,
    bgImage: "/imgs/section/panel1.png",
  },
  {
    title: "Malware",
    description:
      "We take great pride in ensuring the satisfaction of our customers.",
    coursesCompleted: 12,
    totalCourses: 24,
    bgImage: "/imgs/section/panel2.png",
    blur: true,
  },
  {
    title: "Malware",
    description:
      "We take great pride in ensuring the satisfaction of our customers.",
    coursesCompleted: 12,
    totalCourses: 24,
    bgImage: "/imgs/section/panel3.png",
    blur: true,
  },
  {
    title: "Malware",
    description:
      "We take great pride in ensuring the satisfaction of our customers.",
    coursesCompleted: 12,
    totalCourses: 24,
    bgImage: "/imgs/section/panel4.png",
    blur: true,
  },
];

const TermsData = [
  {
    title: "Refund Policy",
    content: [
      "Use OSNT in attempt to unmask the vigilante.",
      "Step into the realm of relentless digital pursuit and harness the power of hacking.",
      "Our content will immerse you in the art of ethical hacking offensively, defensively while learning the latest and most powerful techniques.",
    ],
  },
  {
    title: "Payment & Fees",
    content: [
      "Use OSNT in attempt to unmask the vigilante.",
      "Use phishing to attack the vigilante. Step into the realm of relentless digital pursuit and harness the power of hacking.",
      "Our content will immerse you in the art of ethical hacking offensively.",
    ],
  },
  {
    title: "Use of Services",
    content: [
      "Use OSNT in attempt to unmask the vigilante.",
      "Use phishing to attack the vigilante. Defensively while learning the latest and most powerful techniques.",
      "Pwn the vigilante’s machine and gather all this malicious data.",
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      "Use OSNT in attempt to unmask the vigilante.",
      "Use phishing to attack the vigilante while learning the latest and most powerful techniques.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "Use OSNT in attempt to unmask the vigilante.",
      "Step into the realm of relentless digital pursuit and harness the power of hacking.",
    ],
  },
  {
    title: "Governing Law & Jurisdiction",
    content: [
      "Use OSNT in attempt to unmask the vigilante.",
      "Use phishing to attack the vigilante.",
    ],
  },
  {
    title: "Modifications to Terms",
    content: [
      "Take a role of vigilante. Someone in your local community has been vandalizing property.",
      "Your Task:",
      "Use OSNT in an attempt to unmask the vigilante.",
      "Use phishing to attack the vigilante.",
      "Pwn the vigilante’s machine and gather all this malicious data.",
      "Report the vigilante and shut him down.",
    ],
  },
];

const ModuleProgressData = {
  title: "Windows Privilege Escalation I",
  completedModules: 8,
  totalModules: 16,
  progress: 30,
  xp: 500,
  difficulty: "VII",
  reward: "+2 Keys",
};

const TaskDetailsData = [
  "Download the provided 'Hello World' executable file.",
  "Open Ghidra and create a new project.",
  "Import the executable into your project.",
  "Analyze the file to view the disassembly and decompiled code.",
  "Locate the main function and identify the string 'Hello, World!' in the code.",
  "Document your findings, including the address of the main function and the location of the string.",
  "Submission: Submit a brief report detailing your findings, including screenshots of the disassembly and decompiled code where you found the key elements.",
];

const ChallengesData = [
  {
    content:
      "Analyze a simple 'Hello World' executable file using Ghidra to identify its main functions and understand its structure.",
    questions: [
      {
        question:
          "What Windows API function allows us to examine our access token?",
        reward: "+1 Keys",
        category: "Information Gathering",
      },
      {
        question: "What privilege can we exploit to impersonate a client?",
        reward: "+1 Keys",
        category: "",
      },
    ],
  },
];

const ExpandableSectionData = [
  {
    title: "About this course",
    content: [
      {
        title: "Descriptions",
        content:
          "Analyze a simple `Hello World` executable file using Ghidra to identify its main functions and understand its structure.",
      },
    ],
  },
  {
    title: "Enumerations",

    content: [{ title: "Information", content: "coming soon" }],
  },
  {
    title: "Token Abuse",

    content: [
      { title: "What are tokens", content: "coming soon" },
      { title: "Can we share to anyone?", content: "coming soon" },
    ],
  },
  {
    title: "Privilege Group Abuse",
    content: [{ title: "Can I get help?", content: "coming soon" }],
  },
];

export {
  AboutStatsData,
  PathsData,
  FaqItemsData,
  SecurityCategoriesData,
  SubscriptionPlansData,
  CoursesData,
  TeamMembersData,
  SectionCardData,
  TermsData,
  ModuleProgressData,
  TaskDetailsData,
  ChallengesData,
  ExpandableSectionData,
};
