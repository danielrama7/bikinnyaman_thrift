import React from "react";
import product1 from "../../../img/product1.jpg";
import Dropdown from "./dropdown";
import { NavLink } from "react-router-dom";

function Product_Pria() {
  return (
    <div className="bg-[#F6F6F6]">
      <div className="flex bg-white h-[304px] items-center justify-center">
        <img src={product1} alt="" className="object-cover h-full w-full" />
        <h1 className="text-5xl font-bold absolute text-white">Produk Kami</h1>
      </div>
      <div className="mx-20 mt-12 p-3">
        <div className="flex space-x-7">
          <div className="w-[270px]">
            <div className="flex items-center h-12 font-bold text-3xl mb-7">
              PAKAIAN PRIA
            </div>
            <div className="bg-white h-[216px] mb-7 px-5">
              <div className="flex items-center bg-white h-12 font-bold">
                KATEGORI
              </div>
              <hr />
            </div>
            <div className="bg-white h-[216px] mb-7 px-5">
              <div className="flex items-center h-12 font-bold">WARNA</div>
              <hr />
            </div>
            <div className="bg-white h-[216px] px-5">
              <div className="flex items-center h-12 font-bold">UKURAN</div>
              <hr />
            </div>
          </div>
          <div className="w-[872px]">
            <div className="flex justify-end items-center h-12 mb-7">
              <Dropdown color="blue" />
            </div>
            <div className="grid grid-cols-3 gap-7">
              <NavLink to="/productDetail">
                <div className="bg-white hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-500 w-[272px] p-4 rounded">
                  <div className="h-64">
                    <img src={product1} alt="" className="object-cover" />
                  </div>
                  <div className="">
                    <p>Sweater Illinois</p>
                  </div>
                  <div className="flex justify-between ">
                    <p className="font-bold">Rp. 50.000</p>
                  </div>
                </div>
              </NavLink>
              <div className="bg-white hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-500 w-[272px] p-4 rounded">
                <div className="h-64">
                  <img src={product1} alt="" className="object-cover" />
                </div>
                <div className="">
                  <p>Sweater Illinois</p>
                </div>
                <div className="flex justify-between ">
                  <p className="font-bold">Rp. 50.000</p>
                </div>
              </div>
              <div className="bg-white hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-500 w-[272px] p-4 rounded">
                <div className="h-64">
                  <img src={product1} alt="" className="object-cover" />
                </div>
                <div className="">
                  <p>Sweater Illinois</p>
                </div>
                <div className="flex justify-between ">
                  <p className="font-bold">Rp. 50.000</p>
                </div>
              </div>
              <div className="bg-white hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-500 w-[272px] p-4 rounded">
                <div className="h-64">
                  <img src={product1} alt="" className="object-cover" />
                </div>
                <div className="">
                  <p>Sweater Illinois</p>
                </div>
                <div className="flex justify-between ">
                  <p className="font-bold">Rp. 50.000</p>
                </div>
              </div>
              <div className="bg-white hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-500 w-[272px] p-4 rounded">
                <div className="h-64">
                  <img src={product1} alt="" className="object-cover" />
                </div>
                <div className="">
                  <p>Sweater Illinois</p>
                </div>
                <div className="flex justify-between ">
                  <p className="font-bold">Rp. 50.000</p>
                </div>
              </div>
              <div className="bg-white hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-500 w-[272px] p-4 rounded">
                <div className="h-64">
                  <img src={product1} alt="" className="object-cover" />
                </div>
                <div className="">
                  <p>Sweater Illinois</p>
                </div>
                <div className="flex justify-between ">
                  <p className="font-bold">Rp. 50.000</p>
                </div>
              </div>
              <div className="bg-white hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-500 w-[272px] p-4 rounded">
                <div className="h-64">
                  <img src={product1} alt="" className="object-cover" />
                </div>
                <div className="">
                  <p>Sweater Illinois</p>
                </div>
                <div className="flex justify-between ">
                  <p className="font-bold">Rp. 50.000</p>
                </div>
              </div>
              <div className="bg-white hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-500 w-[272px] p-4 rounded">
                <div className="h-64">
                  <img src={product1} alt="" className="object-cover" />
                </div>
                <div className="">
                  <p>Sweater Illinois</p>
                </div>
                <div className="flex justify-between ">
                  <p className="font-bold">Rp. 50.000</p>
                </div>
              </div>
              <div className="bg-white hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-500 w-[272px] p-4 rounded">
                <div className="h-64">
                  <img src={product1} alt="" className="object-cover" />
                </div>
                <div className="">
                  <p>Sweater Illinois</p>
                </div>
                <div className="flex justify-between ">
                  <p className="font-bold">Rp. 50.000</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center bg-white h-12 my-7">
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
                        class="page-link relative block py-1.5 px-3 rounded border-0 bg-[#d0cba0] outline-none transition-all duration-300 rounded text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
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
        </div>
      </div>
    </div>
  );
}

export default Product_Pria;
