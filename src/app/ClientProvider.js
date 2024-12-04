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

export default function ClientProvider({
  children,
  firstServerData,
  initialLanguage,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState(initialLanguage);
  const [newData, setNewData] = useState({});
  const [langPack, setLangPack] = useState({});
  const [loading, setLoading] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [isadminPasswordRight, setIsadminPasswordRight] = useState(false);
  // Определяем переводы
  const [isConsultationForm, setConsultationForm] = useState(false);
  const translations = { en, de, ru };

  const handleConsultationForm = () => {
    setConsultationForm((prev) => !prev);
  };
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
    document.cookie = `language=${newLang}; path=/; max-age=31536000`;
  };

  const fetchTranslations = async ({ language }) => {
    setLoading(true);
    try {
      // Используем URL сервера для проверки
      const response = await fetch("/api/fetchTranslations", {
        // укажите URL, если нужно
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ language }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch translations");
      }

      const data = await response.json();

      return data;
    } catch (error) {
      console.error("Ошибка при получении переводов:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (newData[language]) {
      setLangPack(newData[language]);
    }
  }, [newData, language]);

  // Функция для отправки данных в WhatsApp
  const sendToWhatsApp = (data) => {
    if (!data.name || !data.phone) {
      alert("Please fill out all fields.");
      return;
    }
    console.log("sendToWhatsApp:", data.requestType);

    const message = `${data.requestType} request:\nName: ${data.name}\nPhone: ${data.phone}`;
    const whatsappURL = `https://wa.me/+4917666607523?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };
  function handleLoading() {
    setLoading((prev) => !prev);
  }
  return (
    <MenuContext.Provider
      value={{
        firstServerData,
        menuOpen,
        language,
        newData,
        langPack,
        loading,
        isConsultationForm,
        initialLanguage,
        adminPassword,
        isadminPasswordRight,
        fetchTranslations,
        setLanguage,
        changeLanguage,
        handleMenu,
        t,
        setConsultationForm,
        handleConsultationForm,
        sendToWhatsApp,
        setAdminPassword,
        setIsadminPasswordRight,
        handleLoading,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
