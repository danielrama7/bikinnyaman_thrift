import React, { useState } from "react";
import product1 from "../../img/product1.jpg";
import product2 from "../../img/productWanita/Katun Blazer Hijau (XL 65rb)/product7.jpg";
import { NavLink } from "react-router-dom";

function Wishlist() {
  const [showProduct1, setShowProduct1] = useState(true);
  const [showProduct2, setShowProduct2] = useState(true);

  const handleDelete1 = () => {
    setShowProduct1(false);
  };
  const handleDelete2 = () => {
    setShowProduct2(false);
  };

  return (
    <div className="bg-[#F6F6F6]">
      <div className="flex bg-white h-[304px] items-center justify-center">
        <img src={product1} alt="" className="object-cover h-full w-full" />
        <h1 className="text-5xl font-bold absolute text-white">Wishlist</h1>
      </div>
      <div className="mx-20 py-16 p-3">
        <div className="bg-white p-10">
          <table className="table-auto w-full">
            <thead className="bg-[#F6F6F6] h-10 text-center font-bold">
              <tr>
                <th className="p-2 w-2/5">PRODUK</th>
                <th className="p-2">HARGA</th>
                <th className="p-2">STATUS BARANG</th>
                <th className="p-2 w-1/5">MASUKKAN KERANJANG</th>
                <th className="p-2">HAPUS</th>
              </tr>
            </thead>
            <tbody>
              {showProduct1 ? (
                <tr className="text-center">
                  <td className="w-96 pt-6">
                    <div className="flex items-center w-full mr-10">
                      <div className="h-28 w-28">
                        <img
                          src={product1}
                          alt=""
                          className="object-cover h-full w-full"
                        />
                      </div>
                      <div className="text-center ml-4 w-2/3">
                        <NavLink to={"/productDetail"}>
                          <p className="font-bold">
                            Sweater / Crewneck Pastel Mint Blue GAP
                          </p>
                        </NavLink>
                        <p className="text-sm">Warna: Biru</p>
                        <p className="text-sm">Ukuran: XL</p>
                        <p className="text-sm">Stok : 1</p>
                      </div>
                    </div>
                  </td>
                  <td className="pt-6">
                    <div>
                      <p className="font-bold">Rp. 65.000</p>
                    </div>
                  </td>
                  <td className="pt-6">
                    <div className="font-bold">
                      <p>Stok Tersedia</p>
                    </div>
                  </td>
                  <td className="pt-6">
                    <div className="flex justify-center w-full">
                      <NavLink to="/keranjangBelanja">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 hover:stroke-[#d0cba0]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </NavLink>
                    </div>
                  </td>
                  <td className="pt-6">
                    <div className="flex items-center justify-center w-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-9 w-9 p-2 rounded bg-[#f6f6f6] hover:bg-[#d0cba0] hover:stroke-white"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        onClick={() => handleDelete1()}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </td>
                </tr>
              ) : null}
              {showProduct2 ? (
                <tr className="text-center">
                  <td className="w-80 pt-6">
                    <div className="flex items-center w-full mr-10">
                      <div className="h-28 w-28">
                        <img
                          src={product2}
                          alt=""
                          className="object-cover h-full w-full"
                        />
                      </div>
                      <div className="text-center ml-4 w-2/3">
                        <a href="" className="font-bold">
                          Katun Blazer Hijau
                        </a>
                        <p className="text-sm">Warna: Hitam</p>
                        <p className="text-sm">Ukuran: XL</p>
                        <p className="text-sm">Stok: 0</p>
                      </div>
                    </div>
                  </td>
                  <td className="pt-6">
                    <div>
                      <p className="font-bold">Rp. 65.000</p>
                    </div>
                  </td>
                  <td className="pt-6">
                    <div className="font-bold">
                      <p>Stok Habis</p>
                    </div>
                  </td>
                  <td className="pt-6">
                    <div className="flex justify-center w-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="grey"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                  </td>
                  <td className="pt-6">
                    <div className="flex items-center justify-center w-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-9 w-9 p-2 rounded bg-[#f6f6f6] hover:bg-[#d0cba0] hover:stroke-white"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        onClick={() => handleDelete2()}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
