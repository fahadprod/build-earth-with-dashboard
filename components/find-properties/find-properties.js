import React, { useState, useEffect } from "react";
import { PropertyNav, LatestPost, CommonFooter } from "components/commons";
import AssociatesSlider from "components/about/components/slider";
import { Navigation } from "components/home/components";
import FeaturedProperty from "./components/featuredProperty";
import axios from "axios";
import Image from 'next/image';
import moment from "moment";

const link = require("../commons/api");

const FindPropertiesHome = () => {
  const [property, setProperty] = useState({
    society: "",
    name: "",
    category: "",
    minprice: "",
    maxprice: "",
    formData: process.browser && new FormData(),
  });


  const [properties, setProperties] = useState(null);

 
 const { society, name, category, minprice, maxprice, formData } = property;

 const handleChange = (name) => (e) => {
   const value = name === "imageUpload" ? e.target.files[0] : e.target.value;
   // const imageName =
   //   name === "imageUpload" ? e.target.files[0].name : "Upload image";
   formData.set(name, value);
   setProperty({
     ...property,
     [name]: value,
   });
 };

  useEffect(async () => {
    try {
      const property = await axios.get(
        `${link.API_SERVER}/api/property/allProperty`
      );
      // console.log(property);
      setProperties(property.data);
    } catch (err) {
      console.log(err);
    }
  }, [setProperties]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const getProperty = await axios.get(
      `${link.API_SERVER}/api/property/filterProperty/${society}/${name}/${category}/${minprice}/${maxprice}`,
    );
    // console.log(getProperty)
    setProperties(getProperty.data);
  }
  return (
    <React.Fragment>
      <PropertyNav className={true} />
      <Navigation />
      <div id="full-page">
        <div className="container-fluid property-header">
          <div className="property-header-section">
            <img
              className="img-fluid property-header-img"
              src="https://build-earth.s3.us-east-2.amazonaws.com/img/property/Left+Round.svg"
              alt="Left Round"
            />
            <img
              className="img-fluid property-header-img2"
              src="https://build-earth.s3.us-east-2.amazonaws.com/img/property/Middle+Round.svg"
              alt="Middle Round"
            />
            <img
              className="img-fluid property-header-img"
              src="https://build-earth.s3.us-east-2.amazonaws.com/img/property/Right+Round.svg"
              alt="Right Round"
            />
          </div>
        </div>

        <div className="container select-property-section">
          <div className="select-property-list">
            <form onSubmit={handleSearch}>
              <select
                value={society}
                onChange={handleChange("society")}
                className="property-select"
                required
              >
                <option value="" disabled selected>
                  Select Society
                </option>
                <option value="Al Jalil Garden">Al Jalil Garden</option>
                <option value="Al Noor Orchard">Al Noor Orchard</option>
                <option value="West Marina">West Marina</option>
              </select>

              <select
                value={name}
                onChange={handleChange("name")}
                className="property-select"
                required
              >
                <option value="" disabled selected>
                  Select Type
                </option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
              </select>

              <select
                value={category}
                onChange={handleChange("category")}
                className="property-select"
                required
              >
                <option value="" disabled selected>
                  Select Marlas
                </option>
                <option value="3 Marla">3 Marla</option>
                <option value="5 Marla">5 Marla</option>
                <option value="10 Marla">10 Marla</option>
                <option value="1 Kanal">1 Kanal</option>
              </select>

              <input
                className="property-select"
                type="number"
                value={minprice}
                onChange={handleChange("minprice")}
                placeholder="Min"
                min="0"
                required
              />

              <input
                className="property-select"
                type="number"
                value={maxprice}
                onChange={handleChange("maxprice")}
                placeholder="Max"
                min="0"
                required
              />

              <button type="submit" className="property-search-btn">
                SEARCH
                <img
                  className="img-fluid btn-icon"
                  src="https://build-earth.s3.us-east-2.amazonaws.com/img/property/Btn+Icon.svg"
                  alt=""
                />
              </button>
            </form>
          </div>
        </div>

        {/* <FeaturedProperty/> */}

        <div className="container property-list">
          <div className="row">
            <div className="col">
              <h1 className="all-property">All Properties</h1>
            </div>
          </div>

          <div className="row">
            {properties !== null ? (
              properties.map((property, index) => {
                return (
                  <div className="col-lg-4 col-md-6 mt-5" key={index}>
                    <div className="card property-card">
                      <img
                        src={property.image}
                        className="card-img-top"
                        alt="image"
                      />
                      <div className="card-body">
                        <div className="property-detail">
                          <span>
                            <h5 className="card-title">
                              {property.category} Luxury House
                            </h5>
                            <p className="card-text">
                              <i class="fa fa-map-marker"></i>{" "}
                              {property.society} - {property.name}
                            </p>
                            <p className="card-text">
                              Posted on{" "}
                              {moment(property.createdAt).format(
                                "MMMM Do YYYY"
                              )}{" "}
                              by Links Estate
                            </p>
                            <h5 className="prc">PKR {property.price}</h5>
                          </span>
                          <span className="call-section">
                            <img
                              className="img-fluid call-icon"
                              src="https://build-earth.s3.us-east-2.amazonaws.com/img/property/Call+Icon.svg"
                              alt=""
                            />
                            <img
                              className="img-fluid"
                              src="https://build-earth.s3.us-east-2.amazonaws.com/img/wilsonHouse.png"
                              alt="Wilson House"
                              style={{ width: "100px" }}
                            />
                          </span>
                        </div>
                        <button className="email-sending-button">
                          <img
                            src="https://build-earth.s3.us-east-2.amazonaws.com/img/envelope.png"
                            className="img-fluid"
                            alt="Envelope"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h2>Property Not Found</h2>
            )}
          </div>
        </div>

        <AssociatesSlider />
        <br />
        <br />
        <CommonFooter />
      </div>
    </React.Fragment>
  );
};

export default FindPropertiesHome;
