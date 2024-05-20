import { ReactP5Wrapper } from "@p5-wrapper/react";
import sketch from '../../p5 stuff/p5_object';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './level1.css';


function Level1() {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    };

    return (
      <div className="level1-container">
        <button className="home-button" onClick={handleHomeClick}>
            <FontAwesomeIcon icon={faHome} />
        </button>
        <body className="sketch-container">
          <ReactP5Wrapper sketch={sketch} />
        </body>
      </div>
    );
  } export default Level1;
