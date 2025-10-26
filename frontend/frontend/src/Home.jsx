import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import AnimatedContent from './components/AnimatedContent'
import './Home.css';
import SplitText from "./components/SplitText";

function Home() {
    const navigate = useNavigate();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Пример данных отзывов (в будущем заменить на API запрос)
    const sampleReviews = [
        {
            id: 1,
            author: "Иван Иванов",
            rating: 5,
            service: "Услуга 1",
            text: "Отличная работа!",
            date: "15 января 2024"
        },
        {
            id: 2,
            author: "Алексей Сидоров",
            rating: 4,
            service: "Услуга 2",
            text: "Хороший сервис, но немного затянули по времени.",
            date: "10 января 2024"
        },
        {
            id: 3,
            author: "Андрей Козлов",
            rating: 5,
            service: "Услуга 3",
            text: "Лучший сервис в городе!",
            date: "5 января 2024"
        },
        {
            id: 4,
            author: "Елена Николаева",
            rating: 5,
            service: "Услуга 4",
            text: "Очень аккуратная работа, рекомендую!",
            date: "3 января 2024"
        },
        {
            id: 5,
            author: "Дмитрий Александров",
            rating: 4,
            service: "Услуга 5",
            text: "Цены адекватные.",
            date: "28 декабря 2023"
        },
        {
            id: 6,
            author: "Диана Кузнецова",
            rating: 5,
            service: "Услуга 6",
            text: "Большое спасибо!",
            date: "25 декабря 2023"
        }
    ];

    useEffect(() => {
        // Имитация загрузки данных из API
        setTimeout(() => {
            setReviews(sampleReviews);
            setLoading(false);
        }, 1000);
    }, []);

    // Автоматическая прокрутка карусели
    useEffect(() => {
        if (reviews.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex(prevIndex =>
                prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000); // Смена каждые 4 секунды

        return () => clearInterval(interval);
    }, [reviews.length]);

    // Прокрутка к текущему элементу
    useEffect(() => {
        if (carouselRef.current) {
            const cardWidth = 320; // Ширина карточки + отступ
            carouselRef.current.scrollTo({
                left: currentIndex * cardWidth,
                behavior: 'smooth'
            });
        }
    }, [currentIndex]);

    const handleNavigateToServices = () => {
        navigate('/service');
    };

    return (
        <div className="home-page">
            <div className="home-container">
                {/* Главное изображение */}
                <AnimatedContent
                    distance={300}
                    direction="vertical"
                    reverse={false}
                    duration={3.0}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity={true}
                    scale={1}
                    threshold={0.1}
                    delay={0.1}
                >
                    <div className="home-image-wrapper">
                        <img
                            src="/main-image.png"
                            alt="Главное изображение"
                            className="home-image"
                        />
                    </div>
                </AnimatedContent>

                {/* Кнопка перехода к услугам */}
                <div className="services-cta-section">
                    <button
                        className="services-cta-button"
                        onClick={handleNavigateToServices}
                    >
                        Перейти к услугам
                    </button>
                </div>

                {/* Карусель отзывов */}
                <div className="reviews-carousel-section">

                    <div className="reviews-carousel-title">
                        <SplitText
                            text="Отзывы наших клиентов"
                            className="contact-title"
                            delay={100}
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

                    {loading ? (
                        <div className="reviews-loading">Загрузка отзывов...</div>
                    ) : (
                        <div className="reviews-carousel-container">
                            {/* Контейнер карусели */}
                            <div
                                className="reviews-carousel"
                                ref={carouselRef}
                            >
                                {reviews.map(review => (
                                    <div key={review.id} className="review-card">
                                        <div className="review-card-header">
                                            <h4 className="review-card-author">{review.author}</h4>
                                            <div className="review-card-rating">
                                                {'⭐'.repeat(review.rating)}
                                            </div>
                                        </div>
                                        <p className="review-card-service">{review.service}</p>
                                        <p className="review-card-text">{review.text}</p>
                                        <div className="review-card-date">{review.date}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Индикаторы прогресса */}
                    {!loading && (
                        <div className="carousel-indicators">
                            {reviews.map((_, index) => (
                                <button
                                    key={index}
                                    className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentIndex(index)}
                                    aria-label={`Перейти к отзыву ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;