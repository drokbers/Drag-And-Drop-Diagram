import React, { useEffect, useRef } from "react";

const ResizableTextarea = ({ value, onChange }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={onChange}
      style={{ resize: "none", overflow: "hidden" }}
      className="bg-transparent "
    />
  );
};

export default ResizableTextarea;
