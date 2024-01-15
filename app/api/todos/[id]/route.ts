import DBService from "@services/database.service";

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const dbService = DBService.getDbService();
  console.log(params);

  const todoId = params.id;
  if (!todoId) return new Response("Error deleting Todo", { status: 500 });
  try {
    await dbService.removeTodo(todoId);
    return new Response("Todo deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Error deleting Todo", { status: 500 });
  }
};
