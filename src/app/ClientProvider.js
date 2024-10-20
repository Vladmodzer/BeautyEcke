"use client"; // Указывает, что это клиентский компонент

import { createContext, useState, useContext } from "react";

// Создаём контекст для меню
const MenuContext = createContext();

export function useMenu() {
  return useContext(MenuContext);
}

export default function ClientProvider({ children }) {
  const [overlayOpen, setOverlayOpen] = useState(false); // Состояние для оверлея
  const [menuOpen, setMenuOpen] = useState(false); // Добавляем состояние для меню

  // Функция для переключения состояния оверлея
  const handleOverlay = () => {
    setOverlayOpen((prevOverlayOpen) => !prevOverlayOpen); // Используем функциональное обновление
  };
  // Функция для переключения состояния меню
  const handleMenu = () => {
    setMenuOpen((prev) => !prev);

    
  };

  return (
    <MenuContext.Provider
      value={{
        menuOpen,
        overlayOpen,
        handleOverlay,
        handleMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
