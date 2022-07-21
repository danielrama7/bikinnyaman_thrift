import React, { useState } from "react";

const dataDummy3 = [
  {
    tanggal: "01/01/2022",
    produk: "Sweater / Crewneck Pastel Mint Blue GAP",
    jumlah: "1",
    total: 100000,
    konfirmasi: "Konfirmasi",
    status: "Belum Bayar",
  },
  {
    tanggal: "01/01/2022",
    produk: "Sweater / Crewneck Pastel Mint Blue GAP",
    jumlah: "1",
    total: 100000,
    konfirmasi: "Produk Sampai",
    status: "Sudah Bayar",
  },
];
function Riwayat_Pemesanan() {
  // Set the initial count state to zero, 0
  const [data, setData] = useState(dataDummy3);

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
              <th className="w-4/12">Produk</th>
              <th className="w-1/12">Jumlah</th>
              <th className="w-2/12">Total</th>
              <th className="w-2/12">Konfirmasi</th>
              <th className="w-2/12">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr className="text-sm h-16 pb-2">
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
                    <button className="bg-[#d0cba0] p-[5px] border-transparent rounded w-full text-white font-bold">
                      {item.konfirmasi}
                    </button>
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {item.status}
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

export default Riwayat_Pemesanan;
