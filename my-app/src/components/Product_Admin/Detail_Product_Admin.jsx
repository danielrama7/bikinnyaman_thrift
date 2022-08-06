import React from "react";
import ImgUtama from "../../img/productWanita/Poliester Kyuck Goo Jaket Putih (L)/product3.jpg";
import Img1 from "../../img/productWanita/Poliester Kyuck Goo Jaket Putih (L)/product3.1.jpg";
import Img2 from "../../img/productWanita/Poliester Kyuck Goo Jaket Putih (L)/product3.2.jpg";
import Img3 from "../../img/productWanita/Poliester Kyuck Goo Jaket Putih (L)/product3.3.jpg";
import Img4 from "../../img/productWanita/Poliester Kyuck Goo Jaket Putih (L)/product3.4.jpg";

function Detail_Product_Admin() {
  return (
    <div>
      <div className="text-2xl text-gray-600 mb-8">
        <h1>Detail Produk</h1>
      </div>
      <div className="w-full bg-white rounded shadow-xl p-8">
        <div className="grid gap-y-4 text-gray-600">
          <div className="flex">
            <div className="w-1/4">Nama Produk</div>
            <div className="w-3/4">Poliester Kyuck Goo Jaket Putih</div>
          </div>
          <div className="flex">
            <div className="w-1/4">Deskripsi Produk</div>
            <div className="w-3/4">
              BLAABLAABLAABLAABLAABLAABLAABLAABLAABLAABLAABLAABLAABLAABLAABLAABLAABLAA
            </div>
          </div>
          <div className="flex">
            <div className="w-1/4">Jenis Pakaian</div>
            <div className="w-3/4">Wanita</div>
          </div>
          <div className="flex">
            <div className="w-1/4">Harga</div>
            <div className="w-3/4">Rp. 100000</div>
          </div>
          <div className="flex">
            <div className="w-1/4">Kategori</div>
            <div className="w-3/4">Jaket</div>
          </div>
          <div className="flex">
            <div className="w-1/4">Ukuran</div>
            <div className="w-3/4">L</div>
          </div>
          <div className="flex">
            <div className="w-1/4">Warna</div>
            <div className="w-3/4">Putih</div>
          </div>
          <div className="flex">
            <div className="w-1/4">Stok</div>
            <div className="w-3/4">1</div>
          </div>
          <div className="flex">
            <div className="w-1/4">Gambar Utama</div>
            <div className="w-3/4">
              <img src={ImgUtama} alt="" className="object-fit h-32 w-32" />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/4">Gambar 1</div>
            <div className="w-3/4">
              <img src={Img1} alt="" className="object-fit h-32 w-32" />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/4">Gambar 2</div>
            <div className="w-3/4">
              <img src={Img2} alt="" className="object-fit h-32 w-32" />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/4">Gambar 3</div>
            <div className="w-3/4">
              <img src={Img3} alt="" className="object-fit h-32 w-32" />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/4">Gambar 4</div>
            <div className="w-3/4">
              <img src={Img4} alt="" className="object-fit h-32 w-32" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail_Product_Admin;
