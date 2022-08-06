import React from "react";

function Detail_Pesanan_Admin() {
  return (
    <div>
      <div className="text-2xl text-gray-600 mb-8">
        <h1>Detail Pesanan</h1>
      </div>
      <div className="w-full bg-white rounded shadow-xl p-8">
        <div className="grid gap-y-4 text-gray-600">
          <div className="flex">
            <div className="w-1/4">Nama Pembeli</div>
            <div className="w-3/4">Putra</div>
          </div>
          <div className="flex">
            <div className="w-1/4">Email Pembeli </div>
            <div className="w-3/4">putra@gmail.com</div>
          </div>
          <div className="flex">
            <div className="w-1/4">Alamat Pembeli</div>
            <div className="w-3/4">
              Jalan Sukawening. 31, Hegarmanah, Jatinangor, Sumedang, jawa
              barat, 45363
            </div>
          </div>
          <div className="flex">
            <div className="w-1/4">No. Telepon</div>
            <div className="w-3/4">082210204009</div>
          </div>
          <div className="flex">
            <div className="w-1/4">Rincian Pesanan</div>
            <div className="w-3/4">
              Poliester Kyuck Goo Jaket Putih, warna Putih, ukuran L, 1x
            </div>
          </div>
          <div className="flex">
            <div className="w-1/4">Metode Pengiriman</div>
            <div className="w-3/4">JNT</div>
          </div>
          <div className="flex">
            <div className="w-1/4">Metode Pembayaran</div>
            <div className="w-3/4">BNI Virtual Account </div>
          </div>
          <div className="flex">
            <div className="w-1/4">Total</div>
            <div className="w-3/4">Rp. 75000</div>
          </div>
          <div className="flex">
            <div className="w-1/4">Status</div>
            <div className="w-3/4">Diproses</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail_Pesanan_Admin;
