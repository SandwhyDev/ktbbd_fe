import React, { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";
import Head from "next/head";

const Profile = () => {
  const navigate = useRouter();

  const [Logout, LetLogout] = useState(false);
  const modalHandleLogout = () => {
    LetLogout(!Logout);
  };

  const handleLogout = () => {
    sessionStorage.clear();
    navigate.push("/home");
  };

  const handleProfile = () => {
    navigate.push("/editProfile");
  };
  return (
    <div className="w-screen h-screen flex flex-col gap-2">
      <Head>
        <title>KTBBD</title>
        <meta
          name="description"
          content="Aplikasi yang berupa aktifitas dan acara - acara warga komplek bank bumi daya"
        />
        <link rel="icon" href="/Logo_BBD.svg" type="image/svg+xml" />
      </Head>
      <Navbar title="Setting" />
      <div className="w-full h-full flex flex-col gap-4 p-4">
        <button
          className="w-full h-12 border-[.5px] border-gray-500 rounded-full font-light"
          onClick={handleProfile}
        >
          Edit Profile
        </button>

        <button
          className="w-full h-12 bg-red-500 text-white rounded-full"
          onClick={modalHandleLogout}
        >
          Logout
        </button>
      </div>
      {Logout && (
        <div className=" w-full h-full bg-black/70 fixed top-0 flex flex-col items-center justify-center z-30 p-4  ">
          <div className="modalLogout w-full h-64 bg-white rounded-lg flex flex-col items-center justify-between p-4 max-w-[500px]">
            <div className="bg-transparent"></div>
            <h1 className="text-xl text-red-500 ">Yakin ingin Logout ?</h1>
            <div className="w-full h-12 flex gap-2 ">
              <button
                className="w-full h-12 border-2 border-red-500 capitalize rounded-xl"
                onClick={modalHandleLogout}
              >
                tidak
              </button>
              <button
                className="w-full h-12 bg-red-500 text-white capitalize rounded-xl "
                onClick={handleLogout}
              >
                iya
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Profile;
