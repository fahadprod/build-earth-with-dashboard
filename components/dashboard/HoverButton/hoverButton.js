import React, { Fragment } from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Button, Avatar, Layout, Menu, Breadcrumb } from "antd";
import Link from "next/link";
import { logout } from '../../../helpers/auth';

const HoverButton = () => {
    const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
    const menu = (
      <Menu>
        <Menu.Item>
                <Link href="/find-properties" as="/find-properties">
                    <a rel="noopener noreferrer">Find Property</a>
                </Link>
        </Menu.Item>
        <Menu.Item danger><a onClick = { logout }>Logout</a></Menu.Item>
      </Menu>
    );
    return (
      <Fragment>
        <Dropdown overlay={menu}>
          <a
            style={{ float: "right" }}
            className="ant-dropdown-link"
            onClick={(e) => e.preventDefault()}
          >
            <Avatar
              style={{ float: "right", height: "50px", width: "50px" }}
              src="../img/avatar2.png"
            >
              <DownOutlined />
            </Avatar>
          </a>
        </Dropdown>
      </Fragment>
    );
}

export default HoverButton
