import { connectToDatabase } from "../../db"; // Проверьте правильность пути

export default async function fetchPassword(req, res) {
  if (req.method === "POST") {
    const { password } = req.body; // Извлекаем пароль из тела запроса
    if (!password) {
      return res.status(400).json({
        success: false,
        message: "Invalid or missing password parameter",
      });
    }

    try {
      const db = await connectToDatabase(); // Подключаемся к базе данных
      const id = 4; // Укажите ID нужного документа

      // Ищем документ в коллекции
      const serverPassword = await db
        .collection("products") // Имя коллекции
        .findOne({ id });

      if (!serverPassword?.password) {
        return res
          .status(404)
          .json({ success: false, message: "Password not found" });
      }

      // Проверяем пароль
      if (serverPassword.password !== password) {
        return res
          .status(401)
          .json({ success: false, message: "Invalid password" });
      }

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error("Database connection or query error:", error.message);
      return res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  } else {
    // Поддерживаем только POST-метод
    res.setHeader("Allow", ["POST"]);
    return res
      .status(405)
      .json({ success: false, message: `Method ${req.method} Not Allowed` });
  }
}
