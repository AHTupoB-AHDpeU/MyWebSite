import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Review from "./Review";
import Service from "./Service";
import Modal from './Modal';
import FAQ from "./faq";
import Footer from './Footer';

function AuthModal({ isOpen, onClose }) {
    const [isLogin, setIsLogin] = useState(true); // true = вход, false = регистрация
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(isLogin ? 'Вход:' : 'Регистрация:', { email, password, name: isLogin ? undefined : name });
        // Здесь будет логика отправки данных на сервер
        onClose(); // Закрываем после отправки
    };

    if (!isOpen) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h2>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
            <form onSubmit={handleSubmit}>
                {!isLogin && (
                    <div className="input-group">
                        <label htmlFor="auth-name-input">Ваше имя</label>
                        <input
                            id="auth-name-input"
                            type="text"
                            placeholder="Укажите ваше имя"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="auth-input"
                            required
                        />
                    </div>
                )}
                <div className="input-group">
                    <label htmlFor="auth-email-input">Электронная почта</label>
                    <input
                        id="auth-email-input"
                        type="email"
                        placeholder="Укажите ваш email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="auth-input"
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="auth-password-input">Пароль</label>
                    <input
                        id="auth-password-input"
                        type="password"
                        placeholder="Введите пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="auth-input"
                        required
                    />
                </div>
                <button type="submit" className="auth-button">
                    {isLogin ? 'Войти' : 'Зарегистрироваться'}
                </button>
            </form>

            <div className="auth-switch-bottom">
                <p>
                    {isLogin ? 'Нет аккаунта? ' : 'Уже есть аккаунт? '}
                    <span
                        className="auth-switch-link"
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        {isLogin ? 'Регистрация здесь' : 'Авторизация здесь'}
                    </span>
                </p>
            </div>
        </Modal>
    );
}

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
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

    const ProfileModal = ({ isOpen, onClose }) => {

        const [name, setName] = useState('Иван Иванов');
        const [email, setEmail] = useState('ivanov@example.com');
        const [password, setPassword] = useState('moйПар0ль!');

        const handleLogout = () => {
            console.log('Выход из системы');
            // Здесь будет логика выхода (очистка токена, сброс состояния и т.д.)
            onClose(); // Закрываем модальное окно после выхода
        };

        if (!isOpen) return null;

        return (
            <Modal isOpen={isOpen} onClose={onClose}>
                <h2>Профиль</h2>

                <div className="input-group">
                    <label htmlFor="profile-name">Имя</label>
                    <input
                        id="profile-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="auth-input"
                        readOnly // Поле не редактируется
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="profile-email">Электронная почта</label>
                    <input
                        id="profile-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="auth-input"
                        readOnly
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="profile-password">Пароль</label>
                    <input
                        id="profile-password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="auth-input"
                        readOnly // Поле не редактируется
                        placeholder="••••••••"
                    />
                </div>

                <button type="button" className="auth-button" onClick={handleLogout}>
                    Выйти
                </button>
            </Modal>
        );
    };

    return (
        <>
            <PageTitle />

            {/* Меню справа сверху с отступом в % */}
            <div style={{
                position: 'fixed',
                top: '3%',
                left: '3%',
                zIndex: 1001,
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#000',
            }}>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    "ИП Антипов Александр Васильевич" {/* Замени на реальное название */}
                </Link>
            </div>

            <div style={{
                position: 'fixed',
                top: '3%',
                right: '3%',
                display: 'flex',
                gap: '15px',
                zIndex: 1001
            }}>
                <Link to="/">
                    <button style={{ borderRadius: "20px", padding: '8px 16px', fontSize: '14px' }}>Главная</button>
                </Link>
                <Link to="/about">
                    <button style={{ borderRadius: "20px", padding: '8px 16px', fontSize: '14px' }}>О нас</button>
                </Link>
                <Link to="/contact">
                    <button style={{ borderRadius: "20px", padding: '8px 16px', fontSize: '14px' }}>Контакты</button>
                </Link>
                <Link to="/review">
                    <button style={{ borderRadius: "20px", padding: '8px 16px', fontSize: '14px' }}>Отзывы</button>
                </Link>
                <Link to="/service">
                    <button style={{ borderRadius: "20px", padding: '8px 16px', fontSize: '14px' }}>Услуги</button>
                </Link>
                <button
                    onClick={() => setIsModalOpen(true)}
                    style={{ borderRadius: "20px", padding: '8px 16px', fontSize: '14px' }}
                >
                    Заказать услуги
                </button>
            </div>

            <div style={{ width: "100%", minHeight: "calc(100vh - 60px)", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/review" element={<Review />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/faq" element={<FAQ />} />
                </Routes>
            </div>

            {/* Модальное окно */}
            <ProfileModal isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)} />
            <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            <Footer onOpenProfileModal={() => setIsProfileModalOpen(true)} />
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
