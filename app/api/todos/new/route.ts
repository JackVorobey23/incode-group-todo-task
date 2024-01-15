import DBService from "@services/database.service";

export const POST = async (request: Request) => {
  const searchParams = new URL(request.url).searchParams;
  const boardId = searchParams.get("boardId");

  if (!boardId) return;

  const newTodo = await request.json();

  const dbService = DBService.getDbService();

  try {
    dbService.createTodo(newTodo, boardId);
    return new Response(JSON.stringify(newTodo), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new board", { status: 500 });
  }
};
