import React from "react";
import styles from "./action.module.css";
import MainButton from "../mainButton/MainButton";
import useMapDataToTextContent from "@/app/hooks/ useMapDataToTextContent";
import { UseMenu } from "@/app/ClientProvider";

const PromoBanner = () => {
  const { handleConsultationForm, language } = UseMenu();
  return (
    <div className={styles.promoContainer}>
      <div className={styles.border}>
        <div className={styles.textContainer}>
          <h2 className={styles.promoTitle}>
          {useMapDataToTextContent("main.action.title", language)}
          </h2>
          <p className={styles.promoSubtitle}>{useMapDataToTextContent("main.action.subtitle", language)}</p>
          <p className={styles.price}>99 $</p>
          <p className={styles.description}>
            {useMapDataToTextContent("main.action.description", language)}
          </p>
          <p className={styles.phone}>+49 176 66607523</p>
          <MainButton
            withIcon={true}
            label={useMapDataToTextContent(
              "main.buttons.get_consultation",
              language
            )}
            onClick={handleConsultationForm}
          />
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
