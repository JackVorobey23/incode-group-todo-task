import { ITodo } from "@models/todo";
import BoardRepository from "@repositories/boardRepository";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const updateTodos = (
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>,
  todo: ITodo,
  todoDescription: string,
  todoTitle: string
) => {
  const boardRepo = new BoardRepository();
  setTodos((currentTodos) =>
    currentTodos.map((t) =>
      t.id === todo?.id
        ? {
            ...todo,
            description: todoDescription,
            title: todoTitle,
          }
        : t
    )
  );
  if (todo) {
    boardRepo.updateTodo({
      ...todo,
      description: todoDescription,
      title: todoTitle,
    });
  }
};

export const createNewBoard = async (
  title: string,
  todos: ITodo[],
  router: AppRouterInstance
) => {
  const boardRepo = new BoardRepository();
  const validTodos = todos.filter((todo) => todo.title !== "");
  const newBoard = await boardRepo.createBoard(title, validTodos);
  router.push(`/board/${newBoard._id}`);
};
