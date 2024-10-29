// fetchTranslations.js

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

// Путь к папке с переводами
const localesPath = path.join(__dirname, 'src', 'local');

// Асинхронная функция для подключения и получения данных
async function fetchTranslations() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db('ваше_имя_базы_данных');
    const collection = db.collection('ваше_имя_коллекции');

    // Получение данных из MongoDB
    const translations = await collection.find({}).toArray();

    // Обработка данных по языкам
    const dataByLanguage = {
      en: {},
      ru: {},
      de: {},
    };

    // Сортировка данных по языкам
    translations.forEach((item) => {
      if (item.language && dataByLanguage[item.language]) {
        dataByLanguage[item.language][item.key] = item.value;
      }
    });

    // Запись данных в файлы JSON для каждого языка
    Object.keys(dataByLanguage).forEach((lang) => {
      const filePath = path.join(localesPath, lang, 'translation.json');
      fs.writeFileSync(filePath, JSON.stringify(dataByLanguage[lang], null, 2), 'utf8');
      console.log(`Translation file for ${lang} updated successfully.`);
    });

  } catch (error) {
    console.error("Error fetching translations:", error);
  } finally {
    await client.close();
  }
}

fetchTranslations();




async function updateTranslation(language, key, newValue) {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db('ваше_имя_базы_данных');
    const collection = db.collection('ваше_имя_коллекции');

    // Обновление значения в базе данных
    const result = await collection.updateOne(
      { language: language, key: key },
      { $set: { value: newValue } },
      { upsert: true } // создаст новый документ, если его не существует
    );

    if (result.matchedCount > 0) {
      console.log(`Translation for key "${key}" in language "${language}" updated to "${newValue}"`);
    } else {
      console.log(`New translation added for key "${key}" in language "${language}": "${newValue}"`);
    }

  } catch (error) {
    console.error("Error updating translation:", error);
  } finally {
    await client.close();
  }
}

// Пример вызова функции с параметрами
const language = 'en';
const key = 'greeting';
const newValue = 'Hello, World!';
updateTranslation(language, key, newValue);
