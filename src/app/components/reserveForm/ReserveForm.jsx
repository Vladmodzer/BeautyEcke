"use client";
import React from "react";
import MainButton from "../mainButton/MainButton";
import styles from "./reserveForm.module.css";

const ReserveForm = ({ onClick }) => {
  return (
    <div className={`${styles.reserveFormOverlay}`}>
      {/* Крестик в верхнем углу затемненного экрана */}
      <div className={styles.closeIcon} onClick={onClick}>
        ✕
      </div>

      <div className={styles.reserveFormContainer}>
        <h2>Beauty Ecke</h2>
        <h3>Book an Appointment</h3>

        <form className={styles.form}>
          <label>
            <input type="text" placeholder="Name" />
          </label>

          <label>
            <input type="text" placeholder="Phone" />
          </label>

          <MainButton
          name = {"getConsultation"}
          label={"Submit Request"} 
          type={"submit"} 
          />
        </form>

        <div className={styles.consentText}>
          <input type="checkbox" id="consent" />
          <label htmlFor="consent">
            By clicking the submit button, I agree to the processing of my
            personal data.
          </label>
        </div>
      </div>
    </div>
  );
};

export default ReserveForm;
