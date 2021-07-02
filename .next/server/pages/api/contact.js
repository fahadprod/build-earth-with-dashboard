(function() {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 6246:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ contact; }
});

;// CONCATENATED MODULE: external "nodemailer"
var external_nodemailer_namespaceObject = require("nodemailer");;
var external_nodemailer_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/contact.js

/* harmony default export */ var contact = (async (req, res) => {
  const {
    fullName,
    number,
    email,
    subject,
    message
  } = req.body;
  const transporter = external_nodemailer_default().createTransport({
    service: "gmail",
    auth: {
      user: "buildearth.web@gmail.com",
      pass: "BE786123"
    }
  });

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: "buildearth.web@gmail.com",
      subject: `Contact form submission from ${fullName}`,
      html: `<h3>You have a new contact form submission</h3>
            <p><strong>Name: </strong> ${fullName}</p>
            <p><strong>Phone: </strong> ${number}</p>
            <p><strong>Email: </strong> ${email}</p>
            <p><strong>Subject: </strong> ${subject}</p>
            <p><strong>Message: </strong> ${message}</p>
            
            `
    });
    console.log("Message sent", emailRes.messageId);
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(6246));
module.exports = __webpack_exports__;

})();