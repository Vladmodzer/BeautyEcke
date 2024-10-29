"use client";
import { useState } from "react"; // Импортируем useState для управления анимацией
import { UseMenu } from "@/app/ClientProvider";
import styles from "./mobileMenu.module.css";
import NavLink from "../header/navLink/NavLink";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/pages/about" },
  { name: "Services", href: "/pages/services" },
  { name: "Contact", href: "/pages/contact" },
];

function MobileMenu() {
  const { handleMenu } = UseMenu();
  const { menuOpen } = UseMenu();
  const [isRotating, setIsRotating] = useState(false); // Управляем вращением кнопки

  const handleClick = () => {
    setIsRotating(true); // Активируем вращение
    setTimeout(() => setIsRotating(false), 500); // Через 500 мс выключаем вращение
    handleMenu(); // Закрываем меню
  };

  return (
    <div className={`${styles.container} ${menuOpen ? styles.show : ""}`}>
      {/* Левая панель с кнопкой закрытия */}
      <div className={styles.leftPanel}>
        <button
          className={`${styles.button} ${isRotating ? styles.rotate : ""}`} // Добавляем класс вращения
          onClick={handleClick}
        >
          <span className={styles.closeIcon}>✕</span>
        </button>
      </div>

      {/* Правая панель с пунктами меню */}
      <div className={styles.rightPanel}>
        <nav className={styles.nav}>
          <ul className={styles.menuList}>
            {navItems.map((item, index) => {
              return (
                <li key={index} className={styles.menuItem}>
                  <NavLink onClick={handleMenu} title={item.name} href={item.href} className={styles.menuLink} />
                </li>
              );
            })}
          </ul>
        </nav>
        <LanguageSelector style={{ marginLeft: '10%' }} />
      </div>
    </div>
  );
}

export default MobileMenu;
