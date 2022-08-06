import React, { useState } from "react";
import jaket from "../../img/ulasan.jpg";
import { Rating } from "react-simple-star-rating";
import product1 from "../../img/product1.jpg";
import { NavLink } from "react-router-dom";

function Ulasan() {
  const [rating, setRating] = useState(0); // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    // other logic
  };
  return (
    <div className="bg-[#F6F6F6] pb-10">
      <div className="flex bg-white h-[304px] items-center justify-center">
        <img src={product1} alt="" className="object-cover h-full w-full" />
        <h1 className="text-5xl font-bold absolute text-white">
          Menulis Ulasan
        </h1>
      </div>
      <div className="mx-20 mt-12 p-3">
        <div className="bg-white p-10">
          <h1 className="text-3xl font-bold mb-4">
            Sweater / Crewneck Pastel Mint Blue GAP
          </h1>
          <div className="flex items-center justify-between">
            <div className="w-2/3 mr-6">
              <div className="w-full h-80 border-2 py-4 px-6">
                <h1 className="text-2xl font-bold mb-4">Menulis Ulasan</h1>
                <div className="flex mb-4 items-center">
                  <div className="w-1/5">
                    <h1>Rating</h1>
                  </div>
                  <div className="w-4/5">
                    <Rating
                      onClick={handleRating}
                      ratingValue={rating}
                      size={25}
                    />
                  </div>
                </div>
                <div className="flex mb-4 items-center">
                  <div className="w-1/5">
                    <h1>Judul</h1>
                  </div>
                  <div className="w-4/5">
                    <input
                      type="text"
                      placeholder="Judul Ulasan"
                      className="w-full h-full p-1 px-2 border rounded"
                    />
                  </div>
                </div>
                <div className="flex mb-4 ">
                  <div className="w-1/5">
                    <h1>Ulasan</h1>
                  </div>
                  <div className="w-4/5 h-20">
                    <textarea
                      id="ulasan"
                      placeholder="Ulasan"
                      className="w-full h-full p-1 px-2 border rounded"
                    ></textarea>
                  </div>
                </div>
                <div>
                  <NavLink to={"/ulasanToko"}>
                    <button className="bg-[#d0cba0] font-bold text-white justif-center w-full p-1 border rounded">
                      Kirim
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="flex bg-red-100">
              <img
                src={product1}
                alt="Ulasan"
                className="object-cover h-80 w-80"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ulasan;
