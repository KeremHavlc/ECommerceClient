import React from "react";

const UserInfo = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <div
        className={`border font-bold rounded-lg shadow-md w-[250px] h-[50px] ml-[321px] mt-[40px] flex justify-center items-center 
            ${darkMode ? "text-green-400" : "border-gray-400"}`}
      >
        Kerem Havlucu
      </div>
    </>
  );
};

export default UserInfo;
