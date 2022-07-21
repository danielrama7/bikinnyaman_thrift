import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const dataDummy2 = [
  {
    tanggal: "01/01/2022",
    produk: "Sweater / Crewneck Pastel Mint Blue GAP",
    jumlah: "1",
    total: 100000,
    status: 0,
  },
  {
    tanggal: "01/01/2022",
    produk: "Sweater / Crewneck Pastel Mint Blue GAP",
    jumlah: "1",
    total: 100000,
    status: 0,
  },
];

function Riwayat_Pembelian() {
  // Set the initial count state to zero, 0
  const [data, setData] = useState(dataDummy2);

  return (
    <div>
      <div className="flex justify-center mb-6">
        <h1 className="font-bold text-3xl">Riwayat Pembelian</h1>
      </div>
      <hr className="border-2 rounded mb-4" />
      <div>
        <table className="text-left table-fixed w-full">
          <thead className="h-10 font-bold text-center bg-[#F6F6F6]">
            <tr>
              <th className="w-2/12">Tanggal</th>
              <th className="w-5/12">Produk</th>
              <th className="w-1/12">Jumlah</th>
              <th className="w-2/12">Total</th>
              <th className="w-2/12">Ulasan</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr className="text-sm h-12">
                <td>
                  <div className="flex items-center justify-center">
                    <p>{item.tanggal}</p>
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    <p>{item.produk}</p>
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    <p>{item.jumlah} buah</p>
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    <p>Rp. {item.total}</p>
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    <NavLink to="/ulasan">
                      <button className="bg-[#d0cba0] py-1 px-2 rounded text-white font-bold">
                        Beri Ulasan
                      </button>
                    </NavLink>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Riwayat_Pembelian;
