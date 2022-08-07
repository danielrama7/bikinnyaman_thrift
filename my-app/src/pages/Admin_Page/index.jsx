import React, { useEffect } from "react";
import Navbar_Admin from "../../components/Navbar_Admin";
import logo from "../../img/logo3.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AdminContext } from "../../context/context";

function Admin_Page() {
  const { admin, setAdmin } = useContext(AdminContext);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(admin);
    const cekLogin = async () => {
      if (!admin) {
        await navigate("/masukAdmin");
      } else {
      }
    };
    cekLogin();
  }, []);
  return (
    <div className="flex min-h-screen">
      <div className="sticky top-0 bg-[#d0cba0] w-1/6 p-6 text-sm text-[#f6f6f6] h-screen">
        <div className="flex items-center mb-4">
          <img src={logo} alt="Logo" className="w-12 mr-2" />
          <span class="font-bold text-white text-xl ">Bikinnyaman</span>
        </div>
        <hr className="bg-white mb-3" />
        <div className="mb-3">
          <Link to={"/admin/dashboard"}>
            <h1>Dashboard</h1>
          </Link>
        </div>
        <hr className="bg-white mb-3" />
        <div>
          <Link to={"/admin/carousel"}>
            <h1 className="mb-2">Carousel</h1>
          </Link>
          <Link to={"/admin/pertanyaan"}>
            <h1 className="mb-2">Pertanyaan</h1>
          </Link>
          <Link to={"/admin/faq"}>
            <h1 className="mb-2">FAQ</h1>
          </Link>
          <Link to={"/admin/informasi"}>
            <h1 className="mb-3">Informasi</h1>
          </Link>
        </div>
        <hr className="bg-white mb-3" />
        <div>
          <Link to={"/admin/kategori"}>
            <h1 className="mb-2">Kategori</h1>
          </Link>
          <Link to={"/admin/warna"}>
            <h1 className="mb-2">Warna</h1>
          </Link>
          <Link to={"/admin/ukuran"}>
            <h1 className="mb-3">Ukuran</h1>
          </Link>
        </div>
        <hr className="bg-white mb-3" />
        <div>
          <Link to={"/admin/barang"}>
            <h1 className="mb-2">Barang</h1>
          </Link>
          <Link to={"/admin/pesanan"}>
            <h1 className="mb-2">Pesanan</h1>
          </Link>
          <Link to={"/admin/tambahBarang"}>
            <h1 className="mb-3">Tambah Barang</h1>
          </Link>
        </div>
      </div>
      <div className="bg-[#F6F6F6] w-5/6 ">
        <Navbar_Admin />
        <div className="p-8 pb-20">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Admin_Page;
