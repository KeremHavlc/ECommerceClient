import React from "react";
import { FaBoxes, FaLayerGroup, FaDollarSign } from "react-icons/fa";

const ProductInfo = ({ darkMode }) => {
  const product = {
    name: "Cool Wireless Headphones",
    description:
      "Yüksek kaliteli ses deneyimi sunan, uzun pil ömrüne sahip kablosuz kulaklık.",
    price: 1499.99,
    stock: 24,
    category: "Elektronik",
  };

  return (
    <div
      className={`mt-16 ml-16 h-[350px] w-[615px] p-8 rounded-2xl shadow-lg
        ${
          darkMode
            ? "bg-gray-800 text-gray-300 shadow-gray-700"
            : "bg-white text-gray-800 shadow-gray-300"
        }`}
    >
      <h1 className="text-4xl font-extrabold mb-4">{product.name}</h1>
      <p className="text-lg mb-8 leading-relaxed">{product.description}</p>

      <div className="flex flex-wrap gap-6 text-xl font-semibold mb-8">
        <div className="flex items-center gap-3 text-green-400">
          <FaDollarSign size={24} />
          <span>
            {product.price.toLocaleString("tr-TR", {
              style: "currency",
              currency: "TRY",
            })}
          </span>
        </div>

        <div className="flex items-center gap-3 text-green-400">
          <FaBoxes size={24} />
          <span>{product.stock} adet stokta</span>
        </div>

        <div className="flex items-center gap-3 text-green-400">
          <FaLayerGroup size={24} />
          <span>{product.category}</span>
        </div>
      </div>

      <div className="flex gap-6">
        <button
          className="px-6 py-3 border-2 border-green-400 text-green-400 rounded-lg font-semibold
            hover:text-green-600 hover:border-green-600 transition"
        >
          Sepete Ekle
        </button>
        <button
          className="px-6 py-3 bg-green-400 text-white rounded-lg font-semibold
            hover:bg-green-600 transition"
        >
          Satın Al
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
