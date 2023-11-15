import React from "react";

const Blog = () => {
  return (
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

      {/* choose  section */}
      <div className="choose ">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="titlepage">
                <h2>Our Blog</h2>
                <p>
                  there isn't anything embarrassing hidden in the middle of
                  text. All the Lorem Ipsum generators on the Internet tend to
                  repeat predefined
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row d_flex">
            <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12">
              <div className="padding_with">
                <div className="row">
                  <div className="col-md-6 padding_bottom">
                    <div className="choose_box">
                      <i>
                        <img src="images/icon1.png" alt="#" />
                      </i>
                      <div className="choose_text">
                        <h3>Excellent Service</h3>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 padding_bottom">
                    <div className="choose_box">
                      <i>
                        <img src="images/icon2.png" alt="#" />
                      </i>
                      <div className="choose_text">
                        <h3>Clean Working</h3>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 padding_bottom2">
                    <div className="choose_box">
                      <i>
                        <img src="images/icon3.png" alt="#" />
                      </i>
                      <div className="choose_text">
                        <h3>Quality And Reliability</h3>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="choose_box">
                      <i>
                        <img src="images/icon4.png" alt="#" />
                      </i>
                      <div className="choose_text">
                        <h3>Expert Farmer</h3>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
              <div className="choose_img">
                <figure>
                  <img src="images/food.jpg" alt="#" />
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <a className="read_more" href="#">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* end choose  section */}

      {/* Javascript files*/}
      {/* sidebar */}
    </>
  );
};

export default Blog;
