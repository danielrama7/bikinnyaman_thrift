import React from "react";
import product1 from "../../img/product1.jpg";
import tentangKami from "../../img/tentangKami.jpg";

function Cara_Pemesanan() {
  return (
    <div className="bg-[#F6F6F6]">
      <div className="flex bg-white h-[304px] items-center justify-center">
        <img src={product1} alt="" className="object-cover h-full w-full" />
        <h1 className="text-5xl font-bold absolute text-white">
          Cara Pemesanan
        </h1>
      </div>
      <div className="mx-28 py-16 p-3">
        <div className="relative flex bg-white p-10 w-full h-[480px] items-center">
          <div className="w-full h-fit">
            <h1 className="text-left text-3xl font-bold">CARA PEMESANAN</h1>
            <div class="w-full mt-6 text-md">
              <ul>
                <li class="mb-5">
                  <span>Langkah - langkah:</span>
                </li>
                <li>1. Pertama cari produk yang akan dibeli</li>
                <li class="mt-2">2. Tambahkan produk ke keranjang belanja</li>
                <li class="mt-2">
                  3. Setelah semua produk masuk ke keranjang belanja, tekan
                  tombol checkout
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
        </div>
      </div>
    </div>
  );
}

export default Cara_Pemesanan;
