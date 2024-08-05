// import { useState } from "react";
// import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import Tech from "./components/Tech/Tech";
import Description from "./components/Description/Description";
import Consultation from "./components/Consultation/Consultation";
// import Socials from "./components/Socials/Socials";
import Hero from "./components/Hero/Hero";
import Gallery from "./components/Gallery/Gallery";


function App() {
  return (
    <>
      <Header />
      <main>
        <Hero/>
        <AboutUs />
        <Description />
        <Tech />


        <Consultation />
<Gallery />
      </main>
      <Footer />
    </>
  );
}

export default App;
