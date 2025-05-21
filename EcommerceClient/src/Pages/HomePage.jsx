import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Categories from "../Components/Categories";

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
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } min-h-screen transition-colors duration-300`}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Categories darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default HomePage;
