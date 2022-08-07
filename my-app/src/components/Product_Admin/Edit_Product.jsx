import { useLocation } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import productAPI from "../../api/product";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { editProductSchema } from "./edit_product_validation";

function Edit_Product() {
  const navigate = useNavigate();
  const location = useLocation();

  const [detailBarang, setDetailBarang] = useState([]);

  useEffect(() => {
    const fetchDetailBarang = async () => {
      const res = await productAPI.getDetailBarang(location.state.id);
      setDetailBarang(res.data.data);
      reset(res.data.data);
    };
    fetchDetailBarang();
  }, [location.state.id]);

  const preloadValues = {
    namaProduk: detailBarang?.namaProduk,
    deskripsi: detailBarang?.deskripsi,
    jenis: detailBarang?.jenis,
    harga: detailBarang?.harga,
    kategori: detailBarang?.kategori,
    ukuran: detailBarang?.ukuran,
    warna: detailBarang?.warna,
    stok: detailBarang?.stok,
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editProductSchema),
    defaultValues: preloadValues,
  });

  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");

  const submitForm = async (data) => {
    const formData = new FormData();
    formData.append("namaProduk", data.namaProduk);
    formData.append("deskripsi", data.deskripsi);
    formData.append("jenis", data.jenis);
    formData.append("harga", data.harga);
    formData.append("kategori", data.kategori);
    formData.append("ukuran", data.ukuran);
    formData.append("warna", data.warna);
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
      const res = await productAPI.editBarang(location.state.id, formData);
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

  return (
    <div>
      <div className="text-2xl text-gray-600 mb-8">
        <h1>Edit Produk</h1>
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
                placeholder="Masukkan nama Barang"
                defaultValue={preloadValues?.namaProduk}
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
                defaultValue={preloadValues?.deskripsi}
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
                defaultValue={preloadValues?.harga}
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
                defaultValue={preloadValues?.jenis}
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
                defaultValue={preloadValues?.kategori}
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
                defaultValue={preloadValues?.ukuran}
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
                defaultValue={preloadValues?.warna}
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
                defaultValue={preloadValues?.stok}
                className="w-full p-2 border border-gray-200 rounded mt-4"
                {...register("stok")}
                placeholder="1"
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
            <div className="w-full">
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 text-left"
              >
                Gambar Barang 1
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
                Gambar Barang 2
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
                Gambar Barang 3
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
                Gambar Barang 4
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
                Simpan
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit_Product;
