import React, { useEffect, useState } from "react";
import { toast } from "react-fox-toast";
import { FiUser } from "react-icons/fi";

const UserInfo = ({ darkMode }) => {
  const [userData, setUserData] = useState();
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

  const userId = getUserIdFromToken();
  const fetchUserInfo = async () => {
    try {
      const res = await fetch(
        `https://localhost:7042/api/Users/getbyid/${userId}`
      );
      if (!res.ok) {
        toast.error("Bir hata oluştu!");
      }
      const data = await res.json();
      setUserData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUserInfo();
  }, []);
  return (
    <div
      className={`border rounded-lg shadow-md w-[250px] h-[50px] ml-[321px] mt-[40px] flex justify-center items-center
        ${
          darkMode
            ? "bg-gray-900 border-gray-700 "
            : "border-gray-200 bg-white text-gray-900"
        }
      `}
    >
      <div
        className={`flex items-center gap-2 px-4 py-1  rounded-md
          ${darkMode ? " bg-gray-800" : "border-gray-300 bg-gray-100"}
        `}
      >
        <FiUser size={20} />
        <span className="font-bold">
          {" "}
          {userData?.data?.name.toUpperCase()}{" "}
          {userData?.data?.surname.toUpperCase()}
        </span>
      </div>
    </div>
  );
};

export default UserInfo;
