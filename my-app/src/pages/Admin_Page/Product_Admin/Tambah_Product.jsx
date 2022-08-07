import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { tambahProdukSchema } from "./tambah_product_validation";
import productAPI from "../../../api/product";
import { AdminContext } from "../../../context/context";

function Tambah_Product() {
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(tambahProdukSchema),
  });

  const submitForm = async (data) => {
    const formData = new FormData();
    formData.append("namaProduk", data.namaProduk);
    formData.append("deskripsi", data.deskripsi);
    formData.append("jenis", data.jenis);
    formData.append("harga", data.harga);
    formData.append("kategori", data.kategori);
    formData.append("ukuran", data.ukuran);
    formData.append("warna", data.harga);
    formData.append("stok", data.stok);
    formData.append(
      "gambarUtama",
      data.gambarUtama ? data.gambarUtama[0] : undefined
    );
    formData.append("gambar1", data.gambar1 ? data.gambar1[0] : undefined);
    formData.append("gambar2", data.gambar2 ? data.gambar2[0] : undefined);
    formData.append("gambar3", data.gambar3 ? data.gambar3[0] : undefined);
    formData.append("gambar4", data.gambar4 ? data.gambar4[0] : undefined);

    try {
      console.log(formData);
      const res = await productAPI.createBarang(formData);
      if (res.data.success) {
        navigate("/admin/barang");
        console.log("berhasil");
        setAlert(false);
      }
    } catch (error) {
      setMessage(error.response.data.message);
      setAlert(true);
      console.log("gagal");
    }
  };
  console.log(errors);
  return (
    <div>
      <div className="text-2xl text-gray-600 mb-8">
        <h1>Tambah Barang</h1>
      </div>
      <div className="w-full bg-white rounded shadow-xl p-8">
        <form id="tambah_barang" onSubmit={handleSubmit(submitForm)}>
          <div className="grid gap-y-4">
            <div className="w-full">
              <label className="text-sm font-bold text-gray-600 text-left">
                Nama Barang
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-200 rounded mt-4"
                placeholder="Masukkan nama barang"
                {...register("namaProduk")}
              ></input>
              {errors && (
                <p className="text-left text-red-500 text-sm">
                  {errors?.namaProduk?.message}
                </p>
              )}
            </div>
            <div className="w-full">
              <label className="text-sm font-bold text-gray-600 text-left">
                Deskripsi Barang
              </label>
              <textarea
                className="w-full px-3 py-2 text-gray-600 border rounded border-gray-200 mt-4"
                rows="4"
                placeholder="Masukkan deskripsi barang"
                {...register("deskripsi")}
              ></textarea>
              {errors && (
                <p className="text-left text-red-500 text-sm">
                  {errors?.deskripsi?.message}
                </p>
              )}
            </div>
            <div className="w-full">
              <label className="text-sm font-bold text-gray-600 text-left">
                Harga Barang
              </label>
              <input
                type="number"
                className="w-full p-2 border border-gray-200 rounded mt-4"
                placeholder="50000"
                {...register("harga")}
              ></input>
              {errors && (
                <p className="text-left text-red-500 text-sm">
                  {errors?.harga?.message}
                </p>
              )}
            </div>
            <div className="w-full">
              <label className="text-sm font-bold text-gray-600 text-left">
                Pakaian
              </label>
              <select
                type="text"
                className="w-full p-2 border border-gray-200 rounded mt-4"
                {...register("jenis")}
              >
                <option value="Wanita">Wanita</option>
                <option value="Pria">Pria</option>
                <option value="Unisex">Unisex</option>
              </select>
            </div>
            <div className="w-full">
              <label className="text-sm font-bold text-gray-600 text-left">
                Kategori
              </label>
              <select
                type="text"
                className="w-full p-2 border border-gray-200 rounded mt-4"
                {...register("kategori")}
              >
                <option value="T-shirt">T-shirt</option>
                <option value="Kemeja">Kemeja</option>
                <option value="Sweater">Sweater</option>
                <option value="Jaket">Jaket</option>
              </select>
            </div>
            <div className="w-full">
              <label className="text-sm font-bold text-gray-600 text-left">
                Ukuran
              </label>
              <select
                type="text"
                className="w-full p-2 border border-gray-200 rounded mt-4"
                {...register("ukuran")}
              >
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>
            <div className="w-full">
              <label className="text-sm font-bold text-gray-600 text-left">
                Warna
              </label>
              <select
                type="text"
                className="w-full p-2 border border-gray-200 rounded mt-4"
                {...register("warna")}
              >
                <option value="Putih">Putih</option>
                <option value="Krem">Krem</option>
                <option value="Abu">Abu</option>
                <option value="Biru">Biru</option>
                <option value="Coklat">Coklat</option>
                <option value="Hitam">Hitam</option>
              </select>
            </div>
            <div className="w-full">
              <label className="text-sm font-bold text-gray-600 text-left">
                Stok Barang
              </label>
              <input
                type="number"
                className="w-full p-2 border border-gray-200 rounded mt-4"
                placeholder="1"
                {...register("stok")}
              ></input>
              {errors && (
                <p className="text-left text-red-500 text-sm">
                  {errors?.stok?.message}
                </p>
              )}
            </div>
            <div className="w-full">
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 text-left"
              >
                Gambar Barang Utama
              </label>
            </div>
            <div className="h-full flex flex-col bg-white border-2 rounded-md">
              <div className="h-full p-8 w-full flex flex-col">
                <div className="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
                  <input
                    type="file"
                    accept="image/png, image/jpg, image/jpeg"
                    name="gambarUtama"
                    {...register("gambarUtama")}
                  />
                </div>
              </div>
            </div>
            {errors && (
              <p className="text-left text-red-500 text-sm">
                {errors?.gambarUtama?.message}
              </p>
            )}
            <div className="w-full">
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 text-left"
              >
                Gambar Barang 1 (Optional)
              </label>
            </div>
            <div className="h-full flex flex-col bg-white border-2 rounded-md">
              <div className="h-full p-8 w-full flex flex-col">
                <div className="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
                  <input
                    type="file"
                    accept="image/png, image/jpg, image/jpeg"
                    name="gambar1"
                    {...register("gambar1")}
                  />
                </div>
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 text-left"
              >
                Gambar Barang 2 (Optional)
              </label>
            </div>
            <div className="h-full flex flex-col bg-white border-2 rounded-md">
              <div className="h-full p-8 w-full flex flex-col">
                <div className="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
                  <input
                    type="file"
                    accept="image/png, image/jpg, image/jpeg"
                    name="gambar2"
                    {...register("gambar2")}
                  />
                </div>
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 text-left"
              >
                Gambar Barang 3 (Optional)
              </label>
            </div>
            <div className="h-full flex flex-col bg-white border-2 rounded-md">
              <div className="h-full p-8 w-full flex flex-col">
                <div className="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
                  <input
                    type="file"
                    accept="image/png, image/jpg, image/jpeg"
                    name="gambar3"
                    {...register("gambar3")}
                  />
                </div>
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 text-left"
              >
                Gambar Barang 4 (Optional)
              </label>
            </div>
            <div className="h-full flex flex-col bg-white border-2 rounded-md">
              <div className="h-full p-8 w-full flex flex-col">
                <div className="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
                  <input
                    type="file"
                    accept="image/png, image/jpg, image/jpeg"
                    name="gambar4"
                    {...register("gambar4")}
                  />
                </div>
              </div>
            </div>
            <p className="text-left text-red-500 text-sm">{message}</p>
            <div>
              <button
                type="submit"
                className="rounded w-full text-white font-bold bg-[#d0cba0] p-2"
              >
                Tambah Barang
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Tambah_Product;
