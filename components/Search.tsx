"use client";
import React, { ChangeEvent, Suspense, useState } from "react";
import "@styles/search.css";
import SearchResults from "./SearchResults";
import Link from "next/link";
function Search() {
  const [search, setSearch] = useState("");
  return (
    <div className="search-container">
      <div className="d-flex">
        <input
          type="text"
          placeholder="Start typing board name or ID..."
          onChange={(e: any) => {
            console.log(e.target.value);
            setSearch(e.target.value);
          }}
        />
        <Link href={"/board/new"} className="new_board">
          <button>Create new</button>
        </Link>
      </div>
      <Suspense fallback={<h2>Loading...</h2>}>
        <SearchResults query={search} />
      </Suspense>
    </div>
  );
}

export default Search;
