import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Login from "./Login/Login.jsx";
import ApartadoCafeteria from "./Cafeterias/ApartadoCafeteria.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cafeteria" element={<ApartadoCafeteria />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
