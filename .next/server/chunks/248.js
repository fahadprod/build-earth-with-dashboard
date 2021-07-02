exports.id = 248;
exports.ids = [248];
exports.modules = {

/***/ 3248:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$_": function() { return /* reexport */ footer; },
  "gL": function() { return /* reexport */ home_background; },
  "JP": function() { return /* reexport */ home_page_logo; },
  "vE": function() { return /* reexport */ main_home_page; },
  "W_": function() { return /* reexport */ navigation; },
  "Qu": function() { return /* reexport */ web_navigation; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./components/home/components/home-background.js




const HomeBackground = () => {
  return /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container-fluid loader",
      id: "preloader",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "row",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-12 text-center",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              className: "img-fluid crown",
              src: "https://build-earth.s3.us-east-2.amazonaws.com/img/Crown.png",
              alt: "Crown"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row no-gutters loader-imgs",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-4 col-sm-4 col-xs-4 lion-one",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              className: "img-fluid lion-left",
              src: "https://build-earth.s3.us-east-2.amazonaws.com/img/Lion+Left.png",
              alt: "Lion Left"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-4 col-sm-4 col-xs-4 circle-crown",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              className: "img-fluid circle",
              src: "https://build-earth.s3.us-east-2.amazonaws.com/img/cLE.png",
              alt: "Circle"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-4 col-sm-4 col-xs-4 lion-two",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              className: "img-fluid lion-right",
              src: "https://build-earth.s3.us-east-2.amazonaws.com/img/Lion+Right.png",
              alt: "Lion Right"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "mx-auto text-center mt-2",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              className: "img-fluid build-earth-text",
              src: "https://build-earth.s3.us-east-2.amazonaws.com/img/build-earth.png",
              alt: "Build Earth"
            })
          })]
        })]
      })
    })
  });
};

/* harmony default export */ var home_background = (HomeBackground);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./components/home/utils.js
var utils = __webpack_require__(2805);
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(9015);
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_);
// EXTERNAL MODULE: ./utils/utils.js
var utils_utils = __webpack_require__(8822);
;// CONCATENATED MODULE: ./components/commons/navigation.js









