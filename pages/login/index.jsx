import React from "react";
import { FiUser } from "react-icons/fi";
import { MdLockOutline } from "react-icons/md";
import { useRouter } from "next/router";
// import ax from "../../libs/ax";
// import { Modal } from "antd";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import Head from "next/head";

const Login = () => {
  const navigate = useRouter();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { nama, password } = e.target;

  //   console.log({
  //     nama: nama.value,
  //     password: password.value,
  //   });

  //   ax.post("/user_login", {
  //     nama: nama.value,
  //     password: password.value,
  //   })
  //     .then((response) => {
  //       if (response.status == 200) {
  //         sessionStorage.setItem("_token", response.data.token);
  //         Modal.success({
  //           title: "login berhasil",
  //         });
  //         navigate.push("/home");
  //       }
  //     })
  //     .catch((err) => {
  //       Modal.error({
  //         title: err.response.data.msg,
  //       });
  //     });
  // };

  const handleNext = () => {
    sessionStorage.setItem(
      "token",
      "1b48d37f21f9e1a6164fc3178807b2611c68a551fa70b75bae9e866c951045c8"
    );
    navigate.push("/home");
  };

  return (
    <div className="w-screen h-screen bg-[#eaeaf3]  p-4 flex flex-col gap-4 justify-center items-center   xl:justify-center xl:items-center  xl:bg-[#332FD0] xl:text-white ">
      <Head>
        <title>KTBBD LOGIN</title>
        <meta name="description" content="Login KTBBDApp" />
        <link rel="icon" href="/Logo_BBD.svg" type="image/svg+xml" />
      </Head>
      <div className="w-full max-w-[700px] flex flex-col gap-4 xl:max-w-4xl xl:justify-center   xl:flex xl:flex-col xl:bg-white xl:shadow-md xl:p-8 xl:rounded-lg bg-white shadow-md p-8 rounded-lg xl:text-black  ">
        <div className="flex items-center w-full justify-between">
          <Link href="/home" passHref>
            <span className="text-xl cursor-pointer text-blue-400">
              <BsArrowLeft />
            </span>
          </Link>
          <h1 className="text-2xl xl:text-center text-center text-blue-400">
            Masuk
          </h1>
          <div></div>
        </div>
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
          <div className="flex flex-col sm:flex sm:flex-row sm:gap-2 sm:items-center sm:justify-between gap-3 ">
            <button
              className="w-full p-4 bg-blue-600 text-xl text-white rounded-lg font-light mt-3 mb-2 sm:w-[60%]"
              onClick={handleNext}
            >
              Login
            </button>

            <p className="text-black text-xl text-center sm:w-[40%]  ">
              <p>
                Belum punya akun ?{" "}
                <Link href={"/daftar"} passHref>
                  Daftar
                </Link>
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
