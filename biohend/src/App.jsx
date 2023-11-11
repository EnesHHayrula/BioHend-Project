import About from "./components/About";
import Banner from "./components/Banner";
import ChooseUs from "./components/ChooseUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hottest from "./components/Hottest";
import Loader from "./components/Loader";
import Products from "./components/Products";
import ThreePics from "./components/ThreePics";

function App() {
  return (
    <>
      <div>
        {/* body */}
        {/* loader  */}
        <Loader />

        {/* header */}
        <Header />

        {/* banner */}
        <Banner />
        {/* end banner */}
        {/* three_box */}
        <ThreePics />
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
