// src/App.js
import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./components/About";
import Portfolio from "./pages/Portfolio";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default App;
