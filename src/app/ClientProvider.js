"use client"; // Указывает, что это клиентский компонент

import { createContext, useState, useContext, useEffect } from "react";
import en from "../local/en/translation.json"; // Импортируйте ваши переводы
import de from "../local/de/translation.json";
import ru from "../local/ru/translation.json";

// Создаём контекст для меню
const MenuContext = createContext();

export function UseMenu() {
  return useContext(MenuContext);
}

export default function ClientProvider({ children }) {
  // const [overlayOpen, setOverlayOpen] = useState(false); // Состояние для оверлея
  const [menuOpen, setMenuOpen] = useState(false); // Добавляем состояние для меню
  const [language, setLanguage] = useState("de"); // Добавляем состояние языка
  const [newData, setNewData] = useState({});
  // Определяем переводы
  const translations = { en, de, ru };

  // Функция для получения перевода по ключу
  const t = (key, language = "de") => {
    const keys = key.split("."); // Разделяем путь по точкам
    let result = translations[language]; // Начинаем с корневого объекта языка

    for (let index = 0; index < keys.length; index++) {
      // Проходим по каждому ключу
      const element = keys[index];

      // Проверяем, что текущий элемент существует, иначе возвращаем undefined
      if (result && result[element] !== undefined) {
        result = result[element]; // Углубляемся в объект
      } else {
        return undefined; // Если значение не найдено, возвращаем undefined
      }
    }

    return result; // Возвращаем найденный перевод
  };

  // Функция для переключения состояния меню
  const handleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  // Функция для изменения языка
  const changeLanguage = (newLang) => {
    setLanguage(newLang);
    // console.log("newLang:", newLang);
  };
  // Обновленная функция для тестирования
  // console.log("language:",language);

  const fetchTranslations = async (ids, lang) => {
    const langNums = { en: 1, de: 2, ru: 3 };
    try {
      // Используем URL сервера для проверки
      const response = await fetch("/api/fetchTranslations", {
        // укажите URL, если нужно
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch translations");
      }

      const data = await response.json();

      // Извлекаем поле main для текущего языка
      // console.log(" fetchTranslations-language:", lang);
     

      const mainData = data[langNums[lang]][lang];
      // console.log("ClientProvider-mainData:", mainData);
      setNewData(mainData);
    } catch (error) {
      console.error("Ошибка при получении переводов:", error);
    }
  };
  const mapDataToTextContent = (data, keyPath) => {
    return keyPath
      .split(".")
      .reduce(
        (acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined),
        data
      );
  };

  return (
    <MenuContext.Provider
      value={{
        menuOpen,
        language,
        newData,
        fetchTranslations,
        setLanguage,
        changeLanguage,
        handleMenu,
        t,
        mapDataToTextContent,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
