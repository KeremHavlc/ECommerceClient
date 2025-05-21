import React, { useState } from "react";
import { FiShoppingCart, FiTrash2 } from "react-icons/fi";

const CartItem = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Sticker Seti",
      image:
        "https://cdn.dsmcdn.com/ty893/product/media/images/20230512/19/345671510/128099823/1/1_org.jpg",
      price: 89.15,
      quantity: 1,
    },
    {
      id: 2,
      name: "T-Shirt - The Best Of Us",
      image:
        "https://cdn.dsmcdn.com/ty1162/product/media/images/prod/SPM/PIM/20240104/10/9ce26b63-cb55-3c28-8a41-3ea188a2a053/1_org.jpg",
      price: 479.9,
      quantity: 1,
    },
  ]);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Number(newQuantity) } : item
      )
    );
  };

  const handleGoToCart = () => {
    console.log("Sepet içeriği:", cartItems);
  };

  return (
    <>
      {/* Sepet simgesi */}
      <div className="">
        <div
          onClick={() => setIsOpen(true)}
          className={`fixed top-1/2 right-2 -translate-y-1/2 ${
            darkMode ? "bg-gray-600 text-white" : "bg-gray-400 text-gray-800"
          } shadow-lg rounded-l-lg px-4 py-3 cursor-pointer z-50 flex items-center gap-1 hover:bg-gray-500 hover:transition duration-300`}
        >
          <div className="relative">
            <FiShoppingCart className="text-2xl" />
            <span className="absolute -top-3 -right-4 bg-green-400 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow">
              {cartItems.length}
            </span>
          </div>
        </div>
      </div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-70 ${
          darkMode
            ? "bg-gray-900 text-white border-l-2 border-gray-700 shadow-green-500"
            : "bg-white text-gray-900 shadow-green-500"
        } shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div
          className={`flex items-center justify-between px-4 py-[20.7px] border-b ${
            darkMode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <h2 className="font-semibold text-lg">
            Sepete Git ({cartItems.length} ürün)
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:text-green-500"
          >
            Kapat ✕
          </button>
        </div>

        {/* Ara Toplam */}
        <div className="px-4 pt-3">
          <p className="text-sm text-gray-500 dark:text-gray-400">Ara Toplam</p>
          <p className="text-xl font-bold text-green-500">
            {total.toFixed(2)} TL
          </p>
        </div>

        {/* Ürünler */}
        <div className="px-4 py-2 overflow-y-auto max-h-[70vh] space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className={`flex items-center gap-3 border p-2 rounded-lg ${
                darkMode ? "border-gray-700" : "border-gray-300"
              }`}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-sm text-green-500 font-semibold">
                  {item.price.toFixed(2)} TL
                </p>
                <select
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, e.target.value)
                  }
                  className={`mt-1 border rounded px-1 text-sm ${
                    darkMode
                      ? "bg-gray-800 border-gray-600 text-white"
                      : "bg-white border-gray-300 text-black"
                  }`}
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
              <FiTrash2 className="text-red-500 cursor-pointer" />
            </div>
          ))}
        </div>

        {/* Sepete Git Butonu */}
        <div
          className={`absolute bottom-0 w-full px-4 py-3 border-t ${
            darkMode
              ? "bg-gray-900 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <button
            onClick={handleGoToCart}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold"
          >
            Sepete Git
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
