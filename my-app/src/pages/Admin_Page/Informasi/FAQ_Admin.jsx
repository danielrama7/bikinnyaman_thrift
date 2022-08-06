import React, { useState } from "react";
import Popup from "reactjs-popup";
import Tambah_FAQ_Popup from "../../../components/Admin_Popup/FAQ/Tambah_FAQ_Popup";
import Edit_FAQ_Popup from "../../../components/Admin_Popup/FAQ/Edit_FAQ_Popup";

const dataFAQ = [
  {
    pertanyaan: "Bagaimana cara memesan barang?",
    jawaban:
      "Langkah-langkah pemesanan produk dapat dilihat di Cara Pemesanan pada bagian Bantuan",
  },
  {
    pertanyaan: "Bagaimana cara mengembalikan barang?",
    jawaban:
      "Langkah-langkah dan ketentuan pengembalian produk dapat dilihat di Kebijakan Pengembalian pada bagian Bantuan",
  },
];

function FAQ_Admin() {
  const [data, setData] = useState(dataFAQ);

  return (
    <div className="">
      <div className="text-2xl text-gray-600 mb-8">
        <h1>FAQ</h1>
      </div>
      <div className="w-full bg-white rounded shadow-xl">
        <div className="w-full p-4 bg-gray-50 ">
          <Popup
            trigger={
              <button className="w-10 h-10 bg-[#d0cba0] text-white font-bold text-xl rounded">
                +
              </button>
            }
          >
            {(close) => Tambah_FAQ_Popup(close)}
          </Popup>
        </div>
        <div>
          <table className="border-collapse border text-left table-auto w-full">
            <thead className="h-10 font-bold text-center">
              <tr>
                <th className="border w-1/12">No</th>
                <th className="border w-3/12">Pertanyaan</th>
                <th className="border w-5/12">Jawaban</th>
                <th className="border w-2/12">Action</th>
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
                      <p>{item.pertanyaan}</p>
                    </div>
                  </td>
                  <td className="border">
                    <div className="p-2">
                      <p>{item.jawaban}</p>
                    </div>
                  </td>
                  <td className="border">
                    <div className="p-2 flex items-center gap-1">
                      <Popup
                        trigger={
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
                        }
                      >
                        {(close) =>
                          Edit_FAQ_Popup(item.pertanyaan, item.jawaban, close)
                        }
                      </Popup>
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
          <div className="flex justify-between items-center w-full p-4 bg-gray-50 ">
            <div>
              <h1 className="text-sm text-gray-600">
                Menampilkan 1 dari 1 Halaman
              </h1>
            </div>
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
        </div>
      </div>
    </div>
  );
}

export default FAQ_Admin;
