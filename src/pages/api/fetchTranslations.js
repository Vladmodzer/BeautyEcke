import { connectToDatabase } from "../../db"; // Ensure the correct path to your database connection
import fs from "fs";
import path from "path";

export default async function fetchTranslations(req, res) {
  if (req.method === "POST") {
    const { ids } = req.body; // Expecting IDs in the request body
    const db = await connectToDatabase();

    const translations = {};

    for (const id of ids) {
      const translationData = await db.collection("products").findOne({ id });
      if (!translationData) {
        // console.log(`No translation found for id: ${id}`);
        continue;
      }

      // Paths for translation files
      const languagesFiles = {
        en: path.join(process.cwd(), "src/local/en/translation.json"),
        de: path.join(process.cwd(), "src/local/de/translation.json"),
        ru: path.join(process.cwd(), "src/local/ru/translation.json"),
      };

      for (const [lang, filePath] of Object.entries(languagesFiles)) {
        let currentTranslations = {};
        if (fs.existsSync(filePath)) {
          const fileContent = fs.readFileSync(filePath, "utf8");
          currentTranslations = JSON.parse(fileContent);
        }

        if (translationData[lang] && translationData[lang].main) {
          currentTranslations.main = {
            ...currentTranslations.main,
            ...translationData[lang].main,
          };
        }

        fs.writeFileSync(
          filePath,
          JSON.stringify(currentTranslations, null, 2),
          "utf8"
        );
        // console.log(`Updated ${lang.toUpperCase()} translation saved to ${filePath} for ID ${id}`);
      }

      translations[id] = translationData;
    }

    res.status(200).json(translations);
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
