import About from "./components/About";
import ChooseUs from "./components/ChooseUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hottest from "./components/Hottest";
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

        {/* header */}
        <Header />

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
        <Hottest />

        {/* choose  section */}
        <ChooseUs />

        {/* product  section */}
        <Products />

        {/* about */}
        <About />

        {/*  footer */}
        <Footer />
      </div>
      ;
    </>
  );
}

export default App;
