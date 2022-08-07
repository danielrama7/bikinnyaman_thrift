import Api from ".";

const adminAPI = {
  loginAdmin(data) {
    return Api.post(`/admin/loginAdmin`, data);
  },
  logoutAdmin() {
    return Api.post(`/admin/logoutAdmin`);
  },
};

export default adminAPI;
