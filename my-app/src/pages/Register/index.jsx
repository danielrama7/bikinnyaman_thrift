import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./validation";
import userAPI from "../../api/user";
import { UserContext } from "../../context/context";
import { loginSchema } from "../Login/validation";

function Register_Page() {
  const navigate = useNavigate();
  const [dataRegister, setDataRegister] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(false);

  const submitForm = async (data) => {
    try {
      // setLoading(true);
      const res = await userAPI.registerUser(data);
      if (res.data.success) {
        setDataRegister(res.data.data);
        setAlert(false);
        navigate("/login");
        // setLoading(false);
      }
    } catch (error) {
      // setLoading(false);

      setMessage(error.response.data.message);
      setAlert(true);
    }
  };

  return (
    <div class="bg-indigo-50 flex justify-center">
      <div class="lg:w-2/6 md:w-1/2 w-2/3 py-20">
        <form
          onSubmit={handleSubmit(submitForm)}
          class="bg-white p-10 rounded-lg shadow-lg min-w-full"
        >
          <h1 class="text-center text-2xl mb-6 text-gray-800 font-bold">
            Daftar
          </h1>
          <div>
            <label
              class="text-gray-800 font-semibold block my-3 text-md"
              for="nama lengkap"
            >
              Nama Lengkap
            </label>
            <input
              class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="text"
              name="namaLengkap"
              id="namaLengkap"
              placeholder="nama lengkap"
              {...register("namaLengkap")}
            />
            {errors && (
              <p className="text-left text-red-500 text-sm">
                {errors?.namaLengkap?.message}
              </p>
            )}
          </div>
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
              {...register("email")}
            />
            {errors && (
              <p className="text-left text-red-500 text-sm">
                {errors?.email?.message}
              </p>
            )}
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
              {...register("password")}
            />
            {errors && (
              <p className="text-left text-red-500 text-sm">
                {errors?.password?.message}
              </p>
            )}
          </div>
          {/* <div>
            <label
              class="text-gray-800 font-semibold block my-3 text-md"
              for="ulang password"
            >
              Ulang Password
            </label>
            <input
              class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="password"
              name="confirm"
              id="confirm"
              placeholder="ulang password"
            />
            {errors && (
              <p className="text-left text-red-500 text-sm">
                {errors?.ulangPassword?.message}
              </p>
            )}
          </div> */}
          <button
            type="submit"
            class="w-full mt-6 bg-[#282517] rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold"
          >
            Daftar
          </button>
          <div class="flex flex-row pt-3 text-[14px]">
            <p>Sudah punya akun?</p>
            <NavLink to="/login">
              <button class="text-gray-800 font-bold pl-1">Masuk</button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register_Page;
