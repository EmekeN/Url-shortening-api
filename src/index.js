import React from "react";
import ReactDom from "react-dom";
import App from "./components/App/App";
import "normalize.css";
import "./base.scss";

ReactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
