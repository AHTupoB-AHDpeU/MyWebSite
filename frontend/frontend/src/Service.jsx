import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import './Service.css';
import SplitText from "./components/SplitText";

function OrderModal({ isOpen, onClose, selectedServices, services }) {
    const [address, setAddress] = useState('');

    // Рассчитываем общую стоимость выбранных услуг
    const totalCost = selectedServices.reduce((total, serviceId) => {
        const service = services.find(s => s.id === serviceId);
        return total + (service ? service.price : 0);
    }, 0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedServicesData = services.filter(service =>
            selectedServices.includes(service.id)
        );
        console.log('Заказ:', { selectedServices: selectedServicesData, address, totalCost });
        // Здесь будет логика оформления заказа
        alert(`Заказ оформлен! Общая стоимость: ${totalCost} ₽`);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h2>Оформление заказа</h2>

            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Выбранные услуги</label>
                    <div className="selected-services-list">
                        {services
                            .filter(service => selectedServices.includes(service.id))
                            .map(service => (
                                <div key={service.id} className="selected-service-item">
                                    <span>{service.name}</span>
                                    <span>{service.price} ₽</span>
                                </div>
                            ))
                        }
                    </div>
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
                    <label htmlFor="cost-output">Общая стоимость</label>
                    <input
                        id="cost-output"
                        type="text"
                        value={`${totalCost} ₽`}
                        readOnly
                        className="auth-input"
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
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedServices, setSelectedServices] = useState([]);
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

    // Данные об услугах
    const services = [
        {
            id: 1,
            name: 'Услуга 1',
            price: 1500,
            image: '/services/service1.jpg',
            description: 'Подробности услуги 1'
        },
        {
            id: 2,
            name: 'Услуга 2',
            price: 1000,
            image: '/services/service1.jpg',
            description: 'Подробности услуги 2'
        },
        {
            id: 3,
            name: 'Услуга 3',
            price: 800,
            image: '/services/service1.jpg',
            description: 'Подробности услуги 3'
        },
        {
            id: 4,
            name: 'Услуга 4',
            price: 500,
            image: '/services/service1.jpg',
            description: 'Подробности услуги 4'
        },
        {
            id: 5,
            name: 'Услуга 5',
            price: 1200,
            image: '/services/service1.jpg',
            description: 'Подробности услуги 5'
        },
        {
            id: 6,
            name: 'Услуга 6',
            price: 2000,
            image: '/services/service1.jpg',
            description: 'Подробности услуги 6'
        },
        {
            id: 7,
            name: 'Услуга 7',
            price: 900,
            image: '/services/service1.jpg',
            description: 'Подробности услуги 7'
        },
        {
            id: 8,
            name: 'Услуга 8',
            price: 1500,
            image: '/services/service1.jpg',
            description: 'Подробности услуги 8'
        },
        {
            id: 9,
            name: 'Услуга 9',
            price: 2500,
            image: '/services/service1.jpg',
            description: 'Подробности услуги 9'
        }
    ];

    const filteredServices = services.filter(service =>
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const toggleServiceSelection = (serviceId) => {
        if (selectedServices.includes(serviceId)) {
            setSelectedServices(selectedServices.filter(id => id !== serviceId));
        } else {
            setSelectedServices([...selectedServices, serviceId]);
        }
    };

    const handleOrder = () => {
        if (selectedServices.length === 0) {
            alert('Выберите хотя бы одну услугу для заказа');
            return;
        }
        setIsOrderModalOpen(true);
    };

    return (
        <div className="service-page">
            <div className="service-container">
                {/* Заголовок и поиск */}
                <div className="service-header-section">
                    {/* Заголовок */}
                    <div className="review-title-wrapper">
                        <SplitText
                            text="Каталог услуг"
                            className="service-title"
                            delay={50}
                            duration={0.6}
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            textAlign="center"
                        />
                    </div>
                    <div className="search-section">
                        <input
                            type="text"
                            placeholder="Поиск услуг..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="search-input"
                        />
                        <button className="search-button">
                            🔍︎
                        </button>
                    </div>
                </div>

                {/* Сетка услуг */}
                <div className="services-grid">
                    {filteredServices.map(service => (
                        <div
                            key={service.id}
                            className={`service-card ${selectedServices.includes(service.id) ? 'selected' : ''}`}
                            onClick={() => toggleServiceSelection(service.id)}
                        >
                            <div className="service-image">
                                <img src={service.image} alt={service.name} />
                            </div>
                            <div className="service-info">
                                <h3 className="service-name">{service.name}</h3>
                                <p className="service-description">{service.description}</p>
                                <div className="service-price">{service.price} ₽</div>
                            </div>
                            <div className="service-check">
                                {selectedServices.includes(service.id) ? '✓' : ''}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Кнопка оформления заказа */}
                <div className="order-section">
                    <button
                        onClick={handleOrder}
                        className="order-button"
                        disabled={selectedServices.length === 0}
                    >
                        Оформить заказ ({selectedServices.length} услуг)
                    </button>
                </div>

                {/* Модальное окно оформления заказа */}
                <OrderModal
                    isOpen={isOrderModalOpen}
                    onClose={() => setIsOrderModalOpen(false)}
                    selectedServices={selectedServices}
                    services={services}
                />
            </div>
        </div>
    );
}

export default Service;