"use client";
import React, { useState } from "react";
import "@styles/board.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Todo, TodoType } from "@models/todo";
import NewTodosList from "@components/NewTodosList";
function NewBoard() {
  const router = useRouter();
  const [newTodos, setNewTodos] = useState<Todo[]>([
    {
      id: "1",
      description: "Description",
      title: "Todo 1",
      type: TodoType.ToDo,
    },
  ]);
  return (
    <div className="new_board_container">
      <h1 className="new_board_title">Creating new board</h1>
      <div className="d-flex jc-center">
        <div className="table_cell">
          <h3>Board title</h3>
        </div>
        <input type="text" placeholder="" />
      </div>
      <div>
        <h2>
          Click on plus to add some to-do's!
          <FontAwesomeIcon
            icon={faPlus}
            onClick={() => {
              const newTodo = {
                id: crypto.randomUUID(),
                description: "",
                title: "",
                type: TodoType.ToDo,
              };
              setNewTodos([...newTodos, newTodo]);
            }}
          />
        </h2>

        <NewTodosList newTodos={newTodos} setNewTodos={setNewTodos} />
      </div>
      <div className="d-flex jc-center">
        <button className="green_button">Create</button>
        <button className="red_button" onClick={() => router.back()}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default NewBoard;
