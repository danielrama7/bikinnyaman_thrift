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
          <div className="bg-white w-52 h-fit mr-6">
            <div>
              <Link to={"/informasiAkun"}>
                <button className="w-full p-2 pl-4 hover:bg-[#d0cba0] duration-500 text-left">
                  Informasi Akun
                </button>
              </Link>
            </div>
            <div>
              <Link to={"/informasiAkun/riwayatPembelian"}>
                <button className="w-full p-2 pl-4 hover:bg-[#d0cba0] duration-500 text-left">
                  Riwayat Pembelian
                </button>
              </Link>
            </div>
            <div>
              <Link to={"/informasiAkun/riwayatPemesanan"}>
                <button className="w-full p-2 pl-4 hover:bg-[#d0cba0] duration-500 text-left">
                  Riwayat Pemesanan
                </button>
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
