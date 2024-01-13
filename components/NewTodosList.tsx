import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Todo, TodoType } from "@models/todo";
import React from "react";

interface NewTodosListProps {
  newTodos: Todo[];
  setNewTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function NewTodosList({ newTodos, setNewTodos }: NewTodosListProps) {
  return (
    <div className="todo_list_container">
      {newTodos.map((todo, index) => (
        <div className="d-flex new_todo_container" key={`new_todo-${index}`}>
          <FontAwesomeIcon
            icon={faTrash}
            onClick={() =>
              setNewTodos((currentTodos) => {
                return currentTodos.filter((t) => t.id !== todo.id);
              })
            }
          />
          <input
            onChange={(e) =>
              setNewTodos(
                newTodos.map((t) =>
                  t.id === todo.id ? { ...todo, title: e.target.value } : t
                )
              )
            }
            placeholder="title"
          ></input>
          <textarea
            onChange={(e) =>
              setNewTodos(
                newTodos.map((t) =>
                  t.id === todo.id
                    ? { ...todo, description: e.target.value }
                    : t
                )
              )
            }
            placeholder="description"
          ></textarea>
        </div>
      ))}
    </div>
  );
}

export default NewTodosList;
