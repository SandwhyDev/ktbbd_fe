import React from "react";
import { FiUser } from "react-icons/fi";
import { MdLockOutline } from "react-icons/md";
import { useRouter } from "next/router";
import ax from "../../libs/ax";
import { Modal } from "antd";

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

  return (
    <div className="w-screen h-screen p-4 flex flex-col gap-4  items-center">
      <h1 className="text-2xl">Login</h1>
      <form className="w-full flex flex-col gap-4 " onSubmit={handleSubmit}>
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
        <button className="w-full p-4 bg-blue-600 text-xl text-white rounded-lg font-light mt-3">
          Login
        </button>
      </form>
    </div>
  );
};

export default index;
