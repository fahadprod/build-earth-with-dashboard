import React from "react";
import {
  Layout,
  Menu,
} from "antd";
import {
  UserOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import Link from "next/link";



const { SubMenu } = Menu;
const { Sider } = Layout;



const Sidebar = () => {
  return (
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<HomeOutlined />} title="Property">
            <Menu.Item key="1">
              <Link href="/dashboard" as="/dashboard">
                All Property
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link href="/addProperty" as="/addProperty">
                Add New Property
              </Link>
            </Menu.Item>
          </SubMenu>
        <SubMenu key="sub2" icon={<UserOutlined />} title="Profile">
            <Menu.Item key="6">
              <Link href="/updateProfile" as="/updateProfile">
                  Edit Profile
              </Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    
  );
};

export default Sidebar;
