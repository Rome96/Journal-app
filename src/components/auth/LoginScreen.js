import React from 'react'
import { Link } from 'react-router-dom'

const LoginScreen = () => {
  return <>
    <h3 className="auth__title mb-5">Login</h3>
    <form>
      <input
        type="text"
        name="email"
        autoComplete="off"
        className="auth__input"
        placeholder="Email"
      />
      <input
        type="password"
        name="passsword"
        className="auth__input"
        placeholder="*****"
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
        <div className="google-btn">
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
      <Link to="/auth/register" className="link">Create new account</Link>
    </form>
  </>
};

export default LoginScreen;
