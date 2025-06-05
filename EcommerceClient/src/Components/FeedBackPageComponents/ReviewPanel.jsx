import React, { useEffect, useState } from "react";
import ReviewUpdateModal from "./ReviewUpdateModal";
import { Image } from "antd";

const ReviewPanel = ({ darkMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedComment, setSelectedComment] = useState(null);
  const [comments, setComments] = useState([]);

  const showModal = (comment) => {
    setIsModalOpen(true);
    setSelectedComment(comment);
  };

  const getUserIdFromToken = () => {
    const token = localStorage.getItem("authToken");
    if (!token) return null;

    try {
      const payload = token.split(".")[1];
      const decoded = JSON.parse(atob(payload));
      return decoded.userId || decoded["userId"];
    } catch (err) {
      console.error("Token çözümleme hatası:", err);
      return null;
    }
  };

  const fetchReviewData = async () => {
    const userId = getUserIdFromToken();
    if (!userId) return;

    try {
      const res = await fetch(
        `https://localhost:7042/api/Comments/getAllCommentByUserId/${userId}`
      );
      const result = await res.json();
      console.log("Yorum API cevabı:", result);

      if (result.success && Array.isArray(result.data)) {
        const enrichedComments = await Promise.all(
          result.data.map(async (comment) => {
            try {
              const productRes = await fetch(
                `https://localhost:7042/api/Products/getbyid/${comment.productId}`
              );
              const productData = await productRes.json();
              console.log("Ürün API cevabı:", productData);
              return {
                ...comment,
                productImage: productData.data?.image || "",
                productName: productData.data?.name || "İsimsiz Ürün",
                date: new Date().toLocaleDateString(),
              };
            } catch (error) {
              console.error("Ürün çekilemedi:", error);
              return {
                ...comment,
                productImage: "",
                productName: "Ürün bulunamadı",
                date: new Date().toLocaleDateString(),
              };
            }
          })
        );
        console.log("Zenginleştirilmiş yorumlar:", enrichedComments);
        setComments(enrichedComments);
      }
    } catch (error) {
      console.error("Yorumlar alınamadı:", error);
    }
  };

  useEffect(() => {
    fetchReviewData();
  }, []);

  return (
    <div>
      <div
        className={`border w-[900px] h-[50px] mt-[40px] ml-[35px] rounded-lg flex justify-center items-center font-bold
          ${
            darkMode
              ? "bg-gray-900 text-white border-gray-700"
              : "bg-white text-gray-900 border-gray-200"
          }
        `}
      >
        Değerlendirmelerim
      </div>

      <div
        className={`w-[900px] mt-[30px] ml-[90px] font-semibold px-6 flex
          ${darkMode ? "text-white" : "text-gray-800"}
        `}
      >
        <div className="w-[100px]">Tarih</div>
        <div className="w-[70px]">Ürün</div>
        <div className="w-[350px] text-center">Yorum</div>
        <div className="w-[80px]">Puan</div>
        <div className="w-[150px]">Seçenekler</div>
      </div>

      {comments.map((comment, index) => (
        <div
          key={index}
          className={`border w-[900px] h-[100px] mt-[20px] ml-[35px] rounded-lg px-6 flex items-center
            ${
              darkMode
                ? "bg-gray-900 text-white border-gray-700"
                : "bg-white text-gray-800 border-gray-200"
            }
          `}
        >
          <div className="w-[100px] ml-10">{comment.date}</div>

          <div className="w-[70px] ml-4">
            <Image
              src={comment.productImage}
              alt={comment.productName}
              style={{ maxHeight: 45, maxWidth: 45, objectFit: "contain" }}
              preview={{
                mask: (
                  <div style={{ color: "white", fontWeight: "bold" }}>
                    Büyüt
                  </div>
                ),
              }}
              fallback="https://via.placeholder.com/45"
            />
          </div>

          <div className="w-[350px] text-center">{comment.commentText}</div>
          <div className="w-[80px]">{comment.rating}</div>

          <div className="w-[150px] flex gap-2">
            <button
              onClick={() => showModal(comment)}
              className={`px-2 py-1 rounded text-sm ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Düzenle
            </button>
            <button
              className={`px-2 py-1 rounded text-sm ${
                darkMode
                  ? "bg-red-600 hover:bg-red-500"
                  : "bg-red-400 hover:bg-red-300"
              }`}
            >
              Sil
            </button>
          </div>
        </div>
      ))}

      <ReviewUpdateModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        comment={selectedComment}
        darkMode={darkMode}
      />
    </div>
  );
};

export default ReviewPanel;
