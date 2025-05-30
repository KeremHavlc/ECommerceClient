import React from "react";

const UserInformation = ({ darkMode }) => {
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
        Kullanıcı Bilgilerim
      </div>

      <div
        className={`border w-[900px] mt-[40px] ml-[35px] rounded-lg p-6 flex flex-col gap-6
          ${
            darkMode
              ? "bg-gray-900 text-white border-gray-700"
              : "bg-white text-gray-900 border-gray-200"
          }
        `}
      >
        {/* Bilgi Formu */}
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="mb-1">İsim</label>
            <input
              type="text"
              defaultValue="Kerem"
              className={`p-2 rounded border ${
                darkMode
                  ? "bg-gray-800 border-gray-600 text-white"
                  : "bg-white border-gray-300"
              }`}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1">Soyisim</label>
            <input
              type="text"
              defaultValue="Havlucu"
              className={`p-2 rounded border ${
                darkMode
                  ? "bg-gray-800 border-gray-600 text-white"
                  : "bg-white border-gray-300"
              }`}
            />
          </div>

          <div className="flex flex-col col-span-2">
            <label className="mb-1">Email</label>
            <input
              type="email"
              defaultValue="kerem@example.com"
              className={`p-2 rounded border ${
                darkMode
                  ? "bg-gray-800 border-gray-600 text-white"
                  : "bg-white border-gray-300"
              }`}
            />
          </div>
        </div>

        {/* Şifre Güncelleme */}
        <div className="border-t pt-4">
          <h3 className="text-lg font-semibold mb-4">Şifre Güncelle</h3>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col col-span-2">
              <label className="mb-1">Eski Şifre</label>
              <input
                type="password"
                className={`p-2 rounded border ${
                  darkMode
                    ? "bg-gray-800 border-gray-600 text-white"
                    : "bg-white border-gray-300"
                }`}
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1">Yeni Şifre</label>
              <input
                type="password"
                className={`p-2 rounded border ${
                  darkMode
                    ? "bg-gray-800 border-gray-600 text-white"
                    : "bg-white border-gray-300"
                }`}
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1">Yeni Şifre (Tekrar)</label>
              <input
                type="password"
                className={`p-2 rounded border ${
                  darkMode
                    ? "bg-gray-800 border-gray-600 text-white"
                    : "bg-white border-gray-300"
                }`}
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            className={`px-6 py-2 rounded font-semibold shadow ${
              darkMode
                ? "bg-green-600 text-white hover:bg-green-700"
                : "bg-green-400 text-white hover:bg-green-500"
            }`}
          >
            Kaydet
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
