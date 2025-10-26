import React from 'react';
import SplitText from "./components/SplitText";
import './Privace.css';

function Privace() {
    return (
        <div className="privace-page">
            <div className="privace-container">
                <div className="privace-header">
                    <SplitText
                        text="Политика конфиденциальности"
                        className="privace-title"
                        delay={50}
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
            </div>
        </div>
    );
}

export default Privace;