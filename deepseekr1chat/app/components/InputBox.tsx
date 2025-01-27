"use client";

import React from "react";
import "../styles/InputBox.css";

interface InputBoxProps {
  onInputChange: (input: string) => void; // Callback to pass input back to parent
  disabled?: boolean;
}

const InputBox: React.FC<InputBoxProps> = ({ onInputChange, disabled }) => {
  return (
    <textarea
      className="input-box"
      onChange={(e) => onInputChange(e.target.value)} // Pass user input back to parent
      placeholder="Type your query..."
      disabled={disabled}
    />
  );
};

export default InputBox;
