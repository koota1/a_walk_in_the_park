import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../Navigation/nav-bar';
import "./home.css";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

function Home({ setUser }) {

  const [localUser, setLocalUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (usr) => {
      if (usr) {
        // User is logged in
        setLocalUser(usr);
        setUser(usr); // Assign user variable
      } else {
        // No user
        setLocalUser(null);
        setUser(null); // Assign null if no user
        navigate('/login')
      }
    });
  }, []);

  const [showButtons, setShowButtons] = useState(false);

  const handleStartClick = () => {
    navigate('/char-select');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 500); // Match the duration of pixelate animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <NavBar className="home-button"/>
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
