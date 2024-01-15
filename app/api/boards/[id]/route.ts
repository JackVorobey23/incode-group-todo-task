import DBService from "@services/database.service";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const dbService = DBService.getDbService();

  const board = await dbService.getBoardById(params.id);

  if (board) {
    return new Response(JSON.stringify(board));
  } else {
    return new Response("Board not found", { status: 404 });
  }
}
export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const dbService = DBService.getDbService();

  const boardId = params.id;
  if (!boardId) return new Response("Error deleting Board", { status: 500 });
  try {
    await dbService.removeBoard(boardId);
    return new Response("Board deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Error deleting board", { status: 500 });
  }
};
