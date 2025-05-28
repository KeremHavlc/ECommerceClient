import React, { useState } from "react";
import { toast } from "react-fox-toast";
const orders = [
  {
    date: "25/05/2025",
    id: "4e55f814-f5db-11ef-a2c1-c23b4f11ede5",
    buyer: "Kerem Havlucu",
    total: "1500 ₺",
  },
  {
    date: "26/05/2025",
    id: "5f67a120-f5dc-11ef-b1d4-c13a2d99ad2b",
    buyer: "Ahmet Yılmaz",
    total: "2300 ₺",
  },
  {
    date: "27/05/2025",
    id: "6a1b8ed2-f5dd-11ef-9423-bab2d3f55ee2",
    buyer: "Elif Demir",
    total: "980 ₺",
  },
  {
    date: "28/05/2025",
    id: "789c4a30-f5de-11ef-a34f-c1c4e4e3a78e",
    buyer: "Ayşe Kaya",
    total: "1740 ₺",
  },
  {
    date: "29/05/2025",
    id: "83ae5e1c-f5df-11ef-b823-f1cde8a4a4e1",
    buyer: "Mehmet Öz",
    total: "3200 ₺",
  },
];

const UserOrderList = ({ darkMode }) => {
  const [copiedId, setCopiedId] = useState(null);
  const copyId = (id) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    toast.success("Panoya Kopyalandı!");
  };
  return (
    <div>
      <div
        className={`border w-[700px] h-[50px] mt-[40px] ml-[35px] rounded-lg flex justify-center items-center font-bold
          ${
            darkMode
              ? "bg-gray-900 text-white border-gray-700"
              : "bg-white text-gray-900 border-gray-200"
          }
        `}
      >
        Tüm Siparişler
      </div>

      {/* Kolon Başlıkları */}
      <div
        className={`w-[700px] mt-[30px] ml-[20px] font-semibold px-10 flex justify-between
          ${darkMode ? "text-white" : "text-gray-800"}
        `}
      >
        <h2>Sipariş Tarihi</h2>
        <h2>Sipariş No</h2>
        <h2>Alıcı</h2>
        <h2>Tutar</h2>
      </div>

      {/* Sipariş Kutucukları */}
      {orders.map((order, index) => (
        <div
          key={index}
          className={`border w-[700px] h-[100px] mt-[20px] ml-[35px] rounded-lg px-10 flex items-center justify-between
            ${
              darkMode
                ? "bg-gray-900 text-white border-gray-700"
                : "bg-white text-gray-800 border-gray-200"
            }
          `}
        >
          <h2>{order.date}</h2>
          <h2
            onClick={() => copyId(order.id)}
            className={`cursor-pointer ${
              darkMode ? "text-green-400" : "text-green-400"
            }`}
          >
            {order.id.slice(0, 7)}...{order.id.slice(-4)}
          </h2>
          <h2>{order.buyer}</h2>
          <h2>{order.total}</h2>
        </div>
      ))}
    </div>
  );
};

export default UserOrderList;
