import { Modal, Rate } from "antd";
import React, { useEffect, useState } from "react";

const ReviewUpdateModal = ({
  isModalOpen,
  setIsModalOpen,
  comment,
  darkMode,
}) => {
  const [editedComment, setEditedComment] = useState("");
  const [editedRating, setEditedRating] = useState(0);

  useEffect(() => {
    if (comment) {
      setEditedComment(comment.comment);
      setEditedRating(parseInt(comment.rating));
    }
  }, [comment]);

  const handleOk = () => {
    console.log("Kaydedilen Yorum:", editedComment);
    console.log("Yeni Puan:", editedRating);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      title="Yorumu Düzenle"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Kaydet"
      cancelText="İptal"
      okButtonProps={{
        className: darkMode ? "dark-btn" : "light-btn",
      }}
      cancelButtonProps={{
        className: darkMode ? "dark-btn" : "light-btn",
      }}
      className={darkMode ? "dark-modal" : "light-modal"}
      bodyStyle={{
        backgroundColor: darkMode ? "#1f2937" : "#fff",
        color: darkMode ? "#fff" : "#000",
      }}
    >
      {comment && (
        <div
          className={`flex flex-col gap-4 ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          <p>
            <strong>Tarih:</strong> {comment.date}
          </p>
          <div>
            <strong>Puan:</strong>
            <Rate
              allowHalf
              defaultValue={parseInt(comment.rating)}
              value={editedRating}
              onChange={(value) => setEditedRating(value)}
            />
          </div>
          <div>
            <strong>Yorum:</strong>
            <textarea
              value={editedComment}
              onChange={(e) => setEditedComment(e.target.value)}
              className={`w-full p-2 border rounded bg-transparent ${
                darkMode ? "text-white border-gray-500" : "text-black"
              }`}
            />
          </div>
        </div>
      )}
    </Modal>
  );
};

export default ReviewUpdateModal;