const Navigation = ({
  color
}) => {
  const router = (0,router_.useRouter)();
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,external_react_.useState)(false);

  const handleOpenNavigation = () => {
    if (isOpen) {
      (0,utils/* closeNavbar */.x9)();
      document.getElementById('full-page').classList.remove("full-page-fixed");
    } else {
      (0,utils/* openNavbar */.IX)();
      document.getElementById('full-page').classList.add("full-page-fixed");
    }

    setIsOpen(!isOpen);
  };

  (0,external_react_.useEffect)(() => {
    let id;

    window.onresize = () => {
      if (isOpen) {
        external_gsap_default().to("#bg-circle", 1, {
          scale: (0,utils_utils/* getVpdr */.U)(),
          ease: Expo.easeInOut
        });
      }
    };

    return () => clearTimeout(id);
  }, []);

  const handleCloseNav = name => {
    if (name === '/videos') {
      window.location.pathname = '/videos';
    }

    if (name === '/gallery') {
      window.location.pathname = '/gallery';
    }

    if (name === '/contact') {
      window.location.pathname = '/contact';
    }

    if (router.pathname === name) {
      const nav = document.querySelector('.navbar-menu');

      if (nav) {
        nav.style.display = 'none';
      }

      (0,utils/* closeNavbar */.x9)();
      document.getElementById('full-page').classList.remove("full-page-fixed");
      setIsOpen(false);
      return;
    }

    return;
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    id: "wrapper",
    children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
      className: `navbar-toggle ${isOpen ? "active" : ""}`,
      id: "toggle",
      type: "button",
      onClick: handleOpenNavigation,
      children: /*#__PURE__*/jsx_runtime_.jsx("header", {
        className: "header",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "header__logo  js-replace",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "js-replace__item",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "js-replace__content",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                viewBox: "0 0 100 100",
                width: "80",
                children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                  className: "line top",
                  d: "m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
                }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                  className: "line middle",
                  d: "m 30,50 h 40"
                })]
              })
            })
          })
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "navbar-menu",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-4",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/",
                  as: "/",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    onClick: () => handleCloseNav("/"),
                    children: "Home"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/about",
                  as: "/about",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    onClick: () => handleCloseNav("/about"),
                    children: "About"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/services",
                  as: "/services",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    onClick: () => handleCloseNav("/services"),
                    children: "Services"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/projects",
                  as: "/projects",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    onClick: () => handleCloseNav("/projects"),
                    children: "Projects"
                  })
                })
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "col-md-4",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "menu-logo-circle",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                className: "img-fluid",
                src: "https://build-earth.s3.us-east-2.amazonaws.com/img/menu/Logo+Circle.svg",
                alt: "Logo Circle"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              className: "all-society",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                id: "el-1",
                children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  as: "/projects/al-jalil-garden",
                  href: "/projects/al-jalil-garden",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    onClick: () => handleCloseNav("/projects/al-jalil-garden"),
                    children: "Al Jalil Garden"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                  className: "img-fluid menu-img-1",
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/news/News+1.png",
                  alt: "Al Jalil Garden"
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                id: "el-1",
                children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  as: "/projects/al-noor-orchard",
                  href: "/projects/al-noor-orchard",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    onClick: () => handleCloseNav("/projects/al-noor-orchard"),
                    children: "Al Noor Orchard"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                  className: "img-fluid menu-img-1",
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/news/News+2.png",
                  alt: "Al Noor Orchard"
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                id: "el-1",
                children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  as: "/projects/west-marina",
                  href: "/projects/west-marina",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    onClick: () => handleCloseNav("/projects/west-marina"),
                    children: "West Marina"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                  className: "img-fluid menu-img-1",
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/news/News+4.png",
                  alt: "West Marina"
                })]
              })]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-4",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  as: "/news",
                  href: "/news",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    onClick: () => handleCloseNav("/news"),
                    children: "News"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#",
                  onClick: () => handleCloseNav("/videos"),
                  children: "Videos"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#",
                  onClick: () => handleCloseNav("/gallery"),
                  children: "Gallery"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#",
                  onClick: () => handleCloseNav("/contact"),
                  children: "Contact"
                })
              })]
            })
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container-fluid footer-section menu-footer",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "row",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "col-md-12 footer-detail",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "social-links",
              children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "https://www.facebook.com/buildearth111",
                target: "_blank",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  className: "img-fluid facebook-icon",
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/aljalil/facebook.svg",
                  alt: "Facebook"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "https://www.instagram.com/buildearth55/",
                target: "_blank",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  className: "img-fluid",
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/aljalil/instagram.svg",
                  alt: "Instagram"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "https://twitter.com/BuildEarthConst",
                target: "_blank",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  className: "img-fluid",
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/aljalil/twitter.svg",
                  alt: "Twitter"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "https://www.facebook.com/buildearth111",
                target: "_blank",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  className: "img-fluid",
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/aljalil/youtube.svg",
                  alt: "Youtube"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "http://linkedin.com/in/build-earth-construction-a86992204",
                target: "_blank",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  className: "img-fluid",
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/aljalil/linkedin.svg",
                  alt: "LinkeDin"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "https://www.facebook.com/buildearth111",
                target: "_blank",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  className: "img-fluid",
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/aljalil/whatsapp.svg",
                  alt: "WhatsApp"
                })
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "find-property-small",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/find-properties",
                as: "/find-properties",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  className: "find-property",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    className: "img-fluid pin",
                    src: "https://build-earth.s3.us-east-2.amazonaws.com/img/aljalil/Pin.svg",
                    alt: "PIN"
                  }), "FIND PROPERTY"]
                })
              })
            })]
          })
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "bg-circle",
      style: {
        backgroundColor: color ? color : "#AA1D45"
      }
    })]
  });
};

/* harmony default export */ var navigation = (Navigation);
// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__(1273);
;// CONCATENATED MODULE: ./components/commons/web-navigation.js










