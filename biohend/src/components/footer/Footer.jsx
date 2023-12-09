import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const openInNewTab = () => {
    window.open(
      "https://maps.app.goo.gl/yQtKKYtx14afCip46",
      "_blank",
      "noreferrer"
    );
  };
  return (
    <>
      <footer id="contact">
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4 border_right">
                <ul className="location_icon">
                  <li>
                    <Link to="">
                      <i
                        className="fa fa-map-marker"
                        aria-hidden="true"
                        onClick={openInNewTab}
                      />
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
            
              <div className="col-md-4 border_left">
                <h3>Menus</h3>
                <ul className="link">
                  <li>
                    <Link to="/" onClick={scrollToTop}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" onClick={scrollToTop}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop" onClick={scrollToTop}>
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link to="contact" onClick={scrollToTop}>
                      Contact
                    </Link>
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
