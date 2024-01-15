import React from "react";
import { ITodo } from "@models/todo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import "@styles/todo.css";
import { DraggableProvided } from "react-beautiful-dnd";
import BoardRepository from "@repositories/boardRepository";

interface ConcreteTodoProps {
  todo: ITodo;
  provided: DraggableProvided;
  setPopupTodo: React.Dispatch<React.SetStateAction<ITodo | null>>;
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

export default function ConcreteTodo({
  todo,
  provided,
  setPopupTodo,
  setTodos,
}: ConcreteTodoProps) {
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
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => setPopupTodo(todo)}
        />
        <FontAwesomeIcon
          icon={faTrashCan}
          onClick={() => {
            new BoardRepository().removeTodo(todo.id);
            setTodos((todos) => todos.filter((t) => t.id !== todo.id));
          }}
        />
      </div>
    </div>
  );
}
