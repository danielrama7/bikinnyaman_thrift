import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AdminContext } from "../../context/context";
import adminAPI from "../../api/admin";

function Navbar_Admin() {
  const [state, setstate] = useState(false);
  const showDropdown = () => {
    setstate(true);
  };
  const hideDropdown = () => {
    setstate(false);
  };

  const { setAdmin } = useContext(AdminContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await adminAPI.logoutAdmin();
      if (res.data.success) {
        setAdmin(null);
        navigate("/masukAdmin");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <nav className="flex items-center justify-end bg-white p-5 pr-10 text-gray">
        <div onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
          {state ? (
            <div onMouseEnter={showDropdown}>
              {/* <NavLink to={"/masukAdmin"}> */}
              <div
                onClick={handleLogout}
                className="absolute rounded bg-white border cursor-pointer w-28 right-10 top-11 p-2"
              >
                <h1 className="text-sm">Logout</h1>
              </div>
              {/* </NavLink> */}
            </div>
          ) : null}
          <span>admin</span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar_Admin;
