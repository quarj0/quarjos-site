import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "aos/dist/aos.css";
import AOS from "aos";
import { inject } from "@vercel/analytics";
import { SpeedInsights } from "@vercel/speed-insights/react";  // Check this import

inject();

const InitializeAOS = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return <></>;  
};


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InitializeAOS />
    <SpeedInsights  enabled={import.meta.env.MODE === "production"} />
    <App />
  </React.StrictMode>
);
