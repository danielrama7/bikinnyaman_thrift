import React from "react";
import product1 from "../../img/product1.jpg";
import { Rating } from "react-simple-star-rating";

function Ulasan1() {
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
            <Rating size={23} initialValue={1} readonly={true} />
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
          <img src={product1} alt="" className="object-cover h-full w-full" />
        </div>
        <div className="grid grow">
          <div>
            <h1 className="font-bold text-xl">
              Sweater / Crewneck Pastel Mint Blue GAP
            </h1>
          </div>
          <div>
            <Rating size={23} initialValue={1} readonly={true} />
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
          <img src={product1} alt="" className="object-cover h-full w-full" />
        </div>
        <div className="grid grow">
          <div>
            <h1 className="font-bold text-xl">
              Sweater / Crewneck Pastel Mint Blue GAP
            </h1>
          </div>
          <div>
            <Rating size={23} initialValue={1} readonly={true} />
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
      <div className="flex items-center justify-center bg-white h-12">
        <div class="flex justify-center">
          <nav aria-label="Page navigation example">
            <ul class="flex list-style-none">
              <li class="page-item disabled">
                <a
                  class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-500 pointer-events-none focus:shadow-none"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Previous
                </a>
              </li>
              <li class="page-item">
                <a
                  class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                  href="#"
                >
                  1
                </a>
              </li>
              <li class="page-item active">
                <a
                  class="page-link relative block py-1.5 px-3 rounded border-0 bg-[#d0cba0] outline-none transition-all duration-300 rounded text-white hover:text-white shadow-md focus:shadow-md"
                  href="#"
                >
                  2 <span class="visually-hidden"></span>
                </a>
              </li>
              <li class="page-item">
                <a
                  class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                  href="#"
                >
                  3
                </a>
              </li>
              <li class="page-item">
                <a
                  class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                  href="#"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Ulasan1;
