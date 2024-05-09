import './App.css';
import { ReactP5Wrapper } from "@p5-wrapper/react";
import sketch from './p5 stuff/p5_object';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <body>
        <ReactP5Wrapper sketch={sketch} />
      </body>
    </div>
  );
}

export default App;
