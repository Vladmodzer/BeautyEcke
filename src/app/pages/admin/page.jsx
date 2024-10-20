"use client"
import { useState } from 'react';
import styles from './admin.module.css';

const AdminPage = () => {
  // Состояние для данных формы
  const [formData, setFormData] = useState({
    services: [
      {
        name: 'Permanent eyebrow makeup',
        price: '',
        description: '',
        image: null,
      },
      {
        name: 'Permanent eyelid makeup',
        price: '',
        description: '',
        image: null,
      },
      {
        name: 'Permanent lip makeup',
        price: '',
        description: '',
        image: null,
      },
      {
        name: 'Correction',
        price: '',
        description: '',
        image: null,
      },
      {
        name: 'Foundation effect',
        price: '',
        description: '',
        image: null,
      },
      {
        name: 'Permanent makeup',
        price: '',
        description: '',
        image: null,
      },
    ],
  });

  // Функция для изменения значений в форме
  const handleChange = (index, e) => {
    const { name, value, files } = e.target;
    const updatedServices = [...formData.services];
    
    if (name === 'image') {
      updatedServices[index][name] = files[0]; // Для файлов
    } else {
      updatedServices[index][name] = value; // Для цены и описания
    }
    
    setFormData({ services: updatedServices });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Данные формы:', formData);
    alert('Данные успешно сохранены (в консоли)');
  };

  return (
    <div className={styles.container}>
      <h1>Админ панель</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        {formData.services.map((service, index) => (
          <div key={index} className={styles.serviceGroup}>
            <h2>{service.name}</h2>

            {/* Цена */}
            <div>
              <label className={styles.label}>Цена:</label>
              <input
                type="text"
                name="price"
                value={service.price}
                onChange={(e) => handleChange(index, e)}
                placeholder={`Введите цену для ${service.name}`}
                className={styles.input}
              />
            </div>

            {/* Описание */}
            <div>
              <label className={styles.label}>Описание:</label>
              <textarea
                name="description"
                value={service.description}
                onChange={(e) => handleChange(index, e)}
                placeholder={`Введите описание для ${service.name}`}
                rows={4}
                className={styles.textarea}
              />
            </div>

            {/* Фото */}
            <div>
              <label className={styles.label}>Фото:</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={(e) => handleChange(index, e)}
                className={styles.fileInput}
              />
            </div>
          </div>
        ))}

        <button type="submit" className={styles.button}>Сохранить изменения</button>
      </form>
    </div>
  );
};

export default AdminPage;
