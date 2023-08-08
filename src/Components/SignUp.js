import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import facebookLogo from '../images/login-facebook.png';
import googleLogo from '../images/login-google.png';

const SignUp = () => {
  var navigate = useNavigate;

  const [register, setRegister] = useState({
    first_name: '',
    email: '',
    mobile_number: '',
    password: '',
  });
  const [error, setError] = useState({
    first_nameError: '',
    emailError: '',
    mobile_numberError: '',
    passwordError: '',
  });

  // const [verify, setVerify] = useState(false);
  const [first_nameBorderColor, setFirst_nameBorderColor] = useState('#f7f7fa');
  const [emailBorderColor, setEmailBorderColor] = useState('#f7f7fa');

  const [passwordBorderColor, setPasswordBorderColor] = useState('#f7f7fa');
  const [msg, setMsg] = useState('');
  const [visible, setVisible] = useState(false);

  async function callApi() {
    // console.log("REG",register);
    if (register.first_name === '') {
      setMsg('Enter first name');
    } else if (register.email === '') {
      setMsg('Enter email');
    } else if (register.mobile_number === '') {
      setMsg('Enter email');
    } else if (register.password === '') {
      setMsg('Enter password');
    } else if (register.confirmPassword === '') {
      setMsg('Enter password');
    } else {
      if (
        error.first_nameError === '' &&
        error.emailError === '' &&
        error.mobile_number === '' &&
        error.passwordError === ''
      ) {
        axios.defaults.headers.common['Authorization'] = ``;
        await axios
          .post(
            'https://phpwebdevelopmentservices.com/project-react-backend/api/register',
            register
          )
          .then((res) => {
            // console.log("res", res);
            // console.log("res.data",res.data);
            console.log('yuyytttttxttztztztzztzt', res);
            if (res.data.message) {
              navigate('./homepage');
            }
            // console.log("Status", res.status);
          })
          .catch((error) => {
            console.log('Registration-Error', error);
          });
      }
    }
  }

  const show_password = (e) => {
    setVisible(!visible);
  };

  const first_name_Handler = (e) => {
    setRegister((prev) => {
      return { ...prev, first_name: e.target.value };
    });

    if (e.target.value.length === 0) {
      setError((prev) => {
        return { ...prev, first_nameError: '*Enter first name' };
      });
      setFirst_nameBorderColor('1px solid red');
    } else if (!/^[a-zA-Z]+$/.test(e.target.value)) {
      setError((prev) => {
        return {
          ...prev,
          first_nameError: '*First name can only contain letters',
        };
      });
      setFirst_nameBorderColor('1px solid red');
    } else {
      setError((prev) => {
        return { ...prev, first_nameError: '' };
      });
      setFirst_nameBorderColor('#f7f7fa');
    }
  };

  const email_Handler = (e) => {
    // console.log(e.target.value);
    setRegister((prev) => {
      return { ...prev, email: e.target.value };
    });

    var emailRegex = '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[.]+[a-zA-Z]+$';

    const check = (mailID) => {
      if (mailID.match(emailRegex)) {
        return true;
      } else {
        return false;
      }
    };

    if (e.target.value.length === 0) {
      setError((prev) => {
        return { ...prev, emailError: '*Enter email' };
      });
      setEmailBorderColor('1px solid red');
    } else if (!check(e.target.value)) {
      setError((prev) => {
        return { ...prev, emailError: '*Not a valid email address' };
      });
      setEmailBorderColor('1px solid red');
    } else {
      setError((prev) => {
        return { ...prev, emailError: '' };
      });
      setEmailBorderColor('#f7f7fa');
    }
  };

  const mobile_number_Handler = (e) => {
    setRegister((prev) => {
      return { ...prev, mobile_number: e.target.value };
    });
  };

  const password_Handler = (e) => {
    setRegister((prev) => {
      return { ...prev, password: e.target.value };
    });

    var passwordRegex =
      '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';

    const check = (password) => {
      if (password.match(passwordRegex)) {
        return true;
      } else {
        return false;
      }
    };

    if (e.target.value.length === 0) {
      setError((prev) => {
        return { ...prev, passwordError: '*Enter password' };
      });
      setPasswordBorderColor('1px solid red');
    } else if (!check(e.target.value)) {
      setError((prev) => {
        return {
          ...prev,
          passwordError:
            '*Password must contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character',
        };
      });
      setPasswordBorderColor('1px solid red');
    } else {
      setError((prev) => {
        return { ...prev, passwordError: '' };
      });
      setPasswordBorderColor('#f7f7fa');
    }
  };

  const handleSubmit = () => {
    if (
      register.first_name === '' ||
      register.mobile_number === '' ||
      register.email === '' ||
      register.password === ''
    ) {
      setMsg('Please fill all details');
    }
    callApi();
  };

  return (
    <div>
      <div className="search_main_section">
        <div className="container">
          <div className="row res_padd">
            <div className="main-center-div">
              <div className="top-border-div">
                <div className="login-from-area">
                  <h2>Create Account</h2>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <input
                        type="text"
                        className="login-type"
                        placeholder="Full name"
                        value={register.first_name}
                        onChange={first_name_Handler}
                        // onChange={(e) => setFullName(e.target.value)}
                        required
                      />
                      <div className="clearfix"></div>
                    </div>
                    <div>
                      <input
                        type="text"
                        className="login-type"
                        placeholder="Mobile number"
                        value={register.mobile_number}
                        onChange={mobile_number_Handler}
                      />
                      <div className="clearfix"></div>
                    </div>
                    <div>
                      <input
                        type="text"
                        className="login-type"
                        placeholder="Email"
                        value={register.email}
                        onChange={email_Handler}
                        required
                      />
                      <div className="clearfix"></div>
                    </div>
                    <div className="password-in">
                      <input
                        type="password"
                        className="login-type"
                        placeholder="Password"
                        value={register.password}
                        onChange={password_Handler}
                      />
                      <div className="clearfix"></div>
                      <span
                        toggle="#password-field"
                        className="field-icon fa fa-fw fa-eye toggle-password"
                        onClick={() => {
                          show_password();
                        }}
                      ></span>
                    </div>
                    <div className="password-in">
                      <input
                        type="password"
                        className="login-type"
                        placeholder="Confirm password"
                        value={register.confirmPassword}
                        onChange={password_Handler}
                      />
                      <div className="clearfix"></div>
                      <span
                        toggle="#password-field"
                        className="field-icon fa fa-fw fa-eye toggle-password"
                      ></span>
                    </div>
                    {error.first_nameError && (
                      <p className="error-message">{error.first_nameError}</p>
                    )}
                    {error.emailError && (
                      <p className="error-message">{error.emailError}</p>
                    )}
                    {error.passwordError && (
                      <p className="error-message">{error.passwordError}</p>
                    )}{' '}
                    <p>
                      By clicking Sign In or continue with Facebook or Google,
                      you agree to all <a href=""> Terms of Service</a> and
                      <a href="#"> Privacy Policy</a>
                    </p>
                    <button
                      type="submit"
                      className="login-submit"
                      onClick={() => {
                        handleSubmit();
                        // toggle();
                      }}
                    >
                      Sign up
                    </button>
                  </form>
                </div>
                <div className="or-area">
                  <span>Or Continue with</span>
                </div>
                <div className="login-socials-area">
                  <div className="socials-btns">
                    <a href="#" className="common-btns facebook-btn">
                      <img src={facebookLogo} alt="" /> Facebook
                    </a>
                    <a href="#" className="common-btns google-btn">
                      <img src={googleLogo} alt="" /> Google
                    </a>
                  </div>
                </div>
              </div>
              <div className="bottom-account-div">
                <p>
                  Already have an account? <Link to="/">Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
