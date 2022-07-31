import React from "react";
import product1 from "../../img/product1.jpg";
import tentangKami from "../../img/tentangKami.jpg";

function Tentang_Kami() {
  return (
    <div className="bg-[#F6F6F6]">
      <div className="flex bg-white h-[304px] items-center justify-center">
        <img src={product1} alt="" className="object-cover h-full w-full" />
        <h1 className="text-5xl font-bold absolute text-white">Tentang Kami</h1>
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
              TENTANG BIKINNYAMAN_THRIFT
            </h1>
            <div className="w-full mt-6 text-left text-sm">
              <p className="mb-4">
                Bikinnyaman_thrift adalah e-commerce yang menjual berbagai jenis
                pakaian second hand layak pakai yang akan membuat penampilan
                para wanita dan pria lebih bergaya.
              </p>
              <p className="mb-4">
                Produk-produk yang kami tawarkan tentunya mempertimbangkan
                kebutuhan dari wanita dan pria mengikuti fashion terkini. Serta
                ditawarkan dengan harga yang terjangkau.
              </p>
              <p>
                Daftarkan email anda sekarang dan follow media sosial
                Bikinnyamam_thrift untuk menjadi yang pertama mendapatkan info
                mengenai produk terbaru dan promo lainnya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tentang_Kami;
