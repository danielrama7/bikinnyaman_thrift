import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import userAPI from "../../api/user";
import { UserContext } from "../../context/context";

function Informasi_Akun1() {
  const [detail, setDetail] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const id = user?.id;

  useEffect(() => {
    const fetchDetailUser = async () => {
      const res = await userAPI.getDetailUser(id);
      setDetail(res.data.data);
    };
    fetchDetailUser();
  }, [id]);
  return (
    <div>
      <div className="flex justify-center mb-6">
        <h1 className="font-bold text-3xl">Informasi Akun</h1>
      </div>
      <div className="flex mb-4">
        <div className="w-1/4">Nama Lengkap</div>
        <div className="w-3/4">
          {detail.namaLengkap ? detail.namaLengkap : "-"}
        </div>
      </div>
      <div className="flex mb-4">
        <div className="w-1/4">Email</div>
        <div className="w-3/4">{detail.email ? detail.email : "-"}</div>
      </div>
      <div className="flex mb-4">
        <div className="w-1/4">Alamat</div>
        <div className="w-3/4">
          {detail.alamat
            ? `${detail.alamat}, ${detail.kelurahan}, ${detail.kecamatan}, ${detail.kabupatenKota}, ${detail.provinsi}, ${detail.kodePos}`
            : "-"}
        </div>
      </div>
      <div className="flex mb-6">
        <div className="w-1/4">No. Telepon</div>
        <div className="w-3/4">{detail.noTelp ? detail.noTelp : "-"}</div>
      </div>
      <div>
        <Link to={"/informasiAkun/edit"}>
          <div className="flex justify-end">
            <button className="w-3/4 bg-[#d0cba0] border-transparent rounded p-1 font-bold text-white">
              Ubah
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Informasi_Akun1;
