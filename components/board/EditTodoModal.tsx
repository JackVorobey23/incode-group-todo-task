"use client";
import { ITodo } from "@models/todo";
import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "@styles/modal.css";
import TodoForm from "../general/TodoForm";
import { updateTodos } from "@utils/helpers";

interface ControlledPopupProps {
  open: boolean;
  setPopupTodo: React.Dispatch<React.SetStateAction<ITodo | null>>;
  todo: ITodo | null;
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const EditTodoModal = ({
  open,
  setPopupTodo,
  todo,
  setTodos,
}: ControlledPopupProps) => {
  const closeModal = () => setPopupTodo(null);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const type = "Editing";
  const submit = () => {
    if (todo) {
      updateTodos(setTodos, todo, todoDescription, todoTitle);
    }
  };
  useEffect(() => {
    if (todo) {
      setTodoTitle(todo.title);
      setTodoDescription(todo.description);
    }
  }, [todo?.id]);
  return (
    <Popup open={open} closeOnDocumentClick onClose={closeModal}>
      <TodoForm
        close={closeModal}
        title={todoTitle}
        description={todoDescription}
        setTodoTitle={setTodoTitle}
        setTodoDescription={setTodoDescription}
        submit={submit}
        type={type}
      ></TodoForm>
    </Popup>
  );
};

export default EditTodoModal;
