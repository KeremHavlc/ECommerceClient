import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Categories from "../Components/Categories";
import UserInfo from "../Components/ProfilePageComponent/UserInfo";
import OrderList from "../Components/ProfilePageComponent/OrderList";
import AccountInfo from "../Components/ProfilePageComponent/AccountInfo";
import ReviewPanel from "../Components/FeedBackPageComponents/ReviewPanel";

const RatingsAndReviewsPage = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("mode") === "true";
    }
    return false;
  });
  useEffect(() => {
    localStorage.setItem("mode", darkMode);
  }, [darkMode]);

  return (
    <>
      <div
        className={`select-none ${
          darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
        } min-h-screen transition-colors duration-300`}
      >
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Categories darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="flex">
          <div>
            <UserInfo darkMode={darkMode} setDarkMode={setDarkMode} />
            <OrderList darkMode={darkMode} setDarkMode={setDarkMode} />
            <AccountInfo darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
          <div>
            <ReviewPanel darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RatingsAndReviewsPage;
