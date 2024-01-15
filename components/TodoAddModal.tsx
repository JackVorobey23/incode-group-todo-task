"use client";
import { ITodo, TodoType } from "@models/todo";
import BoardRepository from "@repositories/boardRepository";
import React, { useState } from "react";
import Popup from "reactjs-popup";
import TodoForm from "./TodoForm";

interface TodoAddModalProps {
  open: boolean;
  setPopupAddOpen: React.Dispatch<React.SetStateAction<boolean>>;
  boardId: string;
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

function TodoAddModal({
  open,
  setPopupAddOpen,
  boardId,
  setTodos,
}: TodoAddModalProps) {
  const boardRepo = new BoardRepository();
  const closeModal = () => setPopupAddOpen(false);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const type = "Creating";
  const submit = () => {
    const newTodo = {
      id: crypto.randomUUID(),
      type: TodoType.ToDo,
      description: todoDescription,
      title: todoTitle,
    };
    boardRepo.createTodo(newTodo, boardId);
    setTodos((todos) => [...todos, newTodo]);
  };
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
}

export default TodoAddModal;
