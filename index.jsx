import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// Background Color Changer
function Main() {
    const [bgColor, setBgColor] = useState("white");

    const changeColor = (color) => {
        setBgColor(color);
    };
    return (
        <div style={{ backgroundColor: bgColor, height: "100vh", padding: "20px" }}>
            <h1 >Background Color Changer</h1>
            <div className="but">
                <button onClick={() => changeColor("red")}>Red</button>
                <button onClick={() => changeColor("blue")}>Blue</button>
                <button onClick={() => changeColor("orange")}>Orange</button>
                <button onClick={() => changeColor("green")}>Green</button>
            </div>
        </div>
    );
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<Main />);
