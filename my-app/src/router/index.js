import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LayoutUser from "../components/Layout";
import Layout_Awal from "../components/Layout/Layout_Awal";
import ScrollToTop from "../components/ScrollToTop";
import Home_Page_Awal from "../pages/Home_Page/Home_Page_Awal";
import Informasi_Akun from "../pages/Informasi_Akun";
import Informasi_Akun1 from "../pages/Informasi_Akun/Informasi_Akun1";
import Riwayat_Pembelian from "../pages/Informasi_Akun/Riwayat_Pembelian";
import Riwayat_Pemesanan from "../pages/Informasi_Akun/Riwayat_Pemesanan";
import Ubah_Informasi_Akun from "../pages/Informasi_Akun/Ubah_Informasi_Akun";
import Login from "../pages/Login";
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
      </Routes>
    </BrowserRouter>
  );
}

export default router;
