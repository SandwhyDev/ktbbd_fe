import Link from "next/link";
import React, { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { MdLockOutline } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { useRouter } from "next/router";
import ax from "../../libs/ax";
import { Modal } from "antd";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
const EditProfile = () => {
  const navigate = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nama, password, nomor_hp, blok, no, rw } = e.target;

    console.log({
      nama: nama.value,
      password: password.value,
      nomor_hp: nomor_hp.value,
      blok: blok.value,
      no: no.value,
      rw: rw.value,
    });

    // ax.post("/user_create", {
    //   nama: nama.value,
    //   password: password.value,
    //   nomor_hp: parseInt(nomor_hp.value),
    //   blok: blok.value,
    //   no: parseInt(no.value),
    //   rw: parseInt(rw.value),
    // })
    //   .then((response) => {
    //     if (response.status == 201) {
    //       sessionStorage.setItem("_token", response.data.token);
    //       Modal.success({
    //         title: "Daftar Berhasil",
    //       });
    //       navigate.push("/home");
    //     }
    //   })
    //   .catch((err) => {
    //     Modal.error({
    //       title: err.response.data.msg,
    //     });
    //   });
  };

  const handleBack = () => {
    navigate.push("/profile");
  };

  const [password, setPassword] = useState(false);
  const showPassword = () => {
    setPassword(password ? false : true);
  };
  return (
    <div className="w-screen h-screen flex flex-col  items-center">
      <div className="w-full h-12 shadow-md flex gap-24 justify-center   items-center p-4 ">
        {/* <span className="text-xl" onClick={handleBack}>
          <BsArrowLeft />
        </span> */}
        <h1 className="text-xl  ">Edit Profile</h1>
      </div>
      <form className="w-full flex flex-col gap-4 p-4 " onSubmit={handleSubmit}>
        <div className="form_group flex flex-col gap-2">
          <label htmlFor="nama" className="text-lg font-light uppercase">
            Nama lengkap
          </label>
          <div className="w-full p-3 border-b-[1px] border-gray-400 flex gap-2 items-center ">
            <span className="text-gray-500 text-xl">
              <FiUser />
            </span>
            <input
              type="text"
              name="nama"
              id="nama"
              value="Sandy"
              className="w-full outline-none bg-transparent  "
            />
          </div>
        </div>

        <div className="form_group flex flex-col gap-2">
          <label htmlFor="password" className="text-lg font-light uppercase">
            Password
          </label>
          <div className="w-full p-3 border-b-[1px] border-gray-400 flex justify-between gap-2 items-center ">
            <span className="text-gray-500 text-xl">
              <MdLockOutline />
            </span>
            <input
              type={password ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              className="w-full outline-none bg-transparent  "
            />

            <span className="text-gray-500 text-xl" onClick={showPassword}>
              <AiOutlineEye />
            </span>
          </div>
        </div>

        <div className="form_group flex flex-col gap-2">
          <label htmlFor="nomor_hp" className="text-lg font-light uppercase">
            Nomor Hp
          </label>
          <div className="flex gap-2 items-center p-3 border-b-[1px] border-gray-400">
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
              className="w-full p-3 border-b-[1px] border-gray-400 bg-transparent outline-none uppercase "
            />
          </div>
          <div className="form_group flex flex-col gap-2">
            <label htmlFor="no" className="text-lg font-light uppercase">
              No. Rumah
            </label>
            <input
              type="number"
              name="no"
              id="no"
              placeholder="91"
              className="w-full p-3 border-b-[1px] border-gray-400 bg-transparent outline-none uppercase "
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
              className="w-full p-3 border-b-[1px] border-gray-400  outline-none uppercase bg-transparent"
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
              className="w-full p-3 border-b-[1px] border-gray-400 bg-transparent outline-none uppercase "
            />
          </div>
        </div>
        <button className="w-full p-4 border-blue-600 border-[.8px] text-xl text-blue-500 rounded-lg font-bold mt-3">
          Edit Profile
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
