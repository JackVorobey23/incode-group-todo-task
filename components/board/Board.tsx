"use client";

import React, { useState } from "react";
import Search from "../search/Search";
import TodosContainer from "./TodosContainer";
import { ITodo } from "@models/todo";
import { IBoard } from "@models/board";
import BoardRepository from "@repositories/boardRepository";
import { useRouter } from "next/navigation";

function Board({ board }: { board: IBoard }) {
  const [todos, setTodos] = useState<ITodo[]>(board.todos);
  const router = useRouter();
  const boardRepo = new BoardRepository();
  return (
    <div className="board_container">
      <h1>Board - {board.name}</h1>
      <div className="search_container">
        <Search />
        <button
          className="red_button"
          onClick={() => {
            boardRepo.removeBoard(board._id.toString());
            router.push("/");
          }}
        >
          Delete board
        </button>
      </div>
      <TodosContainer
        todos={todos}
        setTodos={setTodos}
        boardId={board._id.toString()}
      />
    </div>
  );
}

export default Board;
