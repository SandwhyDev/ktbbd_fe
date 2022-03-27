import Link from "next/link";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { MdLockOutline } from "react-icons/md";
import { FiUser } from "react-icons/fi";
// import { useRouter } from "next/router";
import ax from "../../libs/ax";
import { Modal } from "antd";
import { BsArrowLeft } from "react-icons/bs";

const Daftar = () => {
  // const navigate = useRouter();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { nama, password, nomor_hp, blok, no, rw } = e.target;

  //   console.log({
  //     nama: nama.value,
  //     password: password.value,
  //     nomor_hp: nomor_hp.value,
  //     blok: blok.value,
  //     no: no.value,
  //     rw: rw.value,
  //   });

  //   ax.post("/user_create", {
  //     nama: nama.value,
  //     password: password.value,
  //     nomor_hp: parseInt(nomor_hp.value),
  //     blok: blok.value,
  //     no: parseInt(no.value),
  //     rw: parseInt(rw.value),
  //   })
  //     .then((response) => {
  //       if (response.status == 201) {
  //         sessionStorage.setItem("_token", response.data.token);
  //         Modal.success({
  //           title: "Daftar Berhasil",
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

  // const handleNext = () => {
  //   navigate.push("/home");
  // };
  return (
    <div className="w-screen h-screen bg-[#eaeaf3]  p-4 flex flex-col gap-4 justify-center items-center   xl:justify-center xl:items-center  ">
      <div className="w-full  max-w-[700px]  flex flex-col gap-4  xl:justify-center   xl:flex xl:flex-col xl:bg-white xl:shadow-md xl:p-8 xl:rounded-lg bg-white shadow-md p-4 rounded-lg  ">
        <div className="flex items-center w-full justify-between">
          <Link href="/home" passHref>
            <span className="text-xl cursor-pointer text-blue-400">
              <BsArrowLeft />
            </span>
          </Link>
          <h1 className="text-2xl xl:text-center text-center text-blue-400">
            Daftar
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
        </div>

        <div className="form_group flex flex-col gap-2">
          <label htmlFor="nomor_hp" className="text-lg font-light uppercase">
            Nomor Hp
          </label>
          <div className="flex gap-2 items-center p-3 border-[.5px] rounded-lg border-gray-500">
            <span className="text-lg text-gray-500">
              <BsWhatsapp />
            </span>
            <input
              type="number"
              name="nomor_hp"
              id="nomor_hp"
              placeholder="0812347563"
              className="w-full  outline-none  bg-transparent  "
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex sm:flex-row sm:gap-2   gap-2 ">
          <div className="w-full flex gap-2">
            <div className="form_group  flex flex-col gap-2">
              <label htmlFor="blok" className="text-lg font-light uppercase">
                Blok Rumah
              </label>
              <input
                type="text"
                name="blok"
                id="blok"
                placeholder="B1"
                className="w-full p-3 border-[.5px] rounded-lg border-gray-500 outline-none uppercase "
              />
            </div>
            <div className="form_group flex flex-col gap-2">
              <label htmlFor="no" className="text-lg font-light uppercase">
                No Rumah
              </label>
              <input
                type="number"
                name="no"
                id="no"
                placeholder="91"
                className="w-full p-3 border-[.5px] rounded-lg border-gray-500 outline-none uppercase "
              />
            </div>
          </div>

          <div className="w-full flex gap-2">
            <div className="form_group  flex flex-col gap-2">
              <label htmlFor="rt" className="text-lg font-light">
                RT
              </label>
              <input
                type="number"
                name="rt"
                id="rt"
                value="02"
                disabled
                className="w-full p-3 border-[.5px] rounded-lg border-gray-500 outline-none uppercase "
              />
            </div>
            <div className="form_group flex flex-col gap-2">
              <label htmlFor="rw" className="text-lg font-light">
                RW
              </label>
              <input
                type="number"
                name="rw"
                id="rw"
                placeholder="03"
                className="w-full p-3 border-[.5px] rounded-lg border-gray-500 outline-none uppercase "
              />
            </div>
          </div>
        </div>
        <Link href={"/home"} passHref>
          <button className="w-full p-4 bg-blue-600 text-xl text-white rounded-lg font-light mt-2">
            Daftar
          </button>
        </Link>
        <p className="text-black text-xl text-center">
          <p>
            Sudah punya akun ?{" "}
            <Link href={"/login"} passHref>
              Login
            </Link>
          </p>
        </p>
      </div>
    </div>
  );
};

export default Daftar;
