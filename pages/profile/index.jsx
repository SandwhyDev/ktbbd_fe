import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
// import { useRouter } from "next/router";

const profile = () => {
  // const navigate = useRouter();

  // const [Logout, LetLogout] = useState(false);
  // const modalHandleLogout = () => {
  //   LetLogout(!Logout);
  // };

  // const handleProfile = () => {
  //   navigate.push("/editProfile");
  // };
  return (
    <div className="w-screen h-screen flex flex-col gap-2">
      <div className="w-full h-12 shadow-md flex gap-20 justify-center items-center px-4 ">
        {/* <span className="text-3xl" onClick={handleBack}>
          <BsArrowLeft />
        </span> */}
        <h1 className="text-xl ">Edit Profile</h1>
      </div>
      <div className="w-full h-full flex flex-col gap-4 p-4">
        <button
          className="w-full h-12 border-[.5px] border-gray-500 rounded-full font-light"
          // onClick={handleProfile}
        >
          Edit Profile
        </button>

        <button className="w-full h-12 bg-red-500 text-white rounded-full">
          Logout
        </button>
      </div>
      {/* {Logout && (
        <div className=" w-full h-full bg-black/70 fixed top-0 flex flex-col items-center justify-center z-30 p-4 ">
          <div className="modalLogout w-full h-64 bg-white rounded-lg flex flex-col items-center justify-between p-4">
            <div></div>
            <h1 className="text-xl text-red-500 ">Yakin ingin Logout ?</h1>
            <div className="w-full h-12 flex gap-2 ">
              <button
                className="w-full h-12 border-2 border-red-500 capitalize rounded-xl"
                onClick={modalHandleLogout}
              >
                tidak
              </button>
              <button className="w-full h-12 bg-red-500 text-white capitalize rounded-xl">
                iya
              </button>
            </div>
          </div>
        </div>
      )} */}
      <Footer />
    </div>
  );
};

export default profile;
