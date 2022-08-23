import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./components/styles/Global";
import { IndexStyle } from "./components/styles/Index.style";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <IndexStyle>
    <GlobalStyle />
    <App />
  </IndexStyle>
);
