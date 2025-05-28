import React, { useState } from "react";
import ReviewUpdateModal from "./ReviewUpdateModal";

const comments = [
  {
    date: "25/05/2025",
    image: "https://picsum.photos/id/240/600/550",
    comment: "Harikaydı",
    rating: "4/5",
  },
  {
    date: "26/05/2025",
    image: "https://picsum.photos/id/240/600/550",
    comment: "İdare eder",
    rating: "3/5",
  },
  {
    date: "27/05/2025",
    image: "https://picsum.photos/id/240/600/550",
    comment: "Geliştirilmesi gerekir",
    rating: "2/5",
  },
  {
    date: "28/05/2025",
    image: "https://picsum.photos/id/240/600/550",
    comment: "Berbat",
    rating: "1/5",
  },
  {
    date: "29/05/2025",
    image: "https://picsum.photos/id/240/600/550",
    comment: "Muazzam , Tavsiye Ederim.",
    rating: "5/5",
  },
];

const ReviewPanel = ({ darkMode, setDarkMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedComment, setSelectedComment] = useState(null);
  const showModal = (comment) => {
    setIsModalOpen(true);
    setSelectedComment(comment);
  };
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

      {/* Kolon başlıkları */}
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
            <img
              src={comment.image}
              alt="product"
              className="w-[45px] h-[45px] rounded-md object-cover border border-gray-300"
            />
          </div>

          <div className="w-[350px] text-center">{comment.comment}</div>
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
