"use client";

import { Hearts } from "react-loader-spinner";
import BeatLoader from "react-spinners/BeatLoader";

interface LoadingProps {
  displayedText: string;
}

export default function Loading({ displayedText }: LoadingProps) {
  // You can add any UI inside Loading, including a Skeleton.
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
      <div>
        <h2>{displayedText}</h2>
        <Hearts height="80" width="80" color="#4fa94d" />
      </div>
    </div>
  );
}
