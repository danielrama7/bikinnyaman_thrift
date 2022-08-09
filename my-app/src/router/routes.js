import Cara_Pemesanan from "../pages/Cara_Pemesanan";
import Kebijakan_Pengembalian from "../pages/Kebijakan_Pengembalian";
import Kebijakan_Privasi from "../pages/Kebijakan_Privasi";
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
import Login from "../pages/Login";
import Register_Page from "../pages/Register";
import Product_Detail2 from "../pages/Product_Detail/Product_Detail2";
import Product_Detail6 from "../pages/Product_Detail/Product_Detail6";
import Product_Detail5 from "../pages/Product_Detail/Product_Detail5";
import Product_Detail4 from "../pages/Product_Detail/Product_Detail4";
import Product_Detail3 from "../pages/Product_Detail/Product_Detail3";
import Product_Detail9 from "../pages/Product_Detail/Product_Detail9";
import Product_Detail8 from "../pages/Product_Detail/Product_Detail8";
import Product_Detail7 from "../pages/Product_Detail/Product_Detail7";
import Product_Detail1 from "../pages/Product_Detail/Product_Detail1";

export const routes = [
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
    name: "Product_Detail1",
    path: () => {
      return "/productDetail1";
    },
    exact: true,
    component: Product_Detail1,
  },
  {
    name: "Product_Detail2",
    path: () => {
      return "/productDetail2";
    },
    exact: true,
    component: Product_Detail2,
  },
  {
    name: "Product_Detail3",
    path: () => {
      return "/productDetail3";
    },
    exact: true,
    component: Product_Detail3,
  },
  {
    name: "Product_Detail4",
    path: () => {
      return "/productDetail4";
    },
    exact: true,
    component: Product_Detail4,
  },
  {
    name: "Product_Detail5",
    path: () => {
      return "/productDetail5";
    },
    exact: true,
    component: Product_Detail5,
  },
  {
    name: "Product_Detail6",
    path: () => {
      return "/productDetail6";
    },
    exact: true,
    component: Product_Detail6,
  },
  {
    name: "Product_Detail7",
    path: () => {
      return "/productDetail7";
    },
    exact: true,
    component: Product_Detail7,
  },
  {
    name: "Product_Detail8",
    path: () => {
      return "/productDetail8";
    },
    exact: true,
    component: Product_Detail8,
  },
  {
    name: "Product_Detail9",
    path: () => {
      return "/productDetail9";
    },
    exact: true,
    component: Product_Detail9,
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
  {
    name: "Login",
    path: () => {
      return "/login";
    },
    exact: true,
    component: Login,
  },
  {
    name: "Register_Page",
    path: () => {
      return "/register";
    },
    exact: true,
    component: Register_Page,
  },
];
