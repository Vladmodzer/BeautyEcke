import { BadgeCheckIcon } from "@heroicons/react/24/outline"; // Correct import for v2
import styles from "./iconSection.module.css";

export default function BadgeCheckIconComponent() {
  return (
    <div className={styles.iconContainer}>
      <BadgeCheckIcon className={styles.icon} />
    </div>
  );
}

