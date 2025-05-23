import React from "react";
import { Card, Tooltip } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { toast } from "react-fox-toast";

const { Meta } = Card;

const products = [
  {
    id: 1,
    name: "Europe Street beat",
    description: "www.instagram.com",
    price: 150,
    imageUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    id: 2,
    name: "Asia Street vibe",
    description: "www.facebook.com",
    price: 200,
    imageUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    id: 3,
    name: "America Street sound",
    description: "www.twitter.com",
    price: 175,
    imageUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    id: 4,
    name: "Africa Street rhythm",
    description: "www.linkedin.com",
    price: 180,
    imageUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    id: 5,
    name: "Oceania Street beat",
    description: "www.tiktok.com",
    price: 160,
    imageUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    id: 5,
    name: "Oceania Street beat",
    description: "www.tiktok.com",
    price: 160,
    imageUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
];

const ProductList = () => {
  const handleAddToCart = (product) => {
    console.log(product.name + " sepete eklendi!");
    toast.success("Sepete eklendi!");
  };

  return (
    <div className="flex flex-wrap justify-start gap-6 px-10 mt-12 ml-[280px] w-[1450px]">
      {products.map((product) => (
        <div key={product.id} style={{ position: "relative", width: 240 }}>
          <Card
            hoverable
            cover={<img alt={product.name} src={product.imageUrl} />}
          >
            <Meta title={product.name} description={product.description} />
            <div style={{ marginTop: 10, fontWeight: "bold", fontSize: 16 }}>
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
                background: "white",
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
