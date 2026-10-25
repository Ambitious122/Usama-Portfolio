import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// StrictMode is intentionally not used: its double-mount in dev would
// create the WebGL renderer and GSAP pins twice.
createRoot(document.getElementById("root")).render(<App />);
