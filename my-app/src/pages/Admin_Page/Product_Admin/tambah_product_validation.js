import * as yup from "yup";

export const tambahProdukSchema = yup.object().shape({
  namaProduk: yup.string().required("Nama Barang wajib diisi"),
  deskripsi: yup.string().required("Deskripsi Barang wajib diisi"),
  harga: yup.string().required("Harga Barang wajib diisi"),
  stok: yup.string().required("Stok Barang wajib diisi"),
  gambarUtama: yup
    .mixed()
    .required("Gambar Utama wajib diisi")
    .test({
      message: "Gambar Utama wajib diisi",
      test: (arr) => arr.length > 0,
    }),
});
