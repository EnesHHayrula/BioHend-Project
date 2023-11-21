import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer id="contact">
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="titlepage">
                <h2>Contact Us</h2>
              </div>
            </div>
            <div className="col-md-12">
              <form id="request" className="main_form">
                <div className="row">
                  <div className="col-md-3 ">
                    <input
                      className="contactus"
                      placeholder="Full Name"
                      type="type"
                      name="Full Name"
                    />
                  </div>
                  <div className="col-md-3">
                    <input
                      className="contactus"
                      placeholder="Email"
                      type="type"
                      name="Email"
                    />
                  </div>
                  <div className="col-md-3">
                    <input
                      className="contactus"
                      placeholder="Phone Number"
                      type="type"
                      name="Phone Number"
                    />
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                    <ul className="social_icon">
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </a>
                      </li>

                      <li>
                        <a href="#">
                          <i
                            className="fa fa-linkedin-square"
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-instagram" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-8">
                    <textarea
                      className="contactus1"
                      placeholder="Message"
                      type="type"
                      message="Name"
                      defaultValue={"Message "}
                    />
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <button className="send_btn">Send</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-3 border_right">
              <ul className="location_icon">
                <li>
                  <a href="#">
                    <i className="fa fa-map-marker" aria-hidden="true" />
                  </a>{" "}
                  Aytos, Burgas, Bulgaria
                </li>
                <li>
                  <a href="#">
                    <i
                      className="fa fa-volume-control-phone"
                      aria-hidden="true"
                    />
                  </a>{" "}
                  +359 877248264
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-envelope" aria-hidden="true" />
                  </a>
                  eneshayrula@gmail.com
                </li>
              </ul>
            </div>
            <div className="col-md-3 border_right">
              <h3>Useful Link</h3>
              <ul className="link">
                <li>
                  <a href="#">humour, or </a>
                </li>
                <li>
                  <a href="#">randomised words </a>{" "}
                </li>
                <li>
                  <a href="#">which don't look </a>
                </li>
                <li>
                  <a href="#">even slightly</a>{" "}
                </li>
                <li>
                  <a href="#">believable. If </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 border_right">
              <h3>Menus</h3>
              <ul className="link">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="products.html">Products</a>
                </li>
                <li>
                  <Link to="blog">Blog</Link>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <form className="bottom_form">
                <h3>Newsletter</h3>
                <input
                  className="enter"
                  placeholder="Enter your email"
                  type="text"
                  name="Enter your email"
                />
                <button className="sub_btn">subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p>
                  Copyright 2019 All Right Reserved By{" "}
                  <a href="https://html.design/"> Free html Templates</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
