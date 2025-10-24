import React, { useState, useEffect } from 'react';
import Modal from './Modal';

function OrderModal({ isOpen, onClose }) {
    const [selectedService, setSelectedService] = useState(''); // Предположим, можно выбрать из списка
    const [address, setAddress] = useState('');
    const [cost, setCost] = useState(''); // Рассчитанная стоимость

    // Пример данных для выбора услуги
    const availableServices = [
        { id: 1, name: 'Услуга 1', price: 1000 },
        { id: 2, name: 'Услуга 2', price: 2500 },
        { id: 3, name: 'Услуга 3', price: 500 },
    ];

    // Рассчитываем стоимость при изменении selectedService
    useEffect(() => {
        const service = availableServices.find(s => s.name === selectedService);
        if (service) {
            setCost(`${service.price} руб.`); // Пример расчета
        } else {
            setCost('');
        }
    }, [selectedService]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Заказ:', { selectedService, address, cost });
        // Здесь будет логика оформления заказа
        onClose(); // Закрываем после отправки
    };

    if (!isOpen) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h2>Оформление заказа</h2>

            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="service-select">Выбранные услуги</label>
                    <select
                        id="service-select"
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="auth-input" // Используем тот же стиль, что и input
                        style={{ height: '40px', fontSize: '16px' }} // Подгоняем под стиль input
                        required
                    >
                        <option value="">Выберите услугу</option>
                        {availableServices.map(service => (
                            <option key={service.id} value={service.name}>
                                {service.name} - {service.price} руб.
                            </option>
                        ))}
                    </select>
                </div>

                <div className="input-group">
                    <label htmlFor="address-input">Адрес</label>
                    <input
                        id="address-input"
                        type="text"
                        placeholder="Введите ваш адрес"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="auth-input"
                        required
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="cost-output">Расчет стоимости</label>
                    <input
                        id="cost-output"
                        type="text"
                        value={cost}
                        readOnly // Поле только для чтения
                        className="auth-input"
                        placeholder="Выберите услугу"
                        style={{ backgroundColor: '#f5f5f5' }}
                    />
                </div>

                <button type="submit" className="auth-button">
                    Заказать
                </button>
            </form>
        </Modal>
    );
}

function Service() {
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false); // Состояние модального окна

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Услуги</h1>
            <p>Здесь будет список услуг.</p>
            <button
                onClick={() => setIsOrderModalOpen(true)} // Открываем модальное окно
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    marginTop: "20px",
                    cursor: "pointer",
                    borderRadius: "20px",
                    backgroundColor: "#28a745", // Зелёный цвет
                    color: "white",
                    border: "none",
                }}
            >
                Оформить заказ
            </button>

            <OrderModal isOpen={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)} />
        </div>
    );
}

export default Service;