import React from "react";
import Video from "./Components/Video";
import Steps from "./Components/Steps";
import Module from "./Components/Module";
import About from "./Components/About";
import Review from "./Components/Review";
import Statistics from "./Components/Statistics";
import Gallery from "./Components/Gallery";
import Team from "./Components/Team";
import { ParallaxProvider } from "react-scroll-parallax"
import Footer from "./Components/Footer";
import Price from "./Components/Price";
import Certification from "./Components/Certification";
import Refund from "./Components/Refund";

function App() {
  return (
    <ParallaxProvider>
      <div className="">
        <div className="">
          <Video />
          <Steps />
          <Module />
          <Price/>
          <About />
          <Certification/>
          <Review />
          <Statistics />
          <Gallery />
          <Team />
          <Refund/>
          <Footer />
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default App;
