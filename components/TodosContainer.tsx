"use client";
import { Todo, TodoType } from "@models/todo";
import React, { useEffect, useState } from "react";
import ConcreteTodo from "./ConcreteTodo";
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";
import "@styles/todo.css";
import AddToDo from "./AddToDo";
import "@styles/test.css";

function reorder<T>(list: T[], startIndex: number, endIndex: number): T[] {
  console.log("a");
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}

interface TodosContainerProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const onDragEnd = (result: DropResult, todosProps: TodosContainerProps) => {
  console.log(result);
  const { source, destination, draggableId } = result;
  const { todos, setTodos } = todosProps;
  if (!destination) return;
  console.log(JSON.stringify(todos));

  const changedTodo = todos.find((todo) => todo.id === draggableId);
  changedTodo!.type = destination.droppableId as TodoType;

  setTodos(todos);
  console.log(JSON.stringify(todos));
};
const finalSpaceCharacters = [
  {
    id: "gary",
    name: "Gary Goodspeed",
    thumb: "/images/gary.png",
  },
  {
    id: "cato",
    name: "Little Cato",
    thumb: "/images/cato.png",
  },
  {
    id: "kvn",
    name: "KVN",
    thumb: "/images/kvn.png",
  },
  {
    id: "mooncake",
    name: "Mooncake",
    thumb: "/images/mooncake.png",
  },
  {
    id: "quinn",
    name: "Quinn Ergon",
    thumb: "/images/quinn.png",
  },
];

function TodosContainer({ todos, setTodos }: TodosContainerProps) {
  const todoTypes = Object.values(TodoType);
  const [isBrowser, setIsBrowser] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  let lastTodoIndex = 1;
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("aa");
      setIsBrowser(true);
    }
  }, []);

  return (
    <div className="todos_container">
      {isBrowser ? (
        <DragDropContext
          onDragStart={() => {
            setIsDragging(true);
          }}
          onDragEnd={(result: DropResult) => {
            onDragEnd(result, { setTodos, todos });
            setIsDragging(false);
          }}
        >
          {todoTypes.map((todoT, TypeIndex) => (
            <Droppable
              droppableId={`${todoT}`}
              type="COLUMN"
              direction="vertical"
              key={`droppable-${TypeIndex}`}
            >
              {(provided) => (
                <div className="todo_table" key={TypeIndex}>
                  <h2>{todoT}</h2>
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {todos
                      .filter((todo) => todo.type === todoT)
                      .map((todo, todoIndex) => (
                        <Draggable
                          draggableId={todo.id}
                          key={`${TypeIndex}-${todoIndex}`}
                          index={lastTodoIndex++}
                        >
                          {(provided) => (
                            <ConcreteTodo
                              provided={provided}
                              todo={todo}
                              key={todo.id}
                            />
                          )}
                        </Draggable>
                      ))}
                    {todoT === TodoType.ToDo ? (
                      <AddToDo hidden={isDragging} />
                    ) : (
                      <></>
                    )}
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
          ))}
        </DragDropContext>
      ) : null}
    </div>
  );
}

export default TodosContainer;
