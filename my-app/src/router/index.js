import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Edit_Cara_Pemesanan from "../components/Edit_Admin_Informasi/Edit_Cara_Pemesanan";
import Edit_Kebijakan_Pengembalian from "../components/Edit_Admin_Informasi/Edit_Kebijakan_Pengembalian";
import Edit_Kebijakan_Privasi from "../components/Edit_Admin_Informasi/Edit_Kebijakan_Privasi";
import Edit_Syarat_Ketentuan from "../components/Edit_Admin_Informasi/Edit_Syarat_Ketentuan";
import Edit_Tentang_Kami from "../components/Edit_Admin_Informasi/Edit_Tentang_Kami";
import LayoutUser from "../components/Layout";
import Layout_Awal from "../components/Layout/Layout_Awal";
import Navbar_Admin from "../components/Navbar_Admin";
import Detail_Pesanan_Admin from "../components/Pesanan_Admin/Detail_Pesanan_Admin";
import Detail_Product_Admin from "../components/Product_Admin/Detail_Product_Admin";
import Edit_Product from "../components/Product_Admin/Edit_Product";
import ScrollToTop from "../components/ScrollToTop";
import Admin_Page from "../pages/Admin_Page";
import Dashboard from "../pages/Admin_Page/Dashboard";
import Carousel from "../pages/Admin_Page/Informasi/Carousel";
import FAQ_Admin from "../pages/Admin_Page/Informasi/FAQ_Admin";
import Informasi from "../pages/Admin_Page/Informasi/Informasi";
import Pertanyaan from "../pages/Admin_Page/Informasi/Pertayaan";
import Kategori from "../pages/Admin_Page/Kategori/Kategori";
import Ukuran from "../pages/Admin_Page/Kategori/Ukuran";
import Warna from "../pages/Admin_Page/Kategori/Warna";
import Masuk_Admin from "../pages/Admin_Page/Masuk_Admin";
import Pesanan_Admin from "../pages/Admin_Page/Product_Admin/Pesanan_Admin";
import Product_Admin from "../pages/Admin_Page/Product_Admin/Product_Admin";
import Tambah_Product from "../pages/Admin_Page/Product_Admin/Tambah_Product";
import Home_Page_Awal from "../pages/Home_Page/Home_Page_Awal";
import Informasi_Akun from "../pages/Informasi_Akun";
import Informasi_Akun1 from "../pages/Informasi_Akun/Informasi_Akun1";
import Riwayat_Pembelian from "../pages/Informasi_Akun/Riwayat_Pembelian";
import Riwayat_Pemesanan from "../pages/Informasi_Akun/Riwayat_Pemesanan";
import Ubah_Informasi_Akun from "../pages/Informasi_Akun/Ubah_Informasi_Akun";
import Login from "../pages/Login";
import Product_Wanita from "../pages/Product/Product_Wanita";
import Semua_Product_Wanita from "../pages/Product/Product_Wanita/List_Product/Semua_Product_Wanita";
import Semua_Product from "../pages/Product/Product_Wanita/List_Product/Semua_Product_Wanita";
import Register_Page from "../pages/Register";
import Ulasan_Toko from "../pages/Ulasan_Toko";
import Semua_Ulasan from "../pages/Ulasan_Toko/Semua_Ulasan";
import Ulasan1 from "../pages/Ulasan_Toko/Ulasan1";
import Ulasan2 from "../pages/Ulasan_Toko/Ulasan2";
import Ulasan3 from "../pages/Ulasan_Toko/Ulasan3";
import Ulasan4 from "../pages/Ulasan_Toko/Ulasan4";
import Ulasan5 from "../pages/Ulasan_Toko/Ulasan5";
import { routes } from "./routes";

