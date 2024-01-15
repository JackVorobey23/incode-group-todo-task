import { IBoard } from "@models/board";
import React from "react";
import Link from "next/link";

async function SearchResults({
  boards,
  search,
}: {
  boards: IBoard[];
  search: string;
}) {
  if (boards.length === 0) {
    return (
      <p>
        <i>No matches</i>
      </p>
    );
  }
  if (search === "") {
    return;
  }
  const boardsToDisplay = boards.filter(
    (board) =>
      board._id.toString().toLocaleLowerCase().includes(search) ||
      board.name.toLocaleLowerCase().includes(search)
  );

  return (
    <div className="search_results">
      {boardsToDisplay.slice(0,5).map((board: IBoard) => (
        <Link
          href={`/board/${board._id}`}
          className="search_result"
          key={board._id.toString()}
        >
          Name: {board.name}, Id: ({board._id.toString()})
        </Link>
      ))}
    </div>
  );
}

export default SearchResults;
