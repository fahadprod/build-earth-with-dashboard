import React from 'react';
import Link from "next/link";
import { isAuth, logout } from '../../helpers/auth';


const link = require("./api.js");


const NavLogo = ({ className }) => {

  return (
    <div
      className={`container-fluid ${
        className ? "main-section2" : "main-section"
      }`}
    >
      <div className="row">
        <div className="col-md-12 header-section">
          <span></span>
          {/* build-earth LOGO */}
          <Link as="/" href="/">
            <a className="builder-logo-link">
              <img
                className="img-fluid builder-logo"
                src="https://build-earth.s3.us-east-2.amazonaws.com/img/Logo.svg"
                alt="Build Earth Logo"
              />
            </a>
          </Link>

          {/* NO Auth */}
          {!isAuth() && (
            <React.Fragment>
              <p className="head-quick-tour hide-tour">
                <Link as="/login" href="/login">
                  <a>LOGIN</a>
                </Link>
              </p>
            </React.Fragment>
          )}

          {/* Logout */}
          {isAuth() && (
            <React.Fragment>
              <div className="dropdown">
                <div
                  className="dropdown-toggle"
                  id="dropdownMenu2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ cursor: "pointer" }}
                >
                  <img
                    style={{ width: "50px" }}
                    src="../img/avatar.png"
                    alt="Avatar"
                  />
                </div>

                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenu2"
                  style={{ right: "4px", left: "auto" }}
                >
                  {isAuth().role == "staff" ? (
                    <Link
                      href="/dashboard" as="/dashboard"
                    >
                      <button className="dropdown-item" type="button">
                        DASHBOARD
                      </button>
                    </Link>
                  ) : (
                    <Link
                      href="/dashboard" as="/dashboard"
                    >
                      <button className="dropdown-item" type="button">
                        DASHBOARD
                      </button>
                    </Link>
                  )}

                  <button className="dropdown-item" type="button">
                    <a onClick={logout}>LOGOUT</a>
                  </button>
                </div>
              </div>
              {/* <p className="head-quick-tour hide-tour">
                <a onClick={logout}>LOGOUT</a>
              </p> */}
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};



export async function getStaticProps() {

  const resData = await fetch(`${link.API_SERVER}/api/user`);
  const data = await resData.json();
  console.log(data);

  return {
    props: {
      users: data
    },
  };
}


export default NavLogo;