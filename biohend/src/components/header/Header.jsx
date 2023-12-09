import React, { useState, useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { IoCartOutline } from "react-icons/io5";
import Cart from "../cart/Cart";
import { useSelector } from "react-redux";
import { userData } from "../../../helpers";

export default function Header() {
  const { username } = userData();
  const storedUserData = JSON.parse(localStorage.getItem("user"));
  const products = useSelector((state) => state.cart.products);

  const [open, setOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(!!storedUserData);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  const location = useLocation();
  return (
    <header>
      <div className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
              <div className="full">
                <div className="center-desk">
                  <div className="logo">
                    <Link to="/" onClick={scrollToTop}>
                      <img src="/images/logo.png" alt="/" />
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
                        className={
                          location.pathname === "/"
                            ? "nav-link active"
                            : "nav-link inactive"
                        }
                        to="/"
                        onClick={scrollToTop}
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={
                          location.pathname === "/about"
                            ? "nav-link active"
                            : "nav-link inactive"
                        }
                        to="/about"
                        onClick={scrollToTop}
                      >
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={
                          location.pathname === "/products"
                            ? "nav-link active"
                            : "nav-link inactive"
                        }
                        to="/shop"
                        onClick={scrollToTop}
                      >
                        Products{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={
                          location.pathname === "/contact"
                            ? "nav-link active"
                            : "nav-link inactive"
                        }
                        to="/contact"
                        onClick={scrollToTop}
                      >
                        Contact
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        className={
                          location.pathname === "/favorites"
                            ? "nav-link active"
                            : "nav-link inactive"
                        }
                        to="/favorites"
                        onClick={scrollToTop}
                      >
                        <FaRegHeart />
                      </Link>
                    </li>
                    <li className="nav-item">
                      {isAuthenticated ? (
                        <div className="logout">
                          <p>Hi, {username}</p>
                          <button onClick={handleLogout}>Logout</button>{" "}
                        </div>
                      ) : (
                        <Link
                          className={
                            location.pathname === "/login"
                              ? "nav-link active"
                              : "nav-link inactive"
                          }
                          to={`${isAuthenticated ? "" : "/login"}`}
                          onClick={scrollToTop}
                        >
                          <VscAccount />
                        </Link>
                      )}
                    </li>

                    <li className="nav-item">
                      <div
                        className={
                          location.pathname === "/shopping-cart"
                            ? "nav-link active"
                            : "nav-link inactive"
                        }
                        onClick={() => setOpen(!open)}
                      >
                        <IoCartOutline />
                        <span>{products.length}</span>
                      </div>
                    </li>
                    {/* Conditionally render "Logout", "Register", or "Login" based on isLoggedIn */}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
        {open && <Cart />}
      </div>
    </header>
  );
}
