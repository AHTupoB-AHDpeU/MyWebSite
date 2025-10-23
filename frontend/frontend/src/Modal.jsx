import { useEffect } from 'react';
import './Modal.css'; // ��������� �����

const Modal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        const closeOnEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', closeOnEscape);
            document.body.style.overflow = 'hidden'; // ��������� ���������
        }

        return () => {
            document.removeEventListener('keydown', closeOnEscape);
            document.body.style.overflow = 'unset'; // ���������� ���������
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;