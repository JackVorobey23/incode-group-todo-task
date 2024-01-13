import Board from "@models/board";
import React, { use } from "react";
import { getSearchResults } from "./data";
import Link from "next/link";

async function SearchResults({ query }: { query: string }) {
  if (query === "") {
    return null;
  }
  const boards: Board[] = await getSearchResults(query);
  if (boards.length === 0) {
    return (
      <p>
        <i>No matches for "{query}"</i>
      </p>
    );
  }
  return (
    <div className="search_results">
      {boards.map((board: Board) => (
        <Link
          href={`/board/${board.id}`}
          className="search_result"
          key={board.id}
        >
          Name: {board.name}, Id: ({board.id})
        </Link>
      ))}
    </div>
  );
}

export default SearchResults;
