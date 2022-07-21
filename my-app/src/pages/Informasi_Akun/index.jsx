import React from "react";
import { Link, Outlet } from "react-router-dom";
import product1 from "../../img/product1.jpg";

function Informasi_Akun() {
  return (
    <div className="bg-[#F6F6F6] pb-10">
      <div className="flex bg-white h-[304px] items-center justify-center">
        <img src={product1} alt="" className="object-cover h-full w-full" />
        <h1 className="text-5xl font-bold absolute text-white">Akun</h1>
      </div>
      <div className="mx-40 mt-12 p-3">
        <div className="flex">
          <div className="bg-white p-6 w-52 mr-6">
            <div className="mb-4">
              <Link to={"/informasiAkun"}>Informasi Akun</Link>
            </div>
            <div className="mb-4">
              <Link to={"/informasiAkun/riwayatPembelian"}>
                Riwayat Pembelian
              </Link>
            </div>
            <div>
              <Link to={"/informasiAkun/riwayatPemesanan"}>
                Riwayat Pemesanan
              </Link>
            </div>
          </div>
          <div className="flex bg-white p-6 w-5/6">
            <div className="w-full">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Informasi_Akun;
