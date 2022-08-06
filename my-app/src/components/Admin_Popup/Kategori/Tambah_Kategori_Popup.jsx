import Popup from "reactjs-popup";
import React, { useState } from "react";
import "./style.css";

export default function Tambah_Kategori_Popup(close) {
  return (
    <div className="modalAdmin">
      <div className="bg-white border border-gray-400 rounded-md p-4 w-[450px]">
        <div className="flex justify-between">
          <div>
            <h1 className="text-lg text-gray-500">Tambah Kategori</h1>
          </div>
          <div className="cursor-pointer" onClick={close}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <hr className="border mt-4" />
        <div className="py-4">
          <div className="w-full">
            <label className="text-sm font-bold text-gray-600 text-left">
              Kategori
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-200 rounded mt-2"
              placeholder="Masukkan kategori"
            ></input>
          </div>
        </div>
        <div>
          <button className="rounded w-full text-white font-bold bg-[#d0cba0] p-2 mt-4">
            Tambah Kategori
          </button>
        </div>
      </div>
    </div>
  );
}
