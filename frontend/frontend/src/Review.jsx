import React, { useState } from 'react';
import Modal from './Modal';
import './Review.css';

function ReviewModal({ isOpen, onClose }) {
    const [serviceName, setServiceName] = useState('');
    const [rating, setRating] = useState(5); // Значение по умолчанию
    const [reviewText, setReviewText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Отзыв:', { serviceName, rating, reviewText });
        // Здесь будет логика отправки отзыва
        onClose(); // Закрываем после отправки
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
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false); // Состояние модального окна
    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <button
                onClick={() => setIsReviewModalOpen(true)} // Открываем модальное окно
                className="review-button"
            >
                Оставить отзыв
            </button>

            <h1>Отзывы</h1>
            <p>Здесь будут отзывы.</p>

            {/* Модальное окно "Оставить отзыв" */}
            <ReviewModal isOpen={isReviewModalOpen} onClose={() => setIsReviewModalOpen(false)} />
        </div>
    );
}

export default Review;