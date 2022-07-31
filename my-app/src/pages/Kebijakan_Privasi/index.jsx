import React from "react";
import product1 from "../../img/product1.jpg";
import tentangKami from "../../img/tentangKami.jpg";

function Kebijakan_Privasi() {
  return (
    <div className="bg-[#F6F6F6]">
      <div className="flex bg-white h-[304px] items-center justify-center">
        <img src={product1} alt="" className="object-cover h-full w-full" />
        <h1 className="text-5xl font-bold absolute text-white">
          Kebijakan Privasi
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
            <h1 className="text-left text-2xl font-bold">KEBIJAKAN PRIVASI</h1>
            <div className="w-full mt-6 text-sm text-left">
              <p className="mb-4">
                Kami sungguh menghormati privasi Anda sebagaimana dijelaskan
                dalam syarat dan ketentuan. Segala informasi yang kami butuhkan
                diperuntukkan untuk menjalankan layanan kepada Anda dengan
                sebaik-baiknya.
              </p>
              <p className="mb-4">
                Untuk mendapatkan layanan, Anda mungkin diminta untuk membuat
                akun serta password untuk akun Anda. Kami sangat berharap Anda
                dapat menjaga kerahasiaan password setiap saat. Kami tidak
                bertanggung jawab atas kerugian atau kerusakan yang timbul dari
                hilangnya password.
              </p>
              <p>
                Informasi yang telah diserahkan kepada kami akan dijaga
                sebagaimana mestinya. Tindakan Anda yang membuat privasi Anda
                terbuka untuk umum adalah tanggung jawab Anda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kebijakan_Privasi;
