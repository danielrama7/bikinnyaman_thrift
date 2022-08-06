import React, { useContext, useState } from "react";
// import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { loginSchema } from "./validation";
// import userAPI from "../../api/user";
// import { UserContext } from "../../context/context";

function Masuk_Admin() {
  //   const navigate = useNavigate();
  //   const { user, setUser } = useContext(UserContext);
  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm({
  //     resolver: yupResolver(loginSchema),
  //   });
  //   const [alert, setAlert] = useState(false);
  //   const [message, setMessage] = useState("");

  //   const submitForm = async (data) => {
  //     try {
  //       // setLoading(true);
  //       const res = await userAPI.login(data);
  //       if (res.data.success) {
  //         setUser(res.data.data);
  //         setAlert(false);
  //         navigate("/homePage");
  //         // setLoading(false);
  //       }
  //     } catch (error) {
  //       // setLoading(false);

  //       setMessage(error.response.data.message);
  //       setAlert(true);
  //     }
  //   };
  //   console.log(user);
  //   console.log(message);

  return (
    <div class="h-screen bg-indigo-50 flex justify-center">
      <div class="lg:w-2/6 md:w-1/2 w-2/3 py-20">
        <form
          //   onSubmit={handleSubmit(submitForm)}
          class="bg-white p-10 rounded-lg shadow-lg min-w-full"
        >
          <h1 class="text-center text-2xl mb-6 text-gray-800 font-bold">
            Masuk Admin
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
              //   {...register("email")}
            />
            {/* {errors && (
              <p className="text-left text-red-500 text-sm">
                {errors?.email?.message}
              </p>
            )} */}
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
              //   {...register("password")}
            />
            {/* {errors && (
              <p className="text-left text-red-500 text-sm">
                {errors?.password?.message}
              </p>
            )} */}
          </div>
          <div>
            {/* <p className="text-left text-red-500 text-sm">{message}</p> */}
          </div>
          <NavLink to={"/admin/dashboard"}>
            <button
              type="submit"
              class="w-full mt-6 bg-[#282517] rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold"
            >
              Masuk
            </button>
          </NavLink>
        </form>
      </div>
    </div>
  );
}

export default Masuk_Admin;
