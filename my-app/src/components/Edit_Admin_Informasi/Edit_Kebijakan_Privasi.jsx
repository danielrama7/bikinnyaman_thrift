import React from "react";
import { NavLink } from "react-router-dom";

const dataKebijakanPrivasi =
  "Kami sungguh menghormati privasi Anda sebagaimana dijelaskan dalam syarat dan ketentuan. Segala informasi yang kami butuhkan diperuntukkan untuk menjalankan layanan kepada Anda dengan sebaik-baiknya.\n\nUntuk mendapatkan layanan, Anda mungkin diminta untuk membuat akun serta password untuk akun Anda. Kami sangat berharap Anda dapat menjaga kerahasiaan password setiap saat. Kami tidak bertanggung jawab atas kerugian atau kerusakan yang timbul dari hilangnya password.\n\nInformasi yang telah diserahkan kepada kami akan dijaga sebagaimana mestinya. Tindakan Anda yang membuat privasi Anda terbuka untuk umum adalah tanggung jawab Anda.";

function Edit_Kebijakan_Privasi() {
  return (
    <div>
      <div className="text-2xl text-gray-600 mb-8">
        <h1>Edit Kebijakan Privasi</h1>
      </div>
      <div className="w-full bg-white rounded shadow-xl p-8">
        <form id="editKebijakanPrivasi">
          <div className="grid gap-y-4">
            <div className="w-full">
              <label className="text-sm font-bold text-gray-600 text-left">
                Isi Kebijakan Privasi
              </label>
              <textarea
                className="w-full px-3 py-2 text-gray-600 border rounded border-gray-200 mt-4"
                rows="10"
                defaultValue={dataKebijakanPrivasi}
                placeholder="{Masukkan kebijakan privasi}"
              ></textarea>
            </div>
            <div>
              <NavLink to={"/admin/informasi"}>
                <button className="rounded w-full text-white font-bold bg-[#d0cba0] p-2">
                  Simpan
                </button>
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit_Kebijakan_Privasi;
