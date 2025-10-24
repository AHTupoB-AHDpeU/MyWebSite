import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Подключим стили

function Footer({ onOpenProfileModal }) {
    const legalInfo = {
        inn: "601600299126",
        name: "ИП Антипов Александр Васильевич",
        ogrnip: "318602700015558",
        adress: "181007, Псковская обл., Плюсский р-он, д Ореховно, ул. Центральная д.23",
        real_adress: "181000, Псковская обл., Плюсский р-он, рп Плюсса, ул. Партизанская д.9",
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Левая часть: Логотип и название */}
                <div className="footer-section logo-section">
                    <img width="100" height="100" src="https://img.icons8.com/external-others-pike-picture/100/external-industry-wood-logging-industry-others-pike-picture-6.png" alt="external-industry-wood-logging-industry-others-pike-picture-6" />
                    <span className="site-name">ИП Антипов Александр Васильевич - Грузоперевозки лесоматериалов</span>
                </div>

                {/* Центральная часть: Навигация */}
                <div className="footer-section nav-section">
                    <Link to="#" onClick={(e) => { e.preventDefault(); onOpenProfileModal(); }} className="footer-nav-link">Профиль</Link>
                    <Link to="/about">О нас</Link>
                    <Link to="/contact">Контакты</Link>
                    <Link to="/review">Отзывы</Link>
                    <Link to="/service">Услуги</Link>
                    <Link to="/faq">FAQ</Link>
                </div>

                {/* Правая часть: Юридическая информация */}
                <div className="footer-section legal-section">
                    <p className="legal-info">
                        {legalInfo.name}<br />
                        ИНН: {legalInfo.inn}<br />
                        ОГРНИП: {legalInfo.ogrnip}<br />
                        {/*Юр.адрес: {legalInfo.adress}<br />*/}
                        {/*Факт.адрес: {legalInfo.real_adress}<br />*/}
                    </p>
                    <p className="footer-links">
                        <Link to="/privacy-policy">Политика конфиденциальности</Link>
                    </p>
                    <p className="copyright">
                        &copy; {new Date().getFullYear()} ИП Антипов Александр Васильевич - Грузоперевозки лесоматериалов. Все права защищены.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;