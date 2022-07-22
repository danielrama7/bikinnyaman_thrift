import React from "react";
import product1 from "../../img/product1.jpg";
import { Rating } from "react-simple-star-rating";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { NavLink } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "./style.css";

function Ulasan_Home_Page() {
  return (
    <div className="w-full">
      <Swiper
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper sectionThumbnail2"
      >
        <SwiperSlide>
          <div className="flex mb-8 justify-start w-full">
            <div className="w-52 h-52 mr-6">
              <img
                src={product1}
                alt=""
                className="object-cover h-full w-full"
              />
            </div>
            <div className="grid grow justify-start text-left">
              <div>
                <h1 className="font-bold text-3xl">
                  Sweater / Crewneck Pastel Mint Blue GAP
                </h1>
              </div>
              <div>
                <Rating size={30} initialValue={5} readonly={true} />
              </div>
              <div>
                <h1 className="text-sm text-gray-400 mb-2 ">
                  Putri, 22-07-2022 14.23
                </h1>
              </div>
              <div>
                <h1 className="font-bold text-2xl">Produk sesuai</h1>
              </div>
              <div>
                <p className="text-xl">
                  Pakaian nyaman dipakai, kualitas masih bagus dan oke banget
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex mb-8 justify-start w-full">
            <div className="w-52 h-52 mr-6">
              <img
                src={product1}
                alt=""
                className="object-cover h-full w-full"
              />
            </div>
            <div className="grid grow justify-start text-left">
              <div>
                <h1 className="font-bold text-3xl">
                  Sweater / Crewneck Pastel Mint Blue GAP
                </h1>
              </div>
              <div>
                <Rating size={30} initialValue={5} readonly={true} />
              </div>
              <div>
                <h1 className="text-sm text-gray-400 mb-">
                  Putri, 22-07-2022 14.23
                </h1>
              </div>
              <div>
                <h1 className="font-bold text-2xl">Produk sesuai</h1>
              </div>
              <div>
                <p className="text-xl">
                  Pakaian nyaman dipakai, kualitas masih bagus dan oke banget
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex mb-8 justify-start w-full">
            <div className="w-52 h-52 mr-6">
              <img
                src={product1}
                alt=""
                className="object-cover h-full w-full"
              />
            </div>
            <div className="grid grow justify-start text-left">
              <div>
                <h1 className="font-bold text-3xl">
                  Sweater / Crewneck Pastel Mint Blue GAP
                </h1>
              </div>
              <div>
                <Rating size={30} initialValue={5} readonly={true} />
              </div>
              <div>
                <h1 className="text-sm text-gray-400 mb-2">
                  Putri, 22-07-2022 14.23
                </h1>
              </div>
              <div>
                <h1 className="font-bold text-2xl">Produk sesuai</h1>
              </div>
              <div>
                <p className="text-xl">
                  Pakaian nyaman dipakai, kualitas masih bagus dan oke banget
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-center mt-4">
        <NavLink to="/ulasanToko">
          <button className="p-2 w-44 bg-[#F6F6F6] rounded">
            Lihat Selengkapnya
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Ulasan_Home_Page;
