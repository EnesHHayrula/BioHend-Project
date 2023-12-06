import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <section className="banner_main">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <div className="text-bg">
                <h1>BIOHEND</h1>
                <p>
                  Discover the essence of well-being with BioHend, your trusted
                  provider of bio lavender oil and water. Sourced from the rich
                  fields of Bulgaria, our eco-conscious practices ensure pure,
                  therapeutic products. Immerse yourself in nature's tranquility
                  and embrace the soothing power of BioHend's lavender
                  offerings.
                </p>
                <Link to="#">Discover</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="three_box">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="box_text">
                <figure>
                  <img src="images/img1.jpg" alt="#" />
                </figure>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box_text">
                <figure>
                  <img src="images/img2.jpg" alt="#" />
                </figure>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box_text">
                <figure>
                  <img src="images/img3.jpg" alt="#" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hottest">
        <div className="container">
          <div className="row d_flex">
            <div className="col-md-5">
              <div className="titlepage">
                <h2>
                  World’s Hottest Destination <br />
                  For Lavender
                </h2>
              </div>
            </div>
            <div className="col-md-7">
              <div className="hottest_box">
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined There are
                  many variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected
                  humour, or randomised words which don't look even slightly
                  believable. If you are going to use a passage of Lorem Ipsum,
                  you need to be sure there isn't anything embarrassing hidden
                  in the middle of text. All the Lorem Ipsum generators on the
                  Internet tend to repeat predefined{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="choose ">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="titlepage">
                <h2>Why Choose Us? </h2>
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
                  <img src="images/distillery.jpg" alt="#" />
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
      <div className="products">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="titlepage">
                <h2>Our Products</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 padding_left0">
              <div className="product_box">
                <figure>
                  <img src="images/product1.jpg" alt="#" />
                </figure>
                <h3 className="black">Lavender Water</h3>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
              <div className="product_box">
                <figure>
                  <img src="images/product2.jpg" alt="#" />
                </figure>
                <h3>Lavender Oil</h3>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 padding_right0">
              <div className="product_box">
                <figure>
                  <img src="images/product3.jpg" alt="#" />
                </figure>
                <h3>Soil</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
