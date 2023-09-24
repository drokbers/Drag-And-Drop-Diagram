import React from "react";
import ResizableTextarea from "../../../layout/resizableTextarea";
import { Select, Option } from "@material-tailwind/react";

import { extractVariables } from "../../../utilies/extractVariables";

const InputComponent = ({
  config,
  currentValue,
  setCurrentValue,
  inputType,
  setInputType,
  type,
}) => (
  <div className="  flex flex-col mb-2 justify-center items-center min-h-max gap-2 pt-1 ">
    {config && (
      <div className="w-full border border-blue-gray-200 rounded-md ">
        <label className="flex flex-col">
          <span className=" font-semibold"> {config.valueName} </span>
          {type === "text" &&
            extractVariables(currentValue)
              .slice(0, 5)
              .map((variable, index) => {
                return (
                  <div
                    style={{
                      top: `${index * 50 - 15}px`,
                      left: `${-variable.length * 9 - 10}px`,
                    }}
                    className={`items-center absolute  
                    }]`}
                  >
                    <></>
                    <span className=" text-slate ">{variable}</span>
                  </div>
                );
              })}
          {console.log(inputType, "inputType")}
          <ResizableTextarea
            value={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}
          />
        </label>
      </div>
    )}

    {config && config.typeOptions && (
      <div className="">
        <Select
          label={`Type: ${inputType}`}
          onChange={(selectedValue) => setInputType(selectedValue)}
          value={inputType}
          className=""
        >
          {config.typeOptions.map((option, index) => (
            <Option key={index} value={option} className="text-slate ">
              {option}
            </Option>
          ))}
        </Select>
      </div>
    )}
  </div>
);

export default InputComponent;
