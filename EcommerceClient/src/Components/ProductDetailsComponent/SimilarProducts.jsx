import React, { useRef } from "react";
import { Card, Tooltip, Button } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { toast } from "react-fox-toast";

const { Meta } = Card;

const SimilarProducts = ({ darkMode }) => {
  const scrollRef = useRef(null);

  const products = [
    // 10 ürün örneği
    {
      id: 1,
      name: "Ürün 1",
      description: "www.site.com",
      price: 100,
      imageUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      id: 2,
      name: "Ürün 2",
      description: "www.site.com",
      price: 120,
      imageUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      id: 3,
      name: "Ürün 3",
      description: "www.site.com",
      price: 130,
      imageUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      id: 4,
      name: "Ürün 4",
      description: "www.site.com",
      price: 140,
      imageUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      id: 5,
      name: "Ürün 5",
      description: "www.site.com",
      price: 150,
      imageUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      id: 6,
      name: "Ürün 6",
      description: "www.site.com",
      price: 160,
      imageUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      id: 7,
      name: "Ürün 7",
      description: "www.site.com",
      price: 170,
      imageUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      id: 8,
      name: "Ürün 8",
      description: "www.site.com",
      price: 180,
      imageUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      id: 9,
      name: "Ürün 9",
      description: "www.site.com",
      price: 190,
      imageUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      id: 10,
      name: "Ürün 10",
      description: "www.site.com",
      price: 200,
      imageUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
  ];

  const handleAddToCart = (product) => {
    console.log(`${product.name} sepete eklendi`);
    toast.success("Sepete eklendi!");
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 240 * 5 + 24 * 4;
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
        {/* Scroll buttons */}
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

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide gap-6 pb-4 px-10 w-[1360px] ml-[225px]"
          style={{ scrollBehavior: "smooth" }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{ minWidth: 240, position: "relative" }}
            >
              <Card
                hoverable
                cover={<img alt={product.name} src={product.imageUrl} />}
                className={darkMode ? "bg-gray-700" : ""}
              >
                <Meta title={product.name} description={product.description} />
                <div
                  style={{ marginTop: 10, fontWeight: "bold", fontSize: 16 }}
                >
                  Fiyat: {product.price} TL
                </div>
              </Card>

              <Tooltip title="Sepete Ekle">
                <ShoppingCartOutlined
                  onClick={() => handleAddToCart(product)}
                  style={{
                    fontSize: 24,
                    color: "#1890ff",
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
