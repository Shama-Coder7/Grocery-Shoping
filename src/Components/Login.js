import React, { useState, useEffect } from 'react';
import axios from 'axios';
import facebookLogo from '../images/login-facebook.png';
import googleLogo from '../images/login-google.png';
import { useNavigate } from 'react-router-dom';
import {auth, provider} from "./config";
import { signInWithPopup } from 'firebase/auth';
import HomePage from './HomePage';

const Login = ({ setIsLogIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [emailBlured, setEmailBlured] = useState(false);
  const [passwordBlured, setPasswordBlured] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passBorderColor, setPassBorderColor] = useState('#f7f7fa');
  const [emailBorderColor, setEmailBorderColor] = useState('#f7f7fa');
  const [visible, setVisible] = useState(false);
  const [msg, setMsg] = useState('');
  const [verify, setVerify] = useState(false);

  const [modal, setModal] = useState(false);
  const [value, setValue] = useState('');

  var navigate = useNavigate();
  const handleLinkClick = (e) => {
    e.preventDefault();
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailBlur = () => {
    setEmailBlured(true);
  };

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handlePasswordBlur() {
    setPasswordBlured(true);
  }

  function validPassword(password) {
    // add password validation logic here
    return true;
  }

const handleClick = () => {
  signInWithPopup(auth, provider).then((data) => {
    setValue(data.user.email)
   localStorage.setItem("email", data.user.email)
  })
}


useEffect(() => {
  setValue(localStorage.getItem('email'))
})
  // async function callApi() {
  //   try {
  //     const res = await axios.post(
  //       'https://phpwebdevelopmentservices.com/project-react-backend/api/login',
  //       { email, password }
  //     );

  //     if (res.status === 200) {
  //       setMsg('Login Successful!');
  //       console.log('HomePage');
  //       navigate('/homepage');
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     if (error && error.response && error.response.status === 401) {
  //       setMsg('Invalid email or password');
  //       setIsLogIn(false);
  //       setModal(true);
  //     }
  //   }
  // }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === '' || password.trim() === '') {
      setMsg('Please fill all the details');
      setModal(true);
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Not a valid email address');
      setEmailBorderColor('1px solid red');
      return;
    }

  };

  return (

<div>
  {value ? <HomePage/> :     <div className="wrapper">
      <div className="search_main_section">
        <div className="container">
          <div className="row res_padd">
            <div className="main-center-div">
              <div className="top-border-div">
                <div className="login-from-area">
                  <h2>Sign In</h2>
                  <form id="login-form" onSubmit={handleSubmit}>
                    <div>
                      {/* <input
                          type="text"
                          className="login-type"
                          placeholder="Email or mobile number"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        /> */}

                      <input
                        autoComplete="off"
                        type="text"
                        value={email}
                        className="login-type"
                        onChange={handleEmailChange}
                        onBlur={handleEmailBlur}
                      />
                      <div className="invalid-feedback">
                        A valid email is required!
                      </div>
                      <div className="clearfix"></div>
                    </div>
                    <div className="password-in">
                      {/* <input
                          type="password"
                          className="login-type"
                          name="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        /> */}

                      <input
                        autoComplete="off"
                        type="password"
                        value={password}
                        className={`login-type ${
                          passwordBlured && !validPassword(password)
                            ? 'is-invalid'
                            : ''
                        }`}
                        onChange={handlePasswordChange}
                        onBlur={handlePasswordBlur}
                      />
                      <div className="clearfix"></div>
                      <span
                        toggle="#password-field"
                        className="field-icon fa fa-fw fa-eye toggle-password"
                      ></span>
                    </div>
                    <div className="remmber-area">
                      <label className="list_checkBox">
                        Remember me
                        <input type="checkbox" name="remember" />
                        <span className="list_checkmark"></span>
                      </label>
                      <a
                        className="forgot-passwords"
                        href="#"
                        onClick={handleLinkClick}
                      >
                        Forgot Password?
                      </a>
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button
                      type="submit"
                      className="login-submit"
                      onClick={handleClick}
                    >
                      Sign In
                    </button>
                  </form>
                </div>
                <div className="or-area">
                  <span>Or Continue with</span>
                </div>
                <div className="login-socials-area">
                  <div className="socials-btns">
                    <a
                      href="#"
                      onClick={handleLinkClick}
                      className="common-btns facebook-btn"
                    >
                      <img src={facebookLogo} alt="" /> Facebook
                    </a>
                    <a
                      href="#"
                      onClick={handleLinkClick}
                      className="common-btns google-btn"
                    >
                      <img src={googleLogo} alt="" /> Google
                    </a>
                  </div>
                </div>
              </div>
              <div className="bottom-account-div">
                <p>
                  Don't have an account?
                  <a href="/signup">Create Account</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>}
</div>
  );
};

export default Login;
