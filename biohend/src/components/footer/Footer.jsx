import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer id="contact">
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4 border_right">
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
              <div className="col-md-4 border_right">
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
              <div className="col-md-4 border_left">
                <h3>Menus</h3>
                <ul className="link">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="shop">Products</a>
                  </li>
                  <li>
                    <Link to="blog">Blog</Link>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
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
    </>
  );
}
