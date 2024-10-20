import { CalendarIcon } from "@heroicons/react/24/outline"; // Calendar icon import
import styles from "./mainButton.module.css";

function MainButton({
  bg,
  width,
  title,
  label,
  onClick,
  type,
  fontsize,
  withIcon, // Новый пропс для управления отображением иконки
}) {
  return (
    <button
      className={styles.container}
      onClick={onClick}
      title={title || "Reserve"}
      style={{
        backgroundColor: bg || `var(--color--luminous-vivid-amber)`,
        width: width || "clamp(120px, 25vw, 200px)", // Увеличенная минимальная ширина
        color: `var(--color--black)`,
        border: "none",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "600",
        padding: `8px 20px`,
        borderRadius: "50px",
        transition: `background 0.2s ease`,
        whiteSpace: "nowrap", // Запрещаем перенос текста
        fontSize: fontsize || "clamp(10px, 1vw, 15px)"
      }}
      type={type || "button"} // Указание типа кнопки
    >
      {withIcon && (
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "24px",
  
            borderRadius: "50%",
            backgroundColor: "transparent",
            marginRight: "10px",
          }}
        >
          <CalendarIcon style={{ width: "16px", height: "16px", color: "#000" }} />
        </span>
      )}
      {label || "Reserve"}
    </button>
  );
}

export default MainButton;
