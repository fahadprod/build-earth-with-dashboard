exports.id = 832;
exports.ids = [832];
exports.modules = {

/***/ 832:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9080);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const AssociatesSlider = () => {
  const settings = {
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: 0,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "container our-associates",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "row",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "col",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
          className: "about-heading-one",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "about-dark-heading",
            children: "Our"
          }), " Associates"]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
          className: "customer-logos slider slick-initialized slick-slider",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            "aria-live": "polite",
            className: "slick-list draggable",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), _objectSpread(_objectSpread({}, settings), {}, {
              className: "slick-track",
              role: "listbox",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide slick-cloned",
                "data-slick-index": "-5",
                id: "",
                "aria-hidden": "true",
                tabIndex: "-1",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+818.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide slick-cloned",
                "data-slick-index": "-4",
                id: "",
                "aria-hidden": "true",
                tabIndex: "-1",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+819.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide slick-cloned",
                "data-slick-index": "-3",
                id: "",
                "aria-hidden": "true",
                tabIndex: "-1",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+821.png"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide slick-cloned",
                "data-slick-index": "-2",
                id: "",
                "aria-hidden": "true",
                tabIndex: "-1",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+824.png"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide slick-cloned",
                "data-slick-index": "-1",
                id: "",
                "aria-hidden": "true",
                tabIndex: "-1",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+825.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide",
                "data-slick-index": "0",
                "aria-hidden": "true",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide00",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+783.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide",
                "data-slick-index": "1",
                "aria-hidden": "true",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide01",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+785.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide",
                "data-slick-index": "2",
                "aria-hidden": "true",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide02",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+787.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide",
                "data-slick-index": "3",
                "aria-hidden": "true",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide03",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+789.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide",
                "data-slick-index": "4",
                "aria-hidden": "true",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide04",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+793.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide",
                "data-slick-index": "5",
                "aria-hidden": "true",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide05",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+795.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide",
                "data-slick-index": "6",
                "aria-hidden": "true",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide06",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+798.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide",
                "data-slick-index": "7",
                "aria-hidden": "true",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide07",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+799.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide",
                "data-slick-index": "8",
                "aria-hidden": "true",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide08",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+801.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide",
                "data-slick-index": "9",
                "aria-hidden": "true",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide09",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+803.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide",
                "data-slick-index": "10",
                "aria-hidden": "true",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide010",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+805.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide",
                "data-slick-index": "11",
                "aria-hidden": "true",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide011",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+807.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide",
                "data-slick-index": "12",
                "aria-hidden": "true",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide012",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+809.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide",
                "data-slick-index": "13",
                "aria-hidden": "true",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide013",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+813.png"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide slick-current slick-active",
                "data-slick-index": "14",
                "aria-hidden": "false",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide014",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+816.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide slick-active",
                "data-slick-index": "15",
                "aria-hidden": "false",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide015",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+818.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide slick-active",
                "data-slick-index": "16",
                "aria-hidden": "false",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide016",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+819.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide slick-active",
                "data-slick-index": "17",
                "aria-hidden": "false",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide017",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+821.png"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide slick-active",
                "data-slick-index": "18",
                "aria-hidden": "false",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide018",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+824.png"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide",
                "data-slick-index": "19",
                "aria-hidden": "true",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide019",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+825.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide slick-cloned",
                "data-slick-index": "20",
                id: "",
                "aria-hidden": "true",
                tabIndex: "-1",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+783.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide slick-cloned",
                "data-slick-index": "21",
                id: "",
                "aria-hidden": "true",
                tabIndex: "-1",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+785.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide slick-cloned",
                "data-slick-index": "22",
                id: "",
                "aria-hidden": "true",
                tabIndex: "-1",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+787.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide slick-cloned",
                "data-slick-index": "23",
                id: "",
                "aria-hidden": "true",
                tabIndex: "-1",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+789.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide slick-cloned",
                "data-slick-index": "24",
                id: "",
                "aria-hidden": "true",
                tabIndex: "-1",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+793.svg"
                })
              })]
            }))
          })
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "row mt-5 small-screen-slider",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
          className: "customer-logos slider slick-initialized slick-slider",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            "aria-live": "polite",
            className: "slick-list draggable",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), _objectSpread(_objectSpread({}, settings), {}, {
              className: "slick-track",
              role: "listbox",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide slick-cloned",
                "data-slick-index": "-5",
                id: "",
                "aria-hidden": "true",
                tabIndex: "-1",
                style: {
                  width: '182px',
                  height: '128px'
                },
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+817.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide slick-cloned",
                "data-slick-index": "-4",
                id: "",
                "aria-hidden": "true",
                tabIndex: "-1",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+820.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide slick-cloned",
                "data-slick-index": "-3",
                id: "",
                "aria-hidden": "true",
                tabIndex: "-1",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+822.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide slick-cloned",
                "data-slick-index": "-2",
                id: "",
                "aria-hidden": "true",
                tabIndex: "-1",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+823.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide slick-cloned",
                "data-slick-index": "-1",
                id: "",
                "aria-hidden": "true",
                tabIndex: "-1",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+826.png"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide",
                "data-slick-index": "0",
                "aria-hidden": "true",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide10",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+784.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide",
                "data-slick-index": "1",
                "aria-hidden": "true",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide11",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+786.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide",
                "data-slick-index": "2",
                "aria-hidden": "true",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide12",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+788.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide",
                "data-slick-index": "3",
                "aria-hidden": "true",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide13",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+790.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide",
                "data-slick-index": "4",
                "aria-hidden": "true",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide14",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+792.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide",
                "data-slick-index": "5",
                "aria-hidden": "true",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide15",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+794.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide",
                "data-slick-index": "6",
                "aria-hidden": "true",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide16",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+796.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide",
                "data-slick-index": "7",
                "aria-hidden": "true",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide17",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+797.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide",
                "data-slick-index": "8",
                "aria-hidden": "true",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide18",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+800.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide",
                "data-slick-index": "9",
                "aria-hidden": "true",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide19",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+802.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide",
                "data-slick-index": "10",
                "aria-hidden": "true",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide110",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+804.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide",
                "data-slick-index": "11",
                "aria-hidden": "true",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide111",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+806.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide",
                "data-slick-index": "12",
                "aria-hidden": "true",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide112",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+808.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide",
                "data-slick-index": "13",
                "aria-hidden": "true",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide113",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+810.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide",
                "data-slick-index": "14",
                "aria-hidden": "true",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide114",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+812.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide",
                "data-slick-index": "15",
                "aria-hidden": "true",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide115",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+814.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide",
                "data-slick-index": "16",
                "aria-hidden": "true",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide116",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+815.png"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide",
                "data-slick-index": "17",
                "aria-hidden": "true",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide117",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+817.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide slick-current slick-active",
                "data-slick-index": "18",
                "aria-hidden": "false",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide118",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+820.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide slick-active",
                "data-slick-index": "19",
                "aria-hidden": "false",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide119",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+822.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide slick-active",
                "data-slick-index": "20",
                "aria-hidden": "false",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide120",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+823.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide slick-active",
                "data-slick-index": "21",
                "aria-hidden": "false",
                tabIndex: "-1",
                role: "option",
                "aria-describedby": "slick-slide121",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+826.png"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide slick-cloned slick-active",
                "data-slick-index": "22",
                id: "",
                "aria-hidden": "false",
                tabIndex: "-1",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+784.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide slick-cloned",
                "data-slick-index": "23",
                id: "",
                "aria-hidden": "true",
                tabIndex: "-1",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+786.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide slick-cloned",
                "data-slick-index": "24",
                id: "",
                "aria-hidden": "true",
                tabIndex: "-1",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+788.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide slick-cloned",
                "data-slick-index": "25",
                id: "",
                "aria-hidden": "true",
                tabIndex: "-1",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+790.svg"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "slide slick-slide slick-cloned",
                "data-slick-index": "26",
                id: "",
                "aria-hidden": "true",
                tabIndex: "-1",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "https://build-earth.s3.us-east-2.amazonaws.com/img/about/associates/Group+792.svg"
                })
              })]
            }))
          })
        })
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (AssociatesSlider);

/***/ })

};
;