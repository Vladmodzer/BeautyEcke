import { connectToDatabase } from "../../db"; // Подключение к базе данных

export default async function pushPhotoUrlToServer(req, res) {
  if (req.method === "POST") {
    // Извлекаем переданные значения link и photoId из тела запроса
    const { link, photoId } = req.body;

    console.log("Received data:", { link, photoId });

    // Проверяем, что оба поля переданы
    if (!link || !photoId) {
      return res.status(400).json({
        error: "Fields 'link' and 'photoId' are required",
      });
    }

    try {
      // Подключаемся к базе данных
      const db = await connectToDatabase();

      // Обновляем документ в коллекции, добавляя или обновляя указанное поле (например, card1)
      const result = await db.collection("photo").updateOne(
        {}, // Обновляет первый найденный документ. Можно добавить критерии фильтрации.
        {
          $set: { [photoId]: link }, // Динамическое обновление поля
        }
      );

      // Проверяем, было ли обновлено хотя бы одно поле
      if (result.modifiedCount === 0) {
        return res
          .status(404)
          .json({ error: "No document found or updated" });
      }

      res.status(200).json({ message: "Link updated successfully" });
    } catch (error) {
      console.error("Error updating link:", error);
      res.status(500).json({ error: "Failed to update link" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
