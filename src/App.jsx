import React from "react";
import { Routes, Route } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import LoginPage from "./components/LoginPage";
import ForgotPassword from "./components/ForgotPassword";
import LandingPage from "./components/LandingPage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;
