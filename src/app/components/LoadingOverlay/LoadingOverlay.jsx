"use client";
import React from "react";
import styles from "./loadingOverlay.module.css";

// Компонент для отображения индикатора загрузки с темным полупрозрачным фоном
export default function LoadingOverlay() {
  return (
    <div className={styles.overlay}>
      <div className={styles.text}>Loading...</div>
    </div>
  );
}
