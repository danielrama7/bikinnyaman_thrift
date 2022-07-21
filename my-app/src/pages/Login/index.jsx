import React from "react";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div class="h-screen bg-indigo-50 flex justify-center">
      <div class="lg:w-2/6 md:w-1/2 w-2/3 py-20">
        <form class="bg-white p-10 rounded-lg shadow-lg min-w-full">
          <h1 class="text-center text-2xl mb-6 text-gray-800 font-bold">
            Masuk
          </h1>
          <div>
            <label
              class="text-gray-800 font-semibold block my-3 text-md"
              for="email"
            >
              Email
            </label>
            <input
              class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="text"
              name="email"
              id="email"
              placeholder="@email"
            />
          </div>
          <div>
            <label
              class="text-gray-800 font-semibold block my-3 text-md"
              for="password"
            >
              Password
            </label>
            <input
              class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </div>
          <NavLink to="/homePage">
            <button
              type="submit"
              class="w-full mt-6 bg-[#282517] rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold"
            >
              Masuk
            </button>
          </NavLink>
          <div class="flex flex-row pt-3 text-[14px]">
            <p>Belum punya akun?</p>
            <NavLink to="/register">
              <button type="submit" class="text-gray-800 font-bold pl-1">
                Daftar
              </button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
