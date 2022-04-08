import React, { useState } from "react";
import "./AuthForm.css";
import GoogleLogo from "../../Assets/Image/google.svg";
import { useNavigate } from "react-router-dom";
import auth from '../../firebase.init';
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // const [doneLogin, setDoneLogin] = useState('');
  const emailInput = (event) => {
    setEmail(event.target.value)
  }
  const passwordInput = (event) => {
    setPassword(event.target.value)
  }
  const loginDone = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        navigate('/')
        console.log(user)
      })
      .catch((error) => {
        console.log(error)
        setError(error.message)
      });
  }
  const onSubmits = (event) => {
    event.preventDefault();
  }
  return (
    <div className='auth-form-container '>
      <div className='auth-form'>
        <h1>Login</h1>
        <form onSubmit={onSubmits}>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <div className='input-wrapper'>
              <input onBlur={emailInput} type='text' name='email' id='email' />
            </div>
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <div className='input-wrapper'>
              <input onBlur={passwordInput} type='password' name='password' id='password' />
            </div>
          </div>
          <h6 className="text-color">{error}</h6>
          <button onClick={loginDone} type='submit' className='auth-form-submit'>
            Login
          </button>
        </form>
        <p className='redirect'>
          New to Tech Geeks?{" "}
          <span onClick={() => navigate("/signup")}>Create New Account</span>
        </p>
        <div className='horizontal-divider'>
          <div className='line-left' />
          <p>or</p>
          <div className='line-right' />
        </div>
        <div className='input-wrapper'>
          <button className='google-auth'>
            <img src={GoogleLogo} alt='' />
            <p> Continue with Google </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
