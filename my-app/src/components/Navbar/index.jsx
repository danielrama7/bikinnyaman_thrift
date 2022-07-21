import React from "react";
import logo from "../../img/logo2.png";
import "./style.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap shadow-md py-2 lg:px-12 border-solid border-t-2 border-blue-700">
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
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 hover:text-[#d0cba0] px-4 py-2 rounded"
            >
              Bantuan
            </a>
          </div>
          <div class="relative w-80 text-gray-600 lg:block hidden">
            <input
              class="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm w-full"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button type="submit" class="flex absolute right-0 top-0 mt-3 mr-2">
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
          </div>
          <div class="flex ">
            <NavLink to="/informasiAkun">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 hover:fill-current mx-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
            </NavLink>
            <NavLink to="/wishlist">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 hover:fill-current mr-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </NavLink>
            <NavLink to="/keranjangBelanja">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 hover:fill-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </button>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
