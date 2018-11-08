import React from "react";
import ReactDOM from "react-dom";
import Fetching from "./Fetching";
import Sharable from "./Sharable";

import "./styles.css";

function App() {
  return (
    <div>
      <Fetching />
      <br />
      <Sharable />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
