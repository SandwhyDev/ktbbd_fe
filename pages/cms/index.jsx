import React from "react";

import SideBar from "../../components/SideBar";

const Cms = () => {
  return (
    <div className="w-screen min-h-screen flex overflow-x-hidden">
      <SideBar />
      <div className="content w-full p-4 ">
        <h1>Hello</h1>
      </div>
    </div>
  );
};

export default Cms;
