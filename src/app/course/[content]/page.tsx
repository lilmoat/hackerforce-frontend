"use client";

import { successAlert } from "@/components/ToastGroup";
import { ModalContext } from "@/contexts/ModalContext";
import {
  ExpandableSectionData,
  ModuleProgressData,
  TaskDetailsData,
  TreeDirectoryData,
} from "@/data/data";
import { Check, Copy } from "lucide-react";
import { useContext, useState } from "react";
import { BsArrowsCollapse, BsArrowsExpand } from "react-icons/bs";
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

  const { openGetHelpModal } = useContext(ModalContext);

  return (
    <div className="relative max-w-[1440px] xl:p-[100px] md:p-10 lg:p-12 p-5 md:mt-12 mt-[100px]">
      <div className="pb-[100px] flex flex-col lg:flex-row gap-[50px]">
        <Sidebar />
        <MainContent openGetHelpModal={openGetHelpModal} />
      </div>
    </div>
  );
}

const Sidebar = () => (
  <div className="lg:w-auto w-full flex flex-col gap-6 lg:max-w-[300px]">
    <ModuleProgress />
    <DirectoryPage />
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
  <div className="h-[300px] p-4 bg-[#1d1f20] rounded-2xl flex-col justify-center items-start gap-4 inline-flex blur-sm select-none cursor-not-allowed">
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

const MainContent = ({
  openGetHelpModal,
}: {
  openGetHelpModal: () => void;
}) => (
  <div className="w-full flex flex-col gap-8">
    <TaskSection title="SeImpersonate Privilege" details={TaskDetailsData} />
    <TaskSection title="Build Our Exploit" details={TaskDetailsData} />
    <CodeTerminal />
    <Challenges />
    <NavigationButtons openGetHelpModal={openGetHelpModal} />
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
            openIndex === index ? "border" : ""
          } w-full border-r border-[#2f3132]`}
          key={index}
        >
          <div
            className={`px-3 py-1 bg-[#141616] ${
              openIndex === index && "border-b border-[#2f3132]"
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
    <h2 className="text-white text-2xl font-bold font-['Orbitron']">{title}</h2>
    <div className="text-[#a0a0a0] xl:text-lg text-sm font-normal font-['Inconsolata']">
      {details.map((detail, index) => (
        <p key={index}>{detail}</p>
      ))}
    </div>
  </div>
);

const Challenges = () => {
  const [inputValues, setInputValues] = useState<string[]>([]);
  const [errorIndices, setErrorIndices] = useState<number[]>([]);
  const [correctIndices, setCorrectIndices] = useState<number[]>([]); // Tracks correct answers

  const handleInputChange = (index: number, value: string) => {
    if (correctIndices.includes(index)) return; // Prevent modification if correct
    const updatedInputs = [...inputValues];
    updatedInputs[index] = value;
    setInputValues(updatedInputs);
  };

  const handleSubmit = (index: number, correctAnswer: string) => {
    const userAnswer = inputValues[index]?.trim().toLowerCase();
    const correct = correctAnswer.trim().toLowerCase();

    if (userAnswer !== correct) {
      setErrorIndices((prev) => [...prev, index]);

      // Remove error state after animation
      setTimeout(() => {
        setErrorIndices((prev) => prev.filter((i) => i !== index));
      }, 1200);
    } else {
      successAlert("Success!");
      setCorrectIndices((prev) => [...prev, index]); // Mark as correct
      setTimeout(() => {
        setCorrectIndices((prev) => prev.filter((i) => i !== index));
      }, 1200);
    }
  };

  const ChallengesData = [
    {
      content: "Solve these challenges",
      questions: [
        { question: "What is 2 + 2?", answer: "4", reward: "+1 XP" },
        {
          question: "What is the capital of France?",
          answer: "paris",
          reward: "+1 XP",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-white text-xl font-bold font-['Orbitron']">
        Challenges
      </h2>

      {ChallengesData.map((challenge, challengeIndex) => (
        <div key={challengeIndex}>
          <p className="text-[#a0a0a0] text-sm font-bold font-['Inconsolata']">
            {challenge.content}
          </p>
          <div className="flex flex-col gap-4 py-2">
            {challenge.questions.map((q, questionIndex) => {
              const inputIndex = challengeIndex * 100 + questionIndex; // Unique index for tracking errors
              return (
                <div className="w-full flex flex-col gap-2" key={inputIndex}>
                  <div className="w-full flex items-end justify-between gap-3">
                    <div className="w-full flex flex-col gap-2">
                      <div className="flex justify-between items-center w-full">
                        <p className="text-[#a0a0a0] text-sm font-bold font-['Inconsolata']">
                          {q.question}
                        </p>
                        <span className="text-[#d44244] text-sm font-bold font-inconsolata">
                          {q.reward}
                        </span>
                      </div>

                      {/* Input Box */}
                      <div
                        className={`w-full px-3 py-2 bg-[#141616] rounded-lg border ${
                          errorIndices.includes(inputIndex)
                            ? "border-red-500 animate-flash"
                            : correctIndices.includes(inputIndex)
                            ? "animate-success"
                            : "border-[#2f3132]"
                        } flex justify-start items-center gap-2.5`}
                      >
                        <input
                          type="text"
                          value={inputValues[inputIndex] || ""}
                          onChange={(e) =>
                            handleInputChange(inputIndex, e.target.value)
                          }
                          readOnly={correctIndices.includes(inputIndex)} // Prevent editing after correct answer
                          className={`w-full bg-transparent outline-none text-sm font-semibold font-['Inconsolata'] ${
                            correctIndices.includes(inputIndex)
                              ? "text-green"
                              : "text-white"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div
                      className="text-white text-sm font-orbitron px-6 py-2 bg-[#972123] hover:bg-[#7a1b1f] duration-200 cursor-pointer rounded-lg flex items-center gap-1"
                      onClick={() => handleSubmit(inputIndex, q.answer)}
                    >
                      Submit
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

const NavigationButtons = ({
  openGetHelpModal,
}: {
  openGetHelpModal: () => void;
}) => (
  <div className="h-12 justify-between items-start flex-col md:flex-row flex gap-2">
    <div
      className="text-red w-full md:w-auto font-orbitron px-6 py-3 rounded-lg border border-[#d44244] cursor-pointer backdrop-blur-[32px] justify-center items-center gap-3 flex"
      onClick={openGetHelpModal}
    >
      Get Help
    </div>
    <div className="justify-start items-center gap-3 flex w-full md:w-auto">
      <div className="text-white w-full md:w-auto font-orbitron px-4 py-3 bg-[#2f3132] duration-200 hover:bg-[#2f3132a1] cursor-pointer rounded-lg justify-center items-center gap-1 flex">
        Back
      </div>
      <div className="text-white w-full md:w-auto font-orbitron px-6 py-3 bg-[#972123] hover:bg-[#7a1b1f] duration-200 cursor-pointer rounded-lg justify-center items-center gap-1 flex">
        Next
      </div>
    </div>
  </div>
);

const CodeTerminal = () => {
  const [expanded, setExpanded] = useState(false);

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const code = `B00L Falling short {
    [in] Handle                        %existingtoken
    [in] SWORD                         very_much_into
    [in,optional] Iknow_jow_sduhasdd    Something_upset
    [in] Weaon_illasnd_showcn_level     _sdsakvio7tad
    [in] Hacking                        Flourishing_refuse
    [in] dwusdvha                       Sijasdfhv_sadioyg97t0
  };`;

  return (
    <div className="bg-[#1d1f21] p-4 rounded-xl border border-[#2f3132] w-auto relative">
      <div className="flex justify-between items-center border-b border-[#2f3132] pb-1">
        <span className="text-white font-orbitron font-bold">Language C</span>
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={handleCopy}
            className="text-gray-400 hover:text-white"
          >
            {copied ? (
              <Check className="w-5 h-5" color="white" />
            ) : (
              <Copy className="w-5 h-5 text-white" />
            )}
          </button>
          <button
            className="text-red hover:text-red-300 cursor-pointer font-inconsolata"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <BsArrowsCollapse
                size={19}
                className="text-white cursor-pointer duration-200 hover:text-light-grey"
              />
            ) : (
              <BsArrowsExpand
                size={19}
                className="text-white cursor-pointer duration-200 hover:text-light-grey"
              />
            )}
          </button>
        </div>
      </div>
      {expanded && (
        <div className="mt-2 relative">
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

const DirectoryTree = ({ data }: { data: DirectoryNode[] }) => {
  return (
    <div className="flex flex-col w-full items-start justify-start">
      {data.map((node, index) => (
        <TreeNode key={index} node={node} />
      ))}
    </div>
  );
};

interface DirectoryNode {
  name: string;
  children?: DirectoryNode[];
}

const TreeNode = ({ node }: { node: DirectoryNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-2 w-full bg-red">
      {/* Folder/Node */}
      <div
        className={`flex items-center gap-2 cursor-pointer text-white w-full font-inconsolata`}
        onClick={toggleOpen}
      >
        <div className="w-full flex items-center justify-between">
          <span className="text-sm font-medium">{node.name}</span>
          {hasChildren && (
            <IoIosArrowUp
              color="white"
              className={`${isOpen ? "rotate-180 duration-200" : "hidden"}`}
            />
          )}
        </div>
      </div>

      {/* Render children if open */}
      {hasChildren && isOpen && (
        <div className="ml-4">
          <DirectoryTree data={node.children!} />
        </div>
      )}
    </div>
  );
};

const DirectoryPage = () => {
  return (
    <div className="bg-[#141616]">
      <DirectoryTree data={TreeDirectoryData} />
    </div>
  );
};
