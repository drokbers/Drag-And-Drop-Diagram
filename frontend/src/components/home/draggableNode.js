// draggableNode.js
import { filterIcon } from "../../assets/icons";

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };

    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );

    console.log("dragstart", appData);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={`${type}   bg-primary flex   shadow-2xl w-36  h-20 items-center  transition duration-150 ease-in-out  gap-2 p-2 rounded-md      hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 `}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => {
        event.target.style.cursor = "grab";
      }}
      draggable
    >
      <div
        className={`bg-orange-300  w-12 h-12 items-center justify-center flex`}
      >
        <img src={filterIcon} alt="logo" className="w-{20px} h-[20px]" />
      </div>

      <div className="flex ">
        <span className="font-semibold">{label}</span>
      </div>
    </div>
  );
};
