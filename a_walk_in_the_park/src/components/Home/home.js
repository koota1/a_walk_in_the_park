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
    }, 500); // Match the duration of pixelate animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <div className="pixelated-welcome">Welcome</div>
      {showButtons && (
        <div className="fade-in">
          <div className="start-button" onClick={handleStartClick}> Start </div>
          <div className="start-button"> Load </div>
        </div>
      )}
    </div>
  );
}

export default Home;
