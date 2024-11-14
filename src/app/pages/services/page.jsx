"use client";

import { UseMenu } from "@/app/ClientProvider";
import Footer from "@/app/components/footer/Footer";
import Header from "@/app/components/header/Header";

import MobileMenu from "@/app/components/mobileMenu/MobileMenu";
import ReserveForm from "@/app/components/reserveForm/ReserveForm";
import { useState } from "react";
import imgBg from "./../../../../public/img/bg.jpg";
import MainButton from "@/app/components/mainButton/MainButton";
import Image from "next/image";
import GetConsultationForm from "@/app/components/getConsultationForm/GetConsultationForm";

function PageServices() {
  const { mapDataToTextContent,handleConsultationForm,isConsultationForm } = UseMenu();
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
                  {mapDataToTextContent("main.price_section.title")}
                </h3>
              </div>
            </div>
            <div className="cardContainer">
              <div className="card">
                <div className="cardTitle">
                  <span>
                    {" "}
                    {mapDataToTextContent(
                      "main.price_section.items.eyebrow.title"
                    )}
                  </span>
                </div>
                <div className="cardPhoto">
                  <Image width={500} height={300} src={imgBg} alt="img" />
                </div>
                <p className="cardText">
                  {mapDataToTextContent(
                    "main.price_section.items.eyebrow.duration"
                  )}
                </p>
                <p>100$</p>
                <div className="cardButton">
                  <MainButton
                    label={mapDataToTextContent("header.button")}
                    onClick={handleReserveForm}
                    bg={"var(--background)"}
                  />
                </div>
              </div>
              <div className="card">
                <div className="cardTitle">
                  <span>
                    {" "}
                    {mapDataToTextContent(
                      "main.price_section.items.eyebrow.title"
                    )}
                  </span>
                </div>
                <div className="cardPhoto">
                  <Image width={500} height={300} src={imgBg} alt="img" />
                </div>
                <p className="cardText">
                  {mapDataToTextContent(
                    "main.price_section.items.eyebrow.duration"
                  )}
                </p>
                <p>100$</p>
                <div className="cardButton">
                  <MainButton
                    label={mapDataToTextContent("header.button")}
                    onClick={handleReserveForm}
                    bg={"var(--background)"}
                  />
                </div>
              </div>
              <div className="card">
                <div className="cardTitle">
                  <span>
                    {" "}
                    {mapDataToTextContent(
                      "main.price_section.items.eyebrow.title"
                    )}
                  </span>
                </div>
                <div className="cardPhoto">
                  <Image width={500} height={300} src={imgBg} alt="img" />
                </div>
                <p className="cardText">
                  {mapDataToTextContent(
                    "main.price_section.items.eyebrow.duration"
                  )}
                </p>
                <p>100$</p>
                <div className="cardButton">
                  <MainButton
                    label={mapDataToTextContent("header.button")}
                    onClick={handleReserveForm}
                    bg={"var(--background)"}
                  />
                </div>
              </div>
              <div className="card">
                <div className="cardTitle">
                  <span>
                    {" "}
                    {mapDataToTextContent(
                      "main.price_section.items.eyebrow.title"
                    )}
                  </span>
                </div>
                <div className="cardPhoto">
                  <Image width={500} height={300} src={imgBg} alt="img" />
                </div>
                <p className="cardText">
                  {mapDataToTextContent(
                    "ain.price_section.items.eyebrow.duration"
                  )}
                </p>
                <p>100$</p>
                <div className="cardButton">
                  <MainButton
                    label={mapDataToTextContent("header.button")}
                    onClick={handleReserveForm}
                    bg={"var(--background)"}
                  />
                </div>
              </div>
              <div className="card">
                <div className="cardTitle">
                  <span>
                    {" "}
                    {mapDataToTextContent(
                      "main.price_section.items.eyebrow.title"
                    )}
                  </span>
                </div>
                <div className="cardPhoto">
                  <Image width={500} height={300} src={imgBg} alt="img" />
                </div>
                <p className="cardText">
                  {mapDataToTextContent(
                    "main.price_section.items.eyebrow.duration"
                  )}
                </p>
                <p>100$</p>
                <div className="cardButton">
                  <MainButton
                    label={mapDataToTextContent("header.button")}
                    onClick={handleReserveForm}
                    bg={"var(--background)"}
                  />
                </div>
              </div>
              <div className="card">
                <div className="cardTitle">
                  <span>
                    {" "}
          
                    {mapDataToTextContent(
                    "main.price_section.items.eyebrow.title"
                  )}
                  </span>
                </div>
                <div className="cardPhoto">
                  <Image width={500} height={300} src={imgBg} alt="img" />
                </div>
                <p className="cardText">
                  {mapDataToTextContent(
                    "main.price_section.items.eyebrow.duration"
                  )}
                </p>
                <p>100$</p>
                <div className="cardButton">
                  <MainButton
                    label={mapDataToTextContent(
                      "header.button"
                    )}
                    
                    onClick={handleReserveForm}
                    bg={"var(--background)"}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer  container={"container"} />
    </div>
  );
}

export default PageServices;
