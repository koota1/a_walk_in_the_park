import './App.css';
import {Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home/home';
import Level1 from './components/Level1/level1';
import Level2 from './components/Level2/level2.js';
import Level3 from './components/Level3/level3.js';
import Login from './components/Login/Login.js';
import Signup from './components/Signup/Signup.js';
import CharSelection from './components/character/character.js';


function NotFound() {
  return <p>Unable to find requested page.</p>
}

function App() {

  const [user, setUser] = useState(null);

  /*
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Change this to your actual loading condition

    return () => clearTimeout(timer);
  }, []);
  */

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home setUser={setUser} />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/char-select" element={<CharSelection user={user} />}/>
        <Route path="/level1" element={<Level1 user={user} />} />
        <Route path="/level2" element={<Level2 user={user} />} />
        <Route path="/level3" element={<Level3 user={user} />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
