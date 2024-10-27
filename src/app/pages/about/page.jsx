"use client";
import { UseMenu } from "@/app/ClientProvider";
import Footer from "@/app/components/footer/Footer";
import Header from "@/app/components/header/Header";
import styles from "./about.module.css";
import MobileMenu from "@/app/components/mobileMenu/MobileMenu";
import ReserveForm from "@/app/components/reserveForm/ReserveForm";
import { useState } from "react";
import HeaderContactGroup from "@/app/components/heroicons/header_contact_group/Header_contact_group";
import MainButton from "@/app/components/mainButton/MainButton";
import VerifiedIcon from "@/app/components/heroicons/VerifiedIcon/VerifiedIcon";
import Image from "next/image";

function PageAbout() {
  const { overlayOpen, t, language } = UseMenu();
  const [isReserveForm, setReserveForm] = useState(false);
  const handleReserveForm = () => {
    setReserveForm((prev) => !prev);
  };
  const [setConsultationForm] = useState(false);

  const handleConsultationForm = () => {
    setConsultationForm((prev) => !prev);
  };
  return (
    <div className={`primaryOuterContainer ${overlayOpen ? "overlay" : ""}`}>
      <MobileMenu />
      {isReserveForm && <ReserveForm onClick={handleReserveForm} />}
      <Header onClick={handleReserveForm} container={"container"} />
      <main>
        <section className={styles.about}>
          <div className="container">
            <div className={styles.borderBox}>
              <div className={styles.photoBox}>
                <Image
                  className={styles.photo}
                  alt={"photo"}
                  src={
                    "https://permanent-63.ru/wp-content/webpc-passthru.php?src=https://permanent-63.ru/wp-content/uploads/Kate1.png&nocache=1"
                  }
                  width={500}
                  height={500}
                />
              </div>
              <div className={styles.textsBox}>
                <ul className={styles.checksBox}>
                  <li>
                    <h3 className={styles.textBox}>
                      <span>{t("main.about.master.position", language)}</span>
                      <span>{t("main.about.master.name", language)}</span>
                    </h3>
                  </li>
                  <li>
                    <div className={styles.checkBox}>
                      <VerifiedIcon />
                      <span>
                        {t("main.about.master.achievements.0", language)}
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className={styles.checkBox}>
                      <VerifiedIcon />
                      <span>
                        {t("main.about.master.achievements.0", language)}
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className={styles.checkBox}>
                      <VerifiedIcon />
                      <span>
                        {t("main.about.master.achievements.1", language)}
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className={styles.checkBox}>
                      <VerifiedIcon />
                      <span>
                        {t("main.about.master.achievements.2", language)}
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className={styles.checkBox}>
                      <VerifiedIcon />
                      <span>
                        {t("main.about.master.achievements.3", language)}
                      </span>
                    </div>
                  </li>
                </ul>
                <MainButton
                  label={t("main.buttons.book_appointment", language)}
                  onClick={handleReserveForm}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="contact">
          <div className="container">
            <div className="contact-header">
              <h2 className="contact-title-background">contact</h2>
              <div className="contact-title-wrap">
                <h2 className="contact-title-foreground">
                  {t("main.contact.title", language)}
                </h2>
              </div>
            </div>
            <p>
              We invite professionals to our permanent makeup training programs
            </p>
            <div className="map-info-wrap">
              <div className="contact-info">
                <p>
                  <strong>Permanent Makeup Studio Beauty Ecke</strong>
                </p>
                <p>Lead artist Ekaterina Birukova</p>
                <p>
                  <strong>Phone:</strong> +49 176 66607523
                </p>
                <p>
                  <strong>Location:</strong> Essen Dahlhauser Str. 104C
                </p>
                <p>Book your appointment via Viber/WhatsApp/VK</p>
                <HeaderContactGroup
                  className={"contact-icon-wrap"}
                  iconStyle={"icon-contact"}
                />
                <MainButton
                  withIcon={true}
                  label={t("main.buttons.get_consultation",language)}
                  onClick={handleConsultationForm}
                />
              </div>
              <div className="contact-map">
                {/* Карта */}

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.010988908305!2d7.090589777181132!3d51.43959207179798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8ddb9add4a0d1%3A0x4d66f43948cdf65c!2sDahlhauser%20Str.%20104C%2C%2045279%20Essen!5e0!3m2!1sen!2sde!4v1729238448320!5m2!1sen!2sde"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer onClick={handleReserveForm} container={"container"} />
    </div>
  );
}

export default PageAbout;
