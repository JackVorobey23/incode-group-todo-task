import React from "react";
import "@styles/todo.css";

interface AddToDoProps {
  hidden: boolean;
}

function AddToDo({ hidden }: AddToDoProps) {
  return (
    <div hidden={hidden} className="concrete_todo add_todo">
      +
    </div>
  );
}

export default AddToDo;
