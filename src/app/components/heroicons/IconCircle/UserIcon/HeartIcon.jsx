"use client";
import { HeartIcon } from "@heroicons/react/24/outline"; // Correct import for v2
import styles from "./iconSection.module.css";

export default function HeartIconComponent() {
  return (
    <div className={styles.iconContainer}>
      <HeartIcon className={styles.icon} />
    </div>
  );
}
