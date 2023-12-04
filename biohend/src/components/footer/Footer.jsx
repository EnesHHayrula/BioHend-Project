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
                    <Link href="#">
                      <i className="fa fa-map-marker" aria-hidden="true" />
                    </Link>
                    Aytos, Burgas, Bulgaria
                  </li>
                  <li>
                    <Link href="#">
                      <i
                        className="fa fa-volume-control-phone"
                        aria-hidden="true"
                      />
                    </Link>
                    +359 877248264
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa fa-envelope" aria-hidden="true" />
                    </Link>
                    eneshayrula@gmail.com
                  </li>
                </ul>
              </div>
              <div className="col-md-4 border_right">
                <h3>Useful Link</h3>
                <ul className="link">
                  <li>
                    <Link href="#">humour, or </Link>
                  </li>
                  <li>
                    <Link href="#">randomised words </Link>
                  </li>
                  <li>
                    <Link href="#">which don't look </Link>
                  </li>
                  <li>
                    <Link href="#">even slightly</Link>
                  </li>
                  <li>
                    <Link href="#">believable. If </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 border_left">
                <h3>Menus</h3>
                <ul className="link">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="about">About</Link>
                  </li>
                  <li>
                    <Link href="shop">Products</Link>
                  </li>
                  <li>
                    <Link to="blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="contact">Contact</Link>
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
                    Copyright 2019 All Right Reserved By
                    <Link href="https://html.design/">
                      {" "}
                      Free html Templates
                    </Link>
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
