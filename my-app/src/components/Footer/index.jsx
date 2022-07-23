import React from "react";
import { NavLink } from "react-router-dom";
import instagram from "./../../icon/instagram.png";
import shoppe from "./../../icon/shoppe.png";
import whatsapp from "./../../icon/whatsapp.png";

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
              <div class="flex">
                <div class="px-2 flex flex-col">
                  <span class="text-xl lg:text-xl leading-none text-gray-50 mb-5">
                    Kontak Kami
                  </span>
                  <div class="flex items-center justify-between w-32">
                    <div className="h-8 w-8">
                      <a href="https://www.instagram.com/bikinnyaman_thrift/">
                        <img src={instagram} alt="" className="" />
                      </a>
                    </div>
                    <div className="h-8 w-8">
                      <a href="https://shopee.co.id/bikinnyaman_thrift">
                        <img src={shoppe} alt="" className="" />
                      </a>
                    </div>
                    <div className="h-8 w-8">
                      <a href="https://wa.me/081313283116">
                        <img src={whatsapp} alt="" className="" />
                      </a>
                    </div>
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
