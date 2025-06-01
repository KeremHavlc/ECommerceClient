import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CategoryNameHeader = ({ darkMode }) => {
  const [categoryName, setCategoryName] = useState({});
  const { categoryId } = useParams();
  const fetchCategoryName = async () => {
    try {
      const res = await fetch(
        `https://localhost:7042/api/Categories/getById/${categoryId}`
      );
      if (!res.ok) {
        return console.log(error);
      }
      const data = await res.json();
      setCategoryName(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategoryName();
  }, [categoryId]);
  return (
    <div>
      <div
        className={`border w-[1280px] h-[50px] mt-[40px] ml-[325px] rounded-lg flex justify-center items-center font-bold
          ${
            darkMode
              ? "bg-gray-900 text-white border-gray-700"
              : "bg-white text-gray-900 border-gray-200"
          }
        `}
      >
        {categoryName?.data?.name || "Yükleniyor..."}
      </div>
    </div>
  );
};

export default CategoryNameHeader;
