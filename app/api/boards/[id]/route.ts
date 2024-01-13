// pages/api/boards.ts

import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, Db, ObjectId } from "mongodb";
import { z, ZodError } from "zod";
import Board from "@models/board";
import { TodoType } from "@models/todo";

const mongoUrl = "mongodb://localhost:27017";
const dbName = "yourDatabaseName";
const collectionName = "boards";

const boardSchema = z.object({
  id: z.string(),
  name: z.string(),
  todos: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      type: z.nativeEnum(TodoType),
    })
  ),
});
