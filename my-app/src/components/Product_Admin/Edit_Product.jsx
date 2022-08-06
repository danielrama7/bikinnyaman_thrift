import React from "react";

function Edit_Product() {
  return (
    <div>
      <div className="text-2xl text-gray-600 mb-8">
        <h1>Edit Produk</h1>
      </div>
      <div className="w-full bg-white rounded shadow-xl p-8">
        <form id="tambah_barang">
          <div className="grid gap-y-4">
            <div className="w-full">
              <label className="text-sm font-bold text-gray-600 text-left">
                Nama Barang
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-200 rounded mt-4"
                placeholder="Masukkan nama Barang"
                defaultValue={"Poliester Kyuck Goo Jaket Putih "}
              ></input>
            </div>
            <div className="w-full">
              <label className="text-sm font-bold text-gray-600 text-left">
                Deskripsi Barang
              </label>
              <textarea
                className="w-full px-3 py-2 text-gray-600 border rounded border-gray-200 mt-4"
                rows="4"
                placeholder="Masukkan deskripsi barang"
              ></textarea>
            </div>
            <div className="w-full">
              <label className="text-sm font-bold text-gray-600 text-left">
                Harga Barang
              </label>
              <input
                type="number"
                className="w-full p-2 border border-gray-200 rounded mt-4"
                placeholder="50000"
                defaultValue={"100000"}
              ></input>
            </div>
            <div className="w-full">
              <label className="text-sm font-bold text-gray-600 text-left">
                Pakaian
              </label>
              <select
                type="text"
                defaultValue={1}
                className="w-full p-2 border border-gray-200 rounded mt-4"
              >
                <option value={1}>Wanita</option>
                <option value={2}>Pria</option>
                <option value={3}>Unisex</option>
              </select>
            </div>
            <div className="w-full">
              <label className="text-sm font-bold text-gray-600 text-left">
                Kategori
              </label>
              <select
                type="text"
                defaultValue={4}
                className="w-full p-2 border border-gray-200 rounded mt-4"
              >
                <option value={1}>T-shirt</option>
                <option value={2}>Kemeja</option>
                <option value={3}>Sweater</option>
                <option value={4}>Jaket</option>
              </select>
            </div>
            <div className="w-full">
              <label className="text-sm font-bold text-gray-600 text-left">
                Ukuran
              </label>
              <select
                type="text"
                defaultValue={5}
                className="w-full p-2 border border-gray-200 rounded mt-4"
              >
                <option value={1}>S</option>
                <option value={2}>M</option>
                <option value={3}>L</option>
                <option value={4}>XL</option>
                <option value={5}>XXL</option>
              </select>
            </div>
            <div className="w-full">
              <label className="text-sm font-bold text-gray-600 text-left">
                Warna
              </label>
              <select
                type="text"
                defaultValue={1}
                className="w-full p-2 border border-gray-200 rounded mt-4"
              >
                <option value={1}>Putih</option>
                <option value={2}>Krem</option>
                <option value={3}>Abu</option>
                <option value={4}>Biru</option>
                <option value={5}>Coklat</option>
                <option value={6}>Hitam</option>
              </select>
            </div>
            <div className="w-full">
              <label className="text-sm font-bold text-gray-600 text-left">
                Stok Barang
              </label>
              <input
                type="number"
                defaultValue={1}
                className="w-full p-2 border border-gray-200 rounded mt-4"
                placeholder="1"
              ></input>
            </div>
            <div className="w-full">
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 text-left"
              >
                Gambar Barang Utama
              </label>
            </div>
            <div className="h-full flex flex-col bg-white border-2 rounded-md">
              <div className="h-full p-8 w-full flex flex-col">
                <div className="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
                  <input
                    type="file"
                    accept="image/png, image/jpg, image/jpeg"
                    name="gambarUtama"
                  />
                </div>
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 text-left"
              >
                Gambar Barang 1 (Optional)
              </label>
            </div>
            <div className="h-full flex flex-col bg-white border-2 rounded-md">
              <div className="h-full p-8 w-full flex flex-col">
                <div className="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
                  <input
                    type="file"
                    accept="image/png, image/jpg, image/jpeg"
                    name="gambar1"
                  />
                </div>
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 text-left"
              >
                Gambar Barang 2 (Optional)
              </label>
            </div>
            <div className="h-full flex flex-col bg-white border-2 rounded-md">
              <div className="h-full p-8 w-full flex flex-col">
                <div className="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
                  <input
                    type="file"
                    accept="image/png, image/jpg, image/jpeg"
                    name="gambar2"
                  />
                </div>
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 text-left"
              >
                Gambar Barang 3 (Optional)
              </label>
            </div>
            <div className="h-full flex flex-col bg-white border-2 rounded-md">
              <div className="h-full p-8 w-full flex flex-col">
                <div className="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
                  <input
                    type="file"
                    accept="image/png, image/jpg, image/jpeg"
                    name="gambar3"
                  />
                </div>
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 text-left"
              >
                Gambar Barang 4 (Optional)
              </label>
            </div>
            <div className="h-full flex flex-col bg-white border-2 rounded-md">
              <div className="h-full p-8 w-full flex flex-col">
                <div className="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
                  <input
                    type="file"
                    accept="image/png, image/jpg, image/jpeg"
                    name="gambar4"
                  />
                </div>
              </div>
            </div>
            <div>
              <button className="rounded w-full text-white font-bold bg-[#d0cba0] p-2">
                Tambah Barang
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit_Product;
