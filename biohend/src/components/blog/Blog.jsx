import React from "react";

const Blog = () => {
  return (
    <>
      {/* body */}

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
              <a className="read_more" to="#">
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
