import React from "react";

const OrderSearch = ({ darkMode }) => {
  return (
    <div
      className={`w-[270px] mt-[40px] h-[200px] rounded-lg shadow-md ml-7 p-4 border
        ${
          darkMode
            ? "bg-gray-900 text-white border-gray-700"
            : "bg-white text-gray-800 border-gray-200"
        }
      `}
    >
      <h2 className="text-sm font-medium mb-4">
        Sipariş numarasını girerek ilgili siparişin detaylarına ulaşabilirsiniz.
      </h2>
      <input
        type="text"
        placeholder="Sipariş No girin"
        className={`w-full px-3 py-2 rounded-md mb-4 outline-none border
          ${
            darkMode
              ? "bg-gray-800 text-white border-gray-600"
              : "bg-gray-100 border-gray-300"
          }
        `}
      />
      <button
        className={`w-full py-2 rounded-md font-semibold
          ${
            darkMode
              ? "bg-green-600 hover:bg-green-700 text-white"
              : "bg-green-500 hover:bg-green-600 text-white"
          }
        `}
      >
        Ara
      </button>
    </div>
  );
};

export default OrderSearch;
