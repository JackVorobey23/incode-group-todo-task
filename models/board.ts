import { ITodo } from "./todo";
import mongoose, { Schema, model, models } from "mongoose";
export interface IBoard {
  _id: Schema.Types.ObjectId;
  name: string;
  todos: ITodo[];
}

const boardSchema = new mongoose.Schema<IBoard>({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  todos: [
    {
      id: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: false,
      },
      type: {
        type: String,
        required: true,
      },
    },
  ],
});

const BoardModel = models.boards || model("boards", boardSchema);

export default BoardModel;
