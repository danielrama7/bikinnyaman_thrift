import Api from ".";

const userAPI = {
  login(data) {
    return Api.post(`/user/login`, data);
  },
  registerUser(data) {
    return Api.post(`/user/register`, data);
  },
  editInformasiAkun(data) {
    return Api.put(`/user/editInformasiAkun`, data);
  },
  logout() {
    return Api.post(`/user/logout`);
  },
  getDetailUser(idUser) {
    return Api.get(`/user/getUserData/${idUser}`);
  },
};

export default userAPI;
