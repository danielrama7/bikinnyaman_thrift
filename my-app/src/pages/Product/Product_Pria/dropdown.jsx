import React, { useState } from "react";
import { createPopper } from "@popperjs/core";

const Dropdown = ({ color }) => {
  const [activeUrutkan, setActiveUrutkan] = useState("Urut Berdasarkan");

  const handlerUrutkan = (hasilUrutkan) => {
    setActiveUrutkan(hasilUrutkan);
  };
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors
  let bgColor;
  color === "white" ? (bgColor = "bg-slate-700") : (bgColor = "bg-[#d0cba0]");
  return (
    <>
      <div className="flex w-full justify-end items-center">
        <div>
          <div className="relative w-full mr-4">
            <button
              className={
                "w-44 text-white font-bold text-[15px] px-6 py-2 rounded shadow hover:shadow-lg ease-linear transition-all duration-150 " +
                bgColor
              }
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              {activeUrutkan}
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                (color === "white" ? "bg-white " : bgColor + " ") +
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
              }
              style={{ minWidth: "12rem" }}
            >
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-slate-700" : "text-white")
                }
                onClick={() => handlerUrutkan("Produk Terbaru")}
              >
                Produk Terbaru
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-slate-700" : "text-white")
                }
                onClick={() => handlerUrutkan("Harga Terendah")}
              >
                Harga Terendah
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-slate-700" : "text-white")
                }
                onClick={() => handlerUrutkan("Harga Tertinggi")}
              >
                Harga Tertinggi
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
