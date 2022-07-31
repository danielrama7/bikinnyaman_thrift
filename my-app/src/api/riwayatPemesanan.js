import Api from ".";

const riwayatPemesananAPI = {
  editStatus(idPesanan) {
    return Api.put(`/riwayatPemesanan/edit-status/${idPesanan}`);
  },
  getRiwayatPemesanan(idUser) {
    return Api.get(`/riwayatPemesanan/getRiwayatPemesanan/${idUser}`);
  },
};

export default riwayatPemesananAPI;
