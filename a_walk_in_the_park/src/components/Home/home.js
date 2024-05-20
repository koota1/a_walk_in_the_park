import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./home.css";

function Home() {
  const [showButtons, setShowButtons] = useState(false);
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/level1');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 2000); // Match the duration of pixelate animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <div className="pixelated-welcome">Welcome</div>
      {showButtons && (
        <div className="fade-in">
          <button onClick={handleStartClick}>Start</button>
          <button>Load</button>
        </div>
      )}
    </div>
  );
}

export default Home;