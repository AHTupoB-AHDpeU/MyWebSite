import { useEffect, useState } from 'react';
import './Modal.css'; // Подключим стили

const Modal = ({ isOpen, onClose, children }) => {
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (!isOpen) {
            setIsClosing(false);
            return;
        }

        const closeOnEscape = (e) => {
            if (e.key === 'Escape') {
                handleClose();
            }
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
            targetElement.style.paddingRight = originalPaddingRight || '';
        };
    }, [isOpen]);

    const handleClose = () => {
        setIsClosing(true);
        // Ждем завершения анимации перед вызовом onClose
        setTimeout(() => {
            onClose();
        }, 300); // Должно совпадать с длительностью анимации закрытия в CSS
    };

    if (!isOpen && !isClosing) return null;

    return (
        <div className={`modal-overlay ${isClosing ? 'closing' : ''}`} onClick={handleClose}>
            <div className={`modal-content ${isClosing ? 'closing' : ''}`} onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={handleClose}>
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