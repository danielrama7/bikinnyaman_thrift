import React from "react";
import product1 from "../../../../img/productPria/Jaket ATHLEISURE Putih Kain Despo L 85rb/product1.jpeg";
import product2 from "../../../../img/productPria/Kemeja Kotak Hitam Garis Putih Lengan Pendek Oversize M 80rb/product2.jpeg";
import product3 from "../../../../img/productPria/Sweater Simple But Significant Soft Colours M 105rb/product3.jpeg";
import { NavLink } from "react-router-dom";

function Semua_Product_Pria() {
  return (
    <div className="grid grid-cols-3 gap-7">
      <NavLink to="/productDetail7">
        <div className="bg-white hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-700 w-[272px] p-4 h-[360px]">
          <div className="h-64">
            <img src={product1} alt="" className="object-cover h-60 w-60" />
          </div>
          <div className="">
            <p>Jaket ATHLEISURE Putih Kain Despo</p>
          </div>
          <div className="flex justify-between ">
            <p className="font-bold">Rp. 85.000</p>
          </div>
        </div>
      </NavLink>
      <NavLink to="/productDetail8">
        <div className="bg-white hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-700 w-[272px] p-4 h-[360px]">
          <div className="h-64">
            <img src={product2} alt="" className="object-cover h-60 w-60" />
          </div>
          <div className="">
            <p>Kemeja Kotak Hitam Garis Putih Lengan Pendek Oversize </p>
          </div>
          <div className="flex justify-between ">
            <p className="font-bold">Rp. 85.000</p>
          </div>
        </div>
      </NavLink>
      <NavLink to="/productDetail9">
        <div className="bg-white hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-700 w-[272px] p-4 h-[360px]">
          <div className="h-64">
            <img src={product3} alt="" className="object-cover h-60 w-60" />
          </div>
          <div className="">
            <p>Sweater Simple But Significant Soft Colours </p>
          </div>
          <div className="flex justify-between ">
            <p className="font-bold">Rp. 105.000</p>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default Semua_Product_Pria;
