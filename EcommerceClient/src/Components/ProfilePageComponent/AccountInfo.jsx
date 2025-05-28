import React from "react";
import { FiMapPin, FiUser } from "react-icons/fi";

const AccountInfo = ({ darkMode }) => {
  return (
    <>
      <div
        className={`border rounded-lg shadow-md w-[250px] h-auto ml-[321px] mt-[30px] p-4 transition-colors duration-300 ${
          darkMode
            ? "bg-gray-900 text-white border-gray-700"
            : "bg-white text-black border-gray-200"
        }`}
      >
        <div className="flex flex-col gap-3">
          <div
            className={`flex items-center gap-2 p-2 rounded-md transition cursor-pointer ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700 border border-gray-600"
                : "bg-gray-100 hover:bg-gray-200 border border-gray-300"
            }`}
          >
            <FiUser />
            <h2 className="text-sm">Kullanıcı Bilgilerim</h2>
          </div>
          <div
            className={`flex items-center gap-2 p-2 rounded-md transition cursor-pointer ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700 border border-gray-600"
                : "bg-gray-100 hover:bg-gray-200 border border-gray-300"
            }`}
          >
            <FiMapPin />
            <h2 className="text-sm">Adreslerim</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountInfo;
