import React, { useState } from "react";
import product1 from "../../img/product1.jpg";
import product2 from "../../img/product1.1.jpg";
import product3 from "../../img/product1.2.jpg";
import product4 from "../../img/product1.3.jpg";

const miniImg = [product1, product2, product3, product4];
function Product_Detail() {
  const [activeImg, setActiveImg] = useState(product1);

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
      <div className="mx-20 mt-12 p-3">
        <div className="flex bg-white p-8">
          <div className="w-2/5 h-[525px] pr-8">
            <img
              src={activeImg}
              alt=""
              className="object-cover h-full w-full"
            />
          </div>
          <div className="w-3/5">
            <p className="font-bold text-2xl mb-2">Sweater Illinois</p>
            <p className="font-bold text-xl mb-5">Rp. 50.000</p>
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
              <button className="h-8 w-8 bg-black"></button>
              <button className="h-8 w-8 bg-blue-500"></button>
              <button className="h-8 w-8 bg-red-500"></button>
            </div>
            <div>
              <p className="font-bold text-lg mr-5 mb-2">Ukuran</p>
            </div>
            <div className="flex gap-x-4 mb-5">
              <button className="h-8 w-8 bg-White">S</button>
              <button className="h-8 w-8 bg-White">M</button>
              <button className="h-8 w-8 bg-White">L</button>
            </div>
            <div className="flex w-full justify-between">
              <button className="h-40 w-8 mr-4 bg-[#F6F6F6]">&lt;</button>
              <div className="flex w-full justify-between">
                {miniImg.map((img, i) => (
                  <div
                    key={i}
                    className="h-40 w-32"
                    onClick={() => handlerImg(img)}
                  >
                    <img
                      src={img}
                      alt=""
                      className="object-cover h-full w-full"
                    />
                  </div>
                ))}
              </div>
              <button className="h-40 w-8 bg-[#F6F6F6] ml-4">&gt;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product_Detail;
