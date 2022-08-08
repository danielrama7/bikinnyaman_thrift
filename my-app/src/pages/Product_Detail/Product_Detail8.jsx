import React, { useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";
import product1 from "../../img/productPria/Kemeja Kotak Hitam Garis Putih Lengan Pendek Oversize M 80rb/product2.jpeg";
import product2 from "../../img/productPria/Kemeja Kotak Hitam Garis Putih Lengan Pendek Oversize M 80rb/product2.1.jpeg";
import product3 from "../../img/productPria/Kemeja Kotak Hitam Garis Putih Lengan Pendek Oversize M 80rb/product2.2.jpeg";
import product4 from "../../img/productPria/Kemeja Kotak Hitam Garis Putih Lengan Pendek Oversize M 80rb/product2.3.jpeg";
import product5 from "../../img/productPria/Kemeja Kotak Hitam Garis Putih Lengan Pendek Oversize M 80rb/product2.4.jpeg";
import productLainnya1 from "../../img/productPria/Jaket ATHLEISURE Putih Kain Despo L 85rb/product1.jpeg";
import productLainnya2 from "../../img/productPria/Sweater Simple But Significant Soft Colours M 105rb/product3.jpeg";
import { UserContext } from "../../context/context";

import "swiper/css";
import "swiper/css/navigation";

import "./style.css";

import { Navigation } from "swiper";

const miniImg = [product1, product2, product3, product4, product5];
function Product_Detail8() {
  const [activeImg, setActiveImg] = useState(product1);
  const { user, setUser } = useContext(UserContext);

  const handlerImg = (img) => {
    setActiveImg(img);
  };
  return (
    <div className="bg-[#F6F6F6]">
      <div className="flex bg-white h-[304px] items-center justify-center">
        <img src={product1} alt="" className="object-cover h-full w-full" />
        <h1 className="text-5xl font-bold absolute text-white">
          Detail Produk
        </h1>
      </div>
      <div className="mx-20 py-16 p-3">
        <div className="flex bg-white p-8 rounded">
          <div className="w-2/5 h-[525px] pr-8">
            <img
              src={activeImg}
              alt=""
              className="object-cover h-full w-full rounded"
            />
          </div>
          <div className="w-3/5">
            <p className="font-bold text-2xl mb-2">
              Kemeja Kotak Hitam Garis Putih Lengan Pendek Oversize
            </p>
            <p className="font-bold text-xl mb-5">Rp. 80.000</p>
            <p className="mb-5 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              accumsan egestas elese ifend. Phasellus a felis at est bibendum
              feugiat ut eget eni Praesent et messages in con sectetur posuere
              dolor non.
            </p>
            <div>
              <p className="font-bold text-lg mr-5 mb-2">Warna</p>
            </div>
            <div className="flex gap-x-4 mb-5">
              <button className="h-8 w-8 bg-black border"></button>
            </div>
            <div>
              <p className="font-bold text-lg mr-5 mb-2">Ukuran</p>
            </div>
            <div className="flex gap-x-4 mb-5">
              <button className="h-8 w-8 bg-White">M</button>
            </div>
            <div className="flex justify-between mb-5">
              <div className="w-full pr-4">
                <NavLink
                  to={user ? "/keranjangBelanja" : "/login"}
                  className="w-full"
                >
                  <button className="font-bold hover:text-white p-2 border-2 rounded w-full hover:bg-[#d0cba0] hover:border-transparent duration-500">
                    Tambahkan ke Keranjang
                  </button>
                </NavLink>
              </div>
              <div className="w-full">
                <NavLink to={user ? "/wishlist" : "/login"} className="w-full">
                  <button className="font-bold hover:text-white p-2 border-2 rounded w-full hover:bg-[#d0cba0] hover:border-transparent duration-500">
                    Tambahkan ke Wishlist
                  </button>
                </NavLink>
              </div>
            </div>
            <div>
              <Swiper
                slidesPerView={4}
                spaceBetween={-30}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                {miniImg.map((img, i) => (
                  <SwiperSlide>
                    <div
                      key={i}
                      className="h-40 w-32 cursor-pointer"
                      onClick={() => handlerImg(img)}
                    >
                      <img
                        src={img}
                        alt=""
                        className="object-cover h-full w-full rounded"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-white p-8 rounded">
          <div>
            <h1 className="font-bold text-2xl mb-2">Produk Lainnya</h1>
          </div>
          <div className="flex justify-between">
            <NavLink to="/productDetail7" className="w-1/4">
              <div className="hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-500 h-[360px] w-full p-4">
                <div className="h-60">
                  <img
                    src={productLainnya1}
                    alt=""
                    className="object-cover w-full h-full"
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
            <NavLink to="/productDetail9" className="w-1/4">
              <div className="hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-500 h-[360px] w-full p-4">
                <div className="h-60">
                  <img
                    src={productLainnya2}
                    alt=""
                    className="object-cover w-full h-full"
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
            <NavLink to="/productDetail7" className="w-1/4">
              <div className="hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-500 h-[360px] w-full p-4">
                <div className="h-60">
                  <img
                    src={productLainnya1}
                    alt=""
                    className="object-cover w-full h-full"
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
            <NavLink to="/productDetail9" className="w-1/4">
              <div className="hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-500 h-[360px] w-full p-4">
                <div className="h-60">
                  <img
                    src={productLainnya2}
                    alt=""
                    className="object-cover w-full h-full"
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product_Detail8;
