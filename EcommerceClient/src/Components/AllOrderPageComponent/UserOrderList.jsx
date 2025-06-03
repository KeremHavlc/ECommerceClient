import React, { useState, useEffect } from "react";
import { toast } from "react-fox-toast";

const UserOrderList = ({ darkMode }) => {
  const [copiedId, setCopiedId] = useState(null);
  const [userData, setUserData] = useState([]);
  const [userInfo, setUserInfo] = useState(null);

  const copyId = (id) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    toast.success("Panoya Kopyalandı!");
  };

  const getUserIdFromToken = () => {
    const token = localStorage.getItem("authToken");
    if (!token) return null;

    try {
      const payload = token.split(".")[1];
      const decoded = JSON.parse(atob(payload));
      return decoded.userId || decoded["userId"];
    } catch (err) {
      console.error("Token çözümleme hatası:", err);
      return null;
    }
  };

  const fetchUserInfo = async (id) => {
    try {
      const res = await fetch(`https://localhost:7042/api/Users/getbyid/${id}`);
      if (!res.ok) {
        toast.error("Kullanıcı bilgileri alınamadı!");
        return;
      }
      const data = await res.json();
      setUserInfo(data);
    } catch (error) {
      console.log("Kullanıcı bilgisi hatası:", error);
    }
  };

  const fetchOrderInfo = async (id) => {
    try {
      const res = await fetch(
        `https://localhost:7042/api/Orders/getAllOrdersByUser/${id}`
      );
      if (!res.ok) {
        toast.error("Siparişler alınamadı!");
        return;
      }
      const data = await res.json();
      setUserData(data.data);
    } catch (error) {
      console.log("Sipariş bilgisi hatası:", error);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    const userId = getUserIdFromToken();
    if (userId) {
      fetchUserInfo(userId);
      fetchOrderInfo(userId);
    } else {
      toast.error("Kullanıcı bulunamadı!");
    }
  }, []);

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

      {userData && userData.length > 0 ? (
        userData.map((order, index) => (
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
            <h2>{formatDate(order.createdAt)}</h2>
            <h2
              onClick={() => copyId(order.id)}
              className="cursor-pointer text-green-400"
            >
              {order.id.slice(0, 7)}...{order.id.slice(-4)}
            </h2>
            <h2>
              {userInfo
                ? `${userInfo.data.name} ${userInfo.data.surname}`
                : "..."}
            </h2>
            <h2>{order.totalPrice} ₺</h2>
          </div>
        ))
      ) : (
        <div
          className={`w-[700px] mt-[30px] ml-[35px] text-center font-semibold py-4 rounded-lg
      ${
        darkMode
          ? "text-white bg-gray-800 border border-gray-700"
          : "text-gray-800 bg-gray-100 border border-gray-300"
      }
    `}
        >
          Sipariş bulunamadı.
        </div>
      )}
    </div>
  );
};

export default UserOrderList;
