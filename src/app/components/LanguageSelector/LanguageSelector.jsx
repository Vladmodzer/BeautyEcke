import { useState, useEffect } from "react";
import { useMenu } from "../../ClientProvider"; // Импортируйте useMenu
import styles from "./languageSelector.module.css";

const LanguageSelector = () => {
  const { language, changeLanguage } = useMenu(); // Деструктуризация контекста
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (newLang) => {
    changeLanguage(newLang); // Вызываем функцию смены языка из контекста
    setIsOpen(false); // Закрываем меню после выбора
  };



  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.button}
        onClick={() => setIsOpen(!isOpen)}
      >
        {language}
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <div role="menu" aria-orientation="vertical">
            <button
              className={styles.menuItem}
              onClick={() => handleChange("ru")}
            >
              ru
            </button>
            <button
              className={styles.menuItem}
              onClick={() => handleChange("en")}
            >
              en
            </button>
            <button
              className={styles.menuItem}
              onClick={() => handleChange("de")}
            >
              de
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
