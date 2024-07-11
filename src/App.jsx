import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {

  return (
    <>
      <Header />
      <main>
        <AboutUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
