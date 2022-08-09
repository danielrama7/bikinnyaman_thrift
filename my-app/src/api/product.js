import Api from ".";

const productAPI = {
  createBarang(data) {
    return Api.post(`/product/createBarang`, data);
  },
  getAllBarang() {
    return Api.get(`/product/getAllBarang`);
  },
  getBarangWanita() {
    return Api.get(`/product/getBarangWanita`);
  },
  getDetailBarang(idBarang) {
    return Api.get(`/product/getDetailBarang/${idBarang}`);
  },
  editBarang(idBarang, data) {
    return Api.put(`/product/editBarang/${idBarang}`, data);
  },
  deleteBarang(idBarang) {
    return Api.delete(`/product/deleteBarang/${idBarang}`);
  },
};

export default productAPI;
