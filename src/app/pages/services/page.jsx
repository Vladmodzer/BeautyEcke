"use client";

import { UseMenu } from "@/app/ClientProvider";
import Footer from "@/app/components/footer/Footer";
import Header from "@/app/components/header/Header";
import MobileMenu from "@/app/components/mobileMenu/MobileMenu";
import ReserveForm from "@/app/components/reserveForm/ReserveForm";
import { useState } from "react";
import MainButton from "@/app/components/mainButton/MainButton";
import GetConsultationForm from "@/app/components/getConsultationForm/GetConsultationForm";
import useMapDataToTextContent from "@/app/hooks/ useMapDataToTextContent";
import useGetImageUrl from "@/app/hooks/getPhoto/useGetPhoto";
import PromoBanner from "@/app/components/action/Action";

function PageServices() {
  const photo1 = useGetImageUrl("photo", "card1");
  const photo2 = useGetImageUrl("photo", "card2");
  const photo3 = useGetImageUrl("photo", "card3");
  const photo4 = useGetImageUrl("photo", "card4");
  const photo5 = useGetImageUrl("photo", "card5");
  const photo6 = useGetImageUrl("photo", "card6");
  const { handleConsultationForm, isConsultationForm, language } = UseMenu();
  const [isReserveForm, setReserveForm] = useState(false);
  const handleReserveForm = () => {
    setReserveForm((prev) => !prev);
  };

  return (
    <div className={`primaryOuterContainer `}>
      <MobileMenu />
      {isReserveForm && <ReserveForm onClick={handleReserveForm} />}
      {isConsultationForm && (
        <GetConsultationForm onClick={handleConsultationForm} />
      )}
      <Header onClick={handleReserveForm} container={"container"} />
      <main>
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
                  <img className="photoinCard"  src={photo1} alt="img" />
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
                <img className="photoinCard" 
                
                src={photo2} alt="img" />
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
                <img className="photoinCard" width={500}  src={photo3} alt="img" />
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
                <img className="photoinCard" width={500}  src={photo4} alt="img" />
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
                <img className="photoinCard" width={500}  src={photo5} alt="img" />
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
                <img className="photoinCard" width={500}  src={photo6} alt="img" />
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
            <PromoBanner />
          </div>
        </section>
      </main>
      <Footer container={"container"} />
    </div>
  );
}

export default PageServices;
