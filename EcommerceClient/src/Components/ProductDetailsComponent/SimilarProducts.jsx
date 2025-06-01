import React, { useRef, useEffect, useState } from "react";
import { Card, Tooltip, Image, Button } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { toast } from "react-fox-toast";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const SimilarProducts = ({ darkMode, cat }) => {
  const scrollRef = useRef(null);
  const [similarProduct, setSimilarProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cat) return;
    fetchSimilarData();
  }, [cat]);

  const fetchSimilarData = async () => {
    try {
      const res = await fetch(
        `https://localhost:7042/api/Products/getbycategoryid/${cat}`
      );
      const data = await res.json();
      setSimilarProduct(data);
    } catch (error) {
      console.log("Benzer ürünler alınamadı:", error);
    }
  };

  const handleAddToCart = (product) => {
    console.log(`${product.name} sepete eklendi`);
    toast.success("Sepete eklendi!");
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 280 * 3 + 24 * 2;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`mt-10 pt-6 px-10 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h1 className="text-lg font-bold mb-6 text-center">
        AYNI KATEGORİDE BENZER ÜRÜNLER
      </h1>

      <div className="relative">
        <Button
          icon={<LeftOutlined />}
          onClick={() => scroll("left")}
          className="absolute left-0 top-[40%] z-10"
        />
        <Button
          icon={<RightOutlined />}
          onClick={() => scroll("right")}
          className="absolute right-0 top-[40%] z-10"
        />

        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide gap-6 pb-4 px-10 w-[1450px] ml-[225px]"
          style={{ scrollBehavior: "smooth" }}
        >
          {similarProduct.map((product) => (
            <div
              key={product.id}
              className="relative"
              style={{ width: 280, flexShrink: 0 }}
            >
              <Card
                hoverable
                className={`${
                  darkMode ? "bg-gray-700 border-gray-600 text-white" : ""
                }`}
                cover={
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={280}
                    height={350}
                    style={{ objectFit: "cover" }}
                    preview={{
                      mask: (
                        <div style={{ color: "white", fontWeight: "bold" }}>
                          Büyüt
                        </div>
                      ),
                    }}
                  />
                }
              >
                <div
                  className="group cursor-pointer"
                  onClick={() => navigate(`/productDetails/${product.id}`)}
                >
                  <Meta
                    title={product.name}
                    description={
                      <div className="h-10 overflow-hidden">
                        {product.description}
                      </div>
                    }
                  />
                  <div className="mt-2 font-bold text-[16px] group-hover:text-green-500 transition-colors duration-200">
                    Fiyat:{" "}
                    {product.price.toLocaleString("tr-TR", {
                      style: "currency",
                      currency: "TRY",
                    })}
                  </div>
                </div>
              </Card>

              <Tooltip title="Sepete Ekle">
                <ShoppingCartOutlined
                  onClick={() => handleAddToCart(product)}
                  style={{
                    fontSize: 24,
                    color: "#4ade80",
                    cursor: "pointer",
                    position: "absolute",
                    top: 10,
                    right: 10,
                    background: darkMode ? "#374151" : "white",
                    borderRadius: "50%",
                    padding: 6,
                    boxShadow: "0 0 5px rgba(0,0,0,0.15)",
                    zIndex: 10,
                  }}
                />
              </Tooltip>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarProducts;
