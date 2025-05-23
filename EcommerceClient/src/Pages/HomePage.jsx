import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Categories from "../Components/Categories";
import ProductList from "../Components/ProductList";
import CartItem from "../Components/CartItem";
import Footer from "../Components/Footer";

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("mode") === "true";
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem("mode", darkMode);
  }, [darkMode]);

  return (
    <div
      className={`select-none ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
      } min-h-screen transition-colors duration-300`}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Categories darkMode={darkMode} setDarkMode={setDarkMode} />
      <ProductList darkMode={darkMode} setDarkMode={setDarkMode} />
      <CartItem darkMode={darkMode} setDarkMode={setDarkMode} />
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default HomePage;
