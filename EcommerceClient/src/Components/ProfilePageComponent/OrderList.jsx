import React from "react";
import { FaBoxOpen, FaStar, FaRedo } from "react-icons/fa";

const OrderList = ({ darkMode }) => {
  return (
    <div
      className={`border rounded-lg shadow-md w-[250px] h-auto ml-[321px] mt-[30px] p-4 transition-colors duration-300 ${
        darkMode
          ? "bg-gray-900 text-white border-gray-700"
          : "bg-white text-black border-gray-200"
      }`}
    >
      <div className="flex flex-col gap-3">
        <div
          className={`flex items-center gap-2 p-2 rounded-md transition ${
            darkMode
              ? "bg-gray-800 hover:bg-gray-700 border border-gray-600"
              : "bg-gray-100 hover:bg-gray-200 border border-gray-300"
          }`}
        >
          <FaBoxOpen />
          <h2 className="text-sm">Tüm Siparişlerim</h2>
        </div>
        <div
          className={`flex items-center gap-2 p-2 rounded-md transition ${
            darkMode
              ? "bg-gray-800 hover:bg-gray-700 border border-gray-600"
              : "bg-gray-100 hover:bg-gray-200 border border-gray-300"
          }`}
        >
          <FaStar />
          <h2 className="text-sm">Değerlendirmelerim</h2>
        </div>
        <div
          className={`flex items-center gap-2 p-2 rounded-md transition ${
            darkMode
              ? "bg-gray-800 hover:bg-gray-700 border border-gray-600"
              : "bg-gray-100 hover:bg-gray-200 border border-gray-300"
          }`}
        >
          <FaRedo />
          <h2 className="text-sm">Tekrar Satın Al</h2>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
