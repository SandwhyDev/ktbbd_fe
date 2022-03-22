import React from "react";
import { FiUser } from "react-icons/fi";
import { MdLockOutline } from "react-icons/md";
import { useRouter } from "next/router";
import ax from "../../libs/ax";
import { Modal } from "antd";
import Link from "next/link";

const index = () => {
  const navigate = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nama, password } = e.target;

    console.log({
      nama: nama.value,
      password: password.value,
    });

    ax.post("/user_login", {
      nama: nama.value,
      password: password.value,
    })
      .then((response) => {
        if (response.status == 200) {
          sessionStorage.setItem("_token", response.data.token);
          Modal.success({
            title: "login berhasil",
          });
          navigate.push("/home");
        }
      })
      .catch((err) => {
        Modal.error({
          title: err.response.data.msg,
        });
      });
  };

  const handleNext = () => {
    navigate.push("/home");
  };

  return (
    <div className="w-screen h-screen bg-[#332FD0]  p-4 flex flex-col gap-4 justify-center items-center   xl:justify-center xl:items-center  xl:bg-[#332FD0] xl:text-white ">
      <form
        className="w-full max-w-[700px] flex flex-col gap-4 xl:max-w-4xl xl:justify-center   xl:flex xl:flex-col xl:bg-white xl:shadow-md xl:p-8 xl:rounded-lg bg-white shadow-md p-8 rounded-lg xl:text-black  "
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl xl:text-center text-center">Login</h1>
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
          <button
            className="w-full p-4 bg-blue-600 text-xl text-white rounded-lg font-light mt-3"
            onClick={handleNext}
          >
            Login
          </button>
          <p className="text-black text-xl text-center">
            Belum punya akun ?<Link href={"/daftar"}> Daftar</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default index;
