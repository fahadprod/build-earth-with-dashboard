import React, { Fragment } from "react";
import {
  Layout
} from "antd";


const { Header, Content, Sider } = Layout;

const AddProperty = () => {
    return (
      <Fragment>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <h2>Add Property</h2>
          </Content>
        </Layout>
      </Fragment>
    );
};

export default AddProperty;
