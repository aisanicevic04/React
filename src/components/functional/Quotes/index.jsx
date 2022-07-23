import React from "react";
import "./Index.css";
import quotes from "./quotes.json";

function Quotes(props) {
    const { number = 100, length = 500 } = props;

    return (
        <div>
            {quotes
                .filter((value, index) => {
                    return index < number && value.content.length < length;
                })
                .map((quote) => {
                    return (
                        <div className="card">
                            <p>{quote.content}</p>
                            <h1>{quote.author}</h1>
                        </div>
                    );
                })}
        </div>
    );
}

export default Quotes;
