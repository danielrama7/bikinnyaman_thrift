import React from "react";
import { Link, Outlet } from "react-router-dom";

function Ubah_Informasi_Akun() {
  return (
    <div>
      <div className="flex justify-center mb-6">
        <h1 className="font-bold text-3xl">Ubah Informasi Akun</h1>
      </div>
      <div className="flex mb-4 items-center">
        <div className="w-1/4">Nama Lengkap</div>
        <div className="w-3/4">
          <input
            type="text"
            placeholder="Nama Lengkap"
            className="border p-1 px-2 w-full rounded"
          />
        </div>
      </div>
      <div className="flex mb-4 items-center">
        <div className="w-1/4">Alamat</div>
        <div className="w-3/4">
          <input
            type="text"
            placeholder="Alamat"
            className="border p-1 px-2 w-full rounded"
          />
        </div>
      </div>
      <div className="flex mb-4 items-center">
        <div className="w-1/4">Provinsi</div>
        <div className="w-3/4">
          {/* <select
            name="provinsi"
            id="provinsi"
            placeholder="Provinsi"
            className="border p-1 px-2 w-full rounded"
          >
            <option value="jawa barat">Jawa Barat</option>
            <option value="jawa tengah">Jawa Tengah</option>
          </select> */}
          <input
            type="text"
            placeholder="Provinsi"
            className="border p-1 px-2 w-full rounded"
          />
        </div>
      </div>
      <div className="flex mb-4 items-center">
        <div className="w-1/4">Kabupaten/Kota</div>
        <div className="w-3/4">
          <input
            type="text"
            placeholder="Kabupaten/Kota"
            className="border p-1 px-2 w-full rounded"
          />
        </div>
      </div>
      <div className="flex mb-4 items-center">
        <div className="w-1/4">Kecamatan</div>
        <div className="w-3/4">
          <input
            type="text"
            placeholder="Kecamatan"
            className="border p-1 px-2 w-full rounded"
          />
        </div>
      </div>
      <div className="flex mb-4 items-center">
        <div className="w-1/4">Kelurahan</div>
        <div className="w-3/4">
          <input
            type="text"
            placeholder="Kelurahan"
            className="border p-1 px-2 w-full rounded"
          />
        </div>
      </div>
      <div className="flex mb-4 items-center">
        <div className="w-1/4">Kode Pos</div>
        <div className="w-3/4">
          <input
            type="text"
            placeholder="Kode Pos"
            className="border p-1 px-2 w-full rounded"
          />
        </div>
      </div>
      <div className="flex mb-4 items-center">
        <div className="w-1/4">No. Telepon</div>
        <div className="w-3/4">
          <input
            type="text"
            placeholder="No. Telepon"
            className="border p-1 px-2 w-full rounded"
          />
        </div>
      </div>
      <div>
        <Link to={"/informasiAkun"}>
          <div className="flex justify-end">
            <button className="w-3/4 bg-[#d0cba0] border-transparent rounded p-1 text-white font-bold">
              Simpan
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Ubah_Informasi_Akun;
