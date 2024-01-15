import DBService from "@services/database.service";

export const POST = async (request: Request) => {
  const newBoard = await request.json();

  const { name, todos } = newBoard;
  const dbService = DBService.getDbService();

  try {
    const createdBoard = await dbService.createBoard(name, todos);

    return new Response(JSON.stringify(createdBoard), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new board", { status: 500 });
  }
};
