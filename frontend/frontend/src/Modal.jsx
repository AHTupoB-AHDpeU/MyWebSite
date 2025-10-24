import { useEffect } from 'react';
import './Modal.css'; // Подключим стили

const Modal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        const closeOnEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };

        let originalPaddingRight;

        if (isOpen) {
            const targetElement = document.documentElement;
            originalPaddingRight = document.body.style.paddingRight;

            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            if (scrollbarWidth > 0) {
                targetElement.style.paddingRight = `${parseFloat(originalPaddingRight || 0) + scrollbarWidth}px`;
            }
            document.addEventListener('keydown', closeOnEscape);
            document.body.style.overflow = 'hidden'; // Блокируем прокрутку
        }

        return () => {
            document.removeEventListener('keydown', closeOnEscape);
            document.body.style.overflow = 'unset'; // Возвращаем прокрутку
            const targetElement = document.documentElement;
            targetElement.style.paddingRight = originalPaddingRight;
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>
                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FAB005/cancel.png" alt="cancel" />
                </button>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;