const WebNavigation = ({
  color
}) => {
  const router = (0,router_.useRouter)();
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,external_react_.useState)(false);

  const handleOpenNavigation = () => {
    if (isOpen) {
      (0,utils/* closeNavbar */.x9)();
      document.getElementById("full-page").classList.remove("full-page-fixed");
    } else {
      (0,utils/* openNavbar */.IX)();
      document.getElementById("full-page").classList.add("full-page-fixed");
    }

    setIsOpen(!isOpen);
  };

  (0,external_react_.useEffect)(() => {
    let id;

    window.onresize = () => {
      if (isOpen) {
        external_gsap_default().to("#bg-circle", 1, {
          scale: (0,utils_utils/* getVpdr */.U)(),
          ease: Expo.easeInOut
        });
      }
    };

    return () => clearTimeout(id);
  }, []);

  const handleCloseNav = name => {
    if (name === "/videos") {
      window.location.pathname = "/videos";
    }

    if (name === "/gallery") {
      window.location.pathname = "/gallery";
    }

    if (name === "/contact") {
      window.location.pathname = "/contact";
    }

    if (router.pathname === name) {
      const nav = document.querySelector(".navbar-menu");

      if (nav) {
        nav.style.display = "none";
      }

      (0,utils/* closeNavbar */.x9)();
      document.getElementById("full-page").classList.remove("full-page-fixed");
      setIsOpen(false);
      return;
    }

    return;
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    id: "wrapper",
    children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
      className: `navbar-toggle second-toggle navbar-toggle-website ${isOpen ? "active" : ""}`,
      id: "toggle",
      type: "button",
      onClick: handleOpenNavigation,
      children: /*#__PURE__*/jsx_runtime_.jsx("header", {
        className: "header",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "header__logo  js-replace",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "js-replace__item",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "js-replace__content",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                viewBox: "0 0 100 100",
                width: "80",
                children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                  className: "line top",
                  d: "m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
                }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                  className: "line middle",
                  d: "m 30,50 h 40"
                })]
              })
            })
          })
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "navbar-menu",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-4",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/",
                  as: "/",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    onClick: () => handleCloseNav("/"),
                    children: "Home"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/about",
                  as: "/about",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    onClick: () => handleCloseNav("/about"),
                    children: "About"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/services",
                  as: "/services",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    onClick: () => handleCloseNav("/services"),
                    children: "Services"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/projects",
                  as: "/projects",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    onClick: () => handleCloseNav("/projects"),
                    children: "Projects"
                  })
                })
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "col-md-4",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "menu-logo-circle",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                className: "img-fluid",
                src: "https://build-earth.s3.us-east-2.amazonaws.com/img/menu/Logo+Circle.svg",
                alt: "Logo Circle"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              className: "all-society",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                id: "el-1",
                children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  as: "/projects/al-jalil-garden",
                  href: "/projects/al-jalil-garden",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    onClick: () => handleCloseNav("/projects/al-jalil-garden"),
                    children: "Al Jalil Garden"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                  className: "img-fluid menu-img-1",
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/news/News+1.png",
                  alt: "Al Jalil Garden"
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                id: "el-1",
                children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  as: "/projects/al-noor-orchard",
                  href: "/projects/al-noor-orchard",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    onClick: () => handleCloseNav("/projects/al-noor-orchard"),
                    children: "Al Noor Orchard"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                  className: "img-fluid menu-img-1",
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/news/News+2.png",
                  alt: "Al Noor Orchard"
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                id: "el-1",
                children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  as: "/projects/west-marina",
                  href: "/projects/west-marina",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    onClick: () => handleCloseNav("/projects/west-marina"),
                    children: "West Marina"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                  className: "img-fluid menu-img-1",
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/news/News+4.png",
                  alt: "West Marina"
                })]
              })]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-4",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  as: "/news",
                  href: "/news",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    onClick: () => handleCloseNav("/news"),
                    children: "News"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#",
                  onClick: () => handleCloseNav("/videos"),
                  children: "Videos"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#",
                  onClick: () => handleCloseNav("/gallery"),
                  children: "Gallery"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#",
                  onClick: () => handleCloseNav("/contact"),
                  children: "Contact"
                })
              })]
            })
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container-fluid footer-section-website menu-footer",
        style: {
          backgroundColor: color ? color : "#AA1D45"
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "row",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "col-md-12 footer-detail",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "social-links",
              children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "https://www.facebook.com/buildearth111",
                target: "_blank",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  className: "img-fluid facebook-icon",
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/aljalil/facebook.svg",
                  alt: "Facebook"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "https://www.instagram.com/buildearth55/",
                target: "_blank",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  className: "img-fluid",
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/aljalil/instagram.svg",
                  alt: "Instagram"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "https://twitter.com/BuildEarthConst",
                target: "_blank",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  className: "img-fluid",
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/aljalil/twitter.svg",
                  alt: "Twitter"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "https://www.facebook.com/buildearth111",
                target: "_blank",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  className: "img-fluid",
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/aljalil/youtube.svg",
                  alt: "Youtube"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "http://linkedin.com/in/build-earth-construction-a86992204",
                target: "_blank",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  className: "img-fluid",
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/aljalil/linkedin.svg",
                  alt: "LinkeDin"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "https://www.facebook.com/buildearth111",
                target: "_blank",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  className: "img-fluid",
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/aljalil/whatsapp.svg",
                  alt: "WhatsApp"
                })
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "find-property-small",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/find-properties",
                as: "/find-properties",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  className: "find-property",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    className: "img-fluid pin",
                    src: "https://build-earth.s3.us-east-2.amazonaws.com/img/aljalil/Pin.svg",
                    alt: "PIN"
                  }), "FIND PROPERTY"]
                })
              })
            })]
          })
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "bg-circle",
      style: {
        backgroundColor: color ? color : "#AA1D45"
      }
    })]
  });
};

