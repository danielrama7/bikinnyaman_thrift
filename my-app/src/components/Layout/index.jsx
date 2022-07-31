import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { UserContext } from "../../context/context";
import Navbar_Awal from "../Navbar/Navbar_Awal";

function LayoutUser() {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <main>
        {user ? <Navbar /> : <Navbar_Awal />}
        {/* <Navbar /> */}
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default LayoutUser;
