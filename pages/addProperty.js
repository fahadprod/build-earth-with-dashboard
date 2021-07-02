import React from "react";
import { Layout, Menu } from "antd";
import Title from "antd/lib/typography/Title";
import Property from "components/dashboard/HeaderAndMenu/property";
import HoverButton from "components/dashboard/HoverButton/hoverButton";

import { isAuth, logout } from "helpers/auth";

const { Header, Footer, Sider, Content } = Layout;

const AddProperty = () => {
  return (
    <div className="admin-main">
      <Header style={{ padding: 10 }}>
        <HoverButton />
        <Title style={{ color: "white" }} level={3}>
          {isAuth() && isAuth().role == "staff"
            ? "Staff Dashboard"
            : "Dealer Dashboard"}
        </Title>
      </Header>
      <Property />
      <Footer style={{ textAlign: "center" }}>
        Build Earth. Copyright@buildearth.com
      </Footer>
    </div>
  );
};

export default AddProperty;
