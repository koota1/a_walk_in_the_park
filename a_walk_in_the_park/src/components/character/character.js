import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
  collection,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "../../firebase.js";

// add { user }
function CharSelection({ user }) {
  
  const [char, setChar] = useState('default')
  const [level, setLevel] = useState(1);

  const navigate = useNavigate();

  function setNewChar(option) {
    if (option === 1) {
      setChar('square')
    } else if (option === 2) {
      setChar('ellipse')
    } else {
      setChar('default')
    }
  }

  async function addCharacter() {
    try {
      const createdTimestamp = new Date();
      const charRef = await addDoc(collection(db, "users"), {
        userId: user.uid,
        character: char,
        level: level,
        created: createdTimestamp
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }
  
  const handleNextClick = () => {
    addCharacter()
    navigate('/level1')
  }
  
  return (
    <div className = "characters-wrapper">
      <h3>Set Character!</h3>
      <div className='char-select'>
        <span className='button'onClick={() => setNewChar(1)}> square </span>
        <span className='button'onClick={() => setNewChar(2)}> ellipse </span>
      </div>
      <span className='button' onClick={handleNextClick}> Start </span>  
    </div>
  );
}

export default CharSelection;
