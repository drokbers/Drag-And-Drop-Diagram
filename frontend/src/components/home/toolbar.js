import React, { useState } from "react";

import { DraggableNode } from "./draggableNode";
import ExtendedNodes from "./ExtendedNodes";

export const PipelineToolbar = () => {
  const [showExtendedNodes, setShowExtendedNodes] = useState(false);
  return (
    <div className="p-2  relative flex flex-wrap gap-3">
      <DraggableNode type="customInput" label="Input" />
      <DraggableNode type="text" label="Text" />
      <DraggableNode type="customOutput" label="Output" />

      <button
        className="text-semibold text-xl   bg-primary flex   shadow-2xl w-36  justify-center h-20 items-center  transition duration-150 ease-in-out  gap-2 p-2 rounded-md      hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
        onClick={() => {
          setShowExtendedNodes(!showExtendedNodes);
        }}
      >
        Show more
      </button>
      {showExtendedNodes && <ExtendedNodes />}
    </div>
  );
};
