"use client"; // Указывает, что это клиентский компонент

import { createContext, useState, useContext } from "react";
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
  // Определяем переводы
  const translations = { en, de, ru };

  // Функция для получения перевода
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

  // Функция для переключения состояния оверлея
  const handleOverlay = () => {
    setOverlayOpen((prevOverlayOpen) => !prevOverlayOpen); // Используем функциональное обновление
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

  return (
    <MenuContext.Provider
      value={{
        menuOpen,
        // overlayOpen,
        language,
        setLanguage,
        changeLanguage,
        handleOverlay,
        handleMenu,
        t, // Передаем функцию t в контекст
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