function router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate replace to="/homePage" />} />
        <Route
          path="/admin"
          element={<Navigate replace to="/admin/dashboard" />}
        />
        {/* <Route path="/" element={<Layout_Awal />}>
          <Route element={<Home_Page_Awal />} path={"/homePageAwal"} />
          <Route element={<Login />} path={"/login"} />
          <Route element={<Register_Page />} path={"/register"} />
        </Route> */}
        <Route path="/" element={<LayoutUser />}>
          {routes.map((route, index) => (
            <Route
              key={index}
              element={<route.component />}
              path={route.path()}
            />
          ))}
        </Route>
        <Route path="/" element={<LayoutUser />}>
          <Route element={<Ulasan_Toko />} path={"/ulasanToko"}>
            <Route element={<Semua_Ulasan />} path={"/ulasanToko"} />
            <Route element={<Ulasan1 />} path={"/ulasanToko/ulasan1"} />
            <Route element={<Ulasan2 />} path={"/ulasanToko/ulasan2"} />
            <Route element={<Ulasan3 />} path={"/ulasanToko/ulasan3"} />
            <Route element={<Ulasan4 />} path={"/ulasanToko/ulasan4"} />
            <Route element={<Ulasan5 />} path={"/ulasanToko/ulasan5"} />
          </Route>
        </Route>
        <Route path="/" element={<LayoutUser />}>
          <Route element={<Product_Wanita />} path={"/productWanita"}>
            <Route element={<Semua_Product_Wanita />} path={"/productWanita"} />
          </Route>
        </Route>
        <Route path="/" element={<LayoutUser />}>
          <Route element={<Informasi_Akun />} path={"/informasiAkun"}>
            <Route element={<Informasi_Akun1 />} path={"/informasiAkun"} />
            <Route
              element={<Ubah_Informasi_Akun />}
              path={"/informasiAkun/edit"}
            />
            <Route
              element={<Riwayat_Pembelian />}
              path={"/informasiAkun/riwayatPembelian"}
            />
            <Route
              element={<Riwayat_Pemesanan />}
              path={"/informasiAkun/riwayatPemesanan"}
            />
          </Route>
        </Route>
        <Route path="/masukAdmin" element={<Masuk_Admin />} />
        <Route path="/admin" element={<Admin_Page />}>
          {/* <Route path="/admin" element={<Navbar_Admin />}> */}
          <Route element={<Dashboard />} path={"/admin/dashboard"} />
          <Route element={<Kategori />} path={"/admin/kategori"} />
          <Route element={<Warna />} path={"/admin/warna"} />
          <Route element={<Ukuran />} path={"/admin/ukuran"} />
          <Route element={<Carousel />} path={"/admin/carousel"} />
          <Route element={<Pertanyaan />} path={"/admin/pertanyaan"} />
          <Route element={<Informasi />} path={"/admin/informasi"} />
          <Route element={<FAQ_Admin />} path={"/admin/faq"} />
          <Route element={<Product_Admin />} path={"/admin/barang"} />
          <Route element={<Pesanan_Admin />} path={"/admin/pesanan"} />
          <Route element={<Tambah_Product />} path={"/admin/tambahBarang"} />
          <Route element={<Edit_Product />} path={"/admin/editProduct"} />
          <Route
            element={<Detail_Pesanan_Admin />}
            path={"/admin/detailPesanan"}
          />
          <Route
            element={<Detail_Product_Admin />}
            path={"/admin/detailProduct"}
          />
          <Route
            element={<Edit_Cara_Pemesanan />}
            path={"/admin/editCaraPemesanan"}
          />
          <Route
            element={<Edit_Kebijakan_Pengembalian />}
            path={"/admin/editKebijakanPengembalian"}
          />
          <Route
            element={<Edit_Kebijakan_Privasi />}
            path={"/admin/editKebijakanPrivasi"}
          />
          <Route
            element={<Edit_Tentang_Kami />}
            path={"/admin/editTentangKami"}
          />
          <Route
            element={<Edit_Syarat_Ketentuan />}
            path={"/admin/editSyaratKetentuan"}
          />
          {/* </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default router;
