import './App.css';
import {Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home/home';
import Level1 from './components/Level1/level1';
import Login from './components/Login/Login.js';
import Signup from './components/Signup/Signup.js';
import CharSelection from './components/character/character.js';


function NotFound() {
  return <p>Unable to find requested page.</p>
}

function App() {

  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home setUser={setUser} />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/char-select" element={<CharSelection user={user} />}/>
        <Route path="/level1" element={<Level1 user={user} />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
