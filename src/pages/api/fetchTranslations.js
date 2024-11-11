import { connectToDatabase } from "../../db"; // Убедитесь, что путь к соединению с БД правильный

export default async function fetchTranslations(req, res) {
  if (req.method === "POST") {
    const { ids } = req.body;

    if (!Array.isArray(ids) || ids.length === 0) {
      return res
        .status(400)
        .json({ error: "IDs are required and should be a non-empty array" });
    }

    try {
      const db = await connectToDatabase(); // Подключаемся к базе данных

      const translations = {};

      // Процесс получения данных для каждого ID
      for (const id of ids) {
        
        const translationData = await db.collection("products").findOne({ id });
        if (translationData) {
          translations[id] = translationData;
        } else {
          console.log(`No translation found for id: ${id}`);
        }
      }

      // Возвращаем только полученные данные без записи в файлы
      // console.log("translations:", translations);

      return res.status(200).json(translations);
    } catch (error) {
      console.error("Error in fetchTranslations:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    // Поддерживаем только POST-метод
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
