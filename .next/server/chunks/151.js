exports.id = 151;
exports.ids = [151];
exports.modules = {

/***/ 2541:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "wU": function() { return /* reexport */ common_content; },
  "f9": function() { return /* reexport */ common_footer; },
  "fQ": function() { return /* reexport */ common_header; },
  "Jf": function() { return /* reexport */ latest_post; },
  "J0": function() { return /* reexport */ nav_logo; },
  "nC": function() { return /* reexport */ property_nav; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./helpers/auth.js
var auth = __webpack_require__(244);
;// CONCATENATED MODULE: ./components/commons/nav-logo.js






const NavLogo = ({
  className
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `container-fluid ${className ? "main-section2" : "main-section"}`,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "row",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "col-md-12 header-section",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {}), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          as: "/",
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "builder-logo-link",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              className: "img-fluid builder-logo",
              src: "https://build-earth.s3.us-east-2.amazonaws.com/img/Logo.svg",
              alt: "Build Earth Logo"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "head-quick-tour hide-tour",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            as: "https://currency.cyberisol.com/Currency/Create",
            href: "https://currency.cyberisol.com/Currency/Create",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "FORMS"
            })
          })
        })]
      })
    })
  });
};

/* harmony default export */ var nav_logo = (NavLogo);
;// CONCATENATED MODULE: ./components/commons/property-nav.js






const property_nav_link = __webpack_require__(1875);

const property_nav_NavLogo = ({
  className
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `container-fluid ${className ? "main-section2" : "main-section"}`,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "row",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "col-md-12 header-section",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {}), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          as: "/",
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "builder-logo-link",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              className: "img-fluid builder-logo",
              src: "https://build-earth.s3.us-east-2.amazonaws.com/img/Logo.svg",
              alt: "Build Earth Logo"
            })
          })
        }), !(0,auth/* isAuth */.$D)() && /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
          children: /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "head-quick-tour hide-tour",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              as: "/login",
              href: "/login",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: "LOGIN"
              })
            })
          })
        }), (0,auth/* isAuth */.$D)() && /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "dropdown",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "dropdown-toggle",
              id: "dropdownMenu2",
              "data-toggle": "dropdown",
              "aria-haspopup": "true",
              "aria-expanded": "false",
              style: {
                cursor: "pointer"
              },
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                style: {
                  width: "50px"
                },
                src: "../img/avatar.png",
                alt: "Avatar"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "dropdown-menu",
              "aria-labelledby": "dropdownMenu2",
              style: {
                right: "4px",
                left: "auto"
              },
              children: [(0,auth/* isAuth */.$D)().role == "staff" ? /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/dashboard",
                as: "/dashboard",
                children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                  className: "dropdown-item",
                  type: "button",
                  children: "DASHBOARD"
                })
              }) : /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/dashboard",
                as: "/dashboard",
                children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                  className: "dropdown-item",
                  type: "button",
                  children: "DASHBOARD"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                className: "dropdown-item",
                type: "button",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  onClick: auth/* logout */.kS,
                  children: "LOGOUT"
                })
              })]
            })]
          })
        })]
      })
    })
  });
};

async function getStaticProps() {
  const resData = await fetch(`${property_nav_link.API_SERVER}/api/user`);
  const data = await resData.json();
  console.log(data);
  return {
    props: {
      users: data
    }
  };
}
/* harmony default export */ var property_nav = (property_nav_NavLogo);
;// CONCATENATED MODULE: ./components/commons/common-header.js




const CommonHeader = ({
  title
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container-fluid about-main",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-6 small-screen",
            children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
              className: "about-main-heading",
              children: title
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-6 small-screen-section",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                className: "img-fluid about-triangle-one",
                src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/T1+White.svg",
                alt: "T1 White"
              }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                className: "img-fluid about-triangle-out-one",
                src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/T1+Out.svg",
                alt: "T1 Out"
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "triangle-section",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  className: "img-fluid about-triangle-img-one",
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/T1+Img+Abt.png",
                  alt: "T1 Img Abt"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                className: "img-fluid about-triangle-two",
                src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/T2+White.svg",
                alt: "T2 White"
              }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                className: "img-fluid about-triangle-out-two",
                src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/T2+Out.svg",
                alt: "T2 Out"
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "triangle-section-two",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  className: "img-fluid about-triangle-img-two",
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/T2+Img+Abt.png",
                  alt: "T2 Img Abt"
                })
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "col-md-6 large-screen",
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              className: "light-lion-about",
              src: "https://build-earth.s3.us-east-2.amazonaws.com/img/Lion+Abt-1.svg",
              alt: "Light Lion About"
            }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
              className: "about-main-heading",
              children: title
            })]
          })]
        })
      })
    })
  });
};

