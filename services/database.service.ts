import { client } from "@utils/client";

enum DBCollection {
  todoCollection = "todo",
  boardsCollection = "boards",
}

class DBService {
  private static dbservice: DBService;
  private static databaseConnected: boolean = false;

  private constructor() {}

  public static getDbService(): DBService {
    if (!DBService.dbservice) {
      DBService.dbservice = new DBService();
    }

    return DBService.dbservice;
  }

  public connectToDb() {
    if (!DBService.databaseConnected) {
      console.log("DB already connected!");
    } else {
      client.connect();
      DBService.databaseConnected = true;
    }
  }

  public closeConnection() {
    client.close();
  }

  public getCollection(collection: DBCollection) {
    const db = client.db();
    const todoCollection = db.collection(collection);
  }
}
