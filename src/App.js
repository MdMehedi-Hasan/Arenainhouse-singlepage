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

function App() {
  return (
    <ParallaxProvider>
      <div className="">
        <div className="">
          <Video></Video>
          <Steps></Steps>
          <Module></Module>
          <About></About>
          <Review></Review>
          <Statistics></Statistics>
          <Gallery></Gallery>
          <Team></Team>
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default App;