/* harmony default export */ var common_header = (CommonHeader);
// EXTERNAL MODULE: external "global"
var external_global_ = __webpack_require__(6631);
var external_global_default = /*#__PURE__*/__webpack_require__.n(external_global_);
;// CONCATENATED MODULE: ./components/commons/common-content.js






const CommonContent = ({
  otherHTMLContent,
  paragraph,
  beforeColorText,
  afterColorText,
  colorText,
  withCircles,
  classes
}) => {
  const {
    0: isMobile,
    1: setIsMobile
  } = (0,external_react_.useState)((external_global_default()).innerWidth < 768);
  (0,external_react_.useEffect)(() => {
    external_global_default().addEventListener("resize", () => {
      const ismobile = (external_global_default()).innerWidth < 768;
      if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
  }, [isMobile]);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: withCircles ? /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `${isMobile ? "container" : "container-fluid"} ${classes}`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row vision-row",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "col-md-8 col-sm-12",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
            className: "about-heading-one",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "about-dark-heading",
              children: "Our"
            }), " Vision"]
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "about-paragraph",
            children: "To become the leading real estate company in Pakistan, and to provide world class real estate assistance that meet out consumers\u2019 needs at all times. Satisfaction of our consumers is the prime concern of Build Earth. Along with providing precise and up-to-date skilled analysis, information and sound real estate consultancy and to also make the selling and buying of real estate faster, economical, and easier."
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-md-4 vision-circle-right",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            className: "img-fluid vision-circles",
            src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/Circles.svg",
            alt: "Circles"
          })
        })]
      })
    }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `container ${classes}`,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "col-md-12",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
            className: "about-heading-one",
            children: [beforeColorText, " ", /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              className: "about-dark-heading",
              children: [colorText, " "]
            }), afterColorText]
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "about-paragraph",
            dangerouslySetInnerHTML: {
              __html: paragraph
            }
          }), otherHTMLContent && otherHTMLContent]
        })
      })
    })
  });
};

/* harmony default export */ var common_content = (CommonContent);
;// CONCATENATED MODULE: ./components/commons/common-footer.js





const CommonFooter = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "container-fluid footer",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "row",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-md-12 footer-bg-width",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: "footer-text",
          children: ["COPYRIGHTS. \xA9 2020-2022.", " ", /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            as: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "BuildEarth"
            })
          }), " ", "All RIGHTS RESERVED."]
        })
      })
    })
  });
};

/* harmony default export */ var common_footer = (CommonFooter);
// EXTERNAL MODULE: ./config/default.js
var config_default = __webpack_require__(8264);
;// CONCATENATED MODULE: ./components/commons/latest-post.js






const LatestPost = () => {
  let id;
  const {
    0: count,
    1: setCount
  } = (0,external_react_.useState)(0);
  const [sliderIndex, setSliderIndex] = external_react_default().useState(count);
  const isWindow = false;
  const mobile = isWindow ? window.innerWidth <= 768 : false;
  const arrowStyle = {
    bottom: 30,
    position: 'absolute',
    right: 60
  };

  const handleNextSliderIndex = () => {
    if (sliderIndex === config_default/* cfg.latestPostImages.length */.L.latestPostImages.length - 1) {
      clearInterval(id);
      setSliderIndex(0);
      return;
    }

    setSliderIndex(sliderIndex + 1);
  };

  const handlePrevSliderIndex = () => {
    if (sliderIndex === 0) {
      clearInterval(id);
      setSliderIndex(config_default/* cfg.latestPostImages.length */.L.latestPostImages.length - 1);
      return;
    }

    setSliderIndex(sliderIndex - 1);
  };

  (0,external_react_.useEffect)(() => {
    id = setInterval(() => {
      if (count === config_default/* cfg.latestPostImages.length */.L.latestPostImages.length - 1) {
        setCount(0);
        return;
      }

      setCount(count + 1);
    }, 5000);
    setSliderIndex(count);
    return () => clearInterval(id);
  }, [count]); // if (mobile) return <div />;

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "container latest-post",
    children: /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: "testimonial_section",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "col-lg-10",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
              className: "about-heading-one",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "about-dark-heading",
                children: "Latest"
              }), " Posts"]
            }), /*#__PURE__*/jsx_runtime_.jsx("img", {
              id: "myimg",
              style: {
                width: 920,
                height: 563
              },
              className: " post-img",
              src: config_default/* cfg.latestPostImages */.L.latestPostImages[sliderIndex],
              alt: "Post Img"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "col-lg-5 offset-lg-7 offset-md-5 latest-post-content",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "testimonials",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "testimonial_content",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "testimonial_caption",
                  children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
                    className: "post-heading",
                    children: config_default/* cfg.latestPostContent */.L.latestPostContent[sliderIndex].heading
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  className: "post-detail",
                  style: {
                    color: "#fff"
                  },
                  children: config_default/* cfg.latestPostContent */.L.latestPostContent[sliderIndex].description
                }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#",
                  className: "post-button",
                  children: "Read More"
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              style: arrowStyle,
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "owl-prev",
                onClick: handlePrevSliderIndex,
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  style: {
                    width: 30,
                    height: 30
                  },
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/Left+Arrow.svg"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "owl-next",
                onClick: handleNextSliderIndex,
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  style: {
                    width: 30,
                    height: 30,
                    position: "absolute",
                    bottom: -10,
                    left: 30
                  },
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/Right+Arrow.svg"
                })
              })]
            })]
          })]
        })
      })
    })
  });
};

