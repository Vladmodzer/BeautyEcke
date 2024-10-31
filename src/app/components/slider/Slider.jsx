import { useState, useEffect } from 'react';
import styles from './slider.module.css'; // Импортируем модуль CSS

const images = [
  '/img/slider_img/1.jpeg',
  '/img/slider_img/2.jpeg',
  '/img/slider_img/3.jpeg',
  '/img/slider_img/4.jpeg', // добавьте пути к вашим изображениям
];

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // меняет изображение каждые 3 секунды
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.sliderContainer}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index}`}
          className={`${styles.sliderImage} ${index === activeIndex ? styles.active : ''}`}
        />
      ))}
    </div>
  );
}
