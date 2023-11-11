import About from "./components/About";
import Banner from "./components/Banner";
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
        <Banner />
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
