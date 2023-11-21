import React from "react";

const About = () => {
  return (
    <div>
      <>
        {/* about */}
        <div className="about">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h2>About us</h2>
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
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="container">
                        <div className="carousel-caption ">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="text_box">
                                <span>
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
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end about */}
      </>
    </div>
  );
};

export default About;
