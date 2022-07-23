import React from "react";
import product1 from "../../img/product1.jpg";
import { NavLink } from "react-router-dom";

function Informasi_Pembelian() {
  return (
    <div className="bg-[#F6F6F6]">
      <div className="flex bg-white h-[304px] items-center justify-center">
        <img src={product1} alt="" className="object-cover h-full w-full" />
        <h1 className="text-5xl font-bold absolute text-white">
          Informasi Pembelian
        </h1>
      </div>
      <div className="mx-48 mt-12 p-3">
        <div className="bg-white p-10">
          <h1 className="font-bold mb-6 text-xl">Alamat</h1>
          <div className="flex items-center mb-6">
            <div className="w-1/6">
              <p>Nama Lengkap</p>
            </div>
            <div className="w-5/6 border-2 rounded p-1 ">
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="placeholder:text-slate-400 px-2"
              />
            </div>
          </div>
          <div className="flex items-center mb-6">
            <div className="w-1/6">
              <p>Alamat</p>
            </div>
            <div className="w-5/6 border-2 rounded p-1 ">
              <input
                type="text"
                placeholder="Alamat"
                className="placeholder:text-slate-400 px-2"
              />
            </div>
          </div>
          <div className="flex items-center mb-6">
            <div className="w-1/6">
              <p>Provinsi</p>
            </div>
            <div className="w-5/6 border-2 rounded p-1 ">
              <input
                type="text"
                placeholder="Provinsi"
                className="placeholder:text-slate-400 px-2"
              />
            </div>
          </div>
          <div className="flex items-center mb-6">
            <div className="w-1/6">
              <p>Kabupaten/Kota</p>
            </div>
            <div className="w-5/6 border-2 rounded p-1 ">
              <input
                type="text"
                placeholder="Kabupaten/Kota"
                className="placeholder:text-slate-400 px-2"
              />
            </div>
          </div>
          <div className="flex items-center mb-6">
            <div className="w-1/6">
              <p>Kecamatan</p>
            </div>
            <div className="w-5/6 border-2 rounded p-1 ">
              <input
                type="text"
                placeholder="Kecamatan"
                className="placeholder:text-slate-400 px-2"
              />
            </div>
          </div>
          <div className="flex items-center mb-6">
            <div className="w-1/6">
              <p>Kelurahan</p>
            </div>
            <div className="w-5/6 border-2 rounded p-1 ">
              <input
                type="text"
                placeholder="Kelurahan"
                className="placeholder:text-slate-400 px-2"
              />
            </div>
          </div>
          <div className="flex items-center mb-6">
            <div className="w-1/6">
              <p>Kode Pos</p>
            </div>
            <div className="w-5/6 border-2 rounded p-1 ">
              <input
                type="text"
                placeholder="Kode Pos"
                className="placeholder:text-slate-400 px-2"
              />
            </div>
          </div>
          <div className="flex items-center mb-6">
            <div className="w-1/6">
              <p>No. Telepon</p>
            </div>
            <div className="w-5/6 border-2 rounded p-1 ">
              <input
                type="text"
                placeholder="No. Telepon"
                className="placeholder:text-slate-400 px-2"
              />
            </div>
          </div>
          <h1 className="font-bold mb-2 text-xl">Metode Pengiriman</h1>
          <div className="my-2 flex items-center">
            <input
              type="radio"
              id="jne"
              name="pengiriman"
              className="mr-2 cursor-pointer w-4 h-4 "
            />
            <label htmlFor="jne" className="cursor-pointer">
              JNE
            </label>
          </div>
          <div className="my-2 flex items-center">
            <input
              type="radio"
              id="jnt"
              name="pengiriman"
              className="mr-2 cursor-pointer w-4 h-4 "
            />
            <label htmlFor="jnt" className="cursor-pointer">
              JNT
            </label>
          </div>
          <h1 className="font-bold my-2 text-xl">Metode Pembayaran</h1>
          <div className="my-2 flex items-center">
            <input
              type="radio"
              id="bni"
              name="pembayaran"
              className="mr-2 cursor-pointer w-4 h-4 "
            />
            <label htmlFor="bni" className="cursor-pointer">
              BNI Virtual Account
            </label>
          </div>
          <div className="my-2 flex items-center">
            <input
              type="radio"
              id="gopay"
              name="pembayaran"
              className="mr-2 cursor-pointer w-4 h-4 "
            />
            <label htmlFor="gopay" className="cursor-pointer">
              Gopay
            </label>
          </div>
          <NavLink to="/detailPembelian">
            <div className="flex ">
              <button className="bg-[#d0cba0] rounded text-white font-bold w-full mt-4 p-1">
                Simpan
              </button>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Informasi_Pembelian;
