import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config(); // Загружает переменные окружения из .env файла
// Проверим, что переменная окружения загружена

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export const connectToDatabase = async () => {
  try {
    await client.connect();
    // console.log("Connected to database");
    return client.db("beauty_ecke"); // Замените на имя вашей базы данных
  } catch (error) {
    console.error("Error connecting to the database", error);
    throw error;
  }
};
