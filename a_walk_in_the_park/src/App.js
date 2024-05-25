import './App.css';
import {Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home/home';
import Level1 from './components/Level1/level1';

function NotFound() {
  return <p>Unable to find requested page.</p>
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/level1" element={<Level1/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
