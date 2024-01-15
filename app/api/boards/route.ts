import { IBoard } from "@models/board";
import { ITodo } from "@models/todo";
import DBService from "@services/database.service";

export async function GET() {
  const dbService = DBService.getDbService();

  const allBoards = await dbService.getAllBoards();

  return new Response(JSON.stringify(allBoards));
}

export async function PATCH(request: Request) {
  const searchParams = new URL(request.url).searchParams;
  const todoId = searchParams.get("todoId");

  const { description, title, type } = await request.json();
  const dbService = DBService.getDbService();
  try {
    const existingBoard = await dbService.getBoardByTodoId(todoId!);

    const todoToChange = existingBoard.todos.find(
      (todo: ITodo) => todo.id === todoId!
    );

    todoToChange!.description = description;
    todoToChange!.title = title;
    todoToChange!.type = type;

    await existingBoard.save();

    return new Response("Successfully updated the Board", { status: 200 });
  } catch (error) {
    return new Response("Error Updating Board", { status: 500 });
  }
}
