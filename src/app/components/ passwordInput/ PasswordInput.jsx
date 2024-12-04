import React, { useState } from "react";
import styles from "./passwordInput.module.css"; // Импорт модульных стилей
import { UseMenu } from "@/app/ClientProvider";


const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    adminPassword,
    setAdminPassword,
    handleLoading,
    setIsadminPasswordRight,

    setLoading,
  } = UseMenu();

  const [feedback, setFeedback] = useState("");

  const handleSendPassword = async () => {
    handleLoading();
    try {
      const response = await fetch("/api/fetchPassword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: adminPassword }),
      });

      if (!response.ok) {
        const errorData = await response.json(); // Получаем тело ошибки
        setFeedback(`Ошибка: ${errorData.message}`); // Устанавливаем сообщение из ответа сервера
        return; // Выходим без пробрасывания ошибки
      }

      const res = await response.json();
    
      setIsadminPasswordRight(true); // Устанавливаем флаг успеха
      setFeedback("Успех: Пароль совпал!"); // Сообщение об успехе
    } catch (error) {
      console.error("Ошибка при обработке запроса:", error.message); // Только для критических ошибок
      setFeedback("Ошибка: Не удалось подключиться к серверу.");
    } finally {
      handleLoading();
    }
  };

  return (
    <div className={styles.backgroundPasswordBlock}>
      <p className={styles.error}>{feedback ? feedback : ""}</p>
      <div className={styles.passwordInputContainer}>
        <input
          type={showPassword ? "text" : "password"}
          onChange={(e) => setAdminPassword(e.target.value)}
          placeholder="Enter your password"
          className={styles.passwordInput}
        />
        <button
          type="button"
          className={styles.toggleVisibility}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
        <button
          type="button"
          className={styles.toggleVisibility}
          onClick={handleSendPassword}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
