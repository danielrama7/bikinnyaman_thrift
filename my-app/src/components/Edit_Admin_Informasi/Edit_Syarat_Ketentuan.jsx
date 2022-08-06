import React from "react";

const dataSyaratKetentuan =
  "Selamat datang di Bikinnyaman_thrift. Akses dan penggunaan Bikinnyaman_thrift atas produk dan layanan yang tersedia melalui situs ini tunduk kepada syarat, kondisi, dan pemberitahuan berikut. Kami menyarankan kepada setiap pengguna untuk membaca Syarat & Ketentuan secara seksama.\n\nKonten yang disediakan di situs ini adalah semata-mata untuk tujuan informasi. Anda mungkin akan diberi password dan akun yang unik untuk memungkinkan Anda untuk mengakses bagian-bagian tertentu di situs ini. Setiap kali Anda menggunakan password atau akun yang unik, Anda akan dianggap memiliki otorisasi untuk mengakses dan menggunakan situs ini dengan cara yang sesuai dengan syarat dan ketentuan, dan kami tidak memiliki kewajiban untuk menyelidiki otorisasi atau sumber dari akses tersebut atau penggunaan situs. Anda akan bertanggung jawab pada password dan akun yang awalnya dimiliki oleh Anda, serta melindungi keamanan dan kerahasiaannya. Anda harus segera memberitahu kami apabila ada penggunaan akun tanpa izin atau hal-hal yang berkaitan dengan pelanggaran dalam situs ini.\n\nDengan demikian, Anda setuju bahwa Anda tidak akan melakukan hal-hal berikut:\n1. Mengumpulkan informasi pribadi dari situs ini tanpa izin.\n2. Merusak pelayanan dengan mengunggah virus, worm, ataupun kode berbahaya lainnya.\nMelanggar salah satu ketentuan diatas dapat ditindak sebagai kejahatan berdasarkan hukum yang berlaku dan Bikinnyaman_thrift dapat melaporkan kepada pihak yang berwenang.";

function Edit_Syarat_Ketentuan() {
  return (
    <div>
      <div className="text-2xl text-gray-600 mb-8">
        <h1>Edit Syarat & Ketentuan</h1>
      </div>
      <div className="w-full bg-white rounded shadow-xl p-8">
        <form id="editSyaratKetentuan">
          <div className="grid gap-y-4">
            <div className="w-full">
              <label className="text-sm font-bold text-gray-600 text-left">
                Isi Syarat & Ketentuan
              </label>
              <textarea
                className="w-full px-3 py-2 text-gray-600 border rounded border-gray-200 mt-4"
                rows="10"
                defaultValue={dataSyaratKetentuan}
                placeholder="{Masukkan syarat dan ketentuan}"
              ></textarea>
            </div>
            <div>
              <button className="rounded w-full text-white font-bold bg-[#d0cba0] p-2">
                Simpan
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit_Syarat_Ketentuan;
