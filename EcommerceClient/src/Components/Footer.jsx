import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Footer = ({ darkMode, setDarkMode }) => {
  return (
    <footer
      className={`w-full py-6 mt-12 border-t flex justify-between items-center
        ${
          darkMode
            ? "bg-gray-900 text-gray-300 border-gray-700"
            : "bg-gray-100 text-gray-700 border-gray-300"
        }
        pl-[322px] pr-[315px] min-w-[960px] box-border
      `}
    >
      <div
        className={`font-semibold ${
          darkMode ? "text-green-400" : "text-green-700"
        }`}
      >
        © 2025 E-Shop. Tüm hakları saklıdır.
      </div>

      <div className="flex items-center gap-6">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors duration-300
            ${
              darkMode
                ? "bg-gray-700 hover:bg-gray-600 text-green-400"
                : "bg-gray-300 hover:bg-gray-400 text-green-700"
            }
          `}
          aria-label="Karanlık modu değiştir"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
          {darkMode ? "Açık Mod" : "Karanlık Mod"}
        </button>

        <nav className="flex gap-6 text-sm">
          <a
            href="#!"
            className={`${
              darkMode
                ? "hover:underline text-green-400"
                : "hover:underline text-green-700"
            }`}
          >
            Gizlilik Politikası
          </a>
          <a
            href="#!"
            className={`${
              darkMode
                ? "hover:underline text-green-400"
                : "hover:underline text-green-700"
            }`}
          >
            Kullanım Şartları
          </a>
          <a
            href="https://github.com/KeremHavlc"
            className={`${
              darkMode
                ? "hover:underline text-green-400"
                : "hover:underline text-green-700"
            }`}
          >
            İletişim
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
