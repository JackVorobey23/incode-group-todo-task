import React from "react";
import { Todo } from "@models/todo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import "@styles/todo.css";
import { DraggableProvided } from "react-beautiful-dnd";

interface ConcreteTodoProps {
  todo: Todo;
  provided: DraggableProvided;
}

export default function ConcreteTodo({ todo, provided }: ConcreteTodoProps) {
  return (
    <div
      className="concrete_todo"
      ref={provided.innerRef}
      {...provided.dragHandleProps}
      {...provided.draggableProps}
    >
      <h3>{todo.title}</h3>
      <p className="desc">{todo.description}</p>
      <div className="todo_buttons_container">
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon icon={faTrashCan} />
      </div>
    </div>
  );
}
