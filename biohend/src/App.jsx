import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  return (
    <>
      <div>
        {/* body */}
        {/* loader  */}
        <div className="loader_bg">
          <div className="loader">
            <img src="images/loading.gif" alt="#" />
          </div>
        </div>
        {/* end loader */}
        {/* header */}
        <Header />
        {/* end header inner */}
        {/* end header */}
        {/* banner */}
        <section className="banner_main">
          <div className="container">
            <div className="row">
              <div className="col-md-12 ">
                <div className="text-bg">
                  <h1>FARMING COMPANY</h1>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it
                  </p>
                  <a href="#">Discover</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end banner */}
        {/* three_box */}
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
        {/* three_box */}
        {/* hottest */}
        <div className="hottest">
          <div className="container">
            <div className="row d_flex">
              <div className="col-md-5">
                <div className="titlepage">
                  <h2>
                    World’s Hottest Destinations <br />
                    for Vegans
                  </h2>
                </div>
              </div>
              <div className="col-md-7">
                <div className="hottest_box">
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend to repeat
                    predefined There are many variations of passages of Lorem
                    Ipsum available, but the majority have suffered alteration
                    in some form, by injected humour, or randomised words which
                    don't look even slightly believable. If you are going to use
                    a passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend to repeat
                    predefined{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end hottest */}
        {/* choose  section */}
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
        {/* product  section */}
        <Products />
        {/* end product  section */}
        {/* about */}
        <About />
        {/* end about */}
        {/*  footer */}
        <Footer />
      </div>
      ;
    </>
  );
}

export default App;
