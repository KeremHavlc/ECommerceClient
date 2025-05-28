import React from "react";
import { FiUser } from "react-icons/fi";

const UserInfo = ({ darkMode, setDarkMode }) => {
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
        <span className="font-bold">Kerem Havlucu</span>
      </div>
    </div>
  );
};

export default UserInfo;
