import { ReactP5Wrapper } from "@p5-wrapper/react";
// import Sketch1 from '../../p5 stuff/p5_object';
import Sketch3 from './level3_sketch';
import NavBar from "../Navigation/nav-bar.js";
// import Sketch1 from './level1_sketch.js';
import './level3.css';

import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase.js";

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Level3({user}) {

  const [character, setCharacter] = useState('default');
  const navigate = useNavigate();

  useEffect(() => {
    async function getCharFromDb() {
      try {
        const q = query(
          collection(db, "users"),
          where("userId", "==", user.uid),
        );
        const querySnapshot = await getDocs(q);
        const charData = querySnapshot.docs.map(user => ({
          character: user.data().character, // Extracting the "character" field
        }));
        setCharacter(charData[0]);
      } catch (e) {
        console.error("Error fetching notes: ", e);
      }
    }
    
    if (!user) {
      navigate('/login')
    } else {
      getCharFromDb();
    }
  }, [user, navigate]);

  return (
    <div className="level1-container">
      <div className = "messsage"> Coming Soon! </div>
      <NavBar className="home-button"/>
      <div className="sketch-container">
        <ReactP5Wrapper sketch={Sketch3} />
      </div>
    </div>
  );
} export default Level3;
