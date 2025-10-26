import React from "react";
import SplitText from "./components/SplitText";
import './About.css';

function About() {
    return (
        <div className="about-page">
            <div className="about-container">
                {/* Заголовок */}
                <div className="about-header">
                    <SplitText
                        text="О нас"
                        className="about-title"
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                    />
                </div>

                {/* Основной контент */}
                <div className="about-content">
                    {/* Текстовая часть */}
                    <div className="about-text">
                        <h2 className="about-subtitle">
                            Наша история
                        </h2>
                        <p className="about-paragraph">
                            Мы начинаем свой путь в 2010 году с маленькой мастерской.
                            Сегодня мы - крупная компания с международным признанием,
                            предлагающая инновационные решения в своей отрасли.
                        </p>
                        <p className="about-paragraph">
                            Наша миссия - предоставлять клиентам продукты высочайшего
                            качества, сочетающие в себе передовые технологии и
                            надежность. Мы стремимся к постоянному совершенствованию
                            и инновациям.
                        </p>
                        <p className="about-paragraph">
                            За годы работы мы реализовали более 1000 успешных проектов
                            и получили множество профессиональных наград. Наша команда
                            состоит из опытных специалистов, преданных своему делу.
                        </p>

                        {/* Список преимуществ */}
                        <div className="about-features">
                            <div className="feature-item">
                                <div className="feature-dot"></div>
                                <span>Качество гарантировано</span>
                            </div>
                            <div className="feature-item">
                                <div className="feature-dot"></div>
                                <span>Современные технологии</span>
                            </div>
                            <div className="feature-item">
                                <div className="feature-dot"></div>
                                <span>Профессиональная команда</span>
                            </div>
                            <div className="feature-item">
                                <div className="feature-dot"></div>
                                <span>Поддержка 24/7</span>
                            </div>
                        </div>
                    </div>

                    {/* Изображение */}
                    <div className="about-image-section">
                        <div className="image-wrapper">
                            <img
                                src="/about-image.jpg"
                                alt="Наша команда"
                                className="about-image"
                            />
                            <div className="image-border"></div>
                        </div>

                        {/* Подпись к изображению */}
                        <div className="image-caption">
                            <p>Наша команда на международной конференции 2024</p>
                        </div>
                    </div>
                </div>

                {/* Дополнительный раздел */}
                <div className="about-why">
                    <h3 className="why-title">
                        Почему выбирают нас
                    </h3>
                    <div className="reasons-grid">
                        <div className="reason-card">
                            <div className="reason-icon">
                                <span>🚀</span>
                            </div>
                            <h4 className="reason-title">Инновации</h4>
                            <p className="reason-text">
                                Постоянно внедряем новые технологии и методики работы
                            </p>
                        </div>
                        <div className="reason-card">
                            <div className="reason-icon">
                                <span>⭐</span>
                            </div>
                            <h4 className="reason-title">Качество</h4>
                            <p className="reason-text">
                                Гарантируем высочайшее качество всех наших продуктов
                            </p>
                        </div>
                        <div className="reason-card">
                            <div className="reason-icon">
                                <span>💝</span>
                            </div>
                            <h4 className="reason-title">Поддержка</h4>
                            <p className="reason-text">
                                Всегда готовы помочь нашим клиентам и партнерам
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;