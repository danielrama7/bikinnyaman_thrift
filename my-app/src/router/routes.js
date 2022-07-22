import Cara_Pemesanan from "../pages/Cara_Pemesanan";
import Kebijakan_Pengembalian from "../pages/Kebijakan_Pengembalian";
import Kebijakan_Privasi from "../pages/Kebijakan_Privasi";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Syarat_Ketentuan from "../pages/Syarat_Ketentuan";
import Tentang_Kami from "../pages/Tentang_Kami";
import Kontak_Kami from "../pages/Kontak_Kami";
import Ulasan from "../pages/Ulasan";
import Home_Page from "../pages/Home_Page";
import Keranjang_Belanja from "../pages/Keranjang_Belanja";
import Wishlist from "../pages/Wishlist";
import Product_Detail from "../pages/Product_Detail";
import FAQ from "../pages/FAQ";
import Informasi_Pembelian from "../pages/Informasi_Pembelian";
import Detail_Pembelian from "../pages/Detail_Pembelian";
import Product_Wanita from "../pages/Product/Product_Wanita";
import Product_Pria from "../pages/Product/Product_Pria";
import Hasil_Pencarian from "../pages/Product/Hasil_Pencarian";

export const routes = [
  {
    name: "Login",
    path: () => {
      return "/login";
    },
    exact: true,
    component: Login,
  },
  {
    name: "Register",
    path: () => {
      return "/register";
    },
    exact: true,
    component: Register,
  },
  {
    name: "Cara_Pemesanan",
    path: () => {
      return "/caraPemesanan";
    },
    exact: true,
    component: Cara_Pemesanan,
  },
  {
    name: "Kebijakan_Pengembalian",
    path: () => {
      return "/kebijakanPengembalian";
    },
    exact: true,
    component: Kebijakan_Pengembalian,
  },
  {
    name: "Kebijakan_Privasi",
    path: () => {
      return "/kebijakanPrivasi";
    },
    exact: true,
    component: Kebijakan_Privasi,
  },
  {
    name: "Syarat_Ketentuan",
    path: () => {
      return "/syaratKetentuan";
    },
    exact: true,
    component: Syarat_Ketentuan,
  },
  {
    name: "Tentang_Kami",
    path: () => {
      return "/tentangKami";
    },
    exact: true,
    component: Tentang_Kami,
  },
  {
    name: "Kontak_Kami",
    path: () => {
      return "/kontakKami";
    },
    exact: true,
    component: Kontak_Kami,
  },
  {
    name: "Ulasan",
    path: () => {
      return "/ulasan";
    },
    exact: true,
    component: Ulasan,
  },
  {
    name: "Home_Page",
    path: () => {
      return "/homePage";
    },
    exact: true,
    component: Home_Page,
  },
  {
    name: "Product_Wanita",
    path: () => {
      return "/productWanita";
    },
    exact: true,
    component: Product_Wanita,
  },
  {
    name: "Product_Pria",
    path: () => {
      return "/productPria";
    },
    exact: true,
    component: Product_Pria,
  },
  {
    name: "Keranjang_Belanja",
    path: () => {
      return "/keranjangBelanja";
    },
    exact: true,
    component: Keranjang_Belanja,
  },
  {
    name: "Wishlist",
    path: () => {
      return "/wishlist";
    },
    exact: true,
    component: Wishlist,
  },
  {
    name: "Product_Detail",
    path: () => {
      return "/productDetail";
    },
    exact: true,
    component: Product_Detail,
  },
  {
    name: "FAQ",
    path: () => {
      return "/faq";
    },
    exact: true,
    component: FAQ,
  },
  {
    name: "Informasi_Pembelian",
    path: () => {
      return "/informasiPembelian";
    },
    exact: true,
    component: Informasi_Pembelian,
  },
  {
    name: "Detail_Pembelian",
    path: () => {
      return "/detailPembelian";
    },
    exact: true,
    component: Detail_Pembelian,
  },
  {
    name: "Hasil_Pencarian",
    path: () => {
      return "/hasilPencarian";
    },
    exact: true,
    component: Hasil_Pencarian,
  },
];
