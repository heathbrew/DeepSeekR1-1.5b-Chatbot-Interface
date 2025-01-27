"use client";

import React from "react";
import "../styles/SubmitButton.css";

interface SubmitButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick, disabled }) => {
  return (
    <button
      className="submit-button"
      onClick={onClick}
      disabled={disabled}
    >
      Submit
    </button>
  );
};

export default SubmitButton;
