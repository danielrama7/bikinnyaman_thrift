import React from "react";
import { Outlet, useLocation, NavLink, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

function LayoutUser() {
  return (
    <>
      <main>
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default LayoutUser;
