import { useLocation } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import productAPI from "../../api/product";

function Detail_Product_Admin() {
  const location = useLocation();

  const [detailBarang, setDetailBarang] = useState([]);

  useEffect(() => {
    const fetchDetailBarang = async () => {
      const res = await productAPI.getDetailBarang(location.state.id);
      setDetailBarang(res.data.data);
    };
    fetchDetailBarang();
  }, [location.state.id]);

  return (
    <div>
      <div className="text-2xl text-gray-600 mb-8">
        <h1>Detail Produk</h1>
      </div>
      <div className="w-full bg-white rounded shadow-xl p-8">
        <div className="grid gap-y-4 text-gray-600">
          <div className="flex">
            <div className="w-1/4">Nama Produk</div>
            <div className="w-3/4">{detailBarang.namaProduk}</div>
          </div>
          <div className="flex">
            <div className="w-1/4">Deskripsi Produk</div>
            <div className="w-3/4">{detailBarang.deskripsi}</div>
          </div>
          <div className="flex">
            <div className="w-1/4">Jenis Pakaian</div>
            <div className="w-3/4">{detailBarang.jenis}</div>
          </div>
          <div className="flex">
            <div className="w-1/4">Harga</div>
            <div className="w-3/4">Rp. {detailBarang.harga}</div>
          </div>
          <div className="flex">
            <div className="w-1/4">Kategori</div>
            <div className="w-3/4">{detailBarang.kategori}</div>
          </div>
          <div className="flex">
            <div className="w-1/4">Ukuran</div>
            <div className="w-3/4">{detailBarang.ukuran}</div>
          </div>
          <div className="flex">
            <div className="w-1/4">Warna</div>
            <div className="w-3/4">{detailBarang.warna}</div>
          </div>
          <div className="flex">
            <div className="w-1/4">Stok</div>
            <div className="w-3/4">{detailBarang.stok}</div>
          </div>
          <div className="flex">
            <div className="w-1/4">Gambar Utama</div>
            <div className="w-3/4">
              <img
                src={detailBarang.gambarUtama}
                alt=""
                className="object-fit h-32 w-32"
              />
            </div>
          </div>
          {detailBarang.gambar1 ? (
            <div className="flex">
              <div className="w-1/4">Gambar 1</div>
              <div className="w-3/4">
                <img
                  src={detailBarang.gambar1}
                  alt=""
                  className="object-fit h-32 w-32"
                />
              </div>
            </div>
          ) : null}
          {detailBarang.gambar2 ? (
            <div className="flex">
              <div className="w-1/4">Gambar 2</div>
              <div className="w-3/4">
                <img
                  src={detailBarang.gambar2}
                  alt=""
                  className="object-fit h-32 w-32"
                />
              </div>
            </div>
          ) : null}
          {detailBarang.gambar3 ? (
            <div className="flex">
              <div className="w-1/4">Gambar 3</div>
              <div className="w-3/4">
                <img
                  src={detailBarang.gambar3}
                  alt=""
                  className="object-fit h-32 w-32"
                />
              </div>
            </div>
          ) : null}
          {detailBarang.gambar4 ? (
            <div className="flex">
              <div className="w-1/4">Gambar 4</div>
              <div className="w-3/4">
                <img
                  src={detailBarang.gambar4}
                  alt=""
                  className="object-fit h-32 w-32"
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Detail_Product_Admin;
