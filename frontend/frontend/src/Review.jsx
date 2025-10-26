import React, { useState } from 'react';
import Modal from './Modal';
import './Review.css';
import SplitText from "./components/SplitText";

function ReviewModal({ isOpen, onClose }) {
    const [serviceName, setServiceName] = useState('');
    const [rating, setRating] = useState(5);
    const [reviewText, setReviewText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Отзыв:', { serviceName, rating, reviewText });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h2>Оставить отзыв</h2>

            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="service-name-input">Название услуги</label>
                    <input
                        id="service-name-input"
                        type="text"
                        placeholder="Введите название услуги"
                        value={serviceName}
                        onChange={(e) => setServiceName(e.target.value)}
                        className="auth-input"
                        required
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="rating-select">Оценка</label>
                    <select
                        id="rating-select"
                        value={rating}
                        onChange={(e) => setRating(Number(e.target.value))}
                        className="auth-input"
                        style={{ height: '40px', fontSize: '16px' }}
                    >
                        {[...Array(5)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                        ))}
                    </select>
                </div>

                <div className="input-group">
                    <label htmlFor="review-textarea">Текст отзыва</label>
                    <textarea
                        id="review-textarea"
                        placeholder="Напишите ваш отзыв здесь..."
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        className="auth-input"
                        style={{
                            minHeight: '100px',
                            resize: 'vertical',
                            height: 'auto',
                        }}
                        required
                    />
                </div>

                <button type="submit" className="auth-button">
                    Опубликовать
                </button>
            </form>
        </Modal>
    );
}

function Review() {
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

    return (
        <div className="review-page">
            <div className="review-container">
                {/* Заголовок и кнопка в одной строке */}
                <div className="review-header-section">
                    <div className="review-title-wrapper">
                        <SplitText
                            text="Отзывы"
                            className="review-title"
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                        />
                    </div>
                    <button
                        onClick={() => setIsReviewModalOpen(true)}
                        className="review-header-button"
                    >
                        Оставить отзыв
                    </button>
                </div>

                {/* Список отзывов */}
                <div className="reviews-list">
                    {/* Пример отзыва */}
                    <div className="review-item">
                        <div className="review-item-header">
                            <h3 className="review-author">Иван Петров</h3>
                            <div className="review-rating">⭐️⭐️⭐️⭐️⭐️</div>
                        </div>
                        <p className="review-service">Услуга: *****</p>
                        <p className="review-text">
                            Отличная работа!
                            Рекомендую всем!
                        </p>
                        <div className="review-date">15 января 2024</div>
                    </div>

                    {/* Еще примеры отзывов */}
                    <div className="review-item">
                        <div className="review-item-header">
                            <h3 className="review-author">Мария Сидорова</h3>
                            <div className="review-rating">⭐️⭐️⭐️⭐️</div>
                        </div>
                        <p className="review-service">Услуга: *****</p>
                        <p className="review-text">
                            Хороший сервис, но немного затянули по времени.
                            В целом работой довольна, специалист вежливый и знающий.
                        </p>
                        <div className="review-date">10 января 2024</div>
                    </div>

                    <div className="review-item">
                        <div className="review-item-header">
                            <h3 className="review-author">Алексей Козлов</h3>
                            <div className="review-rating">⭐️⭐️⭐️⭐️⭐️</div>
                        </div>
                        <p className="review-service">Услуга: *****</p>
                        <p className="review-text">
                            Лучший сервис в городе!
                        </p>
                        <div className="review-date">5 января 2024</div>
                    </div>

                    <div className="review-item">
                        <div className="review-item-header">
                            <h3 className="review-author">Алексей Козлов</h3>
                            <div className="review-rating">⭐️⭐️⭐️⭐️⭐️</div>
                        </div>
                        <p className="review-service">Услуга: *****</p>
                        <p className="review-text">
                            Лучший сервис в городе!
                        </p>
                        <div className="review-date">5 января 2024</div>
                    </div>
                </div>

                {/* Модальное окно "Оставить отзыв" - без изменений */}
                <ReviewModal isOpen={isReviewModalOpen} onClose={() => setIsReviewModalOpen(false)} />
            </div>
        </div>
    );
}

export default Review;