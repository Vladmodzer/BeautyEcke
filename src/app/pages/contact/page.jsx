"use client";

import { UseMenu } from "@/app/ClientProvider";
import Footer from "@/app/components/footer/Footer";
import GetConsultationForm from "@/app/components/getConsultationForm/GetConsultationForm";
import Header from "@/app/components/header/Header";
import HeaderContactGroup from "@/app/components/heroicons/header_contact_group/Header_contact_group";
import MainButton from "@/app/components/mainButton/MainButton";
import MobileMenu from "@/app/components/mobileMenu/MobileMenu";
import ReserveForm from "@/app/components/reserveForm/ReserveForm";
import useMapDataToTextContent from "@/app/hooks/ useMapDataToTextContent";
import { useState } from "react";

function PageContact() {
  const { handleConsultationForm, isConsultationForm, language } = UseMenu();
  const [isReserveForm, setReserveForm] = useState(false);

  const handleReserveForm = () => {
    setReserveForm((prev) => !prev);
  };

  return (
    <div className={`primaryOuterContainer `}>
      <MobileMenu />
      {isReserveForm && <ReserveForm onClick={handleReserveForm} />}
      <Header onClick={handleReserveForm} container={"container"} />
      {isConsultationForm && (
        <GetConsultationForm onClick={handleConsultationForm} />
      )}
      <main>
        <section className="contact">
          <div className="container">
            <div className="contact-header">
              <h2 className="contact-title-background">contact</h2>
              <div className="contact-title-wrap">
                <h2 className="contact-title-foreground">
                  {useMapDataToTextContent("main.contact.title", language)}
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
                  label={useMapDataToTextContent(
                    "main.buttons.get_consultation",
                    language
                  )}
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
                  allow="fullscreen"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer container={"container"} />
    </div>
  );
}

export default PageContact;
