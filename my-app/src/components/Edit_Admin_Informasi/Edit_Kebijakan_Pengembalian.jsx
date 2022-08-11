import React from "react";
import { NavLink } from "react-router-dom";

const dataKebijakanPengembalian =
  "Pengembalian produk dapat dilakukan dengan langsung menghubungi pihak kamu melalui WhatsApp kami.\n\nBeberapa ketentuan pengembalian produk:\n\n1. Periode pengembalian produk maksimal H+3 setelah barang sampai.\n2. Produk yang telah dicuci, dirubah, kondisi tidak sesuai saat pembelian (rusak/bernoda) tidak dapat dikembalikan.\n3. Jasa pengiriman pengembalian produk ditanggung oleh pembeli.\n4. Dana akan dikembalikan setelah produk sampai dan sudah dicek kondisinya oleh pihak kami.";

function Edit_Kebijakan_Pengembalian() {
  return (
    <div>
      <div className="text-2xl text-gray-600 mb-8">
        <h1>Edit Kebijakan Pengembalian</h1>
      </div>
      <div className="w-full bg-white rounded shadow-xl p-8">
        <form id="editKebijakanPengembalian">
          <div className="grid gap-y-4">
            <div className="w-full">
              <label className="text-sm font-bold text-gray-600 text-left">
                Isi Kebijakan Pengembalian
              </label>
              <textarea
                className="w-full px-3 py-2 text-gray-600 border rounded border-gray-200 mt-4"
                rows="10"
                defaultValue={dataKebijakanPengembalian}
                placeholder="{Masukkan kebijakan pengembalian}"
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

export default Edit_Kebijakan_Pengembalian;
