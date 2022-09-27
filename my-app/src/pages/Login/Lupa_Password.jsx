import React from "react";
import { NavLink } from "react-router-dom";

function Lupa_Password() {
  return (
    <div class="h-screen bg-indigo-50 flex justify-center">
      <div class="lg:w-2/6 md:w-1/2 w-2/3 py-20">
        <form class="bg-white p-10 rounded-lg shadow-lg min-w-full">
          <h1 class="text-center text-2xl mb-6 text-gray-800 font-bold">
            Lupa Password
          </h1>
          <div>
            <p className="text-sm text-center">
              Masukkan email Anda di bawah ini dan kami akan membantu Anda
              mengatur ulang password Anda
            </p>
          </div>
          <div>
            {/* <label
              class="text-gray-800 font-semibold block my-3 text-md"
              for="email"
            >
              Email
            </label> */}
            <input
              class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none mt-4"
              type="text"
              name="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <NavLink to="/passwordBaru">
            <button
              type="submit"
              class="w-full mt-4 bg-[#282517] rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold"
            >
              Kirim
            </button>
          </NavLink>
        </form>
      </div>
    </div>
  );
}

export default Lupa_Password;
