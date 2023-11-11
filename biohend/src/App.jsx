import About from "./components/About";
import ChooseUs from "./components/ChooseUs";
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
        <ChooseUs />
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
