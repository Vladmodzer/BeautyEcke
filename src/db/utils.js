import { connectToDatabase } from "@/db";
import { cookies } from "next/headers"; // Импорт для работы с cookies

const ids = {
  en: 1,
  de: 2,
  ru: 3,
};
async function getServerData(language) {
  // Получаем соответствующий ID для языка
  const id = ids[language];
  const db = await connectToDatabase();

  // Получаем данные из базы с учётом языка
  const translationData = await db.collection("products").findOne({ id });

  // Преобразуем данные в удобный для передачи формат
  const firstData = JSON.parse(JSON.stringify(translationData));
//   console.log("language is added to cookie");

  return {
    firstData, // Данные для загрузки
    currentLanguage: language,
  };
}
export const getDataFirst = async () => {
  const cookieStore = cookies(); // Получаем cookies

  // Проверяем наличие куки "language"
  let languageCookie = cookieStore.get("language");

  let language = languageCookie?.value || "de"; // Если куки нет, устанавливаем "de" как дефолтное значение
  //   if (!languageCookie) {
  //     cookieStore.set("language", language, {
  //       httpOnly: true,
  //       sameSite: "strict",
  //     });
  //     console.log("!languageCookie");

  //     return getServerData(language);
  //   } else {
  return getServerData(language);
};
