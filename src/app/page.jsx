"use client";

import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import { useMenu } from "./ClientProvider";
import MobileMenu from "./components/mobileMenu/MobileMenu";
import ReserveForm from "./components/reserveForm/ReserveForm";
import imgBg from "./../../public/img/bg.jpg";
import VerifiedIcon from "./components/heroicons/VerifiedIcon/VerifiedIcon";
import MainButton from "./components/mainButton/MainButton";
import Image from "next/image";
import UserIconComponent from "./components/heroicons/IconCircle/UserIcon/UserIcon";
import HeartIconComponent from "./components/heroicons/IconCircle/UserIcon/HeartIcon";
import HeaderContactGroup from "./components/heroicons/header_contact_group/Header_contact_group";
import { useState } from "react";
import GetConsultationForm from "@/app/components/getConsultationForm/GetConsultationForm";
// import ScrollToTop from "./components/heroicons/ChevronUpIcon/ChevronUpIcon";

export default function Home() {
  const { overlayOpen } = useMenu();

  const [isReserveForm, setReserveForm] = useState(false);

  const handleReserveForm = () => {
    setReserveForm((prev) => !prev);
  };
  const [isConsultationForm, setConsultationForm] = useState(false);

  const handleConsultationForm = () => {
    setConsultationForm((prev) => !prev);
  };

  return (
    <div className={`primaryOuterContainer ${overlayOpen ? "overlay" : ""}`}>
      <div id="top"></div>
      {isReserveForm && <ReserveForm onClick={handleReserveForm} />}
      <MobileMenu />
      {isConsultationForm && (
        <GetConsultationForm onClick={handleConsultationForm} />
      )}
      {/* <ScrollToTop /> */}
      <Header onClick={handleReserveForm} container={"container"} />
      <main className="home_main">
        <div className="bg">
          <Image
            src={imgBg.src}
            alt="Описание фонового изображения"
            fill // Теперь используется свойство fill
            style={{ objectFit: "cover" }} // Используйте стиль CSS для управления масштабированием
            priority // Добавьте приоритет, если изображение важно для LCP
          />
          <div className="container">
            <section className="content">
              <div className="texts">
                <h1>
                  <span className="permanent">Permanent Makeup</span>
                  <span className="studio">Studio</span>
                  <span className="city">in Essen</span>
                </h1>
                <p className="master">
                  <span>Leading master Ekaterina Birukova,</span>
                  <span>
                    {" "}
                    a permanent makeup expert with years of experience
                  </span>
                </p>

                <ul className="check_icons">
                  <li>
                    <VerifiedIcon />
                    Eyebrow Tattoo
                  </li>
                  <li>
                    <VerifiedIcon />
                    Lip Tattoo
                  </li>
                  <li>
                    <VerifiedIcon />
                    Eyelid Tattoo
                  </li>
                </ul>

                <p className="price">
                  Permanent makeup for any area from <strong>300 Euro</strong>
                </p>

                <p className="youwill">
                  You will forget about daily makeup after the permanent makeup
                  procedure.
                </p>
                <div className="buttonBox">
                  <MainButton
                    onClick={handleReserveForm}
                    label={"Book an Appointment"}
                  />
                  <MainButton
                    withIcon={true}
                    onClick={handleConsultationForm}
                    bg={"var(--color--white)"}
                    label={"Get a Consultation"}
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
              <h3>Fast and painless</h3>
              <p>
                The procedure lasts 2 hours. Permanent makeup is 100% safe and
                painless.
              </p>
            </div>
            <div className="advantagesCard">
              <HeartIconComponent />
              <h3>Fast and painless</h3>
              <p>
                We guarantee the absence of any consequences after permanent
                makeup.
              </p>
            </div>
            <div className="advantagesCard">
              <HeartIconComponent />
              <h3>Fast and painless</h3>
              <p>
                A beautiful update to your look. Enhance the natural beauty of
                your face.
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
                  Prices for permanent makeup
                </h3>
              </div>
            </div>

            <div className="cardContainer">
              <div className="card">
                <div className="cardTitle">
                  <span>Permanent eyebrow makeup</span>
                </div>
                <div className="cardPhoto">
                  <Image width={500} height={300} src={imgBg} alt="img" />
                </div>
                <p className="cardText">
                  Duration of the procedure is 1.5-2 hours
                </p>
                <p>100$</p>
                <div className="cardButton">
                  <MainButton onClick={handleReserveForm} />
                </div>
              </div>
              <div className="card">
                <div className="cardTitle">
                  <span>Permanent eyelid makeup</span>
                </div>
                <div className="cardPhoto">
                  <Image width={500} height={300} src={imgBg} alt="img" />
                </div>
                <p className="cardText">
                  Duration of the procedure is 1.5-2 hours
                </p>
                <p>100$</p>
                <div className="cardButton">
                  <MainButton onClick={handleReserveForm} />
                </div>
              </div>
              <div className="card">
                <div className="cardTitle">
                  <span>Permanent lip makeup</span>
                </div>
                <div className="cardPhoto">
                  <Image width={500} height={300} src={imgBg} alt="img" />
                </div>
                <p className="cardText">
                  Duration of the procedure is 1.5-2 hours
                </p>
                <p>100$</p>
                <div className="cardButton">
                  <MainButton onClick={handleReserveForm} />
                </div>
              </div>
              <div className="card">
                <div className="cardTitle">
                  <span>Correction</span>
                </div>
                <div className="cardPhoto">
                  <Image width={500} height={300} src={imgBg} alt="img" />
                </div>
                <p className="cardText">
                  Duration of the procedure is 1.5-2 hours
                </p>
                <p>100$</p>
                <div className="cardButton">
                  <MainButton onClick={handleReserveForm} />
                </div>
              </div>
              <div className="card">
                <div className="cardTitle">
                  <span>Foundation effect</span>
                </div>
                <div className="cardPhoto">
                  <Image width={500} height={300} src={imgBg} alt="img" />
                </div>
                <p className="cardText">
                  Duration of the procedure is 1.5-2 hours
                </p>
                <p>100$</p>
                <div className="cardButton">
                  <MainButton onClick={handleReserveForm} />
                </div>
              </div>
              <div className="card">
                <div className="cardTitle">
                  <span>Permanent makeup</span>
                </div>
                <div className="cardPhoto">
                  <Image width={500} height={300} src={imgBg} alt="img" />
                </div>
                <p className="cardText">
                  Duration of the procedure is 1.5-2 hours
                </p>
                <p>100$</p>
                <div className="cardButton">
                  <MainButton onClick={handleReserveForm} />
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
                <h2 className="portfolio-title-foreground">Work Examples</h2>
              </div>
            </div>
            <div className="portfolio-grid">
              <div className="portfolio-item">
                <Image src="/img/1.jpg" alt="Work Example 1" fill
                 sizes="(max-width: 768px) 100vw, (min-width: 768px) 33vw"
                 // Adjust based on your layout
     
                 />
              </div>
              <div className="portfolio-item">
                <Image src="/img/2.jpg" alt="Work Example 2" fill
                 sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 33vw" // Adjust based on your layout
                 //
                 />
              </div>
              <div className="portfolio-item">
                <Image src="/img/3.jpg" alt="Work Example 3" fill
                 sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 33vw" // Adjust based on your layout
                 
                 />
              </div>
              <div className="portfolio-item">
                <Image src="/img/4.jpg" alt="Work Example 4" fill
                 sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 33vw" // Adjust based on your layout
                 
                 />
              </div>
              <div className="portfolio-item">
                <Image src="/img/5.jpg" alt="Work Example 5" fill
                 sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 33vw" // Adjust based on your layout
                 
                 />
              </div>
              <div className="portfolio-item">
                <Image src="/img/6.jpg" alt="Work Example 6" fill
                 sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 33vw" // Adjust based on your layout
                 
                 />
              </div>
              <div className="portfolio-item">
                <Image src="/img/7.jpg" alt="Work Example 7" fill
                 sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 33vw" // Adjust based on your layout
                 
                 />
              </div>
              <div className="portfolio-item">
                <Image src="/img/8.jpg" alt="Work Example 8" fill
                 sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 33vw" // Adjust based on your layout
                 
                 />
              </div>
              <div className="portfolio-item">
                <Image src="/img/9.jpg" alt="Work Example 9" fill
                 sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 33vw" // Adjust based on your layout
                 
                 />
              </div>
              <div className="portfolio-item">
                <Image src="/img/10.jpg" alt="Work Example 10" fill
                 sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 33vw" // Adjust based on your layout
                 
                 />
              </div>
            </div>
            <p className="portfolio-footer">
              See more examples of work, as well as updates and promotions, on
              our social media.
            </p>
          </div>
        </section>

        <section className="contact">
          <div className="container">
            <div className="contact-header">
              <h2 className="contact-title-background">contact</h2>
              <div className="contact-title-wrap">
                <h2 className="contact-title-foreground">contact us!</h2>
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
                <p>(Lead artist "Ekaterina Birukova")</p>
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
                  label={"Get a Consultation"}
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
