import { connectToDatabase } from "../../db"; // Убедитесь, что путь к соединению с БД правильный

export default async function fetchTranslations(req, res) {
  const ids = {
    en: 1,
    de: 2,
    ru: 3,
  };

  if (req.method === "POST") {
    const { language } = req.body; // Извлекаем язык из тела запроса

    if (!language) {
      return res
        .status(400)
        .json({ error: "Invalid or missing language parameter" });
    }

    try {
      const db = await connectToDatabase(); // Подключаемся к базе данных
      const id = ids[language]; // Получаем ID для запрашиваемого языка

      // Ищем документ в коллекции
      const translationData = await db
        .collection("products") // Замените "products" на реальное имя коллекции
        .findOne({ id });

      if (!translationData) {
        console.log(
          `No translation found for language: ${language}, id: ${id}`
        );
        return res.status(404).json({ error: "Translation not found" });
      }

      // Преобразуем данные с помощью JSON.parse(JSON.stringify(...))
      const plainData = JSON.parse(JSON.stringify(translationData));

      // Возвращаем перевод
      return res.status(200).json({
        [language]: plainData,
      });
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
