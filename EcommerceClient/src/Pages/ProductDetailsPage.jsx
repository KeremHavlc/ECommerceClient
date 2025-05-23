import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Categories from "../Components/Categories";
import ProductDetailsImage from "../Components/ProductDetailsComponent/ProductDetailsImage";
import ProductInfo from "../Components/ProductDetailsComponent/ProductInfo";
import ProductReview from "../Components/ProductDetailsComponent/ProductReview ";
import CartItem from "../Components/CartItem";
import SimilarProducts from "../Components/ProductDetailsComponent/SimilarProducts";
import Footer from "../Components/Footer";

const ProductDetailsPage = () => {
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
          {/* Soldaki image */}
          <div className="">
            <ProductDetailsImage
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          </div>

          {/* Sağdaki sütun: önce info sonra review */}
          <div className="flex flex-col ">
            <ProductInfo darkMode={darkMode} setDarkMode={setDarkMode} />
            <ProductReview darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
          <CartItem darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
        <SimilarProducts darkMode={darkMode} setDarkMode={setDarkMode} />
        <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </>
  );
};

export default ProductDetailsPage;
