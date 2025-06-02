import React, { useEffect, useState } from "react";
import { toast } from "react-fox-toast";

const RegisterModal = ({ onClose, darkMode }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      surname,
      email,
      password,
      roleId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    };

    try {
      const response = await fetch("https://localhost:7042/api/Auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        console.log(error);
      }

      const data = await response.text();
      console.log(data);
      toast.success("Kayıt Başarılı");
      onClose();
    } catch (err) {
      console.error(err);
      toast.error("Bir hata oluştu!");
    }
  };

  return (
    <div
      id="backdrop"
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
    >
      <div
        className={`w-[400px] rounded-xl p-6 shadow-lg relative transition-all duration-300
        ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}
      `}
      >
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

        <h2 className="text-2xl font-semibold mb-4 text-center">Kayıt Ol</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Ad"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500 ${
              darkMode
                ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                : "bg-white border-gray-300 text-gray-800 placeholder-gray-500"
            }`}
          />
          <input
            type="text"
            placeholder="Soyad"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className={`px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500 ${
              darkMode
                ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                : "bg-white border-gray-300 text-gray-800 placeholder-gray-500"
            }`}
          />
          <input
            type="email"
            placeholder="E-posta"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500 ${
              darkMode
                ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                : "bg-white border-gray-300 text-gray-800 placeholder-gray-500"
            }`}
          />
          <input
            type="password"
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            Kayıt Ol
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
