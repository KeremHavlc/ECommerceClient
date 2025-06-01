import React, { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { MdCategory } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";

const Categories = ({ darkMode, setDarkMode }) => {
  const [selected, setSelected] = useState("Tüm Kategoriler");
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();
  const { categoryId } = useParams();

  const fetchCategories = async () => {
    try {
      const res = await fetch("https://localhost:7042/api/Categories/getAll");
      if (!res.ok) {
        console.log("Kategori fetch hatası");
        return;
      }
      const data = await res.json();
      setCategory(data.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (category.length && categoryId) {
      const selectedCategory = category.find((cat) => cat.id === categoryId);
      if (selectedCategory) setSelected(selectedCategory.name);
      else setSelected("Tüm Kategoriler");
    } else {
      setSelected("Tüm Kategoriler");
    }
  }, [category, categoryId]);

  return (
    <div
      className={`w-full flex items-center px-80 py-2 border-b ${
        darkMode
          ? "bg-gray-900 border-gray-700 text-gray-300"
          : "bg-white border-gray-200 text-gray-700"
      }`}
    >
      {/* Tüm Kategoriler */}
      <div
        className="flex items-center mr-20 cursor-pointer"
        onClick={() => {
          setSelected("Tüm Kategoriler");
          navigate(`/`);
        }}
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

      {/* Kategoriler */}
      <div className="flex space-x-6 overflow-x-auto scrollbar-hide ml-3">
        {Array.isArray(category) &&
          category.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelected(cat.name);
                navigate(`/categories/${cat.id}`);
              }}
              className={`whitespace-nowrap px-3 py-1 rounded-md font-medium transition-colors duration-200 ${
                selected === cat.name
                  ? darkMode
                    ? "bg-green-600 text-white"
                    : "bg-green-400 text-white"
                  : darkMode
                  ? "hover:text-green-400"
                  : "hover:text-green-600"
              }`}
            >
              {cat.name}
            </button>
          ))}
      </div>

      {/* Dark Mode Toggle */}
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
