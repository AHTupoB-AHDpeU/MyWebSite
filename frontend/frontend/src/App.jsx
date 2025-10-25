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
            '/': 'Грузоперевозки лесоматериалов - ИП Антипов А.В.',
            '/about': 'О нас',
            '/contact': 'Контакты',
            '/review': 'Отзывы',
            '/service': 'Услуги',
            '/faq': 'FAQ',
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
            {/* Меню */}
            <div style={{ maxWidth: "1600px", width: "100%", padding: "0 20px", boxSizing: "border-box", margin: " auto" }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '20px 0',
                }}>
                    {/* Название сайта слева */}
                    <div style={{
                        fontSize: '30px',
                        fontWeight: 'bold',
                        color: '#000',
                        fontFamily: 'Oswald, sans-serif',
                    }}>
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit', fontFamily: 'Oswald, sans-serif' }}>
                            "ИП Антипов Александр Васильевич"
                        </Link>
                    </div>

                    {/* Меню справа */}
                    <div style={{
                        display: 'flex',
                        gap: '10px', // Отступ между кнопками
                        fontFamily: 'Oswald, sans-serif',
                    }}>
                        <Link to="/">
                            <button style={{ borderRadius: "30px", padding: '8px 16px', fontSize: '30px', background: 'none', border: 'none', outline: 'none' }}>Главная</button>
                        </Link>
                        <Link to="/about">
                            <button style={{ borderRadius: "30px", padding: '8px 16px', fontSize: '30px', background: 'none', border: 'none', outline: 'none' }}>О нас</button>
                        </Link>
                        <Link to="/contact">
                            <button style={{ borderRadius: "30px", padding: '8px 16px', fontSize: '30px', background: 'none', border: 'none', outline: 'none' }}>Контакты</button>
                        </Link>
                        <Link to="/review">
                            <button style={{ borderRadius: "30px", padding: '8px 16px', fontSize: '30px', background: 'none', border: 'none', outline: 'none' }}>Отзывы</button>
                        </Link>
                        <Link to="/service">
                            <button style={{ borderRadius: "30px", padding: '8px 16px', fontSize: '30px', background: 'none', border: 'none', outline: 'none' }}>Услуги</button>
                        </Link>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            style={{ borderRadius: "30px", padding: '8px 50px', fontSize: '30px', background: "#FFD700", marginLeft: '30px', outline: 'none', border: 'none', }}
                        >
                            Заказать услугу
                        </button>
                    </div>
                </div>
            </div>

            <div style={{ width: "100%", minHeight: "calc(80vh)", display: "flex", justifyContent: "center", alignItems: "center" }}>
                {/* Контент */}
                <div style={{ maxWidth: "1600px", width: "100%", padding: "0 20px 40px", boxSizing: "border-box" }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/review" element={<Review />} />
                        <Route path="/service" element={<Service />} />
                        <Route path="/faq" element={<FAQ />} />
                    </Routes>
                </div>
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
