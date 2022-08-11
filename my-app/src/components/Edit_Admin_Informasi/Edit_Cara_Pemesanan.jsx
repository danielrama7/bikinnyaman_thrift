import React from "react";
import { NavLink } from "react-router-dom";

const dataCaraPemesanan =
  "Langkah - langkah:\n\n1. Pertama cari produk yang akan dibeli\n2. Tambahkan produk ke keranjang belanja\n3. Setelah semua produk masuk ke keranjang belanja, tekan tombol checkout\n4. Cek dan isi informasi yang dibutuhkan dalam halaman detail pembelian (alamat, metode pengiriman,dan metode pembayaran)\n5. Masukkan voucher promo (jika ada)\n6. Total harga pesanan Anda\n7. Tekan tombol buat pemesanan untuk dibuatkan pesanan sesuai pembelian Anda\n8. Konfirmasi pembayaran di halaman riwayat pemesanan\n9. Jika pembayaran telah terselesaikan, status pada riwayat pemesanan akan berubah menjadi sudah bayar.";

function Edit_Cara_Pemesanan() {
  return (
    <div>
      <div className="text-2xl text-gray-600 mb-8">
        <h1>Edit Cara Pemesanan</h1>
      </div>
      <div className="w-full bg-white rounded shadow-xl p-8">
        <form id="editCaraPemesan">
          <div className="grid gap-y-4">
            <div className="w-full">
              <label className="text-sm font-bold text-gray-600 text-left">
                Isi Cara Pemesanan
              </label>
              <textarea
                className="w-full px-3 py-2 text-gray-600 border rounded border-gray-200 mt-4"
                rows="10"
                defaultValue={dataCaraPemesanan}
                placeholder="{Masukkan cara pemesanan}"
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

export default Edit_Cara_Pemesanan;
