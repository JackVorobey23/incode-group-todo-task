"use client";
import { ITodo } from "@models/todo";
import React from "react";
import Popup from "reactjs-popup";
import "@styles/modal.css";

interface ControlledPopupProps {
  open: boolean;
  todo: ITodo | null;
  setPopupTodo: React.Dispatch<React.SetStateAction<ITodo | null>>;
}

const EditTodoModal = ({ open, setPopupTodo, todo }: ControlledPopupProps) => {
  const closeModal = () => setPopupTodo(null);
  return (
    <Popup open={open} closeOnDocumentClick onClose={closeModal}>
      <div className="modal-container">
        <div className="modal">
          <h1> Todo Info </h1>
          <div className="content">
            <div className="d-flex todo_edit_part">
              <h2>Title</h2>
              <p>{todo?.title}</p>
            </div>
            <div className="d-flex todo_edit_part">
              <h2>Description</h2>
              <p>{todo?.title}</p>
            </div>
            <div className="d-flex todo_edit_part">
              <h2>Id</h2>
              <p>{todo?.title}</p>
            </div>
          </div>
        </div>
        <button
          className="close green_button"
          onClick={() => {
            setPopupTodo(null);
          }}
        >
          OK
        </button>
      </div>
    </Popup>
  );
};

export default EditTodoModal;
