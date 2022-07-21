import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LayoutUser from "../components/Layout";
import Informasi_Akun from "../pages/Informasi_Akun";
import Informasi_Akun1 from "../pages/Informasi_Akun/Informasi_Akun1";
import Riwayat_Pembelian from "../pages/Informasi_Akun/Riwayat_Pembelian";
import Riwayat_Pemesanan from "../pages/Informasi_Akun/Riwayat_Pemesanan";
import Ubah_Informasi_Akun from "../pages/Informasi_Akun/Ubah_Informasi_Akun";
import { routes } from "./routes";

function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/homePage" />} />
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
