import {
  FiHome,
  FiUser,
  FiLogOut,
  FiShoppingCart,
  FiSearch,
  FiSun,
  FiMoon,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Header = ({ darkMode, setDarkMode }) => {
  const cartItemCount = 3;
  const isLoggedIn = true;
  const navigate = useNavigate();
  return (
    <header
      className={`h-[70px] shadow-md border-b px-80 flex justify-between items-center
        ${darkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"}
      `}
    >
      {/* Logo */}
      <button
        className={`text-xl font-bold ${
          darkMode ? "text-green-400" : "text-green-400"
        }`}
      >
        E-Shop
      </button>

      {/* Search */}
      <div className="relative w-[400px]">
        <input
          type="text"
          placeholder="Ürün ara..."
          className={`w-full h-10 px-4 pr-10 rounded-lg outline-none transition
            ${
              darkMode
                ? "bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-400"
                : "bg-gray-100 border border-gray-300 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-green-400"
            }
          `}
        />
        <FiSearch
          className={`absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer ${
            darkMode ? "text-green-400" : "text-green-400"
          }`}
          size={18}
        />
      </div>

      {/* Pages / Auth Area */}
      <div className="flex items-center gap-8 text-sm font-medium">
        {isLoggedIn ? (
          <>
            <button
              onClick={() => navigate("/")}
              className={`flex items-center gap-1 cursor-pointer hover:${
                darkMode ? "text-green-400" : "text-green-300"
              } text-gray-400`}
            >
              <FiHome size={18} />
              Ana Sayfa
            </button>
            <button
              onClick={() => navigate("/profile")}
              className={`flex items-center gap-1 cursor-pointer hover:text-green-400 text-gray-400`}
            >
              <FiUser size={18} />
              Profil
            </button>
            <button
              className={`flex items-center gap-1 cursor-pointer relative hover:text-green-400 text-gray-400`}
            >
              <FiShoppingCart size={18} />
              Sepet
              {cartItemCount > 0 && (
                <span className="absolute -top-4 -right-3 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-green-100 bg-green-600 rounded-full">
                  {cartItemCount}
                </span>
              )}
            </button>
            <button
              className={`flex items-center gap-1 cursor-pointer hover:text-green-400 text-gray-400`}
            >
              <FiLogOut size={18} />
              Çıkış
            </button>
          </>
        ) : (
          <>
            <button
              className={`px-4 py-1 rounded-lg border ${
                darkMode
                  ? "text-green-400 border-green-400 hover:bg-green-800"
                  : "text-green-600 border-green-600 hover:bg-green-100"
              } transition`}
            >
              Giriş Yap
            </button>
            <button
              className={`px-4 py-1 rounded-lg border ${
                darkMode
                  ? "text-white border-white hover:bg-white hover:text-gray-900"
                  : "text-white bg-green-500 border-green-500 hover:bg-green-600"
              } transition`}
            >
              Kayıt Ol
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
