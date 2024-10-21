// components/LanguageSelector.js
import { useState } from 'react';
import styles from './languageSelector.module.css';

const LanguageSelector = () => {
  const [language, setLanguage] = useState('ru');
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event) => {
    setLanguage(event.target.value);
    setIsOpen(false); // Закрываем меню после выбора
  };

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.button}
        onClick={() => setIsOpen(!isOpen)}
      >
        {language === 'ru' ? 'ru' : language === 'en' ? 'en' : 'de'}
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <div role="menu" aria-orientation="vertical">
            <button
              className={styles.menuItem}
              onClick={() => handleChange({ target: { value: 'ru' } })}
            >
              ru
            </button>
            <button
              className={styles.menuItem}
              onClick={() => handleChange({ target: { value: 'en' } })}
            >
              en
            </button>
            <button
              className={styles.menuItem}
              onClick={() => handleChange({ target: { value: 'de' } })}
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
