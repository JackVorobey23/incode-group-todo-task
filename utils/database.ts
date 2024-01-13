import { MongoClient, ServerApiVersion } from "mongodb";
import { client } from "./client";

let isConnected = false;

export const connectToDB = async () => {
  if (isConnected) {
    console.log("MongoDB already connected");
    return;
  }

  try {
    await client.connect();
    isConnected = true;
    console.log("connection established");
  } catch (error) {
    console.log(error);
  }
};
