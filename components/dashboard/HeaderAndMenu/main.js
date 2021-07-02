import React, {useState, useEffect } from 'react'
import {
  Layout,
  Table,
  Space,
  Steps
} from "antd";
import {
  EditOutlined,
  DeleteOutlined
} from "@ant-design/icons";

import Sidebar from '../HoverButton/sidebar';
import axios from "axios";
import { isAuth } from "../../../helpers/auth";
import Link from 'next/link';
import moment from "moment";
import Router from "next/router";

const link = require("../../commons/api")



const { Header, Content } = Layout;


const Main = () => {
  const [responseData, setResponseData] = useState('')
  const [propertyId, setPropertyId] = useState(null)

  const getProperty = async () => {
    const id = isAuth() && isAuth()._id;
    try {
      const response = await axios.get(
        `${link.API_SERVER}/api/property/${id}/properties`
      );
      setResponseData(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect( async () => {
    const id = isAuth() && isAuth()._id
    try {
      const response = await axios.get(`${link.API_SERVER}/api/property/${id}/properties`);
      setResponseData(response.data)

    } catch (error) {
      console.log(error)
    }

  }, [setResponseData])
  const properties = responseData.properties;


const deleteProperty = (proId) => {
  setPropertyId(proId)
};

 const handleDelete = async () => {
     const propertyDelete = await axios.delete(
       `${link.API_SERVER}/api/property/${propertyId}`
   );
   if (propertyDelete.status === 200) {
     getProperty();
     $("#exampleModal").modal("hide");
     Router.push("/dashboard")
   }
    
 }

  const columns = [
    {
      title: "ID",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Society",
      dataIndex: "society",
      key: "society",
    },
    {
      title: "Type",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Link
            href={{ pathname: "/updateProperty", query: { id: record.id } }}
          >
            <a style={{ color: "black" }}>
              <EditOutlined />
            </a>
          </Link>

          <a
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={() => deleteProperty(record.id)}
          >
            <DeleteOutlined />
          </a>
        </Space>
      ),
    },
  ];

  
  const data = [];

  {
    properties !== undefined ?  properties.map((property, index) => {
      data.push({
        key: index,
        id: property._id,
        society: property.society,
        price: property.price,
        name: property.name,
        date: moment(property.createdAt).format("MMMM Do YYYY"),
      });
    }) : []
  }
    return (
      <>
        <Layout>
          <Sidebar />
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Table columns={columns} dataSource={data} />
            </Content>
          </Layout>
        </Layout>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Delete Property
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">Are you sure you want to delete this property?</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary" onClick={() => handleDelete()}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );}

export default Main;