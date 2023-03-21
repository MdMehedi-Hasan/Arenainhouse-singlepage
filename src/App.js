import React from "react";
import Video from "./Components/Video";
import Steps from "./Components/Steps";
import Module from "./Components/Module";
import About from "./Components/About";

function App() {
  return (
    <div className="container-fluid flex justify-center">
      <div className="container">
        <Video></Video>
        <Steps></Steps>
        <Module></Module>
        <About></About>
      </div>
    </div>
  );
}

export default App;
