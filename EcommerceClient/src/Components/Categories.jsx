import React, { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { MdCategory } from "react-icons/md";

const Categories = ({ darkMode, setDarkMode }) => {
  const [selected, setSelected] = useState("Tüm Kategoriler");

  const categories = [
    "Teknoloji",
    "Giyim",
    "Yemek",
    "İçecek",
    "Kozmetik",
    "Çok Satanlar",
  ];

  return (
    <div
      className={`w-full flex items-center px-80 py-2 border-b ${
        darkMode
          ? "bg-gray-900 border-gray-700 text-gray-300"
          : "bg-white border-gray-200 text-gray-700"
      }`}
    >
      {/* Tüm Kategoriler bölümü */}
      <div
        className="flex items-center mr-20 cursor-pointer"
        onClick={() => setSelected("Tüm Kategoriler")}
      >
        <MdCategory className="mr-2 text-xl" />
        <button
          className={`whitespace-nowrap px-3 py-1 rounded-md font-medium transition-colors duration-200 ${
            selected === "Tüm Kategoriler"
              ? darkMode
                ? "bg-green-600 text-white"
                : "bg-green-400 text-white"
              : darkMode
              ? "hover:text-green-400"
              : "hover:text-green-600"
          }`}
        >
          Tüm Kategoriler
        </button>
      </div>

      {/* Diğer kategoriler */}
      <div className="flex space-x-6 overflow-x-auto scrollbar-hide ml-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`whitespace-nowrap px-3 py-1 rounded-md font-medium transition-colors duration-200 ${
              selected === cat
                ? darkMode
                  ? "bg-green-600 text-white"
                  : "bg-green-400 text-white"
                : darkMode
                ? "hover:text-green-400"
                : "hover:text-green-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* Dark Mode Toggle Button */}
      <div className="ml-auto">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-500 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? (
            <FiSun className="text-yellow-400" size={18} />
          ) : (
            <FiMoon className="text-gray-800" size={18} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Categories;
