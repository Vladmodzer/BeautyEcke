import MainButton from "../mainButton/MainButton";
import styles from "../reserveForm/reserveForm.module.css";
import { UseMenu } from "@/app/ClientProvider";

const GetConsultationForm = ({ onClick }) => {
  const { sendToWhatsApp } = UseMenu();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name: event.target.elements.name.value,
      phone: event.target.elements.phone.value,
      requestType: "Consultation",
    };
    sendToWhatsApp(formData);
  };
  return (
    <div className={`${styles.reserveFormOverlay}`}>
      {/* Крестик в верхнем углу затемненного экрана */}
      <div className={styles.closeIcon} onClick={onClick}>
        ✕
      </div>

      <div className={styles.reserveFormContainer}>
        <h2>Beauty Ecke</h2>
        <h3>Get a consultation</h3>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            <input name="name" type="text" placeholder="Name" />
          </label>

          <label>
            <input name="phone" type="text" placeholder="Phone" />
          </label>

          <MainButton label={"Submit Request"} type={"submit"} />
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

export default GetConsultationForm;
