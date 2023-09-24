import { DraggableNode } from "./draggableNode";
import nodeData from "../nodes/nodeData";

const renderNodeGroup = (start, end) => (
  <div className="flex gap-3">
    {Object.entries(nodeData)
      .slice(start, end)
      .map(([nodeType, nodeDetails]) => (
        <DraggableNode
          type={nodeType}
          label={nodeDetails.name}
          key={nodeType}
        />
      ))}
  </div>
);

const ExtendedNodes = () => {
  const nodeRanges = [
    { start: 3, end: 6 },
    { start: 6, end: 10 },
  ];

  return (
    <div className="absolute z-30 left-2 top-28 flex flex-col gap-5">
      {nodeRanges.map((range, index) => (
        <div className="flex relative gap-3" key={index}>
          {renderNodeGroup(range.start, range.end)}
        </div>
      ))}
    </div>
  );
};

export default ExtendedNodes;
