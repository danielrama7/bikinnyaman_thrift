import React from "react";

function Kontak_Kami() {
  return (
    <div className="h-screen bg-indigo-50 justify-center pt-20 px-12">
      <h1 className="text-center text-5xl text-gray-800 font-bold ">
        Kontak Kami
      </h1>
      <div className="flex flex-row justify-center mt-20">
        <div className="grid w-96 justify-items-center">
          <div>
            <i className="fa-brands fa-instagram text-[200px]"></i>
          </div>
          <div>
            <p className="text-center text-2xl mt-5">
              Instagaram : <br />
              @Bikinnyamam_thrift
            </p>
          </div>
        </div>
        <div className="grid w-96 justify-items-center">
          <div>
            <i className="fa-solid fa-bag-shopping text-[200px]"></i>
          </div>
          <div>
            <p className="text-center text-2xl mt-5">
              Shoppe : <br />
              shopee.co.id/bikinnyaman_thrift
            </p>
          </div>
        </div>
        <div className="grid w-96 justify-items-center">
          <div>
            <i class="fa-brands fa-whatsapp text-[200px] "></i>
          </div>
          <div>
            <p className="text-center text-2xl mt-5">
              WhatsApp : 085156140364 <br />
              (Senin - Jumat : 09.00 - 16.00)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kontak_Kami;
