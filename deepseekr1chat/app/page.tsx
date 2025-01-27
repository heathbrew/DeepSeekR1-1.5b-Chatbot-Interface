"use client";

import React, { useState } from "react";
import DottedBall from "./components/DottedBall";
import InputBox from "./components/InputBox";
import SubmitButton from "./components/SubmitButton";
import ResponseDisplay from "./components/ResponseDisplay";

export default function Home() {
  const [response, setResponse] = useState("");
  const [state, setState] = useState<"typing" | "sending" | "received">("typing");
  const [input, setInput] = useState(""); // State to hold user input

  const handleSubmit = async () => {
    if (!input.trim()) return; // Prevent submitting empty input
    setState("sending"); // Show sending animation
    setResponse(""); // Clear previous response
    try {
      const res = await fetch("/api/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: input }), // Send the actual user input
      });

      const data = await res.json();

      if (res.ok) {
        setResponse(data.response || "No response received.");
        setState("received"); // Show received animation
      } else {
        setResponse(data.error || "An error occurred while processing your request.");
        setState("received"); // Show received animation
      }
    } catch (error) {
      setResponse("Failed to connect to the server. Please try again later.");
      setState("received"); // Show received animation
    }
  };

  return (
    <div className="flex flex-col items-center">
      <DottedBall state={state} />
      <div className="w-full max-w-lg">
        {/* Pass setInput to InputBox to capture user input */}
        <InputBox onInputChange={setInput} disabled={state === "sending"} />
        {/* Use handleSubmit without hardcoded value */}
        <SubmitButton onClick={handleSubmit} disabled={state === "sending"} />
        <ResponseDisplay response={response} />
      </div>
    </div>
  );
}
