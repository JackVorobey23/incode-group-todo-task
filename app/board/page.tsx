import Search from "@components/search/Search";
import React from "react";
import "@styles/board.css";
function Board() {
  return (
    <div className="board_container d-flex jc-center">
      <Search />
    </div>
  );
}

export default Board;
