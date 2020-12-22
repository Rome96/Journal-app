import React from 'react';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { removeError, setError } from '../../redux/actions/ui';
import { RegisterWithEmailPasswordName } from '../../redux/actions/auth';

const RegisterScreen = () => {

  const dispatch = useDispatch()
  const { msgError } = useSelector(state => state.ui)
  console.log(msgError)
  const [formValues, handleInputChange] = useForm({
    name: 'Turianin',
    email: 'rome@rome.com',
    password: '123456',
    password2: '123456'
  });

  const {
    name,
    email,
    password,
    password2
  } = formValues;

  const handleSubmit = e => {
    e.preventDefault();

    if ( isFormValid() ) {
      const payload = {
        email,
        password,
        name
      }
      dispatch(RegisterWithEmailPasswordName(payload));
    };
  };

  const isFormValid = () => {

    if (name.trim().length === 0) {
      dispatch(setError('Name is required'));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError('Email is not valid'))
      return false;
    } else if (password !== password2 || password.length < 2) {
      dispatch(setError('Password should be at least 6 characters and match each other'))
      return false;
    }
    dispatch(removeError())
    return true;
  };

  return <>
    <h3 className="auth__title mb-5">Register</h3>
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
        name="name"
        value={name}
        placeholder="Name"
        className="auth__input"
        onChange={handleInputChange}
      />
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
        placeholder="Password"
        className="auth__input"
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password2"
        value={password2}
        className="auth__input"
        placeholder="Confirm password"
        onChange={handleInputChange}
      />
      <button
        type="submit"
        // disabled
        className="btn btn-primary mb-5 btn-block"
      >
        Register
      </button>
      <Link to="/auth/login" className="link">Already registered?</Link>
    </form>
  </>
}

export default RegisterScreen
