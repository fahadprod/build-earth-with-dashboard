import React, { useState, useEffect } from "react";
import { Layout, Table, Space, Steps } from "antd";
import axios from "axios";
import { isAuth } from "../../../helpers/auth";
import { useRouter } from "next/router";
import Router from "next/router";
import Sidebar from "../HoverButton/sidebar";
import { Spin } from "antd";

const link = require("../../commons/api");

const { Header, Content } = Layout;

const EditProfile = () => {

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    address: "",
    cellPhone: "",
      cnicNumber: "",
      city: "",
      country: "",
    // formData: process.browser && new FormData(),
  });

  const [loading, setLoading] = useState(false);

    useEffect(async () => {
      const id = isAuth() && isAuth()._id;
    try {
      const profile = await axios.get(
        `${link.API_SERVER}/api/profile/getUser/${id}`
      );
      console.log(profile)
      setState({
        firstName: profile.data.firstName,
        lastName: profile.data.lastName,
        address: profile.data.address,
        cellPhone: profile.data.cellPhone,
          cnicNumber: profile.data.cnicNumber,
          city: profile.data.city,
        country: profile.data.country
      });
    } catch (error) {
      console.log(error);
    }
  }, []);


  const { firstName, lastName, address, cellPhone, cnicNumber, city, country } = state;

  const handleChange = (name) => (e) => {
    const value = name ===  "imageUpload" ? e.target.files[0] : e.target.value;
    // const imageName =
    //   name === "imageUpload" ? e.target.files[0].name : "Upload image";
    // formData.set(name, value);
    setState({
      ...state,
      [name]: value,
    });
  };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading({
        loading: true,
      });
        const id = isAuth() && isAuth()._id;
      // const formData = new FormData();
      // formData.append("firstName", firstName);
      // formData.append("lastName", lastName);
      // formData.append("address", address);
      // formData.append("cellPhone", cellPhone);
      // formData.append("cnicNumber", cnicNumber);
      // formData.append("city", city);
      // formData.append("country", country)
      const profileData = {
        firstName: firstName,
        lastName: lastName,
        address: address,
        cellPhone: cellPhone,
        cnicNumber: cnicNumber,
        city: city,
        country: country
      }
      setState({ ...state });
      console.log(profileData)
    try {
      const response = await axios.put(
        `${link.API_SERVER}/api/profile/updateUser/${id}`,
        profileData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      if (response.status === 200) {
        setLoading({
          loading: false,
        });
        Router.push("/dashboard");
        setState({
          ...state,
          firstName: "",
          lastName: "",
          address: "",
          cellPhone: "",
          cnicNumber: "",
          city: "",
          country: "",
        });
      }

      
      
    } catch (error) {
      console.log(error);
      setState({ ...state });
    }
  };

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
          <h2>Edit Profile</h2>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={handleChange("firstName")}
                  className="form-control"
                  id="inputAddress2"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={handleChange("lastName")}
                  className="form-control"
                  id="inputAddress2"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Address</label>
              <input
                type="text"
                value={address}
                onChange={handleChange("address")}
                className="form-control"
                id="inputAddress2"
                placeholder="Enter Your Address"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Cell Phone</label>
                <input
                  type="number"
                  value={cellPhone}
                  onChange={handleChange("cellPhone")}
                  className="form-control"
                  id="inputAddress2"
                  placeholder="Cell Phone"
                  min="0"
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">CNIC Number</label>
                <input
                  type="number"
                  value={cnicNumber}
                  onChange={handleChange("cnicNumber")}
                  className="form-control"
                  id="inputAddress2"
                  placeholder="CNIC Number"
                  min="0"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">City</label>
                <input
                  type="text"
                  value={city}
                  onChange={handleChange("city")}
                  className="form-control"
                  id="inputAddress2"
                  placeholder="City"
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Country</label>
                <input
                  type="text"
                  value={country}
                  onChange={handleChange("country")}
                  className="form-control"
                  id="inputAddress2"
                  placeholder="Country"
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Update {loading ? <Spin /> : ""}
            </button>
          </form>
        </Content>
      </Layout>
    </Layout>
  );
};

export default EditProfile;
