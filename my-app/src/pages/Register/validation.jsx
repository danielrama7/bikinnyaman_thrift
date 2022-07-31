import * as yup from "yup";

export const registerSchema = yup.object().shape({
  namaLengkap: yup.string().required("Nama wajib diisi"),
  email: yup.string().required("Email wajib diisi"),
  password: yup.string().required("Password wajib diisi"),
  // ulangPassword: yup.string().required("Ulang password wajib diisi"),
});
