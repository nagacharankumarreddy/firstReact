import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import reportWebVitals from "./reportWebVitals";
import Counters from "./components/counters";
//import Number from "./components/sample";

ReactDOM.render(<Counters />, document.getElementById("root"));
//ReactDOM.render(<Number />, document.getElementById("root2"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
