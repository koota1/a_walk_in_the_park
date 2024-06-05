import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "./nav-bar.css";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

function NavBar(user) {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  function signOutUser() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.error("Error");
      });
  }

  function navLevel1(){
    navigate('/Level1')
  }

  function navLevel2(){
    navigate('/Level2')
  }

  //function navLevel3(){
  //  navigate('/Level3');
  //}

  return (
    <div className="navbar">
      <div className="navLeft">
        <button className="home-button" onClick={handleHomeClick}>
          <FontAwesomeIcon icon={faHome} />
        </button>
        <div className="signout-button">screenshot!</div>
      </div>
      <div className="level-wrapper">
        <div className="level-button" onClick={navLevel1}>level 1</div>
        <div className="level-button" onClick = {navLevel2}>level 2</div>
        <div className="level-button" >level 3</div>
      </div>
      <span className="signout-button" onClick={signOutUser}>
          Sign Out
        </span>
    </div>
  );
}

export default NavBar;
