"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import styles from "./burgerMenuButton.module.css";
import { useMenu } from "../../../ClientProvider"; // Подключаем контекст

function BurgerMenuButton() {
  const { handleMenu } = useMenu(); // Получаем функцию переключения оверлея

  return (
    <button onClick={handleMenu} className={styles.container}>
      <Bars3Icon
        className={`${styles.icon} h-6 w-6 text-gray-500" aria-hidden="true `}
      />
    </button>
  );
}

export default BurgerMenuButton;
