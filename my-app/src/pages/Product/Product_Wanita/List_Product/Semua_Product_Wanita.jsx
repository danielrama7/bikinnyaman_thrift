import React from "react";
import product1 from "../../../../img/product1.jpg";
import product2 from "../../../../img/productWanita/Poliester Jaket Krem Sogetto (L)/product2.jpg";
import product3 from "../../../../img/productWanita/Poliester Kyuck Goo Jaket Putih (L)/product3.jpg";
import product4 from "../../../../img/productWanita/Crewneck Hanes Herway Katun Abu-Abu (XL 65rb)/product4.jpg";
import product5 from "../../../../img/productWanita/Fleece Sweater Biru (XL 90rb)/product5.jpg";
import product6 from "../../../../img/productWanita/Poliester Wol Kemeja Coklat (S 50rb)/product6.jpg";
import { NavLink } from "react-router-dom";

function Semua_Product_Wanita() {
  return (
    <div className="grid grid-cols-3 gap-7">
      <NavLink to="/productDetail">
        <div className="bg-white hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-700 w-[272px] p-4 h-[360px]">
          <div className="h-64">
            <img src={product1} alt="" className="object-cover h-60" />
          </div>
          <div className="">
            <p>Sweater / Crewneck Pastel Mint Blue GAP</p>
          </div>
          <div className="flex justify-between ">
            <p className="font-bold">Rp. 65.000</p>
          </div>
        </div>
      </NavLink>
      <NavLink to="/productDetail2">
        <div className="bg-white hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-700 w-[272px] p-4 h-[360px]">
          <div className="h-64">
            <img src={product2} alt="" className="object-cover h-60" />
          </div>
          <div className="">
            <p>Poliester Jaket Krem Sogetto </p>
          </div>
          <div className="flex justify-between ">
            <p className="font-bold">Rp. 100.000</p>
          </div>
        </div>
      </NavLink>
      <NavLink to="/productDetail3">
        <div className="bg-white hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-700 w-[272px] p-4 h-[360px]">
          <div className="h-64">
            <img src={product3} alt="" className="object-cover h-60" />
          </div>
          <div className="">
            <p>Poliester Kyuck Goo Jaket Putih </p>
          </div>
          <div className="flex justify-between ">
            <p className="font-bold">Rp. 100.000</p>
          </div>
        </div>
      </NavLink>
      <NavLink to="/productDetail4">
        <div className="bg-white hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-700 w-[272px] p-4 h-[360px]">
          <div className="h-64">
            <img src={product4} alt="" className="object-cover h-60" />
          </div>
          <div className="">
            <p>Crewneck Hanes Herway Katun Abu-Abu</p>
          </div>
          <div className="flex justify-between ">
            <p className="font-bold">Rp. 65.000</p>
          </div>
        </div>
      </NavLink>
      <NavLink to="/productDetail5">
        <div className="bg-white hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-700 w-[272px] p-4 h-[360px]">
          <div className="h-64">
            <img src={product5} alt="" className="object-cover h-60" />
          </div>
          <div className="">
            <p>Fleece Sweater Biru</p>
          </div>
          <div className="flex justify-between ">
            <p className="font-bold">Rp. 90.000</p>
          </div>
        </div>
      </NavLink>
      <NavLink to="/productDetail6">
        <div className="bg-white hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-700 w-[272px] p-4 h-[360px]">
          <div className="h-64">
            <img src={product6} alt="" className="object-cover h-60" />
          </div>
          <div className="">
            <p>Poliester Wol Kemeja Coklat</p>
          </div>
          <div className="flex justify-between ">
            <p className="font-bold">Rp. 50.000</p>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default Semua_Product_Wanita;
