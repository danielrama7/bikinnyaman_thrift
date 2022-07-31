import Popup from "reactjs-popup";
import "./style.css";
import React, { useState, useEffect, useContext } from "react";
import riwayatPemesananAPI from "../../api/riwayatPemesanan";
import { UserContext } from "../../context/context";
import { useNavigate } from "react-router-dom";

function Riwayat_Pemesanan() {
  // Set the initial count state to zero, 0
  const [riwayatPemesanan, setRiwayatPemesanan] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const id = user?.id;

  useEffect(() => {
    const fetchRiwayatPemesanan = async () => {
      const res = await riwayatPemesananAPI.getRiwayatPemesanan(id);
      setRiwayatPemesanan(res.data.data);
    };
    fetchRiwayatPemesanan();
  }, [id]);

  const [message, setMessage] = useState("");
  const bayarPesanan = async (idPesanan) => {
    try {
      // setLoading(true);
      const res = await riwayatPemesananAPI.editStatus(idPesanan);
      if (res.data.success) {
        console.log(res.data.message);
        window.location.reload();
      }
    } catch (error) {
      setMessage(error.response.data.message);
      console.log("a");
    }
  };

  return (
    <div>
      <div className="flex justify-center mb-6">
        <h1 className="font-bold text-3xl">Riwayat Pemesanan</h1>
      </div>
      <hr className="border-2 rounded mb-4" />
      <div>
        <table className="text-left table-fixed w-full">
          <thead className="h-10 font-bold text-center bg-[#F6F6F6]">
            <tr>
              <th className="w-2/12">Tanggal</th>
              <th className="w-4/12">Produk</th>
              <th className="w-1/12">Jumlah</th>
              <th className="w-2/12">Total</th>
              <th className="w-2/12">Pembayaran</th>
              <th className="w-2/12">Status</th>
            </tr>
          </thead>
          <tbody>
            {riwayatPemesanan.map((item, i) => (
              <tr className="text-sm h-16 pb-2">
                <td>
                  <div className="flex items-center justify-center">
                    <p>{item.tanggal}</p>
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    <p>{item.namaProduk}</p>
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    <p>{item.jumlah} buah</p>
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    <p>Rp. {item.total}</p>
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {item.status === "Belum Bayar" ? (
                      <div className="w-full">
                        <Popup
                          trigger={
                            <button className="bg-[#d0cba0] text-white p-[5px] border-transparent rounded w-full font-bold">
                              Bayar
                            </button>
                          }
                        >
                          {(close) => (
                            <div className="modal">
                              <div className="bg-[#f6f6f6] border border-gray-400 rounded-md w-80 ">
                                <div>
                                  <h1 className="bg-white py-3 rounded-t-md px-4 font-bold">
                                    Pembayaran
                                  </h1>
                                </div>
                                <hr className="mb-2" />
                                <div className="flex justify-between items-center rounded-md m-1 px-3 py-2 bg-white">
                                  <div>
                                    <h1>Total</h1>
                                  </div>
                                  <div>
                                    <h1 className="font-bold text-lg">
                                      Rp. 100.000
                                    </h1>
                                  </div>
                                </div>
                                <div>
                                  <h1 className="text-xs px-2 my-3 ">
                                    Lakukan pembayaran dalam waktu 1 jam Kedepan
                                  </h1>
                                </div>
                                <div className="bg-white px-3 py-2 mb-4 rounded-md mx-1">
                                  <div className="pb-2">
                                    <h1>BNI Virtual Account</h1>
                                  </div>
                                  <hr />
                                  <div className="pt-2">
                                    <h1 className="text-sm">Nomor Rekening</h1>
                                    <h1 className="text-xl">
                                      8241002201150001
                                    </h1>
                                  </div>
                                </div>
                                <div>
                                  <button
                                    onClick={() => bayarPesanan(item.id)}
                                    className="bg-[#d0cba0] w-full font-bold text-white p-2 rounded-b-md"
                                  >
                                    Selesaikan Pembayaran
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}
                        </Popup>
                      </div>
                    ) : (
                      <h1>Selesai</h1>
                    )}
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {item.status}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Riwayat_Pemesanan;
