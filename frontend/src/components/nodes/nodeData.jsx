import { inputIcon, textIcon, robotIcon, filterIcon } from "../../assets/icons";
import { Position } from "reactflow";

const nodeData = {
  input: {
    name: "Input",
    handles: [{ type: "source", position: Position.Right, idSuffix: "value" }],
    inputConfig: {
      valueType: "inputType",
      valueName: "Name",
      typeOptions: ["Text", "File"],
    },
    style: {
      icon: inputIcon,
    },
  },
  output: {
    name: "Output",
    handles: [{ type: "target", position: Position.Left, idSuffix: "value" }],
    inputConfig: {
      valueType: "outputType",
      valueName: "Name",
      typeOptions: ["Text", "Image"],
    },
    style: {
      icon: inputIcon,
    },
  },
  text: {
    name: "Text",
    handles: [{ type: "source", position: Position.Right, idSuffix: "output" }],
    inputConfig: { valueName: "Text" },
    style: {
      icon: textIcon,
    },
  },
  llm: {
    name: "LLM",
    description: "this is a LLM.",
    handles: [
      {
        type: "target",
        position: Position.Left,
        idSuffix: "system",
        style: { top: `${100 / 3}%` },
      },
      {
        type: "target",
        position: Position.Left,
        idSuffix: "prompt",
        style: { top: `${200 / 3}%` },
      },
      { type: "source", position: Position.Right, idSuffix: "response" },
    ],
    style: {
      icon: robotIcon,
    },
  },
  alert: {
    name: "Alert",
    handles: [
      { type: "target", position: Position.Left, idSuffix: "inData" },
      { type: "source", position: Position.Right, idSuffix: "outData" },
    ],
    inputConfig: {
      valueType: "processorType",
      valueName: "Function",
      typeOptions: ["Map", "Reduce"],
    },
    style: {
      icon: robotIcon,
    },
  },

  // 2. Logger Node
  logger: {
    name: "Logger",
    handles: [
      { type: "target", position: Position.Left, idSuffix: "logInput" },
    ],
    inputConfig: {
      valueName: "Log Message",
    },
    style: {
      icon: robotIcon,
    },
  },

  // 3. Filter Node
  filter: {
    name: "Filter",
    handles: [
      { type: "target", position: Position.Left, idSuffix: "dataIn" },
      { type: "source", position: Position.Right, idSuffix: "dataOut" },
    ],
    inputConfig: {
      valueType: "filterType",
      valueName: "Criteria",
      typeOptions: ["Greater", "Less"],
    },
    style: {
      icon: filterIcon,
    },
  },

  // 4. Counter Node
  counter: {
    name: "Counter",
    handles: [
      { type: "target", position: Position.Left, idSuffix: "data" },
      { type: "source", position: Position.Right, idSuffix: "count" },
    ],
    inputConfig: {
      valueName: "Threshold",
    },
    style: {
      icon: robotIcon,
    },
  },

  // 5. Combiner Node
  combiner: {
    name: "Combiner",
    handles: [
      { type: "target", position: Position.Left, idSuffix: "data1" },
      { type: "target", position: Position.Left, idSuffix: "data2" },
      { type: "source", position: Position.Right, idSuffix: "result" },
    ],
    inputConfig: {
      valueType: "combinerType",
      valueName: "Method",
      typeOptions: ["Merge", "Concat"],
    },
    style: {
      icon: robotIcon,
    },
  },
};

export default nodeData;
