import BoardModel, { IBoard } from "@models/board";
import { ITodo } from "@models/todo";
import dotenv from "dotenv";
import mongoose from "mongoose";
export default class DBService {
  private static dbservice: DBService;
  private static databaseConnected: boolean = false;

  private constructor() {}

  public static getDbService(): DBService {
    if (!DBService.dbservice) {
      DBService.dbservice = new DBService();
    }

    return DBService.dbservice;
  }

  public async connectToDb() {
    if (DBService.databaseConnected) {
      console.log("DB already connected!");
    } else {
      try {
        const connectionString = process.env.MONGODB_URI || "";
        mongoose.connect(connectionString);

        mongoose.connection.addListener("error", (err) => {
          console.error("Error from mongoDB!", err);
        });
        mongoose.connection.addListener("disconnected", () => {
          DBService.databaseConnected = false;
        });
        DBService.databaseConnected = true;
      } catch (error) {
        console.error("Connection to DB failed! Error: ", error);
        DBService.databaseConnected = false;
      }
    }
  }

  public async closeConnection() {
    await mongoose.connection.close();
    DBService.databaseConnected = false;
  }

  public async getAllBoards() {
    await this.connectToDb();

    const allBoards = await BoardModel.find();

    return allBoards;
  }

  public async getBoardById(boardId: string) {
    await this.connectToDb();

    const board = await BoardModel.findById(boardId);

    return board;
  }

  public async createBoard(name: string, todos: ITodo[]) {
    await this.connectToDb();

    const newBoard = await BoardModel.create({
      name: name,
      todos: todos,
      _id: new mongoose.Types.ObjectId(),
    });
    await newBoard.save();
    return newBoard;
  }

  public async removeBoard(boardId: string) {
    await this.connectToDb();

    const board = await BoardModel.findByIdAndDelete(boardId);

    await board.save();

    return board;
  }

  public async getBoard(boardId: string) {
    await this.connectToDb();

    try {
      const board = BoardModel.findByIdAndDelete(boardId);
      return board;
    } catch {
      return null;
    }
  }

  public async getBoardByTodoId(todoId: string) {
    await this.connectToDb();

    try {
      const board = BoardModel.findOne({ "todos.id": todoId });
      return board;
    } catch {
      return null;
    }
  }

  public async createTodo(todo: ITodo, boardId: string) {
    await this.connectToDb();

    const board = await BoardModel.findById(boardId);

    board.todos.push(todo);
    await board.save();

    return board;
  }

  public async removeTodo(todoId: string) {
    await this.connectToDb();

    const board = await BoardModel.findOne({ "todos.id": todoId });

    board.todos = board.todos.filter((todo: ITodo) => todo.id !== todoId);
    await board.save();

    return todoId;
  }
}
