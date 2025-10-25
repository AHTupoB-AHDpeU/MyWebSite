import React from "react";
import SplitText from "./components/SplitText";

function About() {
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontSize: "32px" }}>
            <SplitText
                text="О нас"
                className="text-2xl font-semibold text-center"
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
            />
        </div>
    );
}

export default About;