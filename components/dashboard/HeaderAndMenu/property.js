import React, { useState, useEffect } from "react";
import { Layout, Table, Space, Steps } from "antd";
import axios from "axios";
import { isAuth } from "../../../helpers/auth";

import Sidebar from "../HoverButton/sidebar";
import Router from 'next/router';
import { Spin } from "antd";

const link = require("../../commons/api")


const { Header, Content } = Layout;


const Property = () => {
     const userId = isAuth() && isAuth()._id

  const [state, setState] = useState({
      userId: userId,
      society: "",
      name: "",
      category: "",
      address: "",
      price: "",
      formData: process.browser && new FormData(),
      imageUploadText: "Upload Image",
    });
  
  const [imageUpload, setImageUpload] = useState(null);
  const [loading, setLoading] = useState(false)



  const {
      society,
      name,
      category,
      address,
      price,
      formData
    } = state;
  

    const handleChange = (name) => (e) => {
      const value =
        name === "imageUpload" ? e.target.files[0] : e.target.value;
        // const imageName =
        //   name === "imageUpload" ? e.target.files[0].name : "Upload image";
      formData.set(name, value);
      setState({
        ...state,
        [name]: value
      });
      
    };


  const handleSubmit = async e => {
    setLoading({
        loading: true
      })
      e.preventDefault();
      const formData = new FormData();
      formData.append("file", imageUpload);
      formData.append("society", society);
      formData.append("name", name);
      formData.append("category", category);
      formData.append("address", address);
      formData.append("price", price);
      formData.append("userId" , userId)
      setState({ ...state });
        try{
            const response = await axios.post(
              `${link.API_SERVER}/api/property/addproperty`,
              formData,
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
          console.log(response);
          if (response.status === 200) {
            setLoading({
              loading: false
            })
            Router.push("/dashboard");
          }
            setState({
              ...state,
              society: "",
              name: "",
              category: "",
              address: "",
              imageUpload: "",
              price: "",
            });
        }
        catch(error){
            console.log(error)
            setState({...state
            });
        }
    }



  return (
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
          <h2>Add New Property</h2>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="form-row">
              <div className="form-group col-md-6">
                <input type="hidden" name="userId" value={userId} />
                <label htmlFor="inputEmail4">Select Society</label>
                <select
                  className="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                  value={society}
                  onChange={handleChange("society")}
                  required
                >
                  <option value="" disabled selected>
                    Select Society
                  </option>
                  <option value="Al Jalil Garden">Al Jalil Garden</option>
                  <option value="Al Noor Orchard">Al Noor Orchard</option>
                  <option value="West Marina">West Marina</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Select Type</label>
                <select
                  value={name}
                  onChange={handleChange("name")}
                  className="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                  required
                >
                  <option value="" disabled selected>
                    Select Type
                  </option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Select Category</label>
              <select
                value={category}
                onChange={handleChange("category")}
                className="custom-select mr-sm-2"
                id="inlineFormCustomSelect"
                required
              >
                <option value="" disabled selected>
                  Select Category
                </option>
                <option value="3 Marla">3 Marla</option>
                <option value="5 Marla">5 Marla</option>
                <option value="10 Marla">10 Marla</option>
                <option value="1 Kanal">1 Kanal</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress2">Complete Address</label>
              <input
                type="text"
                value={address}
                onChange={handleChange("address")}
                className="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
                required
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputPrice">Price</label>
                <input
                  type="number"
                  value={price}
                  onChange={handleChange("price")}
                  className="form-control"
                  id="price"
                  min="0"
                  required
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputPrice">Image Upload</label>
                <br />

                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImageUpload(e.target.files[0])}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit   {loading ? <Spin /> : ""} 
            </button>
          </form>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Property;
