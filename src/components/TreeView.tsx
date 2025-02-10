"use client";

import { ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";

interface TreeNode {
  name: string;
  children?: TreeNode[];
}

const treeData: TreeNode = {
  name: "Local Disk (C:)",
  children: [
    { name: "Program Files" },
    {
      name: "Users",
      children: [{ name: "Smith" }, { name: "Public" }, { name: "Admin" }],
    },
    { name: "Windows" },
  ],
};

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

  return (
    <div className="w-full">
      <div
        className={`flex items-center cursor-pointer p-1 ${
          activeNode === node.name ? "bg-red text-white" : ""
        }`}
        onClick={() => onSelect(node.name)}
      >
        {node.children ? (
          expanded ? (
            <ChevronDown
              className="w-4 h-4 mr-1"
              onClick={(e) => {
                e.stopPropagation();
                setExpanded(!expanded);
              }}
            />
          ) : (
            <ChevronRight
              className="w-4 h-4 mr-1"
              onClick={(e) => {
                e.stopPropagation();
                setExpanded(!expanded);
              }}
            />
          )
        ) : (
          <span className="w-4 h-4 mr-1" />
        )}
        <span>{node.name}</span>
      </div>
      {expanded && node.children && (
        <div className="pl-4">
          {node.children.map((child, index) => (
            <TreeView
              key={index}
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
    <div className="w-full bg-[#141616] font-inconsolata text-white/60 text-sm">
      <TreeView
        node={treeData}
        onSelect={setActiveNode}
        activeNode={activeNode}
      />
    </div>
  );
}
