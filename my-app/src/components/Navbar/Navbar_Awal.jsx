import React from "react";
import logo from "../../img/logo2.png";
import "./style.css";
import { NavLink } from "react-router-dom";

function Navbar_Awal() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="sticky top-0 z-10 bg-white">
      <nav class="flex items-center justify-between flex-wrap shadow-md py-2 lg:px-12 border-transparent border-t-2">
        <div class="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
          <NavLink to="/homePage">
            <div class="flex items-center flex-shrink-0 text-gray-800 mr-16">
              <img src={logo} alt="Logo" width={70} class="mr-3" />
              <span class="font-semibold text-xl tracking-tight">
                Bikinnyaman
              </span>
            </div>
          </NavLink>
          <div class="block lg:hidden ">
            <button
              id="nav"
              class="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700"
            >
              <svg
                class="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>

        <div class="w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
          <div class="text-md font-bold text-[#282517] lg:flex-grow">
            <NavLink to="/productWanita">
              <a class="block mt-4 lg:inline-block lg:mt-0 hover:text-[#d0cba0] px-4 py-2 rounded">
                Wanita
              </a>
            </NavLink>
            <NavLink to="/productPria">
              <a class=" block mt-4 lg:inline-block lg:mt-0 hover:text-[#d0cba0] px-4 py-2 rounded">
                Pria
              </a>
            </NavLink>
            <button
              onClick={scrollToBottom}
              class="block mt-4 lg:inline-block lg:mt-0 hover:text-[#d0cba0] px-4 py-2 rounded font-bold"
            >
              Bantuan
            </button>
          </div>
          <div class="relative w-80 text-gray-600 lg:block hidden">
            <input
              class="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm w-full"
              type="search"
              id="search"
              name="search"
              placeholder="Search"
            />
            <NavLink to="/hasilPencarian">
              <button
                type="submit"
                class="flex absolute right-0 top-0 mt-3 mr-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="gray"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </NavLink>
          </div>
          <div class="flex ml-8 items-center mr-3">
            <NavLink to="/login">
              <button className="hover:bg-white hover:text-black hover:border-[#d0cba0] font-bold w-20 p-2 bg-[#d0cba0] text-white border-[#d0cba0] border rounded-md">
                Masuk
              </button>
            </NavLink>
            <NavLink to="/register">
              <button className="underline underline-offset-4 w-20 mr-2 pl-2 border-[#d0cba0] font-bold rounded-md">
                Daftar
              </button>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar_Awal;
