import React from "react";
import product1 from "../../img/product1.jpg";
import tentangKami from "../../img/tentangKami.jpg";

function Kontak_Kami() {
  return (
    <div className="bg-[#F6F6F6]">
      <div className="flex bg-white h-[304px] items-center justify-center">
        <img src={product1} alt="" className="object-cover h-full w-full" />
        <h1 className="text-5xl font-bold absolute text-white">Kontak Kami</h1>
      </div>
      <div className="mx-28 py-16 p-3">
        <div className="flex bg-white p-10 w-full items-center">
          <div className="w-full h-fit">
            <h1 className="text-center text-3xl font-bold">KONTAK KAMI</h1>
            <div className="flex justify-center gap-10 mt-6">
              <div className="grid justify-items-center w-1/3">
                <div>
                  <i className="fa-brands fa-instagram text-[150px]"></i>
                </div>
                <div>
                  <p className="text-center text-lg mt-5">
                    Instagaram : <br />
                    @Bikinnyamam_thrift
                  </p>
                </div>
              </div>
              <div className="grid justify-items-center w-1/3">
                <div>
                  <i className="fa-solid fa-bag-shopping text-[150px]"></i>
                </div>
                <div>
                  <p className="text-center text-lg mt-5">
                    Shoppe : <br />
                    shopee.co.id/bikinnyaman_thrift
                  </p>
                </div>
              </div>
              <div className="grid justify-items-center w-1/3">
                <div>
                  <i class="fa-brands fa-whatsapp text-[150px] "></i>
                </div>
                <div>
                  <p className="text-center text-lg mt-5">
                    WhatsApp : 085156140364 <br />
                    (Senin - Jumat : 09.00 - 16.00)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kontak_Kami;
