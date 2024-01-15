"use client";
import React, { ChangeEvent, Suspense, useEffect, useState } from "react";
import "@styles/search.css";
import SearchResults from "./SearchResults";
import Link from "next/link";
import { IBoard } from "@models/board";
import BoardRepository from "@repositories/boardRepository";

function Search() {
  const boardRepo = new BoardRepository();
  const [search, setSearch] = useState("");
  const [boards, setBoards] = useState<IBoard[]>([]);

  useEffect(() => {
    const getBoards = async () => {
      setBoards(await boardRepo.getAllBoards());
    };
    getBoards();
  }, []);
  return (
    <div className="search-container">
      <div className="d-flex">
        <input
          type="text"
          placeholder="Start typing board name or ID..."
          onChange={(e: any) => setSearch(e.target.value)}
        />
        <Link href={"/board/new"} className="new_board">
          <button>Create new</button>
        </Link>
      </div>
      {search !== "" ? (
        <Suspense fallback={<h2>Loading...</h2>}>
          <SearchResults boards={boards} search={search} />
        </Suspense>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Search;
