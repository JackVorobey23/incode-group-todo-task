"use client";
import { ITodo, TodoType } from "@models/todo";
import React, { useEffect, useState } from "react";
import ConcreteTodo from "./ConcreteTodo";
import {
  DragDropContext,
  DragStart,
  Draggable,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";
import "@styles/todo.css";
import AddToDo from "./AddToDo";
import "@styles/test.css";
import EditTodoModal from "./EditTodoModal";
import BoardRepository from "@repositories/boardRepository";
import TodoAddModal from "./TodoAddModal";

interface TodosContainerProps {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  boardId: string;
}
const onDragEnd = (result: DropResult, todosProps: TodosContainerProps) => {
  const boardRepo = new BoardRepository();
  const { destination, draggableId } = result;
  const { todos } = todosProps;
  if (!destination) return;

  const changedTodo = todos.find((todo) => todo.id === draggableId);

  if (!changedTodo) return;

  if (changedTodo.type === destination.droppableId) return;

  changedTodo.type = destination.droppableId as TodoType;

  boardRepo.updateTodo(changedTodo);
};

function TodosContainer({ todos, setTodos, boardId }: TodosContainerProps) {
  const todoTypes = Object.values(TodoType);
  const [isBrowser, setIsBrowser] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [popupTodo, setEditPopup] = useState<ITodo | null>(null);
  const [popupAddOpen, setPopupAddOpen] = useState<boolean>(false);
  let lastTodoIndex = 1;

  useEffect(() => {
    // check if rendering is on browser,
    // otherwise drag and drop will not work.
    if (typeof window !== "undefined") {
      setIsBrowser(true);
    }
  }, []);

  return (
    <div className="todos_container">
      {isBrowser ? (
        <DragDropContext
          onDragStart={(a: DragStart) => {
            setIsDragging(true);
          }}
          onDragEnd={(result: DropResult) => {
            onDragEnd(result, { setTodos, todos, boardId });
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
                      .map((todo) => (
                        <Draggable
                          draggableId={todo.id}
                          key={todo.id}
                          index={lastTodoIndex++}
                        >
                          {(provided) => (
                            <ConcreteTodo
                              setPopupTodo={setEditPopup}
                              provided={provided}
                              todo={todo}
                              key={todo.id}
                              setTodos={setTodos}
                            />
                          )}
                        </Draggable>
                      ))}
                    {todoT === TodoType.ToDo ? (
                      <AddToDo
                        hidden={isDragging}
                        openAddTodo={() => setPopupAddOpen(true)}
                      />
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
      <EditTodoModal
        open={!!popupTodo}
        setTodos={setTodos}
        todo={popupTodo}
        setPopupTodo={setEditPopup}
      />

      <TodoAddModal
        open={popupAddOpen}
        setPopupAddOpen={setPopupAddOpen}
        boardId={boardId}
        setTodos={setTodos}
      />
    </div>
  );
}

export default TodosContainer;
