import React from "react";
import product1 from "../../img/product1.jpg";
import { NavLink } from "react-router-dom";

function FAQ() {
  return (
    <div className="bg-[#F6F6F6]">
      <div className="flex bg-white h-[304px] items-center justify-center">
        <img src={product1} alt="" className="object-cover h-full w-full" />
        <h1 className="text-5xl font-bold absolute text-white">
          Frequently Ask Question
        </h1>
      </div>
      <div className="mx-20 py-16 p-3">
        <div className="bg-white p-10">
          <div className="mb-8">
            <h1 className="font-bold mb-3 text-xl">Pemesanan Produk</h1>
            <div className="flex bg-[#F6F6F6] border-2 rounded p-2 mb-3">
              <p className="text-md">Bagaimana cara memesan barang?</p>
            </div>
            <p className="text-md px-2">
              Langkah-langkah pemesanan produk dapat dilihat di Cara Pemesanan
              pada bagian Bantuan{" "}
            </p>
          </div>
          <div className="mb-8">
            <h1 className="font-bold mb-3 text-xl">Pemesanan Produk</h1>
            <div className="flex bg-[#F6F6F6] border-2 rounded p-2 mb-3">
              <p className="text-md">Bagaimana cara memesan barang?</p>
            </div>
            <p className="text-md px-2">
              Langkah-langkah pemesanan produk dapat dilihat di Cara Pemesanan
              pada bagian Bantuan{" "}
            </p>
          </div>
          <div className="border border-4 p-8 w-2/3">
            <h1 className="font-bold mb-6 text-xl">Ajukan Pertanyaan</h1>
            <div className="flex items-center mb-6">
              <div className="w-1/6">
                <p>Email</p>
              </div>
              <div className="w-5/6 border border-4 ">
                <input
                  type="text"
                  placeholder="Email"
                  className="placeholder:text-slate-400 px-2 w-full"
                />
              </div>
            </div>
            <div className="flex items-center mb-6">
              <div className="w-1/6">
                <p>Pertanyaan</p>
              </div>
              <div className="w-5/6 border border-4 ">
                <input
                  type="text"
                  placeholder="Pertanyan"
                  className="placeholder:text-slate-400 px-2 w-full"
                />
              </div>
            </div>
            <NavLink to="/faq">
              <div className="flex w-full justify-end">
                <button className="bg-[#d0cba0] rounded font-bold text-white p-1 w-5/6">
                  Kirim
                </button>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
