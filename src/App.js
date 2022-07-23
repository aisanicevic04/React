import React from "react";

import Tabs from "./components/functional/Tabs/Tabs";

const data = [
    {
        heading: "Item 1",
        body: "Hi from item 1"
    },
    {
        heading: "Item 2",
        body: "Hi from item 2"
    },
    {
        heading: "Item 3",
        body: "Hi from item 3"
    }
];

export default function App() {
    return (
        <div className="App">
            <Tabs data={data} />
        </div>
    );
}