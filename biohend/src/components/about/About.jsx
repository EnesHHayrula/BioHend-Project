import React from "react";

const About = () => {
  return (
    <div>
      <>
        {/* basic */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* mobile metas */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
        {/* site metas */}
        <title>jon</title>
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        {/* bootstrap css */}
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        {/* style css */}
        <link rel="stylesheet" href="css/style.css" />
        {/* Responsive*/}
        <link rel="stylesheet" href="css/responsive.css" />
        {/* fevicon */}
        <link rel="icon" href="images/fevicon.png" type="image/gif" />
        {/* Scrollbar Custom CSS */}
        <link rel="stylesheet" href="css/jquery.mCustomScrollbar.min.css" />
        {/* Tweaks for older IEs*/}
        <link
          rel="stylesheet"
          href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css"
          media="screen"
        />
        {/*[if lt IE 9]>
  
  <![endif]*/}
        {/* body */}
        {/* loader  */}
        <div className="loader_bg">
          <div className="loader">
            <img src="images/loading.gif" alt="#" />
          </div>
        </div>
        {/* end loader */}

        {/* about */}
        <div className="about">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h2>People Says About Farm</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div
                  id="myCarousel"
                  className="carousel slide about_Carousel "
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#myCarousel"
                      data-slide-to={0}
                      className="active"
                    />
                    <li data-target="#myCarousel" data-slide-to={1} />
                    <li data-target="#myCarousel" data-slide-to={2} />
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="container">
                        <div className="carousel-caption ">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="test_box">
                                <i>
                                  <img src="images/tes1.png" alt="#" />
                                </i>
                                <h4>jhone Du</h4>
                                <p>
                                  It is a long established fact that a reader
                                  will be distracted by the readable content of
                                  a page when looking at its layout. The point
                                  of using Lorem Ipsum is that it has a
                                  more-or-less normal distribution of letters,It
                                  is a long established fact that a reader will
                                  be distracted by the readable content of a
                                  page when looking at its layout. The point of
                                  using Lorem Ipsum is that it has a
                                  more-or-less normal distribution of letters,It
                                  is a long established fact that a reader will
                                  be distracted by the readable content of a
                                  page when looking at its layout. The point of
                                  using Lorem Ipsum is that it has a
                                  more-or-less normal distribution of letters,
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="container">
                        <div className="carousel-caption">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="test_box">
                                <i>
                                  <img src="images/tes1.png" alt="#" />
                                </i>
                                <h4>jhone Du</h4>
                                <p>
                                  It is a long established fact that a reader
                                  will be distracted by the readable content of
                                  a page when looking at its layout. The point
                                  of using Lorem Ipsum is that it has a
                                  more-or-less normal distribution of letters,It
                                  is a long established fact that a reader will
                                  be distracted by the readable content of a
                                  page when looking at its layout. The point of
                                  using Lorem Ipsum is that it has a
                                  more-or-less normal distribution of letters,It
                                  is a long established fact that a reader will
                                  be distracted by the readable content of a
                                  page when looking at its layout. The point of
                                  using Lorem Ipsum is that it has a
                                  more-or-less normal distribution of letters,
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="container">
                        <div className="carousel-caption">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="test_box">
                                <i>
                                  <img src="images/tes1.png" alt="#" />
                                </i>
                                <h4>jhone Du</h4>
                                <p>
                                  It is a long established fact that a reader
                                  will be distracted by the readable content of
                                  a page when looking at its layout. The point
                                  of using Lorem Ipsum is that it has a
                                  more-or-less normal distribution of letters,It
                                  is a long established fact that a reader will
                                  be distracted by the readable content of a
                                  page when looking at its layout. The point of
                                  using Lorem Ipsum is that it has a
                                  more-or-less normal distribution of letters,It
                                  is a long established fact that a reader will
                                  be distracted by the readable content of a
                                  page when looking at its layout. The point of
                                  using Lorem Ipsum is that it has a
                                  more-or-less normal distribution of letters,
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#myCarousel"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#myCarousel"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end about */}
        {/*  footer */}
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
                              <i
                                className="fa fa-facebook"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-twitter" aria-hidden="true" />
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
                              <i
                                className="fa fa-instagram"
                                aria-hidden="true"
                              />
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
                      Locatins
                    </li>
                    <li>
                      <a href="#">
                        <i
                          className="fa fa-volume-control-phone"
                          aria-hidden="true"
                        />
                      </a>{" "}
                      +71 9087654321
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-envelope" aria-hidden="true" />
                      </a>
                      demo@gmail.com
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
                      <a href="index.html">Home</a>
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
      </>
    </div>
  );
};

export default About;