/* harmony default export */ var web_navigation = (WebNavigation);
// EXTERNAL MODULE: ./config/default.js
var config_default = __webpack_require__(8264);
// EXTERNAL MODULE: ./components/commons/index.js + 6 modules
var commons = __webpack_require__(2541);
;// CONCATENATED MODULE: ./components/home/components/main-home-page.js









const MainHomePage = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    id: "full-page",
    children: [/*#__PURE__*/jsx_runtime_.jsx(commons/* NavLogo */.J0, {}), /*#__PURE__*/jsx_runtime_.jsx(home_page_logo, {}), config_default/* cfg.homePageProperties.map */.L.homePageProperties.map((prop, key) => /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container section-one",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "col-lg-10 col-md-6 text-center mx-auto",
          children: [key === 0 ? /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "fixed-circle",
            children: /*#__PURE__*/jsx_runtime_.jsx("canvas", {
              className: "bg-circle-img",
              id: "canvas",
              width: "600",
              height: "600"
            })
          }) : null, /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: prop.image,
            alt: "Jalil Garden",
            className: "img-fluid jalil-garden"
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            style: {
              cursor: "pointer"
            },
            onClick: () => router_default().push(prop.url),
            children: prop.name
          })]
        })
      })
    }, key)), /*#__PURE__*/jsx_runtime_.jsx(footer, {})]
  });
};

/* harmony default export */ var main_home_page = (MainHomePage);
;// CONCATENATED MODULE: ./components/home/components/home-page-logo.js





const HomePageLogo = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "container-fluid main-page",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container bg-logo",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          as: "/projects",
          href: "/projects",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "view-projects-link",
            children: /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "view-projects",
              children: "View All Projects"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-md-12 text-center pt-3",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            className: "img-fluid light-crown",
            src: "https://build-earth.s3.us-east-2.amazonaws.com/img/aljalil/Crown.svg",
            alt: "Light Crown"
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row no-gutters pt-3",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-md-4 col-sm-4 col-xs-4 light-lion-one",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            className: "img-fluid light-lion-left",
            src: "https://build-earth.s3.us-east-2.amazonaws.com/img/aljalil/Left+Lion.svg",
            alt: "Light Lion Left"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-md-4 col-sm-4 col-xs-4 light-circle-crown",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            className: "img-fluid light-circle",
            src: "https://build-earth.s3.us-east-2.amazonaws.com/img/aljalil/Logo+Circle.svg",
            alt: "Light Circle"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-md-4 col-sm-4 col-xs-4 light-lion-two",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            className: "img-fluid light-lion-right",
            src: "https://build-earth.s3.us-east-2.amazonaws.com/img/aljalil/Right+Lion.svg",
            alt: "Light Lion Right"
          })
        })]
      })]
    })
  });
};

/* harmony default export */ var home_page_logo = (HomePageLogo);
;// CONCATENATED MODULE: ./components/home/components/footer.js





const Footer = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "container-fluid footer-section",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "row",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "col-md-12 footer-detail",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "social-links",
          children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "https://www.facebook.com/buildearth111",
            target: "_blank",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              className: "img-fluid facebook-icon",
              src: "https://build-earth.s3.us-east-2.amazonaws.com/img/aljalil/facebook.svg",
              alt: "Facebook"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "https://www.instagram.com/buildearth55/",
            target: "_blank",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              className: "img-fluid",
              src: "https://build-earth.s3.us-east-2.amazonaws.com/img/aljalil/instagram.svg",
              alt: "Instagram"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "https://twitter.com/BuildEarthConst",
            target: "_blank",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              className: "img-fluid",
              src: "https://build-earth.s3.us-east-2.amazonaws.com/img/aljalil/twitter.svg",
              alt: "Twitter"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "https://www.facebook.com/buildearth111",
            target: "_blank",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              className: "img-fluid",
              src: "https://build-earth.s3.us-east-2.amazonaws.com/img/aljalil/youtube.svg",
              alt: "Youtube"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "http://linkedin.com/in/build-earth-construction-a86992204",
            target: "_blank",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              className: "img-fluid",
              src: "https://build-earth.s3.us-east-2.amazonaws.com/img/aljalil/linkedin.svg",
              alt: "LinkeDin"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "https://www.facebook.com/buildearth111",
            target: "_blank",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              className: "img-fluid",
              src: "https://build-earth.s3.us-east-2.amazonaws.com/img/aljalil/whatsapp.svg",
              alt: "WhatsApp"
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "find-property-small",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/find-properties",
            as: "/find-properties",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              className: "find-property",
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                className: "img-fluid pin",
                src: "https://build-earth.s3.us-east-2.amazonaws.com/img/aljalil/Pin.svg",
                alt: "PIN"
              }), "FIND PROPERTY"]
            })
          })
        })]
      })
    })
  });
};

