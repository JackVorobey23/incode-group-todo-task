import { IBoard } from "@models/board";
import { ITodo } from "@models/todo";
import dotenv from "dotenv";

export default class BoardRepository {
  public async getAllBoards() {
    const response = await fetch(`/api/boards`);
    const boards: IBoard[] = await response.json();
    return boards;
  }

  public async getBoardById(boardId: string) {
    const response = await fetch(`/api/boards/${boardId}`);

    if (response.ok) {
      const board: IBoard = await response.json();
      return board;
    } else {
      return null;
    }
  }

  public async updateBoard(board: IBoard) {
    const response = await fetch("/api/boards/new", {
      method: "POST",
      body: JSON.stringify({
        name: board.name,
        todos: board.todos,
      }),
    });
    return response.json();
  }

  public async updateTodo(todo: ITodo) {
    const response = await fetch(`/api/boards?todoId=${todo.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        description: todo.description,
        title: todo.title,
        type: todo.type,
      }),
    });
    return response;
  }

  public async createTodo(todo: ITodo, boardId: string) {
    const response = await fetch(`/api/todos/new?boardId=${boardId}`, {
      method: "POST",
      body: JSON.stringify({
        id: todo.id,
        description: todo.description,
        title: todo.title,
        type: todo.type,
      }),
    });
    return response;
  }

  public async removeTodo(todoId: string) {
    const response = await fetch(`/api/todos/${todoId}`, {
      method: "DELETE",
    });
    return response.status;
  }

  public async createBoard(title: string, todos: ITodo[]) {
    const response = await fetch("/api/boards/new", {
      method: "POST",
      body: JSON.stringify({
        name: title,
        todos: todos,
      }),
    });
    return await response.json();
  }

  public async removeBoard(todoId: string) {
    const response = await fetch(`/api/boards/${todoId}`, {
      method: "DELETE",
    });
    return response.status;
  }
}
