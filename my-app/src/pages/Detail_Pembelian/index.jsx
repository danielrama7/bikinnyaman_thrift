import React, { useState } from "react";
import product1 from "../../img/product1.jpg";
import iconUbah from "../../icon/ubah.png";
import { NavLink } from "react-router-dom";

function Detail_Pembelian() {
  return (
    <div className="bg-[#F6F6F6]">
      <div className="flex bg-white h-[304px] items-center justify-center">
        <img src={product1} alt="" className="object-cover h-full w-full" />
        <h1 className="text-5xl font-bold absolute text-white">
          Detail Pembelian
        </h1>
      </div>
      <div className="mx-48 py-12 p-3">
        <div className="bg-white p-10">
          {/* ALAMAT */}
          <div className="flex border-2 rounded items-center p-2 justify-between">
            <div className="mr-32">
              <h1 className="font-bold">Alamat</h1>
            </div>
            <NavLink to="/informasiPembelian">
              <div className="flex items-center">
                <div className="mr-1">
                  <img src={iconUbah} alt="" className="w-5" />
                </div>
                <h1 className="font-bold">Ubah</h1>
              </div>
            </NavLink>
          </div>
          <div className="text-sm p-2 mb-4">
            <h1>Putri</h1>
            <h1>Jalan Asep Berlian No.31</h1>
            <h1>
              Kelurahan Cicadas, Kecamatan Cibeunying Kidul, Kota Bandung, Jawa
              Barat, 40121, No. Telepon 081234567899
            </h1>
          </div>
          {/* Rincian Pesanan */}
          <div className="border-2 rounded items-center p-2 ">
            <div>
              <h1 className="font-bold">Rincian Pesanan</h1>
            </div>
          </div>
          {/* Produk 1 */}
          <div className="flex items-center justify-between p-2 py-3">
            <div className="flex w-24 justify-center">
              <img
                src={product1}
                alt=""
                className="object-cover h-full w-full"
              />
            </div>
            <div className="w-5/12 text-center">
              <h1 className="font-bold block">
                Sweater / Crewneck Pastel Mint Blue GAP
              </h1>
              <p className="text-sm">Warna: Biru</p>
              <p className="text-sm">Ukuran: Small</p>
            </div>
            <div className="flex justify-center w-2/12">
              <h1 className="font-bold">Rp. 100.000</h1>
            </div>
            <div className="flex justify-center w-1/12">
              <h1>1 buah</h1>
            </div>
            <div className="flex justify-end w-2/12">
              <h1 className="font-bold">Rp. 100.000</h1>
            </div>
          </div>
          <hr className="w-full border-[1px] px-2" />
          {/* Produk 2 */}
          <div className="flex items-center justify-between p-2 py-3">
            <div className="flex w-24 justify-center">
              <img
                src={product1}
                alt=""
                className="object-cover h-full w-full"
              />
            </div>
            <div className="w-5/12 text-center">
              <h1 className="font-bold block">
                Sweater / Crewneck Pastel Mint Blue GAP
              </h1>
              <p className="text-sm">Warna: Biru</p>
              <p className="text-sm">Ukuran: Small</p>
            </div>
            <div className="flex justify-center w-2/12">
              <h1 className="font-bold">Rp. 100.000</h1>
            </div>
            <div className="flex justify-center w-1/12">
              <h1>1 buah</h1>
            </div>
            <div className="flex justify-end w-2/12">
              <h1 className="font-bold">Rp. 100.000</h1>
            </div>
          </div>
          {/* Metode Pengiriman */}
          <div className="flex border-2 rounded items-center p-2 mt-4 justify-between">
            <div className="mr-32">
              <h1 className="font-bold">Metode Pengiriman</h1>
            </div>
            <NavLink to="/informasiPembelian">
              <div className="flex items-center">
                <div className="mr-1">
                  <img src={iconUbah} alt="" className="w-5" />
                </div>
                <h1 className="font-bold">Ubah</h1>
              </div>
            </NavLink>
          </div>
          <div className="flex p-2 mb-4 justify-between">
            <div>
              <h1>JNT</h1>
            </div>
            <div>
              <h1 className="font-bold">RP. 10.000</h1>
            </div>
          </div>
          {/* Metode Pembayaran */}
          <div className="flex border-2 rounded items-center p-2 mt-4 justify-between">
            <div className="mr-32">
              <h1 className="font-bold">Metode Pembayaran</h1>
            </div>
            <NavLink to="/informasiPembelian">
              <div className="flex items-center">
                <div className="mr-1">
                  <img src={iconUbah} alt="" className="w-5" />
                </div>
                <h1 className="font-bold">Ubah</h1>
              </div>
            </NavLink>
          </div>
          <div className="p-2 mb-4">
            <div>
              <h1>BNI Virtual Account</h1>
            </div>
          </div>
          {/* Rincian Pembayaran */}
          <div className="border-2 rounded items-center p-2 mt-4">
            <div className="mr-32">
              <h1 className="font-bold">Rincian Pembayaran</h1>
            </div>
          </div>
          <div className="flex p-2 justify-between">
            <div>
              <h1>Subtotal untuk Produk</h1>
            </div>
            <div>
              <h1 className="font-bold">RP. 200.000</h1>
            </div>
          </div>
          <div className="flex px-2 mb-4 justify-between">
            <div>
              <h1>Subtotal untuk Pengiriman</h1>
            </div>
            <div>
              <h1 className="font-bold">RP. 10.000</h1>
            </div>
          </div>
          <hr className="w-full border-[1px] px-2" />
          <div className="flex p-2 mb-4 justify-between">
            <div>
              <h1>Total</h1>
            </div>
            <div>
              <h1 className="font-bold">RP. 210.000</h1>
            </div>
          </div>
          <hr className="w-full border-[1px] px-2" />
          {/* Voucher */}
          <div className="p-2">
            <div className="flex items-center">
              <div className="mr-28">
                <h1 className="font-bold">Voucher</h1>
              </div>
              <div className="w-1/2 mr-2    ">
                <input
                  type="text"
                  placeholder="Kode Voucher"
                  className="border-2 rounded p-1 px-2 w-full"
                />
              </div>
              <div>
                <button className="bg-[#d0cba0] font-bold rounded border-2 border-transparent w-20 p-1 px-2 text-white">
                  Pakai
                </button>
              </div>
            </div>
          </div>
          {/* Potongan */}
          <div className="p-2">
            <div className="flex w-full justify-between">
              <div>
                <h1>Potongan</h1>
              </div>
              <div className="font-bold">
                <h1>-Rp. 0</h1>
              </div>
            </div>
          </div>
          {/* Total */}
          <div className="flex border-2 rounded items-center p-2 my-4 justify-between text-xl">
            <div className="mr-32">
              <h1 className="font-bold">Total</h1>
            </div>
            <div>
              <h1 className="font-bold">Rp. 210.000</h1>
            </div>
          </div>
          {/* button buat pesanan */}
          <div>
            <NavLink to="/informasiAkun/riwayatPemesanan">
              <button className="bg-[#d0cba0] font-white rounded w-full p-1 text-white font-bold">
                Buat Pesanan
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail_Pembelian;
