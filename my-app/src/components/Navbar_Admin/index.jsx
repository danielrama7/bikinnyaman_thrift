import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar_Admin() {
  const [state, setstate] = useState(false);
  const showDropdown = () => {
    setstate(true);
  };
  const hideDropdown = () => {
    setstate(false);
  };

  return (
    <div>
      <nav className="flex items-center justify-end bg-white p-5 pr-10 text-gray">
        <div onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
          {state ? (
            <div onMouseEnter={showDropdown}>
              <NavLink to={"/masukAdmin"}>
                <div className="absolute rounded bg-white border cursor-pointer w-28 right-10 top-11 p-2">
                  <h1 className="text-sm">Logout</h1>
                </div>
              </NavLink>
            </div>
          ) : null}
          <span>admin</span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar_Admin;
