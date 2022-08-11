import React from "react";
import product1 from "../../img/product1.jpg";
import product2 from "../../img/productWanita/Crewneck Hanes Herway Katun Abu-Abu (XL 65rb)/product4.jpg";
import product3 from "../../img/productWanita/Poliester Wol Kemeja Coklat (S 50rb)/product6.jpg";
import { Rating } from "react-simple-star-rating";

function Semua_Ulasan() {
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
      <div className="flex mb-8">
        <div className="w-28 h-28 mr-6">
          <img src={product2} alt="" className="object-cover h-full w-full" />
        </div>
        <div className="grid grow">
          <div>
            <h1 className="font-bold text-xl">
              Crewneck Hanes Herway Katun Abu-Abu
            </h1>
          </div>
          <div>
            <Rating size={23} initialValue={4} readonly={true} />
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
      <div className="flex mb-8">
        <div className="w-28 h-28 mr-6">
          <img src={product3} alt="" className="object-cover h-full w-full" />
        </div>
        <div className="grid grow">
          <div>
            <h1 className="font-bold text-xl">Poliester Wol Kemeja Coklat</h1>
          </div>
          <div>
            <Rating size={23} initialValue={3} readonly={true} />
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
      {/* Pagination */}
      <div className="flex items-center justify-center">
        <div className="flex justify-center">
          <ul className="flex ">
            <li>
              <a className="relative block py-1.5 px-3 border-0 bg-transparent transition-all duration-300 rounded text-gray-500 cursor-pointer">
                Previous
              </a>
            </li>
            <li>
              <a class="relative block py-1.5 px-3 bg-[#d0cba0] transition-all duration-300 rounded text-white hover:hover:bg-[#d0cba0] cursor-pointer">
                1
              </a>
            </li>
            <li>
              <a class="relative block py-1.5 px-3 bg-transparent transition-all duration-300 rounded text-gray-800 hover:bg-gray-200 cursor-pointer">
                Next
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Semua_Ulasan;
