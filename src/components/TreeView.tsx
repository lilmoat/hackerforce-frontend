"use client";

import { ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";

interface TreeNode {
  name: string;
  children?: TreeNode[];
}

const treeData: TreeNode[] = [
  {
    name: "Foor",
    children: [
      { name: "X" },
      {
        name: "Y",
        children: [{ name: "x" }, { name: "y" }, { name: "z" }],
      },
      { name: "Z" },
    ],
  },
  {
    name: "bar",
    children: [
      { name: "a" },
      {
        name: "b",
        children: [{ name: "a" }, { name: "b" }, { name: "c" }],
      },
      { name: "c" },
    ],
  },
];

const TreeView = ({
  node,
  onSelect,
  activeNode,
}: {
  node: TreeNode;
  onSelect: (name: string) => void;
  activeNode: string;
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = (e: React.MouseEvent) => {
    setExpanded(!expanded);
  };

  return (
    <div className="w-full">
      <div
        className={`flex items-center cursor-pointer p-1 rounded-md ${
          activeNode === node.name
            ? "bg-red-600 text-red font-extrabold"
            : "hover:bg-grey/50 duration-200 font-normal"
        }`}
        onClick={() => onSelect(node.name)}
      >
        {node.children ? (
          <span onClick={handleToggle} className="mr-1">
            {expanded ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </span>
        ) : (
          <span className="w-4 h-4 mr-1" />
        )}
        <span onClick={handleToggle} className="w-full">
          {node.name}
        </span>
      </div>
      {expanded && node.children && (
        <div className="pl-4">
          {node.children.map((child, index) => (
            <TreeView
              key={`${node.name}-${index}`}
              node={child}
              onSelect={onSelect}
              activeNode={activeNode}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default function FileTree() {
  const [activeNode, setActiveNode] = useState("");

  return (
    <div className="w-full bg-[#141616] font-mono text-white/60 text-sm p-2">
      {treeData.map((node, index) => (
        <TreeView
          key={index}
          node={node}
          onSelect={setActiveNode}
          activeNode={activeNode}
        />
      ))}
    </div>
  );
}
