import { useEffect } from "react";
import React, { useState } from "react";

function Color() {
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);
    const [red, setRed] = useState(0);
    const [width, setWidth] = useState(100);
    const [height, setHeight] = useState(100);

    const random = () => {
        setBlue(Math.random() * 255);
        setRed(Math.random() * 255);
        setGreen(Math.random() * 255);
        setWidth(Math.random() * 1500);
        setHeight(Math.random() * 1500);
    };

    useEffect(() => {
        setInterval(() => {
            random();
        }, 1);
    }, []);

    return (
        <div>
            <button onClick={random}>Random Color</button>
            <div
                style={{
                    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
                    width: width,
                    height: height,
                }}
            ></div>
        </div>
    );
}

export default Color;
