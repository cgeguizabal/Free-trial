import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// SASS
import "./sass/Main.scss";

//component
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
