"use client"; // Указывает, что это клиентский компонент

import { createContext, useState, useContext, useEffect } from "react";
import en from "../local/en/translation.json"; // Импортируйте ваши переводы
import de from "../local/de/translation.json";
import ru from "../local/ru/translation.json";
import useMapDataToTextContent from "./hooks/ useMapDataToTextContent";

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
  const [langPack, setLangPack] = useState({});
  const [loading, setLoading] = useState(true); // Состояние для индикатора загрузки
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
  };

  const fetchTranslations = async (ids) => {
    setLoading(true);
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

      const dataIsPacung = {};
      dataIsPacung["en"] = data[1];
      dataIsPacung["de"] = data[2];
      dataIsPacung["ru"] = data[3];

      if (Object.keys(newData).length > 0) {
        localStorage.setItem("newData", JSON.stringify(newData));
        // console.log("localStorage was field");
      }

      setNewData(dataIsPacung);
    } catch (error) {
      console.error("Ошибка при получении переводов:", error);
    } finally {
      setLoading(false);
    }
  };

  // Обновляем langPack, когда newData меняется
  useEffect(() => {
    if (newData[language]) {
      setLangPack(newData[language]);
    }
  }, [newData, language]);

  // Функция для маппинга данных в текстовый контент с использованием языка из контекста по умолчанию
  const mapDataToTextContent = (keyPath, lan = language) => {
    
    // const [textContent, setTextContent] = useState("");
  
    // useEffect(() => {
    //   if (typeof window === "undefined") return;
  
    //   const storedData = localStorage.getItem("newData") ? localStorage.getItem("newData") : "";
    //   if (!storedData) return;
  
    //   const data = JSON.parse(storedData);
    //   if (!data || !data[lan]) return;
  
    //   const result = keyPath
    //     .split(".")
    //     .reduce((acc, key) => acc && acc[key], data[lan][lan]) || "";
  
    //   setTextContent(result);
    // }, [keyPath, lan]);
  
    return useMapDataToTextContent(keyPath,lan = language);
  };
  
   // Функция для отправки данных в WhatsApp
   const sendToWhatsApp = (data) => {
    console.log("sendToWhatsApp",data);
    
    if (!data.name || !data.phone) {
      alert("Please fill out all fields.");
      return;
    }

    const message = `${data.requestType} request:\nName: ${data.name}\nPhone: ${data.phone}`;
    const whatsappURL = `https://wa.me/+4917666607523?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappURL, "_blank");
  };


  return (
    <MenuContext.Provider
      value={{
        menuOpen,
        language,
        newData,
        langPack,
        loading,
        isConsultationForm, 
        fetchTranslations,
        setLanguage,
        changeLanguage,
        handleMenu,
        mapDataToTextContent,
        t,
        setConsultationForm,
        handleConsultationForm,
        sendToWhatsApp,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
