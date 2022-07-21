import React from "react";
import product1 from "../../img/product1.jpg";

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
            <div className="w-5/6 border border-4 ">
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
            <div className="w-5/6 border border-4 ">
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
            <div className="w-5/6 border border-4 ">
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
            <div className="w-5/6 border border-4 ">
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
            <div className="w-5/6 border border-4 ">
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
            <div className="w-5/6 border border-4 ">
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
            <div className="w-5/6 border border-4 ">
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
            <div className="w-5/6 border border-4 ">
              <input
                type="text"
                placeholder="No. Telepon"
                className="placeholder:text-slate-400 px-2"
              />
            </div>
          </div>
          <h1 className="font-bold mb-4 text-xl">Metode Pengiriman</h1>
          <p>
            <input type={"radio"} name="pengeriman"></input>JNE
          </p>
          <p>
            <input type={"radio"} name="pengeriman"></input>JNT
          </p>
          <h1 className="font-bold mb-4 text-xl">Metode Pembayaran</h1>
          <p>
            <input type={"radio"} name="pembayaran"></input>BNI Virtual Account
          </p>
          <p>
            <input type={"radio"} name="pembayaran"></input>Gopay
          </p>
          <div className="flex ">
            <button className="bg-[#F6F6F6] w-full mt-4 p-1">Simpan</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Informasi_Pembelian;
