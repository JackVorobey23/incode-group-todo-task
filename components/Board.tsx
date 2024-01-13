"use client";

import React, { useState } from "react";
import Search from "./Search";
import TodosContainer from "./TodosContainer";
import { Todo } from "@models/todo";
import Board from "@models/board";

function Board({ board }: { board: Board }) {
  const [todos, setTodos] = useState<Todo[]>(board.todos);

  return (
    <div className="board_container">
      <h1>Board - {board.name}</h1>
      <Search />
      <TodosContainer todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default Board;
