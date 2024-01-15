import Loading from "@components/loading";
import React from "react";

function loading() {
  return (
    <div>
      <Loading displayedText="Waiting for board...." />
    </div>
  );
}

export default loading;
