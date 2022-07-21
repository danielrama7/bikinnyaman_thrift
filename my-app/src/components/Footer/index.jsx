import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="">
      <footer id="footer" class="relative bg-[#282517] py-10">
        <div>
          <div class="mx-auto container px-4 xl:px-12">
            <div class="lg:flex">
              <div class="w-full lg:w-1/2 mb-16 lg:mb-0 flex">
                <div class="w-full lg:w-1/2 px-6">
                  <ul>
                    <li class="mb-5">
                      <span class="focus:outline-none focus:underline text-xl lg:text-xl leading-none text-gray-50">
                        Informasi Lainnya
                      </span>
                    </li>
                    <li>
                      <NavLink
                        className="text-xs lg:text-sm text-gray-50"
                        to="/tentangKami"
                      >
                        Tentang Kami
                      </NavLink>
                    </li>
                    <li class="mt-6">
                      <NavLink
                        className="text-xs lg:text-sm text-gray-50"
                        to="/syaratKetentuan"
                      >
                        Syarat & Ketentuan
                      </NavLink>
                    </li>
                    <li class="mt-6">
                      <NavLink
                        className="text-xs lg:text-sm text-gray-50"
                        to="/kebijakanPrivasi"
                      >
                        Kebijakan Privasi
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div class="w-full lg:w-1/2 px-6">
                  <ul>
                    <li class="mb-5">
                      <span class="focus:outline-none focus:underline text-xl lg:text-xl leading-none text-gray-50">
                        Bantuan
                      </span>
                    </li>
                    <li>
                      <NavLink
                        className="text-xs lg:text-sm text-gray-50"
                        to="/faq"
                      >
                        FAQ
                      </NavLink>
                    </li>
                    <li class="mt-6">
                      <NavLink
                        className="text-xs lg:text-sm text-gray-50"
                        to="/kebijakanPengembalian"
                      >
                        Kebijakan Pengembalian
                      </NavLink>
                    </li>
                    <li class="mt-6">
                      <NavLink
                        className="text-xs lg:text-sm text-gray-50"
                        to="/kontakKami"
                      >
                        Kontak Kami
                      </NavLink>
                    </li>
                    <li class="mt-6">
                      <NavLink
                        className="text-xs lg:text-sm text-gray-50"
                        to="/caraPemesanan"
                      >
                        Cara Pemesanan
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="w-full lg:w-1/2 flex">
                <div class="w-full lg:w-1/2 px-6 flex flex-col">
                  <span class="focus:outline-none focus:underline text-xl lg:text-xl leading-none text-gray-50 mb-5">
                    Kontak Kami
                  </span>
                  <div class="flex items-center mb-6">
                    <a aria-label="Github" href="javascript:void(0)">
                      <div class="text-gray-800 dark:text-gray-50 cursor-pointer hover:text-brand dark:hover:text-brand">
                        <svg
                          class="footer-icon feather feather-github"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </div>{" "}
                    </a>
                    <a
                      aria-label="Twitter"
                      href="javascript:void(0)"
                      class="ml-4"
                    >
                      <div class="">
                        <svg
                          class="footer-icon feather feather-twitter text-gray-800 dark:text-gray-50 cursor-pointer hover:text-brand dark:hover:text-brand"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
