import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { inject } from "@vercel/analytics";
import { SpeedInsights } from "@vercel/speed-insights/react";

inject();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SpeedInsights enabled={import.meta.env.MODE === "production"} />
    <App />
  </React.StrictMode>
);
