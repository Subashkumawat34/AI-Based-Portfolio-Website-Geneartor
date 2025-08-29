import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Ensure this path is correct
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

// Bootstrap CSS is imported in App.jsx or here. App.jsx is fine.
// import 'bootstrap/dist/css/bootstrap.min.css';

// React Toastify CSS is imported in App.jsx or here. App.jsx is fine.
// import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
