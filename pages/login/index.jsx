import React from "react";
import { FiUser } from "react-icons/fi";
import { MdLockOutline } from "react-icons/md";
import { useRouter } from "next/router";

const index = () => {
  const navigate = useRouter();

  const handleSubmit = () => {
    navigate.push("/home");
  };
  return (
    <div className="w-screen h-screen p-4 flex flex-col gap-4  items-center">
      <h1 className="text-2xl">Login</h1>
      <form className="w-full flex flex-col gap-4 ">
        <div className="form_group flex flex-col gap-2">
          <label htmlFor="nama" className="text-lg font-light uppercase">
            Nama lengkap
          </label>
          <div className="w-full p-3 border-[.5px] rounded-lg border-gray-500 flex gap-2 items-center ">
            <span className="text-gray-500 text-xl">
              <FiUser />
            </span>
            <input
              type="text"
              name="nama"
              id="nama"
              placeholder="Nama Lengkap"
              className="w-full outline-none bg-transparent  "
            />
          </div>
        </div>

        <div className="form_group flex flex-col gap-2">
          <label htmlFor="password" className="text-lg font-light uppercase">
            Password
          </label>
          <div className="w-full p-3 border-[.5px] rounded-lg border-gray-500 flex gap-2 items-center ">
            <span className="text-gray-500 text-xl">
              <MdLockOutline />
            </span>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full outline-none bg-transparent  "
            />
          </div>
        </div>
      </form>
      <button
        className="w-full p-4 bg-blue-600 text-xl text-white rounded-lg font-light mt-3"
        onClick={handleSubmit}
      >
        Login
      </button>
    </div>
  );
};

export default index;
