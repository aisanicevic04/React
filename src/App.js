import React from "react";

import Tabs from "./components/functional/Tabs/Tabs";

const data = [
  {
    heading: "Page 1",
    body: "Hi from page 1",
  },
  {
    heading: "Page 2",
    body: "Hi from page 2",
  },
  {
    heading: "Page 3",
    body: "Hi from page 3",
  },
];

export default function App() {
  return (
    <div className="App">
      <Tabs data={data} />
    </div>
  );
}
