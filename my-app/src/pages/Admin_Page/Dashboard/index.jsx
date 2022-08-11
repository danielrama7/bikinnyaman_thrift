import React from "react";

function Dashboard() {
  return (
    <div className="">
      <div className="text-2xl text-gray-600 mb-8">
        <h1>Dashboard</h1>
      </div>
      <div className="grid grid-cols-3 gap-8 justify-between">
        <div className="w-full bg-white p-6 rounded border-l-4 border-red-500 shadow-xl">
          <h1 className="text-sm">PENGGUNA</h1>
          <h1 className="text-bold text-xl">7</h1>
        </div>
        <div className="w-full bg-white p-6 rounded border-l-4 border-blue-500 shadow-xl">
          <h1 className="text-sm">PESANAN</h1>
          <h1 className="text-bold text-xl">1</h1>
        </div>
        <div className="w-full bg-white p-6 rounded border-l-4 border-green-500 shadow-xl">
          <h1 className="text-sm">BARANG</h1>
          <h1 className="text-bold text-xl">3</h1>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
