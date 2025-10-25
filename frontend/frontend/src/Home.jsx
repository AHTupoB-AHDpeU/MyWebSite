import React from "react";
import AnimatedContent from './components/AnimatedContent'

function Home() {
    return (
        <div style={{ textAlign: "center" }}>
            <AnimatedContent
                distance={150}
                direction="vertical"
                reverse={false}
                duration={1.0}
                ease="bounce.out"
                initialOpacity={0.5}
                animateOpacity
                scale={1.5}
                threshold={0.5}
                delay={0}
            >
                <div>
                <img
                    src="/main-image.png" // Путь к изображению в папке public
                    alt="Описание изображения" // Всегда добавляй alt для доступности
                    width="1600"
                    style={{
                        maxWidth: "100%", // Делает изображение отзывчивым (уменьшается на маленьких экранах)
                        height: "auto",  // Сохраняет пропорции
                        display: "block", // Центрирует изображение, если нужно
                        margin: "0 auto", // Центрирует изображение по горизонтали
                        borderRadius: "30px",
                    }}
                />
                </div>
            </AnimatedContent>
        </div>
    );
}

export default Home;