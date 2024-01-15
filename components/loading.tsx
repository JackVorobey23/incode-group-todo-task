"use client";

import { Hearts } from "react-loader-spinner";

interface LoadingProps {
  displayedText: string;
}

export default function Loading({ displayedText }: LoadingProps) {
  
  return (
    <div
      style={{
        display: "flex",
        margin: "5rem",
        justifyContent: "center",
        flexDirection: "column",
        alignContent: "center",
      }}
    >
      <div className="d-flex jc-center">
        <h2>{displayedText}</h2>
        <Hearts height="80" width="80" color="white" />
      </div>
    </div>
  );
}
