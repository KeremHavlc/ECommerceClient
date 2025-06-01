import React, { useEffect, useState } from "react";
import { FaBoxes, FaLayerGroup, FaDollarSign } from "react-icons/fa";
import { useParams } from "react-router-dom";

const ProductInfo = ({ darkMode, setCat }) => {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState({});
  const [categoryName, setCategoryName] = useState("");

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://localhost:7042/api/Products/getbyid/${id}`
      );
      const data = await res.json();
      setProductInfo(data);
      if (data.categoryId) {
        setCat(data.categoryId);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategoryData = async (categoryId) => {
    try {
      const res = await fetch(
        `https://localhost:7042/api/Categories/getById/${categoryId}`
      );
      const data = await res.json();
      setCategoryName(data.data.name || "Kategori adı yok");
    } catch (error) {
      console.log(error);
      setCategoryName("Kategori bilgisi alınamadı");
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  useEffect(() => {
    if (productInfo.categoryId) {
      fetchCategoryData(productInfo.categoryId);
    }
  }, [productInfo.categoryId]);

  if (!productInfo || Object.keys(productInfo).length === 0) {
    return <div className="text-center mt-20">Yükleniyor...</div>;
  }

  return (
    <div
      className={`mt-16 ml-16 h-[350px] w-[615px] p-8 rounded-2xl shadow-lg
        ${
          darkMode
            ? "bg-gray-800 text-gray-300 shadow-gray-700"
            : "bg-white text-gray-800 shadow-gray-300"
        }`}
    >
      <h1 className="text-4xl font-extrabold mb-4">{productInfo.name}</h1>
      <p className="text-lg mb-8 leading-relaxed">{productInfo.description}</p>

      <div className="flex flex-wrap gap-6 text-xl font-semibold mb-8">
        <div className="flex items-center gap-3 text-green-400">
          <FaDollarSign size={24} />
          <span>
            {productInfo.price !== undefined
              ? productInfo.price.toLocaleString("tr-TR", {
                  style: "currency",
                  currency: "TRY",
                })
              : "Fiyat yok"}
          </span>
        </div>

        <div className="flex items-center gap-3 text-green-400">
          <FaBoxes size={24} />
          <span>{productInfo.stock ?? "Stok bilgisi yok"} adet stokta</span>
        </div>

        <div className="flex items-center gap-3 text-green-400">
          <FaLayerGroup size={24} />
          <span>{categoryName || "Kategori bilgisi yok"}</span>
        </div>
      </div>

      <div className="flex gap-6">
        <button
          className="px-6 py-3 border-2 border-green-400 text-green-400 rounded-lg font-semibold
            hover:text-green-600 hover:border-green-600 transition"
        >
          Sepete Ekle
        </button>
        <button
          className="px-6 py-3 bg-green-400 text-white rounded-lg font-semibold
            hover:bg-green-600 transition"
        >
          Satın Al
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
