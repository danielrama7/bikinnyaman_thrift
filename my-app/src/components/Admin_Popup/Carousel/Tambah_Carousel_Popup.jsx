import Popup from "reactjs-popup";
import React, { useState } from "react";
import "./style.css";

export default function Tambah_Carousel_Popup(close) {
  return (
    <div className="modalAdmin">
      <div className="bg-white border border-gray-400 rounded-md p-4 w-[450px]">
        <div className="flex justify-between">
          <div>
            <h1 className="text-lg text-gray-500">Tambah Carousel</h1>
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
              Nama Carousel
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-200 rounded mt-2"
              placeholder="Masukkan nama carousel"
            ></input>
          </div>
        </div>
        <div className="w-full mb-2">
          <label
            htmlFor=""
            className="text-sm font-bold text-gray-600 text-left"
          >
            Gambar Carousel
          </label>
        </div>
        <div className="h-full w-full flex flex-col mb-4">
          <div className="border-dashed border-2 border-gray-400 py-8 flex flex-col justify-center items-center">
            <input
              type="file"
              accept="image/png, image/jpg, image/jpeg"
              name="gambar"
            />
          </div>
        </div>
        <div>
          <button className="rounded w-full text-white font-bold bg-[#d0cba0] p-2">
            Tambah Carousel
          </button>
        </div>
      </div>
    </div>
  );
}
