"use client";

import React from "react";
import "../styles/DottedBall.css";

interface DottedBallProps {
  state: "typing" | "sending" | "received";
}

const DottedBall: React.FC<DottedBallProps> = ({ state }) => {
  return (
    <div className={`dotted-ball ${state}`}>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  );
};

export default DottedBall;
