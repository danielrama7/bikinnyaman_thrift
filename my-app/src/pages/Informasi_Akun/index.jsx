import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import product1 from "../../img/product1.jpg";

function Informasi_Akun() {
  const [buttonStyle, setButtonStyle] = useState("");
  const [buttonStyle1, setButtonStyle1] = useState("");
  const [buttonStyle2, setButtonStyle2] = useState("");

  const handlerButtonStyle = () => {
    setButtonStyle(" bg-[#d0cba0] font-bold text-white");
    setButtonStyle1("");
    setButtonStyle2("");
  };
  const handlerButtonStyle1 = () => {
    setButtonStyle("");
    setButtonStyle1(" bg-[#d0cba0] font-bold text-white");
    setButtonStyle2("");
  };
  const handlerButtonStyle2 = () => {
    setButtonStyle("");
    setButtonStyle1("");
    setButtonStyle2(" bg-[#d0cba0] font-bold text-white");
  };

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
                <button
                  onClick={handlerButtonStyle}
                  className={
                    "w-full p-2 pl-4 hover:bg-[#d0cba0] duration-500 text-left hover:font-bold hover:text-white" +
                    buttonStyle
                  }
                >
                  Informasi Akun
                </button>
              </Link>
            </div>
            <div>
              <Link to={"/informasiAkun/riwayatPembelian"}>
                <button
                  onClick={handlerButtonStyle1}
                  className={
                    "w-full p-2 pl-4 hover:bg-[#d0cba0] duration-500 text-left hover:font-bold hover:text-white" +
                    buttonStyle1
                  }
                >
                  Riwayat Pembelian
                </button>
              </Link>
            </div>
            <div>
              <Link to={"/informasiAkun/riwayatPemesanan"}>
                <button
                  onClick={handlerButtonStyle2}
                  className={
                    "w-full p-2 pl-4 hover:bg-[#d0cba0] duration-500 text-left hover:font-bold hover:text-white" +
                    buttonStyle2
                  }
                >
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
