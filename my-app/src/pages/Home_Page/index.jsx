import product1 from "../../img/product1.jpg";
import React from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

function Home_Page() {
  return (
    <div>
      <div className="mx-20 my-12 p-3">
        <div className="flex space-x-12 mb-16">
          <div className="grid space-y-12">
            <div className="bg-red-100 h-60 w-72">Pria</div>
            <div className="bg-red-100 h-60 w-72">Wanita</div>
          </div>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper sectionThumbnail"
          >
            <SwiperSlide>
              <div className="bg-blue-100 w-full h-full">Carousel 1</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-blue-100 w-full h-full">Carousel 2</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-blue-100 w-full h-full">Carousel 3</div>
            </SwiperSlide>
          </Swiper>
        </div>
        <h1 className="text-3xl font-bold text-center mb-8">Produk Kami</h1>
        <h1 className="text-xl font-bold mb-4">Pakaian Wanita</h1>
        <div className="mb-12 w-full">
          <Swiper
            slidesPerView={4}
            spaceBetween={4}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper1"
          >
            <SwiperSlide>
              <div className="rounded-lg hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-500 h-[360px] w-72 p-4">
                <div className="h-64">
                  <img src={product1} alt="" className="object-cover" />
                </div>
                <div className="mt-4 text-left">
                  <p>Sweater Illionis</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-bold">Rp. 50.000</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-lg hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-700 h-[360px] w-72 p-4">
                <div className="h-64">
                  <img src={product1} alt="" className="object-cover" />
                </div>
                <div className="mt-4 text-left">
                  <p>Sweater Illionis</p>
                </div>
                <div className="flex justify-between ">
                  <p className="font-bold">Rp. 50.000</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-lg hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-700 h-[360px] w-72 p-4">
                <div className="h-64">
                  <img src={product1} alt="" className="object-cover" />
                </div>
                <div className="mt-4 text-left">
                  <p>Sweater Illionis</p>
                </div>
                <div className="flex justify-between ">
                  <p className="font-bold">Rp. 50.000</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-lg hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-700 h-[360px] w-72 p-4">
                <div className="h-64">
                  <img src={product1} alt="" className="object-cover" />
                </div>
                <div className="mt-4 text-left">
                  <p>Sweater Illionis</p>
                </div>
                <div className="flex justify-between ">
                  <p className="font-bold">Rp. 50.000</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-lg hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-700 h-[360px] w-72 p-4">
                <div className="h-64">
                  <img src={product1} alt="" className="object-cover" />
                </div>
                <div className="mt-4 text-left">
                  <p>Sweater Illionis</p>
                </div>
                <div className="flex justify-between ">
                  <p className="font-bold">Rp. 50.000</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-lg hover:shadow-[3px_10px_35px_-5px_rgba(0,0,0,0.2)] duration-700 h-[360px] w-72 p-4">
                <div className="h-64">
                  <img src={product1} alt="" className="object-cover" />
                </div>
                <div className="mt-4 text-left">
                  <p>Sweater Illionis</p>
                </div>
                <div className="flex justify-between ">
                  <p className="font-bold">Rp. 50.000</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <h1 className="text-xl font-bold mb-4">Pakaian Pria</h1>
        <div className="w-full">
          <Swiper
            slidesPerView={4}
            spaceBetween={16}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="bg-red-100 h-[360px] w-72">aaa</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-red-100 h-[360px] w-72">aaa</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-red-100 h-[360px] w-72">aaa</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-red-100 h-[360px] w-72">aaa</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-red-100 h-[360px] w-72">aaa</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-red-100 h-[360px] w-72">aaa</div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Home_Page;
