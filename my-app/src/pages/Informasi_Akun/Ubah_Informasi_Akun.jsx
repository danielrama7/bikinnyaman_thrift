import { Link, Outlet } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import userAPI from "../../api/user";
import { UserContext } from "../../context/context";

function Ubah_Informasi_Akun() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [detail, setDetail] = useState([]);
  const id = user?.id;

  useEffect(() => {
    const fetchDetailUser = async () => {
      const res = await userAPI.getDetailUser(id);
      setDetail(res.data.data);
      reset(res.data.data);
    };
    fetchDetailUser();
  }, [id]);

  const preloadValues = {
    namaLengkap: detail?.namaLengkap,
    alamat: detail?.alamat,
    provinsi: detail?.provinsi,
    kabupatenKota: detail?.kabupatenKota,
    kecamatan: detail?.kecamatan,
    kelurahan: detail?.kelurahan,
    kodePos: detail?.kodePos,
    noTelp: detail?.noTelp,
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: preloadValues,
  });
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");

  const submitForm = async (data) => {
    try {
      // setLoading(true);
      console.log(data);
      const res = await userAPI.editInformasiAkun(data);
      if (res.data.success) {
        setAlert(false);
        navigate("/informasiAkun");
        // setLoading(false);
      }
    } catch (error) {
      // setLoading(false);

      setMessage(error.response.data.message);
      setAlert(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="flex justify-center mb-6">
          <h1 className="font-bold text-3xl">Ubah Informasi Akun</h1>
        </div>
        <div className="flex mb-4 items-center">
          <div className="w-1/4">Nama Lengkap</div>
          <div className="w-3/4">
            <input
              type="text"
              name="namaLengkap"
              placeholder="Nama Lengkap"
              className="border p-1 px-2 w-full rounded"
              defaultValue={preloadValues?.namaLengkap}
              {...register("namaLengkap")}
            />
          </div>
        </div>
        <div className="flex mb-4 items-center">
          <div className="w-1/4">Alamat</div>
          <div className="w-3/4">
            <input
              type="text"
              placeholder="Alamat"
              name="alamat"
              className="border p-1 px-2 w-full rounded"
              defaultValue={preloadValues?.alamat}
              {...register("alamat")}
            />
          </div>
        </div>
        <div className="flex mb-4 items-center">
          <div className="w-1/4">Provinsi</div>
          <div className="w-3/4">
            {/* <select
            name="provinsi"
            id="provinsi"
            placeholder="Provinsi"
            className="border p-1 px-2 w-full rounded"
          >
            <option value="jawa barat">Jawa Barat</option>
            <option value="jawa tengah">Jawa Tengah</option>
          </select> */}
            <input
              type="text"
              placeholder="Provinsi"
              className="border p-1 px-2 w-full rounded"
              defaultValue={preloadValues?.provinsi}
              {...register("provinsi")}
            />
          </div>
        </div>
        <div className="flex mb-4 items-center">
          <div className="w-1/4">Kabupaten/Kota</div>
          <div className="w-3/4">
            <input
              type="text"
              placeholder="Kabupaten/Kota"
              className="border p-1 px-2 w-full rounded"
              defaultValue={preloadValues?.kabupatenKota}
              {...register("kabupatenKota")}
            />
          </div>
        </div>
        <div className="flex mb-4 items-center">
          <div className="w-1/4">Kecamatan</div>
          <div className="w-3/4">
            <input
              type="text"
              placeholder="Kecamatan"
              className="border p-1 px-2 w-full rounded"
              defaultValue={preloadValues?.kecamatan}
              {...register("kecamatan")}
            />
          </div>
        </div>
        <div className="flex mb-4 items-center">
          <div className="w-1/4">Kelurahan</div>
          <div className="w-3/4">
            <input
              type="text"
              placeholder="Kelurahan"
              className="border p-1 px-2 w-full rounded"
              defaultValue={preloadValues?.kelurahan}
              {...register("kelurahan")}
            />
          </div>
        </div>
        <div className="flex mb-4 items-center">
          <div className="w-1/4">Kode Pos</div>
          <div className="w-3/4">
            <input
              type="text"
              placeholder="Kode Pos"
              className="border p-1 px-2 w-full rounded"
              defaultValue={preloadValues?.kodePos}
              {...register("kodePos")}
            />
          </div>
        </div>
        <div className="flex mb-4 items-center">
          <div className="w-1/4">No. Telepon</div>
          <div className="w-3/4">
            <input
              type="text"
              placeholder="No. Telepon"
              className="border p-1 px-2 w-full rounded"
              defaultValue={preloadValues?.noTelp}
              {...register("noTelp")}
            />
          </div>
        </div>
        <div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-3/4 bg-[#d0cba0] border-transparent rounded p-1 text-white font-bold"
            >
              Simpan
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Ubah_Informasi_Akun;
