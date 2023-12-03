import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';
dotenv.config();

const mongoURI = process.env.MONGO_URI ?? "";
const dbName =  process.env.DATABASE_NAME;

export const connectToDatabase = async () => {
  const client = new MongoClient(mongoURI);

  try {
    await client.connect();
    return client.db(dbName);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};