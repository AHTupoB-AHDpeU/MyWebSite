import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Review from "./Review";
import Service from "./Service";
import Modal from './Modal';

// Компонент модального окна
function BuyServiceModal({ isOpen, onClose }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h2>Заказать услугу</h2>
            <p>Пожалуйста, заполните форму ниже, чтобы заказать услугу.</p>
            <form>
                <input type="text" placeholder="Ваше имя" style={{ display: "block", marginBottom: "10px", padding: "8px", width: "100%" }} />
                <input type="email" placeholder="Email" style={{ display: "block", marginBottom: "10px", padding: "8px", width: "100%" }} />
                <textarea placeholder="Сообщение" style={{ display: "block", marginBottom: "10px", padding: "8px", width: "100%" }} />
                <button type="submit" style={{ padding: "10px 20px" }}>Отправить</button>
            </form>
            <br />
            <button onClick={onClose}>Закрыть</button>
        </Modal>
    );
}

// Компонент, который будет устанавливать заголовок
function PageTitle() {
    const location = useLocation();

    useEffect(() => {
        const titles = {
            '/': 'Сайт',
            '/about': 'О нас',
            '/contact': 'Контакты',
            '/review': 'Отзывы',
            '/service': 'Услуги',
        };

        const title = titles[location.pathname];
        document.title = title;
    }, [location.pathname]);

    return null;
}

function AppContent() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <PageTitle />

            {/* Меню справа сверху с отступом в % */}
            <div style={{
                position: 'fixed',
                top: '3%',
                right: '3%',
                display: 'flex',
                gap: '15px',
                zIndex: 1001
            }}>
                <Link to="/">
                    <button style={{ padding: '8px 16px', fontSize: '14px' }}>Главная</button>
                </Link>
                <Link to="/about">
                    <button style={{ padding: '8px 16px', fontSize: '14px' }}>О нас</button>
                </Link>
                <Link to="/contact">
                    <button style={{ padding: '8px 16px', fontSize: '14px' }}>Контакты</button>
                </Link>
                <Link to="/review">
                    <button style={{ padding: '8px 16px', fontSize: '14px' }}>Отзывы</button>
                </Link>
                <Link to="/service">
                    <button style={{ padding: '8px 16px', fontSize: '14px' }}>Услуги</button>
                </Link>
                <button
                    onClick={() => setIsModalOpen(true)}
                    style={{ padding: '8px 16px', fontSize: '14px' }}
                >
                    Заказать услуги
                </button>
            </div>

            {/* Центрируем содержимое маршрутов */}
            <div style={{ width: "100%", minHeight: "calc(100vh - 60px)", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/review" element={<Review />} />
                    <Route path="/service" element={<Service />} />
                </Routes>
            </div>

            {/* Модальное окно */}
            <BuyServiceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;