import React, { useState, useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";

const ProductReview = ({ darkMode }) => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const fetchReviews = async () => {
    try {
      const res = await fetch(
        `https://localhost:7042/api/Comments/getAllCommentByProductId/${id}`
      );
      const data = await res.json();
      setReviews(data.data || data || []);
      setCurrentIndex(0);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [id]);

  const renderStars = (count = 0) =>
    [...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        size={20}
        className={i < count ? "text-yellow-400" : "text-gray-400"}
      />
    ));

  useEffect(() => {
    const container = containerRef.current;
    if (!container || reviews.length === 0) return;

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

  if (reviews.length === 0) {
    return (
      <div
        className={`p-4 mx-auto mt-4 ml-[65px] rounded-2xl shadow-lg w-[615px] h-[180px] flex items-center justify-center
        ${
          darkMode
            ? "bg-gray-800 text-gray-300 shadow-gray-700"
            : "bg-white text-gray-800 shadow-gray-300"
        }`}
      >
        Henüz yorum yok.
      </div>
    );
  }

  const currentReview = reviews[currentIndex] || {};

  return (
    <div
      ref={containerRef}
      className={`p-1 mx-auto mt-4 ml-[65px] rounded-2xl shadow-lg w-[615px] overflow-hidden relative
      ${
        darkMode
          ? "bg-gray-800 text-gray-300 shadow-gray-700"
          : "bg-white text-gray-800 shadow-gray-300"
      }`}
      style={{ height: "180px" }}
    >
      <h3 className="text-2xl font-bold flex justify-center items-center mb-6 ml-4">
        Değerlendirmeler
      </h3>

      <div
        key={(currentReview.userId || "") + currentIndex}
        className={`p-2 ml-1 rounded-md transition-all duration-300 w-[600px] h-[80px] ${
          darkMode ? "bg-gray-700" : "bg-gray-100"
        }`}
      >
        <div className="flex items-center mb-2">
          {renderStars(Number(currentReview.rating) || 0)}
        </div>
        <p className="text-lg">
          {currentReview.commentText || "Yorum metni bulunamadı."}
        </p>
      </div>

      <div className="absolute bottom-4 right-6 text-sm select-none opacity-70">
        {currentIndex + 1} / {reviews.length}
      </div>
    </div>
  );
};

export default ProductReview;
