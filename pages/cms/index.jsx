import React, { useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  FormOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { BsFillCalendarEventFill, BsImageFill } from "react-icons/bs";
import Logo1 from "../../assets/Logo.png";
import Image from "next/image";

const Sidebar = () => {
  const { Header, Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;
  const Logo = <Image src={Logo1} alt="me" width="30" height="30" />;
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item icon={Logo}>
              <h1 className="ml-2 flex items-center  mt-2   font-medium text-gray-400 text-lg ">
                KTBBD
              </h1>
            </Menu.Item>

            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Dashboard
            </Menu.Item>
            <Menu.Item key="3" icon={<DesktopOutlined />}>
              Monitoring
            </Menu.Item>
            <Menu.Item key="4" icon={<BsFillCalendarEventFill />}>
              Upload Acara
            </Menu.Item>
            <Menu.Item key="5" icon={<BsImageFill />}>
              Upload Dokumentasi
            </Menu.Item>

            <SubMenu key="sub2" icon={<TeamOutlined />} title="Data">
              <Menu.Item key="7">Data warga</Menu.Item>
              <Menu.Item key="8">Admin</Menu.Item>
              <Menu.Item key="9">Photographer</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content className="w-screen h-screen" key="1"></Content>
      </Layout>
    </div>
  );
};

export default Sidebar;
