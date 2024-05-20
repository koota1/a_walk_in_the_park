import { ReactP5Wrapper } from "@p5-wrapper/react";
// import Sketch1 from '../../p5 stuff/p5_object';
import Sketch1 from './level1_sketch';
import HomeButton from "../Navigation/home-button";
// import Sketch1 from './level1_sketch.js';
import './level1.css';


function Level1() {

    return (
      <div className="level1-container">
        <HomeButton className="home-button"/>
        <body className="sketch-container">
          <ReactP5Wrapper sketch={Sketch1} />
          {/* {<Sketch1 />} */}
        </body>
      </div>
    );
  } export default Level1;
