"use client";

import React from "react";
import "../styles/ResponseDisplay.css";

interface ResponseDisplayProps {
  response: string;
}

const ResponseDisplay: React.FC<ResponseDisplayProps> = ({ response }) => {
  return (
    response && (
      <div className="response-display">
        <h2>Response:</h2>
        <p>{response}</p>
      </div>
    )
  );
};

export default ResponseDisplay;
