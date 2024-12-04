import { connectToDatabase } from "../../db"; // Убедитесь, что путь к соединению с БД правильный

export default async function fathGetPhoto(req, res) {
    
    
  if (req.method === "POST") {
    const { collectionName } = req.body; // Имя коллекции передается через тело запроса

    try {
      const db = await connectToDatabase(); // Подключаемся к базе данных
      console.log("db",db);
      // Получаем все документы из указанной коллекции
      const photoData = await db.collection(collectionName).find({}).toArray();

      // Возвращаем информацию о коллекции
      console.log(photoData[0]);

      return res.status(200).json({
        data: photoData[0], // Возвращаем всю коллекцию
      });
    } catch (error) {
      console.error("Error fetching collection:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    // Поддерживаем только POST-метод
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
