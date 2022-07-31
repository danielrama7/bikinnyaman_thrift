import React, { useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import { UserContext } from "../../context/context";
import userAPI from "../../api/user";

function Dropdown_Akun() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await userAPI.logout();
      if (res.data.success) {
        setUser(null);
        navigate("/homePage");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="dropdown-akun-menu absolute mt-60">
      <div>
        <ul className="bg-white w-44 h-fit border-2 rounded">
          <li className="mb-2 px-2 pt-2 font-bold">Profile</li>
          <hr />
          <NavLink to="/informasiAkun">
            <li className="p-2 px-2 hover:bg-[#d0cba0] hover:font-bold hover:text-white duration-500">
              Informasi Akun
            </li>
          </NavLink>
          <NavLink to="/informasiAkun/riwayatPembelian">
            <li className="p-2 px-2 hover:bg-[#d0cba0] hover:font-bold hover:text-white duration-500">
              Riwayat Pembelian
            </li>
          </NavLink>
          <NavLink to="/informasiAkun/riwayatPemesanan">
            <li className="p-2 px-2 hover:bg-[#d0cba0] hover:font-bold hover:text-white duration-500">
              Riwayat Pemesanan
            </li>
          </NavLink>
          <li
            onClick={handleLogout}
            className="p-2 px-2 hover:bg-[#d0cba0] hover:font-bold hover:text-white duration-500 cursor-pointer"
          >
            Keluar
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dropdown_Akun;
