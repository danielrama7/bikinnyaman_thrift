import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const dataInformasi = [
  {
    informasi: "Tentang Kami",
    isi: "Bikinnyaman_thrift adalah e-commerce yang menjual berbagai jenis pakaian second hand layak pakai yang akan membuat penampilan para wanita dan pria lebih bergaya....",
    link: "editTentangKami",
  },
  {
    informasi: "Syarat & Ketentuan",
    isi: "Selamat datang di Bikinnyaman_thrift. Akses dan penggunaan Bikinnyaman_thrift atas produk dan layanan yang tersedia melalui situs ini tunduk kepada syarat, kondisi....",
    link: "editSyaratKetentuan",
  },
  {
    informasi: "Kebijakan Privasi",
    isi: "Kami sungguh menghormati privasi Anda sebagaimana dijelaskan dalam syarat dan ketentuan. Segala informasi yang kami butuhkan diperuntukkan untuk menjalankan layanan....",
    link: "editKebijakanPrivasi",
  },
  {
    informasi: "Kebijakan Pengembalian",
    isi: "Pengembalian produk dapat dilakukan dengan langsung menghubungi pihak kamu melalui WhatsApp kami....",
    link: "editKebijakanPengembalian",
  },
  {
    informasi: "Cara Pemesanan",
    isi: "Langkah - langkah: 1. Pertama cari produk yang akan dibeli 2. Tambahkan produk ke keranjang belanja....",
    link: "editCaraPemesanan",
  },
];

function Informasi() {
  const [data, setData] = useState(dataInformasi);

  return (
    <div className="">
      <div className="text-2xl text-gray-600 mb-8">
        <h1>Informasi</h1>
      </div>
      <div className="w-full bg-white rounded shadow-xl">
        <div>
          <table className="border-collapse border text-left table-auto w-full">
            <thead className="h-10 font-bold text-center">
              <tr>
                <th className="border w-1/5">No</th>
                <th className="border w-1/5">Informasi</th>
                <th className="border w-2/5">Isi</th>
                <th className="border w-1/5">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr className="text-sm">
                  <td className="border">
                    <div className="p-2">
                      <p>{i + 1}</p>
                    </div>
                  </td>
                  <td className="border">
                    <div className="p-2">
                      <p>{item.informasi}</p>
                    </div>
                  </td>
                  <td className="border">
                    <div className="p-2">
                      <p>{item.isi}</p>
                    </div>
                  </td>
                  <td className="border">
                    <div className="p-2 flex items-center gap-1">
                      <NavLink to={"/admin/" + item.link}>
                        <div className="cursor-pointer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                            <path
                              fillRule="evenodd"
                              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </NavLink>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Informasi;
