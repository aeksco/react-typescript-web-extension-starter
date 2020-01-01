import * as React from "react";
import * as ReactDOM from "react-dom";
import { Popup } from "./component";
import "../scss/app.scss";

// // // //

chrome.tabs.query({ active: true, currentWindow: true }, tab => {
    ReactDOM.render(<Popup />, document.getElementById("popup"));
});
