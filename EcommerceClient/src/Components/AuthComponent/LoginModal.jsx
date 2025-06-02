import React, { useEffect } from "react";

const LoginModal = ({ onClose, darkMode }) => {
  const handleBackdropClick = (e) => {
    if (e.target.id === "backdrop") {
      onClose();
    }
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div
      id="backdrop"
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
    >
      {/* Modal Container */}
      <div
        className={`w-[400px] rounded-xl p-6 shadow-lg relative transition-all duration-300
        ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}
      `}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-2 right-2 text-xl font-bold transition ${
            darkMode
              ? "text-gray-400 hover:text-red-500"
              : "text-gray-500 hover:text-red-600"
          }`}
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-center">Giriş Yap</h2>

        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="E-posta"
            className={`px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500 ${
              darkMode
                ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                : "bg-white border-gray-300 text-gray-800 placeholder-gray-500"
            }`}
          />
          <input
            type="password"
            placeholder="Şifre"
            className={`px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500 ${
              darkMode
                ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                : "bg-white border-gray-300 text-gray-800 placeholder-gray-500"
            }`}
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition"
          >
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
