import { UserIcon } from "@heroicons/react/24/outline"; // Correct import for v2
import styles from "./iconSection.module.css";

export default function UserIconComponent() {
  return (
    <div className={styles.iconContainer}>
      <UserIcon className={styles.icon} />
    </div>
  );
}
