import { Image } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetailsImage = ({ darkMode }) => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://localhost:7042/api/Products/getbyid/${id}`
      );
      const data = await res.json();
      setProductData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (!productData) {
    return <div className="text-center mt-20">Yükleniyor...</div>;
  }

  return (
    <div
      className={`w-[600px] h-[550px] border-2 ml-[321px] mt-[70px] overflow-hidden rounded-xl
        ${
          darkMode
            ? "bg-gray-900 border-gray-700 text-gray-300"
            : "bg-white border-gray-200 text-gray-700"
        }`}
    >
      {productData.image ? (
        <div className="flex justify-center items-center w-full h-[550px]">
          <Image
            src={productData.image}
            alt={productData.name || "product-image"}
            style={{ maxHeight: 550, objectFit: "contain" }}
            preview={{
              mask: (
                <div style={{ color: "white", fontWeight: "bold" }}>Büyüt</div>
              ),
            }}
          />
        </div>
      ) : (
        <div className="flex justify-center items-center w-full h-[550px]">
          <p>Görsel bulunamadı</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsImage;
