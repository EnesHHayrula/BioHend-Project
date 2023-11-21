import React from "react";
import './Contact.css'

const Contact = () => {
  return (
    <div>
      {" "}
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
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-9">
              <textarea
                className="contactus1"
                placeholder="Message"
                type="type"
                message="Name"
                defaultValue={"Message "}
              />
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
              <button className="send_btn">Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
