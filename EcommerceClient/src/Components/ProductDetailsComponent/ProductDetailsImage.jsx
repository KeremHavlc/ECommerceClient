import { Carousel } from "antd";
import React from "react";

const ProductDetailsImage = ({ darkMode, setDarkMode }) => {
  const images = [
    "https://picsum.photos/id/237/600/550",
    "https://picsum.photos/id/238/600/550",
    "https://picsum.photos/id/239/600/550",
    "https://picsum.photos/id/240/600/550",
  ];

  return (
    <div
      className={`w-[600px] h-[550px] border-2 ml-[321px] mt-[70px] overflow-hidden rounded-xl
        ${
          darkMode
            ? "bg-gray-900 border-gray-700 text-gray-300"
            : "bg-white border-gray-200 text-gray-700"
        }`}
    >
      <Carousel arrows infinite={false}>
        {images.map((img, index) => (
          <div
            key={index}
            className="flex justify-center items-center w-full h-[550px]"
          >
            <img
              src={img}
              alt={`product-${index}`}
              className="object-contain max-h-[550px]"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductDetailsImage;
