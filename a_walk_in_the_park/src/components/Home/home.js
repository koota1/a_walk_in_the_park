import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../Navigation/nav-bar";
import "./home.css";

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase.js";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

function Home({ setUser }) {
  const [user, setLocalUser] = useState(null);
  const [uData, setUData] = useState(0);
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
        navigate("/login");
      }
    });
  }, [navigate, setUser]);

  const [showButtons, setShowButtons] = useState(false);

  const handleStartClick = () => {
    navigate("/char-select");
  };

  const handleLoadClick = () => {
    // let uData;
    async function getUserData() {
      try {
        const q = query(
          collection(db, "users"),
          where("userId", "==", user.uid)
        );
        const querySnapshot = await getDocs(q);
        const userData = querySnapshot.docs.map((user) => ({
          level: user.data().level,
        }));
        setUData(userData[0].level);
        console.log(uData);
        if (uData === 1) {
          navigate("/level1");
        } else if (uData === 2) {
          navigate("/level2");
        } else {
          navigate("/");
        }
      } catch (e) {
        console.error("Error fetching notes: ", e);
      }
    }

    if (user) {
      getUserData();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 500); // Match the duration of pixelate animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <NavBar className="home-button" />
      <div className="pixelated-welcome">Welcome</div>
      {showButtons && (
        <div className="fade-in">
          <div className="start-button" onClick={handleStartClick}>
            {" "}
            Start{" "}
          </div>
          <div className="start-button" onClick={handleLoadClick}>
            {" "}
            Load{" "}
          </div>
        </div>
      )}
    </div>
  );
}
export default Home;
