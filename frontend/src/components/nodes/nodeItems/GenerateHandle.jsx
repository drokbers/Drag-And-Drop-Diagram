import React from "react";
import { Handle, Position } from "reactflow";

import { extractVariables } from "../../../utilies/extractVariables";

import { toast } from "react-toastify";

const NodeHandles = ({ type, currentValue, nodeConfig, id }) => {
  extractVariables(currentValue);
  const notify = () => toast.error("Exceeded maximum limit of 5 handles.!!");

  const generateHandlesForType = () => {
    if (type !== "text") return nodeConfig.handles;

    const vars = extractVariables(currentValue);
    const remainingHandles = 6 - nodeConfig.handles.length;

    if (vars.length > remainingHandles) {
      console.error(
        `Exceeded maximum limit of 5 handles. Only adding ${remainingHandles} new handles.`
      );
      notify();
      vars.length = remainingHandles;
    }

    const handles = [...nodeConfig.handles];
    let offset = 0;

    vars.forEach((variable) => {
      handles.push({
        type: "target",
        position: Position.Left,
        idSuffix: variable,
        style: { top: `${50 * offset}px ` },
        label: `{{${variable}}}`,
      });
      offset++;
    });

    return handles;
  };

  const handles = generateHandlesForType();

  const dots = document.getElementsByClassName(`react-flow__handle`);
  Array.from(dots).forEach((el) => {
    el.style.minWidth = `10px`;
    el.style.minHeight = `10px`;

    if (el.getAttribute("data-handlepos") === "left") {
      el.style.left = "-6px";
    } else if (el.getAttribute("data-handlepos") === "right") {
      el.style.right = "-6px";
    }
  });

  return (
    <div>
      {handles.map((handle) => (
        <Handle
          key={`${handle.type}-${handle.position}-${handle.idSuffix}`}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.idSuffix}`}
          style={handle.style}
          label={handle.label}
        />
      ))}
    </div>
  );
};

export default NodeHandles;
