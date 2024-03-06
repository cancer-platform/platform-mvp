import { MongoClient } from "mongodb";

function connectToDatabase() {
  const mongodbUri = process.env.MONGODB_URI; // Set a default value if process.env.MONGODB_URI is undefined
  if (!mongodbUri) {
    throw new Error("MONGODB_URI is not defined.");
  }
  return MongoClient.connect(mongodbUri);
}
