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

    // Функция для обновления переводов по языковым группам

    for (let key in newAdminData) {
      const languageId = languageIds[key];
      const newData = newAdminData[key];
      //   console.log(languageId);
      //   console.log(newData);

      await db.collection("products").updateOne(
        { id: languageId },
        { $set: newData },
        { upsert: false } // Отключаем создание нового документа, если он не найден
    );
    

      //       const languageId = languageIds[language];
      //       const existingTranslation = await db.collection("products").findOne({ id: languageId });

      //       if (!existingTranslation) {
      //         throw new Error(`Translation with ID ${languageId} not found for language: ${language}`);
      //       }

      //       for (const [key, value] of Object.entries(translations)) {

      //         const keys = key.split('.');
      //         let currentValue = existingTranslation;

      //         // Проходим по иерархии ключей
      //         for (let i = 0; i < keys.length; i++) {
      //           const k = keys[i];
      //           if (!(k in currentValue.language)) {
      //             // Если это последний ключ, создаем новое значение
      //             if (i === keys.length - 1) {
      //               currentValue[k] = value; // Создаем новое значение
      //               await db.collection("products").updateOne(
      //                 { id: languageId },
      //                 { $set: { [key]: value } }
      //               );
      //             } else {
      //               // Если это не последний ключ, создаем объект
      //               currentValue[k] = {};
      //             }
      //           }
      //           currentValue = currentValue[k]; // Переход к следующему уровню
      //         }

      //         // Если значение отличается, обновляем его в базе данных
      //         if (currentValue !== value) {
      //           await db.collection("products").updateOne(
      //             { id: languageId },
      //             { $set: { [key]: value } }
      //           );
      //         }
      //       }
      //     };

      //     try {
      //       await Promise.all([
      //         updateLanguageTranslations("en", translations.en || {}),
      //         updateLanguageTranslations("de", translations.de || {}),
      //         updateLanguageTranslations("ru", translations.ru || {}),
      //       ]);

      //       res.status(200).json({ message: "Translations updated successfully" });
      //     } catch (error) {
      //       console.error("Error updating translations:", error);
      //       res.status(404).json({ error: error.message });
      //     }
      //   } else {
      //     res.setHeader("Allow", ["POST"]);
      //     res.status(405).end(`Method ${req.method} Not Allowed`);
      //   }
      //   } else {
      //     console.log("nop");
      //   }
    }
  }
}
