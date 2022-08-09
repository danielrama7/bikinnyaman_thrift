import product1 from "../../img/product1.jpg";
import product2 from "../../img/productWanita/Poliester Jaket Krem Sogetto (L)/product2.jpg";
import product3 from "../../img/productWanita/Poliester Kyuck Goo Jaket Putih (L)/product3.jpg";
import product4 from "../../img/productWanita/Crewneck Hanes Herway Katun Abu-Abu (XL 65rb)/product4.jpg";
import product5 from "../../img/productWanita/Fleece Sweater Biru (XL 90rb)/product5.jpg";
import product6 from "../../img/productWanita/Poliester Wol Kemeja Coklat (S 50rb)/product6.jpg";
import product7 from "../../img/productPria/Jaket ATHLEISURE Putih Kain Despo L 85rb/product1.jpeg";
import product8 from "../../img/productPria/Kemeja Kotak Hitam Garis Putih Lengan Pendek Oversize M 80rb/product2.jpeg";
import product9 from "../../img/productPria/Sweater Simple But Significant Soft Colours M 105rb/product3.jpeg";
import React from "react";
import pria from "../../img/pria.png";
import wanita from "../../img/wanita.png";
import carousel1 from "../../img/carousel1.png";
import carousel2 from "../../img/carousel2.png";
import carousel3 from "../../img/carousel3.png";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import Ulasan_Home_Page from "./Ulasan_Home_Page";

