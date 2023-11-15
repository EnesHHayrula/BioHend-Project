import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loader from "./components/Loader";
import Home from "./components/home/Home";
import Layout from "./components/layout/Layout";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
