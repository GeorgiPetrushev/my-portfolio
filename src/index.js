import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { IndexStyle } from "./components/styles/Index.style";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <IndexStyle>
    <App />
  </IndexStyle>
);
