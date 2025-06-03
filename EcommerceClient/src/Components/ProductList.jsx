import React, { useEffect, useState } from "react";
import { Card, Image, Tooltip } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { toast } from "react-fox-toast";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;

const ProductList = ({ darkMode }) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const handleAddToCart = (product) => {
    console.log(product.name + " sepete eklendi!");
    toast.success("Sepete eklendi!");
  };

  const fetchProduct = async () => {
    try {
      const res = await fetch("https://localhost:7042/api/Products/getall");
      if (!res.ok) {
        return console.log(error);
      }
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="flex flex-wrap justify-start gap-6 px-10 mt-12 ml-[310px] w-[1450px]">
      {data.data?.map((product) => (
        <div key={product.id} style={{ position: "relative", width: 280 }}>
          <Card
            hoverable
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
            className={darkMode ? "bg-gray-700 border-gray-600 text-white" : ""}
          >
            <div
              onClick={() => navigate(`/productDetails/${product.id}`)}
              style={{ cursor: "pointer" }}
              className="hover:text-green-500"
            >
              <Meta title={product.name} description={product.description} />
              <div style={{ marginTop: 10, fontWeight: "bold", fontSize: 16 }}>
                Fiyat: {product.price} TL
              </div>
            </div>
          </Card>
          <Tooltip title="Sepete Ekle">
            <ShoppingCartOutlined
              className="text-green-400"
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
  );
};

export default ProductList;
