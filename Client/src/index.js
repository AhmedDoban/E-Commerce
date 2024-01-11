import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "./assets/css/style.css";
import { Provider } from "react-redux";
import Store from "./assets/Js/Toolkit/Store";
import "aos/dist/aos.css";
import Aos from "aos";
Aos.init();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={Store}>
      <App />
      <ToastContainer />
    </Provider>
  </BrowserRouter>
);
