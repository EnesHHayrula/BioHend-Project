import { Routes, Route } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Loader from "./components/Loader";
import Home from "./components/home/Home";

function App() {
  return (
    <div id="root">
      <div>
        <Header />
        {/* <Loader /> */}
        
        <Home/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
