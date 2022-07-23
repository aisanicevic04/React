import React from "react";
import { useState } from "react";
import style from "./text.module.css";

function TextInput(props) {
    const { defaultValue, label } = props;
    const [text, setText] = useState(defaultValue);

    return (
        <div className={style.container}>
            <label className={style.label}>{label}</label>
            <input
                type="text"
                value={text}
                className={style.textInput}
                onChange={(event) => {
                    setText(event.target.value);
                }}
            />
            <label className={style.label}>{label}</label>
            <input
                type="text"
                value={text}
                className={style.textInput}
                onChange={(event) => {
                    setText(event.target.value);
                }}
            />
            <label className={style.label}>{label}</label>
            <input
                type="text"
                value={text}
                className={style.textInput}
                onChange={(event) => {
                    setText(event.target.value);
                }}
            />
        </div>
    );
}

export default TextInput;
