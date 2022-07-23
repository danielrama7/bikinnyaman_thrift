import React from "react";
import Navbar_Awal from "../Navbar/Navbar_Awal";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

function Layout_Awal() {
  return (
    <>
      <main>
        <Navbar_Awal />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default Layout_Awal;
