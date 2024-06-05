import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import './Signup.css';

function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  function signUpUser(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up successfully
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage); // Set error message as string
        console.error(errorCode, errorMessage);
      });
  }

  return (
    <div className="signup-container">
      <form className="signup-form">
        <p className="signup-title">Sign up</p>
        <label className='label-email' htmlFor="email">Email: </label>
        <input
          value={email}
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className='label-password' htmlFor="password">Password: </label>
        <input
          value={password}
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='signup-button' type="submit" onClick={signUpUser}>
          Sign up
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}{" "}
        {/* Render error message */}
      </form>
    </div>
  );
}

export default Signup;
