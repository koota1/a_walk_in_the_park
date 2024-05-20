import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './home-button.css';

function HomeButton() {
    
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    };

    return (
        <button className="home-button" onClick={handleHomeClick}>
            <FontAwesomeIcon icon={faHome} />
        </button>
    );
} 

export default HomeButton;