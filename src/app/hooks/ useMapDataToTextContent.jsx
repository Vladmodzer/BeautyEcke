"use client";

import { useState, useEffect } from "react";
import { UseMenu } from "../ClientProvider";

const  useMapDataToTextContent = (keyPath) => {
  const { firstServerData, language, fetchTranslations, initialLanguage } =
    UseMenu();
  const [textContent, setTextContent] = useState("");

  // Функция для извлечения значения из объекта по пути (keyPath)
  const getNestedValue = (obj, path) => {
    return path
      .split(".")
      .reduce((acc, key) => (acc && acc[key] ? acc[key] : null), obj);
  };
  // Функция для получения значения куки по имени
  const getCookie = (name) => {
    const cookieMatch = document.cookie.match(
      new RegExp("(^| )" + name + "=([^;]+)")
    );
    return cookieMatch ? cookieMatch[2] : null;
  };

  useEffect(() => {
    const initializeData = async () => {
      let storedLanguage = getCookie("language");
      const storedFirstLanguage = initialLanguage;

      if (!storedLanguage) {
        storedLanguage = initialLanguage;
      }

      let text = "";
      if (getCookie("language")) {
        const data = await fetchTranslations({ language: language }); // Ждем разрешения промиса

        text = getNestedValue(data[language][language], keyPath || "");
      } else {
        text =
          getNestedValue(firstServerData[storedFirstLanguage], keyPath) || "";
      }

      setTextContent(text);
    };

    initializeData();
  }, [keyPath, language, firstServerData]);

  return textContent;
};

export default useMapDataToTextContent;
