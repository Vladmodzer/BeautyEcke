"use client";

import PasswordInput from "@/app/components/ passwordInput/ PasswordInput";
import styles from "./admin.module.css";
import { UseMenu } from "@/app/ClientProvider";
import { useState } from "react";
import LoadingOverlay from "@/app/components/LoadingOverlay/LoadingOverlay";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
const AdminPage = () => {
  const { t, isadminPasswordRight, loading } = UseMenu();
  const [germanArrow, setGermanArrow] = useState(true);
  const handleGermanArrow = () => {
    setGermanArrow((prev) => !prev);
  };
  const [englishArrow, setEnglishArrow] = useState(true);
  const handleEnglishArrow = () => {
    setEnglishArrow((prev) => !prev);
  };

  const [rusArrow, setRusArrow] = useState(true);
  const handleRusArrow = () => {
    setRusArrow((prev) => !prev);
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы

    // Получаем значения полей ввода
    const formData = new FormData(e.target); // e.target ссылается на форму

    const newAdminData = {};

    formData.forEach((value, key) => {
      // if (value.trim() === "") return; // Игнорируем пустые значения
      const langKey = key.split(".")[0];
      if (value) {
        if (!newAdminData[langKey]) {
          newAdminData[langKey] = {}; // Создаем вложенный объект
          newAdminData[langKey][key] = value; // добавляем в вложеный обьект ключи со значениями
        }
        newAdminData[langKey][key] = value;
      }
    });

    try {
      const response = await fetch("/api/updateTranslations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAdminData), // Преобразуем данные в JSON
      });

      if (!response.ok) {
        throw new Error(`Ошибка: ${response.statusText}`);
      }

      const result = await response.json();
      console.log("Успешно обновлено:", result);
    } catch (error) {
      console.error("Ошибка при обновлении:", error);
    }
  };

  return (
    <div className={styles.adminBoxBack}>
      <div className={styles.adminBox}>
        {loading && <LoadingOverlay />}
        {!isadminPasswordRight && <PasswordInput />}
        <div className={styles.container}>
          <h1>Админ панель - Переводы</h1>
          <form onSubmit={handleSubmit} className={styles.form}>
            {/* Немецкий */}
            <h2>Переводы на Немецкий</h2>
            <h3>Главная</h3>
            <ChevronDownIcon
              style={{
                width: "24px",
                cursor: "pointer",
                transition: "transform 0.3s ease", // Плавный переход
                transform: germanArrow ? "rotate(180deg)" : "rotate(0deg)", // Условное вращение
              }}
              onClick={handleGermanArrow} // Обработчик клика
            />
            <div
              className={styles.germanBox}
              style={{ display: germanArrow ? "none" : "block" }}
            >
              <input
                type="text"
                name="de.main.welcome.title"
                placeholder={`${t("main.welcome.title", "de")}`}
                className={styles.input}
              />
              <input
                type="text"
                name="de.main.welcome.subtitle"
                placeholder={`${t("main.welcome.subtitle", "de")}`}
                className={styles.input}
              />
              <input
                type="text"
                name="de.main.welcome.master_info"
                placeholder={`${t("main.welcome.master_info", "de")}`}
                className={styles.input}
              />
              <input
                type="text"
                name="de.main.welcome.master_info_1"
                placeholder={`${t("main.welcome.master_info_1", "de")}`}
                className={styles.input}
              />
              <input
                type="text"
                name="de.main.welcome.tattoos.eyebrow"
                placeholder={`${t("main.welcome.tattoos.eyebrow", "de")}`}
                className={styles.input}
              />
              <input
                type="text"
                name="de.main.welcome.tattoos.lip"
                placeholder={`${t("main.welcome.tattoos.lip", "de")}`}
                className={styles.input}
              />
              <input
                type="text"
                name="de.main.welcome.tattoos.eyelid"
                placeholder={`${t("main.welcome.tattoos.eyelid", "de")}`}
                className={styles.input}
              />
              <input
                type="text"
                name="de.main.welcome.price_info"
                placeholder={`${t("main.welcome.price_info", "de")}`}
                className={styles.input}
              />
              <input
                type="text"
                name="de.main.welcome.you_will"
                placeholder={`${t("main.welcome.you_will", "de")}`}
                className={styles.input}
              />

              <h3>Кнопки</h3>
              <input
                type="text"
                name="de.main.buttons.book_appointment"
                placeholder={`${t("main.buttons.book_appointment", "de")}`}
                className={styles.input}
              />
              <input
                type="text"
                name="de.main.buttons.get_consultation"
                placeholder={`${t("main.buttons.get_consultation", "de")}`}
                className={styles.input}
              />

              <h3>Преимущества</h3>
              <input
                type="text"
                name="de.main.advantages.fast_and_painless"
                placeholder={`${t("main.advantages.fast_and_painless", "de")}`}
                className={styles.input}
              />
              <input
                type="text"
                name="de.main.advantages.procedure_duration"
                placeholder={`${t("main.advantages.procedure_duration", "de")}`}
                className={styles.input}
              />
              <input
                type="text"
                name="de.main.advantages.guarantee"
                placeholder={`${t("main.advantages.guarantee", "de")}`}
                className={styles.input}
              />
              <input
                type="text"
                name="de.main.advantages.beauty_update"
                placeholder={`${t("main.advantages.beauty_update", "de")}`}
                className={styles.input}
              />

              <h3>Информация о ценах</h3>
              <input
                type="text"
                name="de.main.price_section.title"
                placeholder="Цены на Перманентный Макияж"
                className={styles.input}
              />
              <input
                type="text"
                name="de.main.price_section.items.eyebrow.title"
                placeholder="Перманентный макияж бровей"
                className={styles.input}
              />
              <input
                type="text"
                name="de.main.price_section.items.eyebrow.duration"
                placeholder="Продолжительность процедуры"
                className={styles.input}
              />
              <input
                type="text"
                name="de.main.price_section.items.eyebrow.price"
                placeholder="Цена"
                className={styles.input}
              />
              <input
                type="text"
                name="de.main.price_section.items.eyelid.title"
                placeholder="Перманентный макияж век"
                className={styles.input}
              />
              <input
                type="text"
                name="de.main.price_section.items.eyelid.duration"
                placeholder="Продолжительность процедуры"
                className={styles.input}
              />
              <input
                type="text"
                name="de.main.price_section.items.eyelid.price"
                placeholder="Цена"
                className={styles.input}
              />
              <input
                type="text"
                name="de.main.price_section.items.lip.title"
                placeholder="Перманентный макияж губ"
                className={styles.input}
              />
              <input
                type="text"
                name="de.main.price_section.items.lip.duration"
                placeholder="Продолжительность процедуры"
                className={styles.input}
              />
              <input
                type="text"
                name="de.main.price_section.items.lip.price"
                placeholder="Цена"
                className={styles.input}
              />
              <input
                type="text"
                name="de.main.price_section.items.correction.title"
                placeholder="Коррекция"
                className={styles.input}
              />
              <input
                type="text"
                name="de.main.price_section.items.correction.duration"
                placeholder="Продолжительность процедуры"
                className={styles.input}
              />
              <input
                type="text"
                name="de.main.price_section.items.correction.price"
                placeholder="Цена"
                className={styles.input}
              />
              <input
                type="text"
                name="de.main.price_section.items.foundation_effect.title"
                placeholder="Эффект фундамента"
                className={styles.input}
              />
              <input
                type="text"
                name="de.main.price_section.items.foundation_effect.duration"
                placeholder="Продолжительность процедуры"
                className={styles.input}
              />
              <input
                type="text"
                name="de.main.price_section.items.foundation_effect.price"
                placeholder="Цена"
                className={styles.input}
              />
              <input
                type="text"
                name="de.main.price_section.items.permanent_makeup.title"
                placeholder="Перманентный макияж"
                className={styles.input}
              />
              <input
                type="text"
                name="de.main.price_section.items.permanent_makeup.duration"
                placeholder="Продолжительность процедуры"
                className={styles.input}
              />
              <input
                type="text"
                name="de.main.price_section.items.permanent_makeup.price"
                placeholder="Цена"
                className={styles.input}
              />

              <h3>Примеры работ</h3>
              <input
                type="text"
                name="de.main.portfolio.title"
                placeholder="Примеры Работ"
                className={styles.input}
              />
              <input
                type="text"
                name="de.main.portfolio.footer"
                placeholder="Footer"
                className={styles.input}
              />

              <h3>Контактная информация</h3>
              <input
                type="text"
                name="de.main.contact.title"
                placeholder="Связаться с нами!"
                className={styles.input}
              />
              <input
                type="text"
                name="de.main.contact.invitation"
                placeholder="Приглашение"
                className={styles.input}
              />
              <input
                type="text"
                name="de.main.contact.info.studio_name"
                placeholder="Название студии"
                className={styles.input}
              />
              <input
                type="text"
                name="de.main.contact.info.lead_artist"
                placeholder="Ведущий мастер"
                className={styles.input}
              />
              <input
                type="text"
                name="de.main.contact.info.phone"
                placeholder="Телефон"
                className={styles.input}
              />
              <input
                type="text"
                name="de.main.contact.info.location"
                placeholder="Местоположение"
                className={styles.input}
              />
              <input
                type="text"
                name="de.main.contact.info.appointment_info"
                placeholder="Информация о записи"
                className={styles.input}
              />

              <h3>О нас</h3>
              <input
                type="text"
                name="de.main.about.title"
                placeholder="О нас"
                className={styles.input}
              />
              <input
                type="text"
                name="de.main.about.master.name"
                placeholder="Имя мастера"
                className={styles.input}
              />
              <input
                type="text"
                name="de.main.about.master.position"
                placeholder="Должность"
                className={styles.input}
              />
              <input
                type="text"
                name="de.main.about.master.achievements"
                placeholder="Достижения (через запятую)"
                className={styles.input}
              />
            </div>
            {/* Английский */}
            <h2>Переводы на Английский</h2>
            <h3>Главная</h3>
            <ChevronDownIcon
              style={{
                width: "24px",
                cursor: "pointer",
                transition: "transform 0.3s ease", // Плавный переход
                transform: englishArrow ? "rotate(180deg)" : "rotate(0deg)", // Условное вращение
              }}
              onClick={handleEnglishArrow} // Обработчик клика
            />
            <div
              className={styles.englishBox}
              style={{ display: englishArrow ? "none" : "block" }}
            >
              <input
                type="text"
                name="en.main.welcome.title"
                placeholder="Title"
                className={styles.input}
              />
              <input
                type="text"
                name="en.main.welcome.subtitle"
                placeholder="Subtitle"
                className={styles.input}
              />
              <input
                type="text"
                name="en.main.welcome.master_info"
                placeholder="Master Info"
                className={styles.input}
              />
              <input
                type="text"
                name="en.main.welcome.master_info_1"
                placeholder="Master Info 1"
                className={styles.input}
              />
              <input
                type="text"
                name="en.main.welcome.price_info"
                placeholder="Price Info"
                className={styles.input}
              />
              <input
                type="text"
                name="en.main.welcome.you_will"
                placeholder="You will forget about makeup"
                className={styles.input}
              />
              <input
                type="text"
                name="en.main.welcome.tattoos.eyebrow"
                placeholder="Eyebrow Tattoo"
                className={styles.input}
              />
              <input
                type="text"
                name="en.main.welcome.tattoos.lip"
                placeholder="Lip Tattoo"
                className={styles.input}
              />
              <input
                type="text"
                name="en.main.welcome.tattoos.eyelid"
                placeholder="Eyelid Tattoo"
                className={styles.input}
              />

              <h3>Кнопки</h3>
              <input
                type="text"
                name="en.main.buttons.book_appointment"
                placeholder="Book Appointment"
                className={styles.input}
              />
              <input
                type="text"
                name="en.main.buttons.get_consultation"
                placeholder="Get Consultation"
                className={styles.input}
              />

              <h3>Преимущества</h3>
              <input
                type="text"
                name="en.main.advantages.fast_and_painless"
                placeholder="Fast and Painless"
                className={styles.input}
              />
              <input
                type="text"
                name="en.main.advantages.procedure_duration"
                placeholder="Procedure Duration"
                className={styles.input}
              />
              <input
                type="text"
                name="en.main.advantages.guarantee"
                placeholder="Guarantee"
                className={styles.input}
              />
              <input
                type="text"
                name="en.main.advantages.beauty_update"
                placeholder="Beauty Update"
                className={styles.input}
              />

              <h3>Информация о ценах</h3>
              <input
                type="text"
                name="en.main.price_section.title"
                placeholder="Prices for Permanent Makeup"
                className={styles.input}
              />
              <input
                type="text"
                name="en.main.price_section.items.eyebrow.title"
                placeholder="Eyebrow Permanent Makeup"
                className={styles.input}
              />
              <input
                type="text"
                name="en.main.price_section.items.eyebrow.duration"
                placeholder="Duration"
                className={styles.input}
              />
              <input
                type="text"
                name="en.main.price_section.items.eyebrow.price"
                placeholder="Price"
                className={styles.input}
              />
              <input
                type="text"
                name="en.main.price_section.items.eyelid.title"
                placeholder="Eyelid Permanent Makeup"
                className={styles.input}
              />
              <input
                type="text"
                name="en.main.price_section.items.eyelid.duration"
                placeholder="Duration"
                className={styles.input}
              />
              <input
                type="text"
                name="en.main.price_section.items.eyelid.price"
                placeholder="Price"
                className={styles.input}
              />
              <input
                type="text"
                name="en.main.price_section.items.lip.title"
                placeholder="Lip Permanent Makeup"
                className={styles.input}
              />
              <input
                type="text"
                name="en.main.price_section.items.lip.duration"
                placeholder="Duration"
                className={styles.input}
              />
              <input
                type="text"
                name="en.main.price_section.items.lip.price"
                placeholder="Price"
                className={styles.input}
              />
              <input
                type="text"
                name="en.main.price_section.items.correction.title"
                placeholder="Correction"
                className={styles.input}
              />
              <input
                type="text"
                name="en.main.price_section.items.correction.duration"
                placeholder="Duration"
                className={styles.input}
              />
              <input
                type="text"
                name="en.main.price_section.items.correction.price"
                placeholder="Price"
                className={styles.input}
              />
              <input
                type="text"
                name="en.main.price_section.items.foundation_effect.title"
                placeholder="Foundation Effect"
                className={styles.input}
              />
              <input
                type="text"
                name="en.main.price_section.items.foundation_effect.duration"
                placeholder="Duration"
                className={styles.input}
              />
              <input
                type="text"
                name="en.main.price_section.items.foundation_effect.price"
                placeholder="Price"
                className={styles.input}
              />
              <input
                type="text"
                name="en.main.price_section.items.permanent_makeup.title"
                placeholder="Permanent Makeup"
                className={styles.input}
              />
              <input
                type="text"
                name="en.main.price_section.items.permanent_makeup.duration"
                placeholder="Duration"
                className={styles.input}
              />
              <input
                type="text"
                name="en.main.price_section.items.permanent_makeup.price"
                placeholder="Price"
                className={styles.input}
              />

              <h3>Примеры работ</h3>
              <input
                type="text"
                name="en.main.portfolio.title"
                placeholder="Portfolio Examples"
                className={styles.input}
              />
              <input
                type="text"
                name="en.main.portfolio.footer"
                placeholder="Footer"
                className={styles.input}
              />

              <h3>Контактная информация</h3>
              <input
                type="text"
                name="en.main.contact.title"
                placeholder="Contact Us!"
                className={styles.input}
              />
              <input
                type="text"
                name="en.main.contact.invitation"
                placeholder="Invitation"
                className={styles.input}
              />
              <input
                type="text"
                name="en.main.contact.info.studio_name"
                placeholder="Studio Name"
                className={styles.input}
              />
              <input
                type="text"
                name="en.main.contact.info.lead_artist"
                placeholder="Lead Artist"
                className={styles.input}
              />
              <input
                type="text"
                name="en.main.contact.info.phone"
                placeholder="Phone"
                className={styles.input}
              />
              <input
                type="text"
                name="en.main.contact.info.location"
                placeholder="Location"
                className={styles.input}
              />
              <input
                type="text"
                name="en.main.contact.info.appointment_info"
                placeholder="Appointment Info"
                className={styles.input}
              />

              <h3>О нас</h3>
              <input
                type="text"
                name="en.main.about.title"
                placeholder="About Us"
                className={styles.input}
              />
              <input
                type="text"
                name="en.main.about.master.name"
                placeholder="Master Name"
                className={styles.input}
              />
              <input
                type="text"
                name="en.main.about.master.position"
                placeholder="Position"
                className={styles.input}
              />
              <input
                type="text"
                name="en.main.about.master.achievements"
                placeholder="Achievements (comma-separated)"
                className={styles.input}
              />
            </div>

            {/* Русский */}
            <h2>Переводы на Русский</h2>
            <h3>Главная</h3>
            <ChevronDownIcon
              style={{
                width: "24px",
                cursor: "pointer",
                transition: "transform 0.3s ease", // Плавный переход для вращения
                transform: rusArrow ? "rotate(180deg)" : "rotate(0deg)", // Условное вращение стрелки
              }}
              onClick={handleRusArrow} // Обработчик клика
            />
            <div
              className={styles.rusBox}
              style={{ display: rusArrow ? "none" : "block" }}
            >
              <input
                type="text"
                name="ru.main.welcome.title"
                placeholder="Заголовок"
                className={styles.input}
              />
              <input
                type="text"
                name="ru.main.welcome.subtitle"
                placeholder="Подзаголовок"
                className={styles.input}
              />
              <input
                type="text"
                name="ru.main.welcome.master_info"
                placeholder="Информация о мастере"
                className={styles.input}
              />
              <input
                type="text"
                name="ru.main.welcome.master_info_1"
                placeholder="Информация о мастере 1"
                className={styles.input}
              />
              <input
                type="text"
                name="ru.main.welcome.price_info"
                placeholder="Информация о ценах"
                className={styles.input}
              />
              <input
                type="text"
                name="ru.main.welcome.you_will"
                placeholder="Вы забудете о макияже"
                className={styles.input}
              />
              <input
                type="text"
                name="ru.main.welcome.tattoos.eyebrow"
                placeholder="Татуаж бровей"
                className={styles.input}
              />
              <input
                type="text"
                name="ru.main.welcome.tattoos.lip"
                placeholder="Татуаж губ"
                className={styles.input}
              />
              <input
                type="text"
                name="ru.main.welcome.tattoos.eyelid"
                placeholder="Татуаж век"
                className={styles.input}
              />

              <h3>Кнопки</h3>
              <input
                type="text"
                name="ru.main.buttons.book_appointment"
                placeholder="Записаться на прием"
                className={styles.input}
              />
              <input
                type="text"
                name="ru.main.buttons.get_consultation"
                placeholder="Получить консультацию"
                className={styles.input}
              />

              <h3>Преимущества</h3>
              <input
                type="text"
                name="ru.main.advantages.fast_and_painless"
                placeholder="Быстро и безболезненно"
                className={styles.input}
              />
              <input
                type="text"
                name="ru.main.advantages.procedure_duration"
                placeholder="Продолжительность процедуры"
                className={styles.input}
              />
              <input
                type="text"
                name="ru.main.advantages.guarantee"
                placeholder="Гарантия"
                className={styles.input}
              />
              <input
                type="text"
                name="ru.main.advantages.beauty_update"
                placeholder="Обновление образа"
                className={styles.input}
              />

              <h3>Информация о ценах</h3>
              <input
                type="text"
                name="ru.main.price_section.title"
                placeholder="Цены на Перманентный Макияж"
                className={styles.input}
              />
              <input
                type="text"
                name="ru.main.price_section.items.eyebrow.title"
                placeholder="Перманентный макияж бровей"
                className={styles.input}
              />
              <input
                type="text"
                name="ru.main.price_section.items.eyebrow.duration"
                placeholder="Продолжительность процедуры"
                className={styles.input}
              />
              <input
                type="text"
                name="ru.main.price_section.items.eyebrow.price"
                placeholder="Цена"
                className={styles.input}
              />
              <input
                type="text"
                name="ru.main.price_section.items.eyelid.title"
                placeholder="Перманентный макияж век"
                className={styles.input}
              />
              <input
                type="text"
                name="ru.main.price_section.items.eyelid.duration"
                placeholder="Продолжительность процедуры"
                className={styles.input}
              />
              <input
                type="text"
                name="ru.main.price_section.items.eyelid.price"
                placeholder="Цена"
                className={styles.input}
              />
              <input
                type="text"
                name="ru.main.price_section.items.lip.title"
                placeholder="Перманентный макияж губ"
                className={styles.input}
              />
              <input
                type="text"
                name="ru.main.price_section.items.lip.duration"
                placeholder="Продолжительность процедуры"
                className={styles.input}
              />
              <input
                type="text"
                name="ru.main.price_section.items.lip.price"
                placeholder="Цена"
                className={styles.input}
              />
              <input
                type="text"
                name="ru.main.price_section.items.correction.title"
                placeholder="Коррекция"
                className={styles.input}
              />
              <input
                type="text"
                name="ru.main.price_section.items.correction.duration"
                placeholder="Продолжительность процедуры"
                className={styles.input}
              />
              <input
                type="text"
                name="ru.main.price_section.items.correction.price"
                placeholder="Цена"
                className={styles.input}
              />
              <input
                type="text"
                name="ru.main.price_section.items.foundation_effect.title"
                placeholder="Эффект фундамента"
                className={styles.input}
              />
              <input
                type="text"
                name="ru.main.price_section.items.foundation_effect.duration"
                placeholder="Продолжительность процедуры"
                className={styles.input}
              />
              <input
                type="text"
                name="ru.main.price_section.items.foundation_effect.price"
                placeholder="Цена"
                className={styles.input}
              />
              <input
                type="text"
                name="ru.main.price_section.items.permanent_makeup.title"
                placeholder="Перманентный макияж"
                className={styles.input}
              />
              <input
                type="text"
                name="ru.main.price_section.items.permanent_makeup.duration"
                placeholder="Продолжительность процедуры"
                className={styles.input}
              />
              <input
                type="text"
                name="ru.main.price_section.items.permanent_makeup.price"
                placeholder="Цена"
                className={styles.input}
              />

              <h3>Примеры работ</h3>
              <input
                type="text"
                name="ru.main.portfolio.title"
                placeholder="Примеры Работ"
                className={styles.input}
              />
              <input
                type="text"
                name="ru.main.portfolio.footer"
                placeholder="Футер"
                className={styles.input}
              />

              <h3>Контактная информация</h3>
              <input
                type="text"
                name="ru.main.contact.title"
                placeholder="Связаться с нами!"
                className={styles.input}
              />
              <input
                type="text"
                name="ru.main.contact.invitation"
                placeholder="Приглашение"
                className={styles.input}
              />
              <input
                type="text"
                name="ru.main.contact.info.studio_name"
                placeholder="Название студии"
                className={styles.input}
              />
              <input
                type="text"
                name="ru.main.contact.info.lead_artist"
                placeholder="Ведущий мастер"
                className={styles.input}
              />
              <input
                type="text"
                name="ru.main.contact.info.phone"
                placeholder="Телефон"
                className={styles.input}
              />
              <input
                type="text"
                name="ru.main.contact.info.location"
                placeholder="Местоположение"
                className={styles.input}
              />
              <input
                type="text"
                name="ru.main.contact.info.appointment_info"
                placeholder="Информация о записи"
                className={styles.input}
              />

              <h3>О нас</h3>
              <input
                type="text"
                name="ru.main.about.title"
                placeholder="О нас"
                className={styles.input}
              />
              <input
                type="text"
                name="ru.main.about.master.name"
                placeholder="Имя мастера"
                className={styles.input}
              />
              <input
                type="text"
                name="ru.main.about.master.position"
                placeholder="Должность"
                className={styles.input}
              />
              <input
                type="text"
                name="ru.main.about.master.achievements"
                placeholder="Достижения (через запятую)"
                className={styles.input}
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Сохранить Изменения
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
