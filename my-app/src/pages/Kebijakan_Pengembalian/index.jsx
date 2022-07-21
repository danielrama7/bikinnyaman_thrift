import React from "react";

function Kebijakan_Pengembalian() {
  return (
    <div className="h-screen bg-indigo-50 justify-center pt-20 px-12">
      <h1 className="text-center text-5xl text-gray-800 font-bold">
        Kebijakan Pengembalian
      </h1>
      <div className="w-full px-20 pt-10 mt-6 text-2xl">
        <p className="mb-5">
          Pengembalian produk dapat dilakukan dengan langsung menghubungi pihak
          kamu melalui WhatsApp kami.
        </p>
        <ul>
          <li class="mb-2">Beberapa ketentuan pengembalian produk:</li>
          <li>
            1. Periode pengembalian produk maksimal H+3 setelah barang sampai.
          </li>
          <li class="mt-2">
            2. Produk yang telah dicuci, dirubah, kondisi tidak sesuai saat
            pembelian (rusak/bernoda) tidak dapat dikembalikan.
          </li>
          <li class="mt-2">
            3. Jasa pengiriman pengembalian produk ditanggung oleh pembeli.
          </li>
          <li class="mt-2">
            4. Dana akan dikembalikan setelah produk sampai dan sudah dicek
            kondisinya oleh pihak kami.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Kebijakan_Pengembalian;
