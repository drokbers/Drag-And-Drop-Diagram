import React from "react";

import { useState } from "react";

import { GenerateHandle, InputComponent } from "./nodeItems/";

import nodeData from "./nodeData";

const CustomNodes = ({ id, data, type }) => {
  const getCurrentValue = () => {
    if (data?.outputName) return data.outputName;
    switch (type) {
      case "input":
        return id.replace("customInput-", "input_");
      case "output":
        return id.replace("customOutput-", "output_");
      case "text":
        return "{{input}}";
      default:
        return "";
    }
  };
  const nodeConfig = nodeData[type];

  const [currentValue, setCurrentValue] = useState(getCurrentValue());
  const [inputType, setInputType] = useState(data.inputType || "Text");

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="relative w-56 bg-gray shadow-xl  rounded-md  border-2 border-primary">
      <div className="bg-primary w-full  pl-1 rounded-t-md flex gap-2 items-center  text-stone">
        <img src={nodeConfig.style.icon} alt="icon" className="w-6 h-6=" />
        <span className="text-lg font-medium">{nodeConfig.name}</span>
      </div>

      <div className="flex flex-col mb-2 justify-center items-center min-h-max gap-2 pt-1 ">
        {nodeConfig.description && (
          <div className="h-12">
            <span>{capitalizeFirstLetter(nodeConfig.description)}</span>
          </div>
        )}

        <InputComponent
          config={nodeConfig.inputConfig}
          currentValue={currentValue}
          setCurrentValue={setCurrentValue}
          inputType={inputType}
          setInputType={setInputType}
          type={type}
        />
      </div>

      <GenerateHandle
        type={type}
        currentValue={currentValue}
        nodeConfig={nodeConfig}
        id={id}
      />
    </div>
  );
};
export default CustomNodes;
