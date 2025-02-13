import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { BsArrowsCollapse, BsArrowsExpand } from "react-icons/bs";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeTerminal = () => {
  const [expanded, setExpanded] = useState(true);

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

export default CodeTerminal;
