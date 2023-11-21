import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { IoCartOutline } from "react-icons/io5";

export default function Header() {
  // Assume isLoggedIn is a state variable indicating the user's login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation;
  return (
    <header>
      {/* header inner */}
      <div className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
              <div className="full">
                <div className="center-desk">
                  <div className="logo">
                    <Link to="/">
                      <img src="images/logo.png" alt="/" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
              <nav className="navigation navbar navbar-expand-md navbar-dark ">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarsExample04"
                  aria-controls="navbarsExample04"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample04">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <Link
                        className="nav-link"
                        {...(location.pathname === "/" ? "active" : "inactive")}
                        to="/"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        {...(location.pathname === "/about"
                          ? "active"
                          : "inactive")}
                        to="about"
                      >
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        {...(location.pathname === "/products"
                          ? "active"
                          : "inactive")}
                        to="products.html"
                      >
                        Products{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        {...(location.pathname === "/blog"
                          ? "active"
                          : "inactive")}
                        to="blog"
                      >
                        Blog
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        {...(location.pathname === "/contact"
                          ? "active"
                          : "inactive")}
                        to="contact"
                      >
                        Contact
                      </Link>
                    </li>
                    <li className="nav-item d_none">
                      <Link className="nav-link" to="search">
                        <i className="fa fa-search" aria-hidden="true" />
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        {...(location.pathname === "/favorites"
                          ? "active"
                          : "inactive")}
                        to="favorites"
                      >
                        <FaRegHeart />
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        {...(location.pathname === "/my-account"
                          ? "active"
                          : "inactive")}
                        to="my-account"
                      >
                        <VscAccount />
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        {...(location.pathname === "/shopping-cart"
                          ? "active"
                          : "inactive")}
                        to="shopping-cart"
                      >
                        <IoCartOutline />
                      </Link>
                    </li>
                    {/* Conditionally render "Logout", "Register", or "Login" based on isLoggedIn */}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