function Home_Page() {
  return (
    <div>
      <div className="mx-20 my-12 p-3">
        <div className="flex space-x-12 mb-16 h-[528px]">
          <div className="grid space-y-12">
            <div className="bg-gray-200 h-60 w-72">
              <img src={pria} alt="" className="object-cover w-full h-full" />
            </div>
            <div className="bg-gray-200 h-60 w-72">
              <img src={wanita} alt="" className="object-cover w-full h-full" />
            </div>
          </div>
          <Swiper
            pagination={{
              clickable: true,
            }}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper sectionThumbnail"
          >
            <SwiperSlide>
              <div className="bg-gray-200 w-full h-full">
                <img
                  src={carousel1}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gray-200 w-full h-full">
                <img
                  src={carousel2}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gray-200 w-full h-full">
                <img
                  src={carousel3}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <h1 className="text-3xl font-bold text-center mb-8">Produk Kami</h1>
        <h1 className="text-xl font-bold ml-7">Pakaian Wanita</h1>
        <div className="w-full h-[440px]">
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper1"
          >
            <SwiperSlide>
              <NavLink to="/productDetail1">
                <div className="rounded-md hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-500 h-[380px] w-[276px] p-4">
                  <div className="h-[244px]">
                    <img
                      src={product1}
                      alt=""
                      className="object-cover w-60 h-60"
                    />
                  </div>
                  <div className="mt-4 text-left ">
                    <p>Sweater / Crewneck Pastel Mint Blue GAP</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-bold">Rp. 65.000</p>
                  </div>
                </div>
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink to="/productDetail2">
                <div className="rounded-md hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-500 h-[380px] w-[276px] p-4">
                  <div className="h-[244px]">
                    <img
                      src={product2}
                      alt=""
                      className="object-cover w-60 h-60"
                    />
                  </div>
                  <div className="mt-4 text-left">
                    <p>Poliester Jaket Krem Sogetto</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-bold">Rp. 100.000</p>
                  </div>
                </div>
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink to="/productDetail3">
                <div className="rounded-md hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-500 h-[380px] w-[276px] p-4">
                  <div className="h-[244px]">
                    <img
                      src={product3}
                      alt=""
                      className="object-cover w-60 h-60"
                    />
                  </div>
                  <div className="mt-4 text-left">
                    <p>Poliester Kyuck Goo Jaket Putih</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-bold">Rp. 100.000</p>
                  </div>
                </div>
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink to="/productDetail4">
                <div className="rounded-md hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-500 h-[380px] w-[276px] p-4">
                  <div className="h-[244px]">
                    <img
                      src={product4}
                      alt=""
                      className="object-cover w-60 h-60"
                    />
                  </div>
                  <div className="mt-4 text-left">
                    <p>Crewneck Hanes Herway Katun Abu-Abu</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-bold">Rp. 65.000</p>
                  </div>
                </div>
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink to="/productDetail5">
                <div className="rounded-md hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-500 h-[380px] w-[276px] p-4">
                  <div className="h-[244px]">
                    <img
                      src={product5}
                      alt=""
                      className="object-cover w-60 h-60"
                    />
                  </div>
                  <div className="mt-4 text-left">
                    <p>Fleece Sweater Biru</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-bold">Rp. 90.000</p>
                  </div>
                </div>
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink to="/productDetail6">
                <div className="rounded-md hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-500 h-[380px] w-[276px] p-4">
                  <div className="h-[244px]">
                    <img
                      src={product6}
                      alt=""
                      className="object-cover w-60 h-60"
                    />
                  </div>
                  <div className="mt-4 text-left">
                    <p>Poliester Wol Kemeja Coklat</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-bold">Rp. 50.000</p>
                  </div>
                </div>
              </NavLink>
            </SwiperSlide>
          </Swiper>
        </div>
        <h1 className="text-xl font-bold ml-7">Pakaian Pria</h1>
        <div className="w-full h-[440px]">
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <NavLink to="/productDetail7">
                <div className="rounded-md hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-500 h-[380px] w-[276px] p-4">
                  <div className="h-[244px]">
                    <img
                      src={product7}
                      alt=""
                      className="object-cover w-60 h-60"
                    />
                  </div>
                  <div className="mt-4 text-left">
                    <p>Jaket ATHLEISURE Putih Kain Despo</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-bold">Rp. 85.000</p>
                  </div>
                </div>
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink to="/productDetail8">
                <div className="rounded-md hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-500 h-[380px] w-[276px] p-4">
                  <div className="h-[244px]">
                    <img
                      src={product8}
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="mt-4 text-left">
                    <p>Kemeja Kotak Hitam Garis Putih Lengan Pendek</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-bold">Rp. 80.000</p>
                  </div>
                </div>
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink to="/productDetail9">
                <div className="rounded-md hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-500 h-[380px] w-[276px] p-4">
                  <div className="h-[244px]">
                    <img
                      src={product9}
                      alt=""
                      className="object-cover w-60 h-60"
                    />
                  </div>
                  <div className="mt-4 text-left">
                    <p>Sweater Simple But Significant Soft Colours</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-bold">Rp. 105.000</p>
                  </div>
                </div>
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink to="/productDetail7">
                <div className="rounded-md hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-500 h-[380px] w-[276px] p-4">
                  <div className="h-[244px]">
                    <img
                      src={product7}
                      alt=""
                      className="object-cover w-60 h-60"
                    />
                  </div>
                  <div className="mt-4 text-left">
                    <p>Jaket ATHLEISURE Putih Kain Despo</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-bold">Rp. 85.000</p>
                  </div>
                </div>
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink to="/productDetail8">
                <div className="rounded-md hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-500 h-[380px] w-[276px] p-4">
                  <div className="h-[244px]">
                    <img
                      src={product8}
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="mt-4 text-left">
                    <p>Kemeja Kotak Hitam Garis Putih Lengan Pendek</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-bold">Rp. 80.000</p>
                  </div>
                </div>
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink to="/productDetail9">
                <div className="rounded-md hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-500 h-[380px] w-[276px] p-4">
                  <div className="h-[244px]">
                    <img
                      src={product9}
                      alt=""
                      className="object-cover w-60 h-60"
                    />
                  </div>
                  <div className="mt-4 text-left">
                    <p>Sweater Simple But Significant Soft Colours</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-bold">Rp. 105.000</p>
                  </div>
                </div>
              </NavLink>
            </SwiperSlide>
          </Swiper>
        </div>
        <h1 className="text-3xl font-bold text-center mb-10">Ulasan Toko</h1>
        <div>
          <Ulasan_Home_Page />
        </div>
      </div>
    </div>
  );
}

export default Home_Page;
