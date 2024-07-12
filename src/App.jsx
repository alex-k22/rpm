import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import Description from "./components/Description/Description";

function App() {
  return (
    <>
      <Header />
      <main>
        <Description />
        <AboutUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
