import React from "react";

function Cara_Pemesanan() {
  return (
    <div className="h-screen bg-indigo-50 justify-center pt-20 px-20">
      <h1 className="text-center text-5xl text-gray-800 font-bold">
        Cara Pemesanan
      </h1>
      <div class="w-full pl-20 pt-10 mt-6 text-xl">
        <ul>
          <li class="mb-5">
            <span class="text-2xl">Langkah - langkah:</span>
          </li>
          <li>1. Pertama cari produk yang akan dibeli</li>
          <li class="mt-2">2. Tambahkan produk ke keranjang belanja</li>
          <li class="mt-2">
            3. Setelah semua produk masuk ke keranjang belanja, tekan tombol
            lanjut ke pembayaran
          </li>
          <li class="mt-2">
            4. Cek dan isi informasi yang dibutuhkan dalam halaman detail
            pembelian (alamat, metode pengiriman,dan metode pembayaran)
          </li>
          <li class="mt-2">5. Masukkan voucher promo (jika ada)</li>
          <li class="mt-2">6. Total harga pesanan Anda</li>
          <li class="mt-2">
            7. Tekan tombol buat pemesanan untuk dibuatkan pesanan sesuai
            pembelian Anda
          </li>
          <li class="mt-2">
            8. Konfirmasi pembayaran di halaman riwayat pemesanan
          </li>
          <li class="mt-2">
            9. Jika pembayaran telah terselesaikan, status pada riwayat
            pemesanan akan berubah menjadi sudah bayar.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cara_Pemesanan;
