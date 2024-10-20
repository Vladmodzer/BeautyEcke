"use client";
import { CheckCircleIcon } from "@heroicons/react/24/solid"; // Import the verified/check icon
import styles from "./verifiedIcon.module.css"; // Import your CSS module

function VerifiedIcon() {
  return (
    <div className={styles.container}>
      <CheckCircleIcon className={styles.icon} aria-hidden="true" />
    </div>
  );
}

export default VerifiedIcon;
