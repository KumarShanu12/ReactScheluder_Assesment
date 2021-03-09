import React from "react";
import { BrowserRouter } from "react-router-dom";

import ReactDOM from "react-dom";
// import "./index.css";
import "./style.scss";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>

      <App />
  </React.StrictMode>
  
  
  ,

  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>,

  document.getElementById("root")
);
reportWebVitals();
