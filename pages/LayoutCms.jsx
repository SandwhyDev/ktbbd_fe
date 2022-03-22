import React from "react";
import Cms from "../components/SideBar";

const LayoutCms = ({ children }) => {
  return (
    <div className="flex">
      <Cms />
      <main>{children}</main>
    </div>
  );
};

export default LayoutCms;
