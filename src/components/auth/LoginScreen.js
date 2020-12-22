import React from 'react'
import validator from 'validator';
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../redux/actions/ui';
import { startGoogleLogin, startLoginEmailPassword } from "../../redux/actions/auth";

const LoginScreen = () => {
  const dispatch = useDispatch()
  const { msgError, loading } = useSelector(state => state.ui)

  const [formValues, handleInputChange] = useForm({
    email: "rome@rome.com",
    password: "123456",
  });

  const {email, password} = formValues

  const handleSubmit = e => {
    e.preventDefault();
    if (isFromValid()) {
      dispatch(startLoginEmailPassword(email, password));
    }
  };

  const handleAuthGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  const isFromValid = () => {
    if (!validator.isEmail(email)) {
      dispatch(setError('Email is not valid'));
      return false;
    } else if (password.length < 2) {
      dispatch(setError('Password should be at least 6'));
      return false;
    };
    dispatch(removeError())
    return true;
  };

  return <>
    <h3 className="auth__title mb-5">Login</h3>
    <form
      onSubmit={handleSubmit}
      className="animate__animated animate__fadeIn"
    >
      {
        msgError && <div className="auth__alert-error">
          { msgError }
        </div>
      }
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
        name="password"
        value={password}
        className="auth__input"
        placeholder="*****"
        onChange={handleInputChange}
      />
      <button
        type="submit"
        disabled={loading}
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
      <Link to="/auth/register" className="link">Create new account</Link>
    </form>
  </>
};

export default LoginScreen;
