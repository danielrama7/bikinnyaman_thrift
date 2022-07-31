import React from "react";
import product1 from "../../img/product1.jpg";
import tentangKami from "../../img/tentangKami.jpg";

function Syarat_Ketentuan() {
  return (
    <div className="bg-[#F6F6F6]">
      <div className="flex bg-white h-[304px] items-center justify-center">
        <img src={product1} alt="" className="object-cover h-full w-full" />
        <h1 className="text-5xl font-bold absolute text-white">
          Syarat dan Ketentuan
        </h1>
      </div>
      <div className="mx-28 py-16 p-3">
        <div className="flex bg-white p-10 w-full items-center">
          <div className="right-10 w-full h-fit">
            <h1 className="text-left text-3xl text-gray-800 font-bold">
              SYARAT DAN KETENTUAN
            </h1>
            <div className="w-full text-md mt-4">
              <p className="mb-5">
                Selamat datang di Bikinnyaman_thrift. Akses dan penggunaan
                Bikinnyaman_thrift atas produk dan layanan yang tersedia melalui
                situs ini tunduk kepada syarat, kondisi, dan pemberitahuan
                berikut. Kami menyarankan kepada setiap pengguna untuk membaca
                Syarat & Ketentuan secara seksama.
              </p>
              <p className="mb-5">
                Konten yang disediakan di situs ini adalah semata-mata untuk
                tujuan informasi. Anda mungkin akan diberi password dan akun
                yang unik untuk memungkinkan Anda untuk mengakses bagian-bagian
                tertentu di situs ini. Setiap kali Anda menggunakan password
                atau akun yang unik, Anda akan dianggap memiliki otorisasi untuk
                mengakses dan menggunakan situs ini dengan cara yang sesuai
                dengan syarat dan ketentuan, dan kami tidak memiliki kewajiban
                untuk menyelidiki otorisasi atau sumber dari akses tersebut atau
                penggunaan situs. Anda akan bertanggung jawab pada password dan
                akun yang awalnya dimiliki oleh Anda, serta melindungi keamanan
                dan kerahasiaannya. Anda harus segera memberitahu kami apabila
                ada penggunaan akun tanpa izin atau hal-hal yang berkaitan
                dengan pelanggaran dalam situs ini.
              </p>
              <ul>
                <li class="mb-2">
                  Dengan demikian, Anda setuju bahwa Anda tidak akan melakukan
                  hal-hal berikut:
                </li>
                <li>
                  1. Mengumpulkan informasi pribadi dari situs ini tanpa izin.
                </li>
                <li class="mt-2">
                  2. Merusak pelayanan dengan mengunggah virus, worm, ataupun
                  kode berbahaya lainnya.
                </li>
                <li class="mt-2">
                  Melanggar salah satu ketentuan diatas dapat ditindak sebagai
                  kejahatan berdasarkan hukum yang berlaku dan
                  Bikinnyaman_thrift dapat melaporkan kepada pihak yang
                  berwenang.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Syarat_Ketentuan;
