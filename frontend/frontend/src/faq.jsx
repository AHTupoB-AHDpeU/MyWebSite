import React from 'react';
import SplitText from "./components/SplitText";
import AnimatedList from './components/AnimatedList'

function FAQ() {

    const items = ['Вопрос: В каком регионе введется деятельность? Ответ: Деятельность ведётся в Псковской области', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10']; 

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontSize: "40px" }}>
            <SplitText
                text="Часто задаваемые вопросы"
                className="text-2xl font-semibold text-center"
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

            <AnimatedList
                items={items}
                onItemSelect={(item, index) => console.log(item, index)}
                showGradients={false}
                enableArrowNavigation={true}
                displayScrollbar={false}
            />

        </div>
    );
}

export default FAQ;