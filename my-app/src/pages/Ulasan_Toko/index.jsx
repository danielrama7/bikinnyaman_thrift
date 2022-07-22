import React from "react";
import { Link, Outlet } from "react-router-dom";
import product1 from "../../img/product1.jpg";

function Ulasan_Toko() {
  return (
    <div className="bg-[#F6F6F6] pb-10">
      <div className="flex bg-white h-[304px] items-center justify-center">
        <img src={product1} alt="" className="object-cover h-full w-full" />
        <h1 className="text-5xl font-bold absolute text-white">Ulasan Toko</h1>
      </div>
      <div className="mx-52 mt-12 p-3">
        <div className="flex">
          <div className="bg-white w-52 h-fit mr-6 rounded text-sm">
            <div>
              <Link to={"/ulasanToko"}>
                <button className="w-full p-2 hover:bg-[#d0cba0] duration-500">
                  Semua
                </button>
              </Link>
            </div>
            <div>
              <Link to={"/ulasanToko/ulasan5"}>
                <button className="w-full p-2 hover:bg-[#d0cba0]  duration-500">
                  5 Bintang (3)
                </button>
              </Link>
            </div>
            <div>
              <Link to={"/ulasanToko/ulasan4"}>
                <button className="w-full p-2 hover:bg-[#d0cba0]  duration-500">
                  4 Bintang (3)
                </button>
              </Link>
            </div>
            <div>
              <Link to={"/ulasanToko/ulasan3"}>
                <button className="w-full p-2 hover:bg-[#d0cba0]  duration-500">
                  3 Bintang (3)
                </button>
              </Link>
            </div>
            <div>
              <Link to={"/ulasanToko/ulasan2"}>
                <button className="w-full p-2 hover:bg-[#d0cba0]  duration-500">
                  2 Bintang (3)
                </button>{" "}
              </Link>
            </div>
            <div>
              <Link to={"/ulasanToko/ulasan1"}>
                <button className="w-full p-2 hover:bg-[#d0cba0]  duration-500">
                  1 Bintang (3)
                </button>
              </Link>
            </div>
          </div>
          <div className="flex bg-white p-6 px-8 w-5/6 rounded">
            <div className="w-full">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ulasan_Toko;
