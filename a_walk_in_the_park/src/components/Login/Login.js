import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import './Login.css';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function loginUser(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  return (
    <div>
      <div className="login-container">
        <form className="login-form">
          <p className="login-title">Log in</p>
          <label className='label-email' htmlFor="email">Email: </label>
          <input
            className="input-email"
            value={email}
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className='label-password' htmlFor="password">Password: </label>
          <input
            className="input-password"
            value={password}
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='login-button' type="submit" onClick={loginUser}>
            Log in
          </button>
          <p>
            New user? Sign up <Link to="/signup">here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
