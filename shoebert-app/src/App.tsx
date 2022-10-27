import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationPath from "./routes/NavigationPath";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Logo_white from "./images/Logo_white_png.png";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div>
          <img
            src={Logo_white}
            alt="Niperbond"
            style={{ position: "absolute", zIndex: 100, top: 10, left: 15 }} //z-index toob kõige ette
          />
        </div>
        <Routes>
          {NavigationPath.map((el) => (
            <Route path={el.path} element={<el.component />} key={el.path} />
          ))}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
