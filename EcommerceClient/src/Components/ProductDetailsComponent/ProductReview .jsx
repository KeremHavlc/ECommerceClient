import React, { useState, useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";

const ProductReview = ({ darkMode }) => {
  const [reviews] = useState([
    {
      id: 1,
      rating: 5,
      comment:
        "Harika ürün, çok memnunum! Kalitesi beklediğimden çok daha iyi.",
    },
    {
      id: 2,
      rating: 4,
      comment:
        "Gayet başarılı, tavsiye ederim. Fiyat performans açısından çok iyi.",
    },
    {
      id: 3,
      rating: 3,
      comment: "Ortalama bir ürün, beklentimi tam karşılamadı ama idare eder.",
    },
    { id: 4, rating: 5, comment: "Mükemmel! Hızlı kargo ve harika paketleme." },
    {
      id: 5,
      rating: 2,
      comment: "Ürün biraz beklediğimden kötü çıktı, iade edeceğim.",
    },
    {
      id: 6,
      rating: 4,
      comment: "Genel olarak memnunum, küçük bazı eksikler var.",
    },
    {
      id: 7,
      rating: 5,
      comment: "Çok güzel tasarım, arkadaşlarıma da önerdim.",
    },
    {
      id: 8,
      rating: 3,
      comment: "Fena değil ama rakip ürünlere göre biraz pahalı.",
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const renderStars = (count) =>
    [...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        size={20}
        className={i < count ? "text-yellow-400" : "text-gray-400"}
      />
    ));

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (e) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        setCurrentIndex((prev) => Math.min(prev + 1, reviews.length - 1));
      } else if (e.deltaY < 0) {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    };

    container.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", onWheel);
    };
  }, [reviews.length]);

  const currentReview = reviews[currentIndex];

  return (
    <div
      ref={containerRef}
      className={`p-1 mx-auto mt-4 ml-[65px] rounded-2xl shadow-lg w-[615px] overflow-hidden relative
      ${
        darkMode
          ? "bg-gray-800 text-gray-300 shadow-gray-700 "
          : "bg-white text-gray-800 shadow-gray-300"
      }`}
      style={{ height: "180px" }}
    >
      <h3 className="text-2xl font-bold flex justify-center items-center mb-6 ml-4">
        Değerlendirmeler
      </h3>

      <div
        key={currentReview.id}
        className={`p-2 ml-1 rounded-md transition-all duration-300 w-[600px] h-[80px] ${
          darkMode ? "bg-gray-700" : "bg-gray-100"
        }`}
      >
        <div className="flex items-center mb-2">
          {renderStars(currentReview.rating)}
        </div>
        <p className="text-lg">{currentReview.comment}</p>
      </div>

      <div className="absolute bottom-4 right-6 text-sm select-none opacity-70">
        {currentIndex + 1} / {reviews.length}
      </div>
    </div>
  );
};

export default ProductReview;
