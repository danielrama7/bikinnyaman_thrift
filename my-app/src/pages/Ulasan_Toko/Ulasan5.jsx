import React from "react";
import product1 from "../../img/product1.jpg";
import { Rating } from "react-simple-star-rating";

function Ulasan5() {
  return (
    <div>
      <div>
        <h1 className="font-bold text-2xl mb-4">Ulasan Toko</h1>
      </div>
      <div className="flex mb-8">
        <div className="w-28 h-28 mr-6">
          <img src={product1} alt="" className="object-cover h-full w-full" />
        </div>
        <div className="grid grow">
          <div>
            <h1 className="font-bold text-xl">
              Sweater / Crewneck Pastel Mint Blue GAP
            </h1>
          </div>
          <div>
            <Rating size={23} initialValue={5} readonly={true} />
          </div>
          <div>
            <h1 className="text-xs text-gray-400 mb-2 mt-1  ">
              Putri, 22-07-2022 14.23
            </h1>
          </div>
          <div>
            <h1 className="font-bold">Produk sesuai</h1>
          </div>
          <div>
            <p className="text-sm">
              Pakaian nyaman dipakai, kualitas masih bagus dan oke banget
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ulasan5;
