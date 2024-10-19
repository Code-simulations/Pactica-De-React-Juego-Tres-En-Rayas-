import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header.jsx";
import "./assets/styles/main.css";
import { Main } from "./components/Main.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Header />
    <Main />
  </StrictMode>
);
