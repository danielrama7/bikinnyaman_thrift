import React from "react";
import product1 from "../../img/product1.jpg";
import tentangKami from "../../img/tentangKami.jpg";

function Kebijakan_Pengembalian() {
  return (
    <div className="bg-[#F6F6F6]">
      <div className="flex bg-white h-[304px] items-center justify-center">
        <img src={product1} alt="" className="object-cover h-full w-full" />
        <h1 className="text-5xl font-bold absolute text-white">
          Kebiajakan Pengembalian
        </h1>
      </div>
      <div className="mx-28 py-16 p-3">
        <div className="relative flex bg-white p-10 w-full h-[480px] items-center">
          <div className="w-1/2 h-full">
            <img
              src={tentangKami}
              alt=""
              className="object-fit w-full h-full"
            />
          </div>
          <div className="absolute right-10 w-2/3 p-8 bg-[#F6F6F6] h-fit">
            <h1 className="text-left text-2xl font-bold">
              KEBIJAKAN PENGEMBALIAN
            </h1>
            <div className="w-full mt-6 text-sm">
              <p className="mb-2">
                Pengembalian produk dapat dilakukan dengan langsung menghubungi
                pihak kamu melalui WhatsApp kami.
              </p>
              <ul>
                <li class="mb-2">Beberapa ketentuan pengembalian produk:</li>
                <li>
                  1. Periode pengembalian produk maksimal H+3 setelah barang
                  sampai.
                </li>
                <li class="mt-2">
                  2. Produk yang telah dicuci, dirubah, kondisi tidak sesuai
                  saat pembelian (rusak/bernoda) tidak dapat dikembalikan.
                </li>
                <li class="mt-2">
                  3. Jasa pengiriman pengembalian produk ditanggung oleh
                  pembeli.
                </li>
                <li class="mt-2">
                  4. Dana akan dikembalikan setelah produk sampai dan sudah
                  dicek kondisinya oleh pihak kami.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kebijakan_Pengembalian;
