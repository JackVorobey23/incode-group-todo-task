import React from "react";
import "@styles/todo.css";
interface AddToDoProps {
  hidden: boolean;
  openAddTodo: () => void;
}

function AddToDo({ hidden, openAddTodo }: AddToDoProps) {
  return (
    <div
      onClick={openAddTodo}
      hidden={hidden}
      className="concrete_todo add_todo"
    >
      +
    </div>
  );
}

export default AddToDo;
