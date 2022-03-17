import Link from "next/link";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { MdLockOutline } from "react-icons/md";
import { FiUser } from "react-icons/fi";

const index = () => {
  return (
    <div className="w-screen h-screen p-4 flex flex-col gap-4  items-center">
      <h1 className="text-2xl">Daftar Warga BBD</h1>
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
              className="w-full  outline-none  "
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
            <label htmlFor="blok" className="text-lg font-light">
              RT
            </label>
            <input
              type="number"
              name="blok"
              id="blok"
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
      </form>

      <button className="w-full p-4 bg-blue-600 text-xl text-white rounded-lg font-light mt-3">
        Daftar
      </button>
    </div>
  );
};

export default index;
