"use client";
import React, { ChangeEvent, Suspense, useState } from "react";
import "@styles/search.css";
import SearchResults from "./SearchResults";
function Search() {
  const [search, setSearch] = useState("");
  return (
    <div className="search-container">
      <div className="search">
        <input
          type="text"
          placeholder="Start typing board name or ID..."
          onChange={(e: any) => {
            console.log(e.target.value);
            setSearch(e.target.value);
          }}
        />
        <button>Create new</button>
      </div>
      <Suspense fallback={<h2>Loading...</h2>}>
        <SearchResults query={search} />
      </Suspense>
    </div>
  );
}

export default Search;
