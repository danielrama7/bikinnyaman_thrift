import React from "react";
import { Link } from "react-router-dom";

function Informasi_Akun1() {
  return (
    <div>
      <div className="flex justify-center mb-6">
        <h1 className="font-bold text-3xl">Informasi Akun</h1>
      </div>
      <div className="flex mb-4">
        <div className="w-1/4">Nama Lengkap</div>
        <div className="w-3/4">Putri</div>
      </div>
      <div className="flex mb-4">
        <div className="w-1/4">Email</div>
        <div className="w-3/4">Putri@gmail.com</div>
      </div>
      <div className="flex mb-4">
        <div className="w-1/4">Alamat</div>
        <div className="w-3/4">
          Jl. Asep Berlian No.31 Kelurahan Cicadas, Kecamatan Cibeunying Kidul,
          Kota Bandung, Jawa Barat, 40121
        </div>
      </div>
      <div className="flex mb-6">
        <div className="w-1/4">No. Telepon</div>
        <div className="w-3/4">081313283176</div>
      </div>
      <div>
        <Link to={"/informasiAkun/edit"}>
          <div className="flex justify-end">
            <button className="w-3/4 bg-[#d0cba0] border-transparent rounded p-1 font-bold text-white">
              Ubah
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Informasi_Akun1;
