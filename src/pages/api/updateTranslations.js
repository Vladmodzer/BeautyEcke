import { connectToDatabase } from "../../db"; // Путь к функции подключения к базе данных

export default async function updateTranslations(req, res) {
  if (req.method === "POST") {
    const newAdminData = req.body;
    const db = await connectToDatabase();

    const languageIds = {
      en: 1,
      de: 2,
      ru: 3,
    };

    // Логируем данные, которые отправляются на сервер
    // console.log("полученные данные с формы:", newAdminData);

    const updatePromises = [];

    // Функция для обновления переводов по языковым группам
    for (let key in newAdminData) {
      const languageId = languageIds[key];
      const newData = newAdminData[key];

      // Добавляем промис в массив для параллельного выполнения
      updatePromises.push(
        db
          .collection("products")
          .updateOne({ id: languageId }, { $set: newData }, { upsert: false })
      );
    }

    try {
      // Выполняем все запросы параллельно
      await Promise.all(updatePromises);

      res.status(200).json({ message: "Translations updated successfully" });
    } catch (error) {
      console.error("Error updating translations:", error);
      res.status(500).json({ error: "Failed to update translations" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
