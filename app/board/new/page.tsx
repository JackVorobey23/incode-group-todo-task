"use client";
import React, { useState } from "react";
import "@styles/board.css";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { ITodo, TodoType } from "@models/todo";
import NewTodosList from "@components/board_new/NewTodosList";
import { createNewBoard } from "@utils/helpers";

function NewBoard() {
  const router = useRouter();
  const [emptyError, setEmptyError] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [newTodos, setNewTodos] = useState<ITodo[]>([
    {
      id: crypto.randomUUID(),
      description: "Description",
      title: "Todo 1",
      type: TodoType.ToDo,
    },
  ]);
  return (
    <div className="new_board_container">
      <h1 className="new_board_title">Creating new board</h1>
      <div className="d-flex jc-center">
        <input
          type="text"
          placeholder="Board title"
          onChange={(e: any) => setTitle(e.target.value)}
        />
        <div className="text-vertical-center">
          <h3
            style={{
              color: 'red',
              fontSize: `${emptyError ? "1.3rem" : "0"}`,
              transition: "all .2s",
            }}
          >
            Board title cannot be empty!
          </h3>
        </div>
      </div>
      <div>
        <h2>
          Click on plus to add some to-do&apos;s!
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
        <button
          className="green_button"
          onClick={() => {
            if (title === "") {
              setEmptyError(true);
              return;
            }
            setEmptyError(false);
            createNewBoard(title, newTodos, router);
          }}
        >
          Create
        </button>
        <button className="red_button" onClick={() => router.back()}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default NewBoard;
