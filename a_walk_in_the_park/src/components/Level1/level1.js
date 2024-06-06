import { ReactP5Wrapper } from "@p5-wrapper/react";
// import Sketch1 from '../../p5 stuff/p5_object';
import Sketch1 from './level1_sketch';
import NavBar from "../Navigation/nav-bar";
// import Sketch1 from './level1_sketch.js';
import './level1.css';

import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { db } from "../../firebase.js";

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Level1({user}) {

  const [character, setCharacter] = useState('default');
  const [level, setLevel] = useState(0);
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
  
  function updateCharacter() {
    setCharacter(character);
  }

  return (
    <div className="level1-container">
      <NavBar className="home-button"/>
      <span className="update-button" onClick={updateCharacter}>
        load character
      </span>
      <div className="sketch-container">
        {/* <ReactP5Wrapper sketch={Sketch1} /> */}
        <ReactP5Wrapper sketch={Sketch1} character={character} />
        {/* {<Sketch1 />} */}
      </div>
    </div>
  );
}

export default Level1;
