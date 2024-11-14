"use client";

import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import { UseMenu } from "./ClientProvider";
import MobileMenu from "./components/mobileMenu/MobileMenu";
import ReserveForm from "./components/reserveForm/ReserveForm";
import imgBg from "../../public/img/bg.jpg";
import VerifiedIcon from "./components/heroicons/VerifiedIcon/VerifiedIcon";
import MainButton from "./components/mainButton/MainButton";
import Image from "next/image";
import UserIconComponent from "./components/heroicons/IconCircle/UserIcon/UserIcon";
import HeartIconComponent from "./components/heroicons/IconCircle/UserIcon/HeartIcon";
import HeaderContactGroup from "./components/heroicons/header_contact_group/Header_contact_group";
import { useEffect, useState } from "react";
import GetConsultationForm from "@/app/components/getConsultationForm/GetConsultationForm";
import Slider from "./components/slider/Slider";
import LoadingOverlay from "./components/LoadingOverlay/LoadingOverlay";
import useMapDataToTextContent from "./hooks/ useMapDataToTextContent";

export default function Home() {
  const {
    language,
    fetchTranslations,

    loading,
    isConsultationForm,
    handleConsultationForm,
  } = UseMenu();

  const [isReserveForm, setReserveForm] = useState(false);

  useEffect(() => {
    fetchTranslations([1, 2, 3], language).catch((error) =>
      console.error("Translation fetch error:", error)
    );
  }, [language]);

  const handleReserveForm = () => {
    setReserveForm((prev) => !prev);
  };

  return (
    <div className={`primaryOuterContainer `}>
      <div id="top"></div>
      {loading && <LoadingOverlay />}
      {isReserveForm && <ReserveForm onClick={handleReserveForm} />}
      <MobileMenu />
      {isConsultationForm && (
        <GetConsultationForm onClick={handleConsultationForm} />
      )}

      <Header onClick={handleReserveForm} container={"container"} />
      <main className="home_main">
        <div className="bg">
          <Slider />
          <div className="container">
            <section className="content">
              <div className="texts">
                <h1>
                  <span className="permanent spanLow">
                    {/* {t("main.welcome.title", language)} */}

                    {useMapDataToTextContent("main.welcome.title", language)}
                  </span>
                  <span className="studio spanLow">
                    {useMapDataToTextContent("main.welcome.subtitle", language)}
                  </span>
                </h1>
                <p className="master">
                  <span>
                    {useMapDataToTextContent(
                      "main.welcome.master_info",
                      language
                    )}
                  </span>
                  <span>
                    &quot;
                    {useMapDataToTextContent(
                      "main.welcome.master_info_1",
                      language
                    )}
                    &quot;
                  </span>
                </p>

                <ul className="check_icons">
                  <li>
                    <VerifiedIcon />

                    {useMapDataToTextContent(
                      "main.welcome.tattoos.eyebrow",
                      language
                    )}
                  </li>
                  <li>
                    <VerifiedIcon />

                    {useMapDataToTextContent(
                      "main.welcome.tattoos.lip",
                      language
                    )}
                  </li>
                  <li>
                    <VerifiedIcon />

                    {useMapDataToTextContent(
                      "main.welcome.tattoos.eyelid",
                      language
                    )}
                  </li>
                </ul>

                <p className="price">
                  {useMapDataToTextContent("main.welcome.price_info", language)}
                </p>

                <p className="youwill">
                  {useMapDataToTextContent("main.welcome.you_will", language)}
                </p>
                <div className="buttonBox">
                  <MainButton
                    onClick={handleReserveForm}
                    label={useMapDataToTextContent(
                      "main.buttons.book_appointment",
                      language
                    )}
                  />
                  <MainButton
                    withIcon={true}
                    onClick={handleConsultationForm}
                    bg={"var(--color--white)"}
                    label={useMapDataToTextContent(
                      "main.buttons.get_consultation",
                      language
                    )}
                  />
                </div>
              </div>
            </section>
          </div>
          <div className="mainOverlay"></div>
        </div>
        <div className="container">
          <div className="advantages">
            <div className="advantagesCard">
              <UserIconComponent />
              <h3>{useMapDataToTextContent("main.welcome.title", language)}</h3>
              <p>
                {useMapDataToTextContent(
                  "main.advantages.procedure_duration",
                  language
                )}
              </p>
            </div>
            <div className="advantagesCard">
              <HeartIconComponent />
              <h3>
                {useMapDataToTextContent(
                  "main.advantages.fast_and_painless",
                  language
                )}
              </h3>
              <p>
                {useMapDataToTextContent("main.advantages.guarantee", language)}
              </p>
            </div>
            <div className="advantagesCard">
              <HeartIconComponent />
              <h3>
                {useMapDataToTextContent(
                  "main.advantages.fast_and_painless",
                  language
                )}
              </h3>
              <p>
                {useMapDataToTextContent("main.advantages.guarantee", language)}
              </p>
            </div>
          </div>
        </div>
        <section className="price_section">
          <div className="container">
            <div className="price_section_text">
              <h2 className="price_section_price">Prices</h2>
              <div className="makeup_wrap">
                <h3 className="price_section_makeup">
                  {useMapDataToTextContent(
                    "main.price_section.title",
                    language
                  )}
                </h3>
              </div>
            </div>

            <div className="cardContainer">
              <div className="card">
                <div className="cardTitle">
                  <span>
                    {" "}
                    {useMapDataToTextContent(
                      "main.price_section.items.eyebrow.title",
                      language
                    )}
                  </span>
                </div>
                <div className="cardPhoto">
                  <Image width={500} height={300} src={imgBg} alt="img" />
                </div>
                <p className="cardText">
                  {useMapDataToTextContent(
                    "main.price_section.items.eyebrow.duration",
                    language
                  )}
                </p>
                <p>
                  {useMapDataToTextContent(
                    "main.price_section.items.eyebrow.price",
                    language
                  )}
                </p>
                <div className="cardButton">
                  <MainButton
                    label={useMapDataToTextContent("header.button", language)}
                    onClick={handleReserveForm}
                    bg={"var(--background)"}
                  />
                </div>
              </div>
              <div className="card">
                <div className="cardTitle">
                  <span>
                    {" "}
                    {useMapDataToTextContent(
                      "main.price_section.items.eyelid.title",
                      language
                    )}
                  </span>
                </div>
                <div className="cardPhoto">
                  <Image width={500} height={300} src={imgBg} alt="img" />
                </div>
                <p className="cardText">
                  {useMapDataToTextContent(
                    "main.price_section.items.eyelid.duration",
                    language
                  )}
                </p>
                <p>
                  {useMapDataToTextContent(
                    "main.price_section.items.eyelid.price",
                    language
                  )}
                </p>
                <div className="cardButton">
                  <MainButton
                    label={useMapDataToTextContent("header.button", language)}
                    onClick={handleReserveForm}
                    bg={"var(--background)"}
                  />
                </div>
              </div>
              <div className="card">
                <div className="cardTitle">
                  <span>
                    {" "}
                    {useMapDataToTextContent(
                      "main.price_section.items.lip.title",
                      language
                    )}
                  </span>
                </div>
                <div className="cardPhoto">
                  <Image width={500} height={300} src={imgBg} alt="img" />
                </div>
                <p className="cardText">
                  {useMapDataToTextContent(
                    "main.price_section.items.lip.duration",
                    language
                  )}
                </p>
                <p>
                  {" "}
                  {useMapDataToTextContent(
                    "main.price_section.items.lip.price",
                    language
                  )}
                </p>
                <div className="cardButton">
                  <MainButton
                    label={useMapDataToTextContent("header.button", language)}
                    onClick={handleReserveForm}
                    bg={"var(--background)"}
                  />
                </div>
              </div>
              <div className="card">
                <div className="cardTitle">
                  <span>
                    {" "}
                    {useMapDataToTextContent(
                      "main.price_section.items.correction.title",
                      language
                    )}
                  </span>
                </div>
                <div className="cardPhoto">
                  <Image width={500} height={300} src={imgBg} alt="img" />
                </div>
                <p className="cardText">
                  {useMapDataToTextContent(
                    "main.price_section.items.correction.duration",
                    language
                  )}
                </p>
                <p>
                  {useMapDataToTextContent(
                    "main.price_section.items.correction.price",
                    language
                  )}
                </p>
                <div className="cardButton">
                  <MainButton
                    label={useMapDataToTextContent("header.button", language)}
                    onClick={handleReserveForm}
                    bg={"var(--background)"}
                  />
                </div>
              </div>
              <div className="card">
                <div className="cardTitle">
                  <span>
                    {" "}
                    {useMapDataToTextContent(
                      "main.price_section.items.foundation_effect.title",
                      language
                    )}
                  </span>
                </div>
                <div className="cardPhoto">
                  <Image width={500} height={300} src={imgBg} alt="img" />
                </div>
                <p className="cardText">
                  {useMapDataToTextContent(
                    "main.price_section.items.foundation_effect.duration",
                    language
                  )}
                </p>
                <p>
                  {useMapDataToTextContent(
                    "main.price_section.items.foundation_effect.price",
                    language
                  )}
                </p>
                <div className="cardButton">
                  <MainButton
                    label={useMapDataToTextContent("header.button", language)}
                    onClick={handleReserveForm}
                    bg={"var(--background)"}
                  />
                </div>
              </div>
              <div className="card">
                <div className="cardTitle">
                  <span>
                    {" "}
                    {useMapDataToTextContent(
                      "main.price_section.items.permanent_makeup.title",
                      language
                    )}
                  </span>
                </div>
                <div className="cardPhoto">
                  <Image width={500} height={300} src={imgBg} alt="img" />
                </div>
                <p className="cardText">
                  {useMapDataToTextContent(
                    "main.price_section.items.permanent_makeup.duration",
                    language
                  )}
                </p>
                <p>
                  {useMapDataToTextContent(
                    "main.price_section.items.permanent_makeup.price",
                    language
                  )}
                </p>
                <div className="cardButton">
                  <MainButton
                    label={useMapDataToTextContent("header.button", language)}
                    onClick={handleReserveForm}
                    bg={"var(--background)"}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="portfolio">
          <div className="container">
            <div className="portfolio-header">
              <h2 className="portfolio-title-background">PORTFOLIO</h2>
              <div className="portfolio-title-wrap">
                <h2 className="portfolio-title-foreground">
                  {useMapDataToTextContent("main.portfolio.title", language)}
                </h2>
              </div>
            </div>
            <div className="portfolio-grid">
              <div className="portfolio-item">
                <Image
                  src="/img/1.jpg"
                  alt="Work Example 1"
                  fill
                  sizes="(max-width: 768px) 100vw, (min-width: 768px) 33vw"
                  // Adjust based on your layout
                />
              </div>
              <div className="portfolio-item">
                <Image
                  src="/img/2.jpg"
                  alt="Work Example 2"
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 33vw" // Adjust based on your layout
                  //
                />
              </div>
              <div className="portfolio-item">
                <Image
                  src="/img/3.jpg"
                  alt="Work Example 3"
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 33vw" // Adjust based on your layout
                />
              </div>
              <div className="portfolio-item">
                <Image
                  src="/img/4.jpg"
                  alt="Work Example 4"
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 33vw" // Adjust based on your layout
                />
              </div>
              <div className="portfolio-item">
                <Image
                  src="/img/5.jpg"
                  alt="Work Example 5"
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 33vw" // Adjust based on your layout
                />
              </div>
              <div className="portfolio-item">
                <Image
                  src="/img/6.jpg"
                  alt="Work Example 6"
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 33vw" // Adjust based on your layout
                />
              </div>
              <div className="portfolio-item">
                <Image
                  src="/img/7.jpg"
                  alt="Work Example 7"
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 33vw" // Adjust based on your layout
                />
              </div>
              <div className="portfolio-item">
                <Image
                  src="/img/8.jpg"
                  alt="Work Example 8"
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 33vw" // Adjust based on your layout
                />
              </div>
              <div className="portfolio-item">
                <Image
                  src="/img/9.jpg"
                  alt="Work Example 9"
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 33vw" // Adjust based on your layout
                />
              </div>
              <div className="portfolio-item">
                <Image
                  src="/img/10.jpg"
                  alt="Work Example 10"
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 33vw" // Adjust based on your layout
                />
              </div>
            </div>
            <p className="portfolio-footer">
              {useMapDataToTextContent("main.portfolio.footer", language)}
            </p>
          </div>
        </section>
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
