import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import {
  startGoogleLogin,
  satrtGithubLogin,
  startLoginEmailPassword,
} from "../../redux/actions/auth";

const LoginScreen = () => {
  const dispatch = useDispatch()

  const [formValues, handleInputChange, reset] = useForm({
    email: "tury@gmail.com",
    password: "123456",
  });

  const {email, password} = formValues

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
    reset();
  };

  const handleAuthGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  // const handleAuthGithubLogin = () => {
  //   dispatch(satrtGithubLogin());
  // }
  return <>
    <h3 className="auth__title mb-5">Login</h3>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="email"
        value={email}
        autoComplete="off"
        placeholder="Email"
        className="auth__input"
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="passsword"
        value={password}
        className="auth__input"
        placeholder="*****"
        onChange={handleInputChange}
      />
      <button
        type="submit"
        // disabled
        className="btn btn-primary mb-1 btn-block"
      >
        Login
      </button>
      <div className="auth__social-networks">
        <p>Login with social network</p>
        <div className="google-btn" onClick={handleAuthGoogleLogin}>
          <div className="google-icon-wrapper">
            <img
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="google button"
            />
          </div>
          <p className="btn-text">
            <b>Sign in with google</b>
          </p>
        </div>
      </div>
      {/* <div onClick={handleAuthGithubLogin}>
        Gitgub
      </div> */}
      <Link to="/auth/register" className="link">Create new account</Link>
    </form>
  </>
};

export default LoginScreen;
