import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleLogo from "../../Assets/Image/google.svg";
import auth from '../../firebase.init';

const Signup = () => {
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const emailInput = (event) => {
    setEmail(event.target.value)
  }
  const passwordInput = (event) => {
    setPassword(event.target.value)
  }
  const confirmPasswordInput = (event) => {
    setConfirmPassword(event.target.value)
  }
  const onSubmits = (event) => {
    event.preventDefault();
  }
  const clickSingUp = () => {
    if (/^[a-z0-9](\.?[a-z0-9]){5,}@gmail\.com$/.test(email)) {
      setEmailError('');
      if (password === confirmPassword) {
        setPasswordError('');
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            navigate('/login')
          })
          .catch((error) => {
            console.log(error)
            const errorMessage = error.message;
          });
      } else {
        setPasswordError('set valid email')
      }

    } else {
      setEmailError('set Valid email')
    }
  }
  return (
    <div className='auth-form-container '>
      <div className='auth-form'>
        <h1>Sign Up</h1>
        <form onSubmit={onSubmits}>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <div className='input-wrapper'>
              <input onBlur={emailInput} type='email' name='email' id='email' />
            </div>
            <h6 className="text-color">{emailError}</h6>
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <div className='input-wrapper'>
              <input onBlur={passwordInput} type='password' name='password' id='password' />
            </div>
          </div>
          <div className='input-field'>
            <label htmlFor='confirm-password'>Confirm Password</label>
            <h5 className="text-color">{passwordError}</h5>
            <div className='input-wrapper'>
              <input
                onBlur={confirmPasswordInput}
                type='password'
                name='confirmPassword'
                id='confirm-password'
              />
            </div>
          </div>
          <button onClick={clickSingUp} type='submit' className='auth-form-submit'>
            Sign Up
          </button>
        </form>
        <p className='redirect'>
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
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

export default Signup;
