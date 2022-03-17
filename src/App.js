import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PotholeRegistration from "./components/PotholeRegistration";

//Bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/potholeregistration"
            element={<PotholeRegistration />}
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
