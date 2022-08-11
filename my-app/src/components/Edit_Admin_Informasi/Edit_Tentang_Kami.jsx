import React from "react";
import { NavLink } from "react-router-dom";

const dataTentangKami =
  "Bikinnyaman_thrift adalah e-commerce yang menjual berbagai jenis pakaian second hand layak pakai yang akan membuat penampilan para wanita dan pria lebih bergaya. \n\nProduk-produk yang kami tawarkan tentunya mempertimbangkan kebutuhan dari wanita dan pria mengikuti fashion terkini. Serta ditawarkan dengan harga yang terjangkau. \n\nDaftarkan email anda sekarang dan follow media sosial Bikinnyamam_thrift untuk menjadi yang pertama mendapatkan info mengenai produk terbaru dan promo lainnya.";

function Edit_Tentang_Kami() {
  return (
    <div>
      <div className="text-2xl text-gray-600 mb-8">
        <h1>Edit Tentang Kami</h1>
      </div>
      <div className="w-full bg-white rounded shadow-xl p-8">
        <form id="editTentangKami">
          <div className="grid gap-y-4">
            <div className="w-full">
              <label className="text-sm font-bold text-gray-600 text-left">
                Isi Tentang Kami
              </label>
              <textarea
                className="w-full px-3 py-2 text-gray-600 border rounded border-gray-200 mt-4"
                rows="10"
                defaultValue={dataTentangKami}
                placeholder="{Masukkan tentang kami}"
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

export default Edit_Tentang_Kami;
