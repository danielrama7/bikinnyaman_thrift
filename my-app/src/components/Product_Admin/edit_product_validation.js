import * as yup from "yup";

export const editProductSchema = yup.object().shape({
  namaProduk: yup.string().required("Nama Barang wajib diisi"),
  deskripsi: yup.string().required("Deskripsi Barang wajib diisi"),
  harga: yup.string().required("Harga Barang wajib diisi"),
  stok: yup.string().required("Stok Barang wajib diisi"),
});