/* harmony default export */ var footer = (Footer);
;// CONCATENATED MODULE: ./components/home/components/index.js







/***/ }),

/***/ 2805:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x9": function() { return /* binding */ closeNavbar; },
/* harmony export */   "IX": function() { return /* binding */ openNavbar; },
/* harmony export */   "Cd": function() { return /* binding */ Circle; }
/* harmony export */ });
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8822);

const closeNavbar = () => {
  const closeTimeline = new TimelineMax();
  closeTimeline.staggerFromTo('.navbar-menu ul li', 0.5, {
    y: 0,
    opacity: 1,
    delay: 0.5
  }, {
    y: 25,
    opacity: 0
  }, -0.1);
  closeTimeline.to('#bg-circle', 1, {
    scale: 0,
    ease: Expo.easeInOut,
    delay: -0.5
  });
  closeTimeline.to('.navbar-menu', 0, {
    display: 'none'
  });
  closeTimeline.to('.main-section2', 0, {
    position: 'absolute'
  });
  closeTimeline.to('.second-toggle', 0, {
    position: 'absolute'
  });
  closeTimeline.to('.menu-logo-circle', 0, {
    opacity: 0,
    delay: -1
  });
  closeTimeline.to('.menu-footer', 0, {
    opacity: 0,
    delay: -1
  });
};
const openNavbar = () => {
  const openTimeline = new TimelineMax();
  openTimeline.to('.navbar-menu', 0, {
    display: 'flex'
  });
  openTimeline.to('.main-section2', 0, {
    position: 'absolute'
  });
  openTimeline.to('.second-toggle', 0, {
    position: 'fixed'
  });
  openTimeline.to('#bg-circle', 1.5, {
    scale: (0,utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getVpdr */ .U)(),
    ease: Expo.easeInOut
  });
  openTimeline.to('.menu-logo-circle', 1.8, {
    opacity: 1
  });
  openTimeline.to('.menu-footer', 1, {
    opacity: 1
  });
  openTimeline.staggerFromTo('.navbar-menu ul li', 0.5, {
    y: 25,
    opacity: 0
  }, {
    y: 0,
    opacity: 1
  }, 0.1, 1);
};
class Circle {
  constructor() {
    var _this$canvas;

    this.canvas = document.getElementById('canvas');
    this.ctx = (_this$canvas = this.canvas) === null || _this$canvas === void 0 ? void 0 : _this$canvas.getContext('2d');
    this.size = 183;
    this.increment = 0.01;
    this.count = 0;
    this.animation = undefined;
    this.color = ['#F3E9B5', '#F3E9B5', '#F3E9B5'];
    this.currentcolor = this.color[Math.floor(Math.random() * (3 - 0))];
    requestAnimationFrame(this.animCircle.bind(this));
  }

  animCircle() {
    if (!this.ctx) {
      return;
    }

    this.count = this.count + this.increment;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.beginPath();
    this.ctx.strokeStyle = this.currentcolor;
    this.ctx.lineWidth = 4;
    this.ctx.arc(185, 285, this.size, 0, this.count * Math.PI);
    this.ctx.stroke();

    if (this.count >= 2) {
      this.currentcolor = this.color[Math.floor(Math.random() * (3 - 0))];
      cancelAnimationFrame(this.animation);
    }

    this.animation = requestAnimationFrame(this.animCircle.bind(this));
  }

}

/***/ }),

/***/ 8822:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": function() { return /* binding */ getVpdr; }
/* harmony export */ });
const getVpdr = () => {
  const isWindow = false;
  const html = document.documentElement;
  const circle = document.getElementById("bg-circle");
  const circleWidth = circle.clientWidth;
  if (!isWindow) return false;
  const vph = Math.pow(html.offsetHeight, 2); // Height

  const vpw = Math.pow(html.offsetWidth, 2); // Width

  const vpd = Math.sqrt(vph + vpw); // Diagonal

  return vpd * 2 / circleWidth; // Circle radius
};

/***/ })

};
;