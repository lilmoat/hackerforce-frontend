"use client";

import {
  ChallengesData,
  ExpandableSectionData,
  ModuleProgressData,
  TaskDetailsData,
} from "@/data/data";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Content({
  params,
}: {
  params: Promise<{ content: string }>;
}) {
  const getParams = async () => {
    const { content } = await params;
    console.log(content);
  };

  getParams();

  return (
    <div className="relative max-w-[1440px] xl:p-[100px] md:p-10 lg:p-12 p-5 md:mt-12 mt-[100px]">
      <div className="pb-[100px] flex flex-col lg:flex-row gap-[50px]">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

const Sidebar = () => (
  <div className="lg:w-[448px] w-full flex flex-col gap-6">
    <ModuleProgress />
    {ExpandableSectionData.map((section, index) => (
      <ExpandableSection
        title={section.title}
        content={section.content}
        key={index}
      />
    ))}
    <PracticeMachine />
  </div>
);

const PracticeMachine = () => (
  <div className="h-[300px] p-4 bg-[#1d1f20] rounded-2xl flex-col justify-center items-start gap-4 inline-flex blur-sm cursor-not-allowed">
    <div className="self-stretch h-[38px] flex-col justify-center items-start flex">
      <div className="self-stretch text-white text-sm font-medium font-['Orbitron'] leading-tight">
        Practice Machine
      </div>
      <div className="self-stretch text-[#a0a0a0] text-xs font-normal font-['Inconsolata'] leading-[18px]">
        Practice down here
      </div>
    </div>
    <div className="self-stretch grow shrink basis-0 p-3 bg-[#181a1b] rounded-lg border border-[#2f3132] flex-col justify-start items-start gap-1 flex">
      <div className="self-stretch grow shrink basis-0 text-center text-[#a0a0a0] text-sm font-normal font-['Inconsolata'] leading-tight">
        Practice here
      </div>
    </div>
    <div className="flex-col justify-center items-start gap-4 flex">
      <div className="text-white font-orbitron cursor-pointer self-stretch px-6 py-2 duration-200 bg-[#972123] hover:bg-[#7a1b1f] rounded-lg justify-center items-center gap-1 inline-flex">
        Spawn
      </div>
    </div>
  </div>
);

const MainContent = () => (
  <div className="w-full flex flex-col gap-8">
    <TaskSection title="SeImpersonate Privilege" details={TaskDetailsData} />
    <TaskSection title="Build Our Exploit" details={TaskDetailsData} />
    <CodeTerminal />
    <Challenges />
    <NavigationButtons />
  </div>
);

const ModuleProgress = () => (
  <div className="flex flex-col gap-3">
    <h2 className="text-[#eeeeee] text-2xl font-medium font-['Orbitron']">
      {ModuleProgressData.title}
    </h2>
    <div className="flex flex-col gap-1">
      <TaskProgress />
    </div>
  </div>
);

const TaskProgress = () => (
  <div className="flex flex-col gap-3">
    <div className="h-3 justify-between items-start inline-flex">
      <div className="text-[#d44245] text-xs font-medium font-['Orbitron'] leading-3">
        {ModuleProgressData.completedModules} of{" "}
        {ModuleProgressData.totalModules} modules completed
      </div>
      <div className="text-[#d44245] text-xs font-medium font-['Orbitron'] leading-3">
        {ModuleProgressData.progress}%
      </div>
    </div>

    <div className="w-full h-1.5 relative bg-[#2f3132] rounded-[100px]">
      <div
        className="h-1.5 bg-[#d44245] rounded-[100px]"
        style={{ width: `${ModuleProgressData.progress}%` }}
      />
    </div>
    <InfoRow label="Acquirable XP:" value={`+${ModuleProgressData.xp}`} />
    <InfoRow label="Difficulty:" value={ModuleProgressData.difficulty} />
    <InfoRow label="Reward:" value={ModuleProgressData.reward} />
  </div>
);

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between text-sm font-bold font-['Inconsolata'] text-[#a0a0a0]">
    <span>{label}</span>
    <span className="text-white">{value}</span>
  </div>
);

const ExpandableSection = ({
  title,
  content,
}: {
  title: string;
  content: { title: string; content: string }[];
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-start justify-center w-full">
      <span className="text-white text-md font-medium font-orbitron mb-3">
        {title}
      </span>
      {content.map(({ title, content }, index) => (
        <div
          className={`${
            openIndex === index ? "border-[#d44244] border" : ""
          } w-full border-r border-[#2f3132]`}
          key={index}
        >
          <div
            className={`px-3 py-1 bg-[#141616] ${
              openIndex === index && "border-b border-[#d44244]"
            } flex justify-between items-center cursor-pointer`}
            onClick={() => toggleOpen(index)}
          >
            <span className="text-[#a0a0a0] text-sm font-medium font-['Inconsolata']">
              {title}
            </span>
            <IoIosArrowUp
              color="white"
              className={`${
                openIndex === index
                  ? "rotate-180 duration-200"
                  : "rotate-0 duration-200"
              }`}
            />
          </div>
          {openIndex === index && (
            <div className="px-3 py-2">
              <p className="text-white text-sm font-inconsolata">{content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const TaskSection = ({
  title,
  details,
}: {
  title: string;
  details: string[];
}) => (
  <div className="flex flex-col gap-4">
    <h2 className="text-white text-xl font-bold font-['Orbitron']">{title}</h2>
    <div className="text-[#a0a0a0] text-sm font-bold font-['Inconsolata']">
      {details.map((detail, index) => (
        <p key={index}>{detail}</p>
      ))}
    </div>
  </div>
);

const Challenges = () => (
  <div className="flex flex-col gap-6">
    <h2 className="text-white text-xl font-bold font-['Orbitron']">
      Challenges
    </h2>
    {ChallengesData.map((q, index) => (
      <div key={index}>
        <p
          className="text-[#a0a0a0] text-sm font-bold font-['Inconsolata']"
          key={index}
        >
          {q.content}
        </p>
        <div className="flex items-start justify-center gap-2 flex-col">
          {q.questions.map((q, index) => (
            <div className="w-full flex flex-col gap-2" key={index}>
              <div
                key={index}
                className="flex justify-between items-center gap-4 w-full"
              >
                <p className="text-[#a0a0a0] text-sm font-bold font-['Inconsolata']">
                  {q.question}
                </p>
                <span className="text-[#d44244] text-sm font-bold font-inconsolata">
                  {q.reward}
                </span>
              </div>
              <div className="w-full flex items-center justify-between gap-3">
                <div className="w-full px-3 py-2 bg-[#141616] rounded-lg border border-[#2f3132] justify-start items-center gap-2.5 inline-flex">
                  <input className="grow bg-transparent outline-none shrink basis-0 self-stretch text-[#92f147] text-sm font-semibold font-['Inconsolata'] leading-[18px]" />
                  <div className="w-2 h-2 rotate-180 bg-[#92f147] rounded-full" />
                </div>
                <div className="text-white text-sm font-orbitron px-6 py-2 bg-[#972123] hover:bg-[#7a1b1f] duration-200 cursor-pointer rounded-lg justify-center items-center gap-1 flex">
                  Submit
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const NavigationButtons = () => (
  <div className="h-12 justify-between items-start flex-col md:flex-row flex gap-2">
    <div className="text-red w-full md:w-auto font-orbitron px-6 py-3 rounded-lg border border-[#d44244] cursor-pointer backdrop-blur-[32px] justify-center items-center gap-3 flex">
      Get Help
    </div>
    <div className="justify-start items-center gap-3 flex w-full md:w-auto">
      <div className="text-white w-full md:w-auto font-orbitron px-4 py-3 bg-[#2f3132] duration-200 hover:bg-[#2f3132a1] cursor-pointer rounded-lg justify-center items-center gap-1 flex">
        Save & Back
      </div>
      <div className="text-white w-full md:w-auto font-orbitron px-6 py-3 bg-[#972123] hover:bg-[#7a1b1f] duration-200 cursor-pointer rounded-lg justify-center items-center gap-1 flex">
        Next
      </div>
    </div>
  </div>
);

const CodeTerminal = () => {
  const [expanded, setExpanded] = useState(false);

  const code = `B00L Falling short {
    [in] Handle                        %existingtoken
    [in] SWORD                         very_much_into
    [in,optional] Iknow_jow_sduhasdd    Something_upset
    [in] Weaon_illasnd_showcn_level     _sdsakvio7tad
    [in] Hacking                        Flourishing_refuse
    [in] dwusdvha                       Sijasdfhv_sadioyg97t0
  };`;

  return (
    <div className="sm:w-full bg-[#1d1f20] text-white p-4 rounded-xl border border-[#2f3132] w-[340px]">
      <div className="flex justify-between items-center border-b border-[#2f3132] pb-1">
        <span className="text-white font-orbitron font-bold">Language C</span>
        <button
          className="text-red hover:text-red-300 cursor-pointer font-inconsolata"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Collapse" : "Extend →"}
        </button>
      </div>
      {expanded && (
        <div className="mt-2 w-full">
          <SyntaxHighlighter
            language="typescript"
            style={tomorrowNight}
            showLineNumbers
          >
            {code}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
};
