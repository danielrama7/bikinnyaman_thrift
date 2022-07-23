import React from "react";
import { NavLink } from "react-router-dom";

function Dropdown_Akun() {
  return (
    <div className="dropdown-akun-menu absolute mt-60">
      <div>
        <ul className="bg-white w-fit h-fit border-2 rounded">
          <li className="mb-2 px-2 pt-2 font-bold">Profile</li>
          <hr />
          <NavLink to="/informasiAkun">
            <li className="p-2 px-2 hover:bg-[#d0cba0]">Informasi Akun</li>
          </NavLink>
          <NavLink to="/informasiAkun/riwayatPembelian">
            <li className="p-2 px-2 hover:bg-[#d0cba0]">Riwayat Pembelian</li>
          </NavLink>
          <NavLink to="/informasiAkun/riwayatPemesanan">
            <li className="p-2 px-2 hover:bg-[#d0cba0]">Riwayat Pemesanan</li>
          </NavLink>
          <NavLink to="/homePageAwal">
            <li className="p-2 px-2 hover:bg-[#d0cba0]">Keluar</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Dropdown_Akun;
