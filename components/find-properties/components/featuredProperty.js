import React from "react";
import Slider from "react-slick";

const AssociatesSlider = () => {
  const settings = {
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
    return (
      <div className="container our-associates">
        <div className="row">
          <div className="col">
            <h1 className="about-heading-one">
              <span className="about-dark-heading">Featured</span> Property
            </h1>
            <section className=" slider slick-initialized slick-slider">
              <div aria-live="polite" className="slick-list draggable">
                <Slider {...settings} className="slick-track" role="listbox">
                  <div
                    className="slide property-card slick-slide slick-cloned"
                    data-slick-index="-5"
                    id=""
                    aria-hidden="true"
                    tabIndex="-1"
                  >
                    <img
                      src="https://build-earth.s3.us-east-2.amazonaws.com/img/property/Img+1.png"
                      className="card-img-top"
                      alt="image"
                    />
                    {/* <div className="card-body">
                      <div className="property-detail">
                        <span>
                          <h5 className="card-title">3 Marla - West Marian</h5>
                          <p className="card-text">
                            Commercial Plot Block A-1{" "}
                          </p>
                          <p className="prc">Rs.2314K</p>
                        </span>
                        <img
                          className="img-fluid call-icon"
                          src="https://build-earth.s3.us-east-2.amazonaws.com/img/property/Call+Icon.svg"
                          alt=""
                        />
                      </div>
                    </div> */}
                  </div>

                  <div
                    className="slide property-card slick-slide slick-cloned"
                    data-slick-index="-4"
                    id=""
                    aria-hidden="true"
                    tabIndex="-1"
                  >
                    <img
                      src="https://build-earth.s3.us-east-2.amazonaws.com/img/property/Img+2.png"
                      className="card-img-top"
                      alt="image"
                    />
                    {/* <div className="card-body">
                      <div className="property-detail">
                        <span>
                          <h5 className="card-title">10 Marla - West Marian</h5>
                          <p className="card-text">
                            Commercial Plot Block A-1{" "}
                          </p>
                          <p className="prc">Rs.8314K</p>
                        </span>
                        <img
                          className="img-fluid call-icon"
                          src="https://build-earth.s3.us-east-2.amazonaws.com/img/property/Call+Icon.svg"
                          alt=""
                        />
                      </div>
                    </div> */}
                  </div>

                  <div
                    className="slide property-card slick-slide slick-cloned"
                    data-slick-index="-3"
                    id=""
                    aria-hidden="true"
                    tabIndex="-1"
                  >
                    <img
                      src="https://build-earth.s3.us-east-2.amazonaws.com/img/property/Img+3.png"
                      className="card-img-top"
                      alt="image"
                    />
                    {/* <div className="card-body">
                      <div className="property-detail">
                        <span>
                          <h5 className="card-title">5 Marla - West Marian</h5>
                          <p className="card-text">
                            Commercial Plot Block A-1{" "}
                          </p>
                          <p className="prc">Rs.2314K</p>
                        </span>
                        <img
                          className="img-fluid call-icon"
                          src="https://build-earth.s3.us-east-2.amazonaws.com/img/property/Call+Icon.svg"
                          alt=""
                        />
                      </div>
                    </div> */}
                  </div>

                  <div
                    className="slide property-card slick-slide slick-cloned"
                    data-slick-index="-2"
                    id=""
                    aria-hidden="true"
                    tabIndex="-1"
                  >
                    <img
                      src="https://build-earth.s3.us-east-2.amazonaws.com/img/property/Img+1.png"
                      className="card-img-top"
                      alt="image"
                    />
                    {/* <div className="card-body">
                      <div className="property-detail">
                        <span>
                          <h5 className="card-title">3 Marla - West Marian</h5>
                          <p className="card-text">
                            Commercial Plot Block A-1{" "}
                          </p>
                          <p className="prc">Rs.2314K</p>
                        </span>
                        <img
                          className="img-fluid call-icon"
                          src="https://build-earth.s3.us-east-2.amazonaws.com/img/property/Call+Icon.svg"
                          alt=""
                        />
                      </div>
                    </div> */}
                  </div>

                  <div
                    className="slide property-card slick-slide slick-cloned"
                    data-slick-index="-1"
                    id=""
                    aria-hidden="true"
                    tabIndex="-1"
                  >
                    <img
                      src="https://build-earth.s3.us-east-2.amazonaws.com/img/property/Img+3.png"
                      className="card-img-top"
                      alt="image"
                    />
                    {/* <div className="card-body">
                      <div className="property-detail">
                        <span>
                          <h5 className="card-title">5 Marla - West Marian</h5>
                          <p className="card-text">
                            Commercial Plot Block A-1{" "}
                          </p>
                          <p className="prc">Rs.2314K</p>
                        </span>
                        <img
                          className="img-fluid call-icon"
                          src="https://build-earth.s3.us-east-2.amazonaws.com/img/property/Call+Icon.svg"
                          alt=""
                        />
                      </div>
                    </div> */}
                  </div>
                </Slider>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
};

export default AssociatesSlider;
