"use client";

import { useMenu } from "@/app/ClientProvider";
import Footer from "@/app/components/footer/Footer";
import Header from "@/app/components/header/Header";

import MobileMenu from "@/app/components/mobileMenu/MobileMenu";
import ReserveForm from "@/app/components/reserveForm/ReserveForm";
import { useState } from "react";
import imgBg from "./../../../../public/img/bg.jpg";
import MainButton from "@/app/components/mainButton/MainButton";
import Image from "next/image";
function pageServices() {
  const { overlayOpen } = useMenu();
  const [isReserveForm, setReserveForm] = useState(false);
  const handleReserveForm = () => {
    setReserveForm((prev) => !prev);
  };

  return (
    <div className={`primaryOuterContainer ${overlayOpen ? "overlay" : ""}`}>
      <MobileMenu />
      {isReserveForm && <ReserveForm onClick={handleReserveForm} />}
      <Header onClick={handleReserveForm} container={"container"} />
      <main>
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
                  <Image
                    width={500}
                    height={300}
                    src={imgBg}
                    alt="img"
                    priority
                  />
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
                  <Image
                    width={500}
                    height={300}
                    src={imgBg}
                    alt="img"
                    priority
                  />
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
                  <Image
                    width={500}
                    height={300}
                    src={imgBg}
                    alt="img"
                    priority
                  />
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
                  <Image
                    width={500}
                    height={300}
                    src={imgBg}
                    alt="img"
                    priority
                  />
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
                  <Image
                    width={500}
                    height={300}
                    src={imgBg}
                    alt="img"
                    priority
                  />
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
                  <Image
                    width={500}
                    height={300}
                    src={imgBg}
                    alt="img"
                    priority
                  />
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
      </main>
      <Footer onClick={handleReserveForm} container={"container"} />
    </div>
  );
}

export default pageServices;
