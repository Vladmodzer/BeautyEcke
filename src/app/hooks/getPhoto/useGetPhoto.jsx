"use client";

import { useState, useEffect } from "react";

// Функция для получения значения из объекта по ключу
const getNestedValue = (obj, key) => {
  if (!obj || !key) return undefined;
  return obj[key];
};

const useGetImageUrl = (collectionName, key) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const initializeData = async () => {
      try {
        // Выполняем POST-запрос через fetch
        const response = await fetch("/api/fathGetPhoto", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ collectionName }),
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch image: ${response.statusText}`);
        }

        const { data } = await response.json(); // Извлекаем данные из ответа

        // Извлекаем значение по ключу
        const imageLink = getNestedValue(data, key);

        if (!imageLink) {
          // Если данных нет, пробуем использовать запасные данные
          setError(`Key "${key}" not found in response data`);
        } else {
          setImageUrl(imageLink); // Обновляем состояние с ссылкой на изображение
        }
      } catch (err) {
        console.error("Error fetching image:", err);
        setError(err.message); // Устанавливаем сообщение об ошибке
      }
    };

    initializeData();
  }, [collectionName, key]);
  // console.log(imageUrl);

  return imageUrl;
};

export default useGetImageUrl;
