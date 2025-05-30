import React from "react";

const dummyAddresses = [
  {
    id: 1,
    title: "Ev",
    city: "İstanbul",
    district: "Kadıköy",
    street: "Bağdat Caddesi",
    postalCode: "34728",
    createdAt: "2024-01-01",
  },
  {
    id: 2,
    title: "İş",
    city: "Ankara",
    district: "Çankaya",
    street: "Atatürk Bulvarı",
    postalCode: "06510",
    createdAt: "2024-03-15",
  },
];

const AddressesList = ({ darkMode }) => {
  const handleDelete = (id) => {
    alert(`Adres ID ${id} silinecek (örnek).`);
    // Buraya silme işlemi için API isteği yazabilirsin
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
        Adres Bilgilerim
      </div>

      <div
        className={`border w-[900px] mt-[30px] ml-[35px] rounded-lg overflow-x-auto
          ${
            darkMode
              ? "bg-gray-900 text-white border-gray-700"
              : "bg-white text-gray-900 border-gray-200"
          }
        `}
      >
        <table className="w-full text-sm">
          <thead>
            <tr
              className={`text-left ${
                darkMode ? "bg-gray-800 " : "bg-gray-100"
              }`}
            >
              <th className="p-3 border">Başlık</th>
              <th className="p-3 border">Şehir</th>
              <th className="p-3 border">İlçe</th>
              <th className="p-3 border">Sokak</th>
              <th className="p-3 border">Posta Kodu</th>
              <th className="p-3 border">Oluşturulma</th>
              <th className="p-3 border">İşlem</th>
            </tr>
          </thead>
          <tbody>
            {dummyAddresses.map((address) => (
              <tr
                key={address.id}
                className={`${
                  darkMode ? "hover:bg-gray-800" : "hover:bg-gray-50"
                }`}
              >
                <td className="p-3 border">{address.title}</td>
                <td className="p-3 border">{address.city}</td>
                <td className="p-3 border">{address.district}</td>
                <td className="p-3 border">{address.street}</td>
                <td className="p-3 border">{address.postalCode}</td>
                <td className="p-3 border">{address.createdAt}</td>
                <td className="p-3 border">
                  <button
                    onClick={() => handleDelete(address.id)}
                    className={`px-3 py-1 rounded text-white font-medium ${
                      darkMode
                        ? "bg-red-600 hover:bg-red-700"
                        : "bg-red-500 hover:bg-red-600"
                    }`}
                  >
                    Sil
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddressesList;
