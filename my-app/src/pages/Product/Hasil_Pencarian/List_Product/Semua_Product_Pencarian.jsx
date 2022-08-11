import React from "react";
import product1 from "../../../../img/productPria/Sweater Simple But Significant Soft Colours M 105rb/product3.jpeg";
import product2 from "../../../../img/product1.jpg";
import product3 from "../../../../img/productWanita/Fleece Sweater Biru (XL 90rb)/product5.jpg";
import { NavLink } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

function Semua_Product_Pencarian() {
  const { p1, p2 } = useOutletContext();
  console.log(p1);
  return (
    <div className="grid grid-cols-3 gap-7">
      {p1 ? (
        <NavLink to="/productDetail9">
          <div className="bg-white hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-700 w-[272px] p-4 h-[360px]">
            <div className="h-64">
              <img src={product1} alt="" className="object-cover h-60 w-60" />
            </div>
            <div className="">
              <p>Sweater Simple But Significant Soft Colours </p>
            </div>
            <div className="flex justify-between ">
              <p className="font-bold">Rp. 105000</p>
            </div>
          </div>
        </NavLink>
      ) : null}
      {p2 ? (
        <NavLink to="/productDetail1">
          <div className="bg-white hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-700 w-[272px] p-4 h-[360px]">
            <div className="h-64">
              <img src={product2} alt="" className="object-cover h-60" />
            </div>
            <div className="">
              <p>Sweater / Crewneck Pastel Mint Blue GAP</p>
            </div>
            <div className="flex justify-between ">
              <p className="font-bold">Rp. 65000</p>
            </div>
          </div>
        </NavLink>
      ) : null}
      {p2 ? (
        <NavLink to="/productDetail5">
          <div className="bg-white hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-700 w-[272px] p-4 h-[360px]">
            <div className="h-64">
              <img src={product3} alt="" className="object-cover h-60" />
            </div>
            <div className="">
              <p>Fleece Sweater Biru</p>
            </div>
            <div className="flex justify-between ">
              <p className="font-bold">Rp. 90000</p>
            </div>
          </div>
        </NavLink>
      ) : null}
    </div>
  );
}

export default Semua_Product_Pencarian;