/* harmony default export */ var latest_post = (LatestPost);
;// CONCATENATED MODULE: ./components/commons/index.js







/***/ }),

/***/ 8264:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": function() { return /* binding */ cfg; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_commons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2541);




const cfg = {
  scripts: ["https://code.jquery.com/jquery-3.2.1.slim.min.js", "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js", "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js", "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.js", "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js", "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/plugins/CSSPlugin.min.js", "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.js", "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js", "https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.js", "https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.js", "/js/loader.js", "/js/nav.js", "/js/scrollMagic.js", "/js/slider.js"],
  latestPostImages: ["https://build-earth.s3.us-east-2.amazonaws.com/img/marina/Marina.png", "https://build-earth.s3.us-east-2.amazonaws.com/img/noor/Noor.png", "https://build-earth.s3.us-east-2.amazonaws.com/img/aljalil/Jalil+Garden.png", "https://build-earth.s3.us-east-2.amazonaws.com/img/about/Post+Img+1.png"],
  latestPostContent: [{
    heading: "Exterior Design Trends",
    description: `
        Your exterior design will always be as important as your interior design
        because it is what the public sees.
      `
  }, {
    heading: "Interior Design Trends",
    description: `
        Interior design will always be as important as your interior design
        because it is what the public sees.
      `
  }, {
    heading: "Modern Design Trends",
    description: `
        Modern design will always be as important as your interior design
        because it is what the public sees.
      `
  }, {
    heading: "Architectural Design Trends",
    description: `
        Architectural design will always be as important as your interior design
        because it is what the public sees.
      `
  }],
  homePageProperties: [{
    url: "/projects/al-jalil-garden",
    name: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
      className: "jalil-heading",
      children: ["Al J", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: "blind-text",
        children: "alil Gard"
      }), "en"]
    }),
    image: "https://build-earth.s3.us-east-2.amazonaws.com/img/aljalil/Jalil+Garden.png",
    website: ""
  }, {
    url: "/projects/al-noor-orchard",
    name: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
      className: "noor-heading",
      children: ["Al N", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: "blind-text",
        children: "oor Orc"
      }), "hard"]
    }),
    image: "https://build-earth.s3.us-east-2.amazonaws.com/img/noor/Noor.png",
    website: ""
  }, {
    url: "/projects/west-marina",
    name: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
      className: "marina-heading",
      children: ["W", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: "blind-text",
        children: "est Mari"
      }), "na"]
    }),
    image: "https://build-earth.s3.us-east-2.amazonaws.com/img/marina/Marina.png",
    website: ""
  }],
  aboutPageContent: [{
    classes: "what-section",
    paragraph: ` 
        Build earth is shaping the future of real estate. We assemble together all real estate professionals and
        we make sure
        quality and content gain the victory. Our aim is to provide diverse services for secure assets including
        Architectural &amp;
        Urban Planning, Construction Planning &amp; Management, Construction &amp; Development, Infrastructure,
        Development &amp; Road
        Works, Project Management and Marketing &amp; Promotions.
      `,
    beforeColorText: "What",
    colorText: "We",
    afterColorText: "Are?"
  }, {
    classes: "our-vision",
    paragraph: ` 
        To become the leading real estate company in Pakistan, and to provide world class real estate assistance
        that meet out consumers’ needs at all times. Satisfaction of our consumers is the prime concern of Build
        Earth. Along with providing precise and up-to-date skilled analysis, information and sound real estate
        consultancy and to also make the selling and buying of real estate faster, economical, and easier.
      `,
    beforeColorText: "",
    colorText: "Our",
    withCircles: true,
    afterColorText: "Vision"
  }, {
    classes: "our-mission",
    paragraph: ` 
        Our mission is to come up with an exquisite level of service, excellence and expertise in the real estate
        market to our consumer. To always keep in mind that behind every real estate deal, there is always a person
        or family involved. To take action in the best interest of our clients, by offering undoubted ethics on all
        agreements and to flourish long-lasting relationships with our consumers by offering exceptional service and
        utmost customer satisfaction.
      `,
    beforeColorText: "",
    colorText: "Our",
    afterColorText: "Mission"
  }],
  newsContents: [{
    image: "https://build-earth.s3.us-east-2.amazonaws.com/img/post/Lion+Left.svg",
    url: "real-estate-and-interior-design",
    content: `
      <div class="container post-detail">
        <div class="row">
          <div class="col-md-12">
            <h1 class="post-detail-heading">REAL ESTATE AND INTERIOR DESIGN</h1>
            <p class="post-paragraph">
                The role of the real estate executive and interior designer may seem worlds apart. But real estate interior design is
                acknowledged&nbsp;as an important part of the real estate market. Any interior design is likely to be seen as a big plus by
                real estate firms especially when it comes to uniting clients with their dream home, or businesses with the perfect
                premises. Combining real estate and interior design can lead to a truly rewarding career.

            </p>
            <p class="post-paragraph-dark">
                “Real estate and interior design is a match made in heaven”
            </p>
            <p class="post-paragraph">
                As well as having ‘the eye’, interior designers have the contacts and know-how required to turn a property with
                potential into a desirable home. This is what will give them an edge in a competitive marketplace. Those who are
                passionate about their work, and enjoy hands-on relationships with clients from all backgrounds and walks of life, will
                then be able to sell that home for its maximum possible value.
            </p>
            <p class="post-paragraph">
                When an interior designer shows a home to a realtor, he/she encourages clients to take design risks and consider
                high-end upgrades. There is great value in real estate when you renovate, especially when you update the kitchen and
                bathrooms. Even the most stubborn buyers can be persuaded with a huge spike in resale value!
            </p>
            <p class="post-paragraph-dark">
                “We help the client see what a Home could be”
            </p>
          </div>
        </div>
      </div>
      `
  }, {
    image: "https://build-earth.s3.us-east-2.amazonaws.com/img/post/Lion+Left.svg",
    url: "al-jalil-garden",
    mainHeading: "Al Jalil Garden Is Welcoming You!",
    p1: `
       Lahore is a welcoming and one of the most famous and prominent cities of the world. In Pakistan, Lahore holds
       much importance since the city is the business and economic hub for the country. Lahore’s population is 11.13
       million according to the census of 2017 which makes Lahore the second most populated city of Pakistan.
      `,
    p2: `
      Living in Lahore brings
      you lots of opportunities to earn good and to have a great lifestyle. Numerous housing societies have
      been developed in
      the city which assures a good life style and living needs of the citizen. Al-Jalil Gardens is considered
      as the premium
      housing communities which provide economical living in the most perfect location. The trendsetting
      lifestyle makes this
      society an ideal place. Al-Jalil Gardens is a highly economical, well-planned and aesthetically designed
      housing society
      that offers basic, standard and luxurious facilities to its colony in a secured environment. Al-Jalil
      Gardens is the
      definitions of safe haven, far from the city hustle yet still approachable from the major locations in
      the city.
      `,
    p3: `
      Al Jalil Garden Housing Scheme (AJG) spans over hundreds of acres of prime location land on
      main Jaranwala/Sharaqpur Road opposite the M-2 Motorway’s Main Faizpur Interchange. “AJG” – Having easy
      access from
      Motorway, GT road, Mall Road, District Court Lahore, Thokar Niaz Baig, Multan Road and surrounding
      areas. Development
      work is progressing at a steady yet consistent pace.
      `,
    h1: `
      Where to locate Al Jalil Gardens
      `,
    h2: `What Al Jalil Gardens offers`,
    p4: `
      The society offers the residential
      plots of 3, 5, 8, 10 and 20 Marla which you can own by following the installment plan. To make the
      investment process
      easier for the investors, the society has introduced an easy payment plan.
      `,
    h3: "Al Jalil Gardens Amenities",
    p5: `Following are the
                amenities offered by the Al-Jalil Gardens;`,
    listContent: ["Uninterrupted gas &amp; electricity supply", "Green belts &amp; beautifully landscaped parks", "Wide and fully carpeted roads", "Well-managed drainage system", "High security surveillance", "Commercial plots", "A Jamia Masjid", "Gymnasium", "Pizza Hut", "Gloria Jeans", "UBL/Apna bank", "UOL jalil campus", "Stepping stone school"]
  }, {
    image: "https://build-earth.s3.us-east-2.amazonaws.com/img/post/Lion+Left.svg",
    url: "pakistan-inflation",
    mainHeading: "Pakistan's Inflation",
    p1: `
        Pakistan’s high inflation makes it appear that house prices are rising strongly. But it’s an illusion.
        Nationwide house prices, in nominal terms, rose by 5.05% to PKR 10,875 (US$ 77) per square feet (sq. ft)
        during the year to Q1 2019, according to Pakistan’s largest property portal zameen.com. However when adjusted
        for inflation, house prices actually dropped 3.98% over the same period.
      `,
    p2: `
       Quarter-on-quarter, nationwide house prices rose by a meager 0.95% in Q1 2019
       (fell by 2.07% when adjusted for inflation).
      `,
    p3: `
      In March 2019, Pakistan’s inflation stood at 9.4%, up from 8.2% in the previous month and 3.2% in the same period
      last year, according to the Pakistan Bureau of Statistics (PBS). In fact, it was the highest level recorded since
      November 2013.
      
      `,
    h1: `Pakistan house prices`,
    h2: `In Pakistan’s major cities:`,
    h3: ``,
    p4: `
      In Lahore, the average house price was PKR 10,402 (US$ 73) per sq. ft in Q1 2019, up 6.25% from a year earlier,
      but actually down 2.89% when adjusted for inflation. In Karachi, house prices averaged PKR 13,158 (US$ 93) per sq.
       ft in Q1 2019, up 4.25% from the previous year, but down 4.62% when adjusted for inflation.
      `,
    p5: `
     In Islamabad, house prices averaged PKR 9,985 (US$ 70) per sq. ft in Q1 2019, up by 7.01% from a year earlier, but down 2.2% in real terms.

The Pakistani rupee (PKR) lost about 25% of its value against the US dollar in just two years, from PKR 104.804 =US$1 in March 2017 to PKR 139.177 = US$1 in March 2019. The State Bank of Pakistan (SBP), the country’s central bank, devalued its currency several times last year, as the government negotiates a bailout with the International Monetary Fund (IMF) to address its ballooning current account and fiscal deficits that threaten to trigger a balance of payments crisis.
      `,
    listContent: []
  }, {
    image: "https://build-earth.s3.us-east-2.amazonaws.com/img/post/Lion+Left.svg",
    url: "west-marina",
    mainHeading: "Al Noor Orchard",
    p1: `
      Lahore the capital city of Punjab and famously known as the Heart of Pakistan. This city is the center of trade
      and business for the peoples from all over the Punjab province. Every year about 0.3 million people travel to
      this city and settle here. Al Jalil developer is a reliable brand in the real estate industry which is providing
      its services from over the years and after the success of Al Jalil Gardens and now the developers have launched a
      new project in the shape of Al Noor Orchard which is an excellent addition in the real estate industry of Lahore.
      `,
    p2: `
        Al Jalil developers have gained the reputation as one of the best real estate developers in the city due to their
      unique architecture and with state of the art facilities.
      `,
    p3: `
      Al Noor Orchard is located on the main Sharaqpur road which is 3 km away from the Al Jalil Gardens which is on
      the other side of Al Noor Orchard. This housing scheme is situated 3 km away from the Faizpur interchange close
      to the motorway M-2. This housing society is near Lahore ring road which connects the housing society to the
      main city centers. This ideal location is the main attraction for the housing scheme which influences the
      investors and buyers to invest in this project.
      
      `,
    h1: `Location`,
    h2: `Project Details`,
    h3: `Amenities`,
    p4: `
      Al Noor Orchard is a relatively small housing project in compare to Al Jalil Gardens which spans over the area
      of 40 acres. Currently, the housing project is offering residential and commercial plots to their customers.
      Residential plots include 5 Marlas, 8 Marlas, 10 Marlas and 1 Kanal. Commercial plots include only 4 Marlas for
      this time.
      `,
    p5: `
      Al Jalil developers are best known for their unique architecture and state of the art facilities for their
      residents and these amenities attracts lot of investors and buyers to the housing project. Here is the list of 
      amenities provided by the housing scheme to the residents.
      `,
    listContent: ["Gated Community", "24/7 Security", "Commercial Areas", "Graveyards", "Mosques", "Top Educational Institutions", "Gym", "Parks and Play areas", "Underground Electrification System", "150 ft Main Boulevard", "Modern Development"]
  }]
};

/***/ })

};
;