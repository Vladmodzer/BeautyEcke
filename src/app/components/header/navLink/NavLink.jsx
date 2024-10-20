import Link from "next/link";
import styles from "./navLink.module.css";

function NavLink({ title, href, isActive,onClick }) {
  return (
    <Link
    onClick={onClick}
      className={`${styles.container} ${isActive ? styles.active : ""}`}
      href={href}
    >
      {title}
    </Link>
  );
}

export default NavLink;
