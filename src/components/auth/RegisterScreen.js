import React from 'react';
import validator from 'validator';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

const RegisterScreen = () => {

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
      console.log('Form Success')
    };
  };

  const isFormValid = () => {

    if (name.trim().length === 0) {
      console.log('Name is required');
      return false;
    } else if (!validator.isEmail(email)) {
      console.log('Email is not valid');
      return false;
    } else if (password !== password2 || password.length < 2) {
      console.log('Password should be at least 6 characters and match each other')
      return false;
    }

    return true;
  };

  return <>
    <h3 className="auth__title mb-5">Register</h3>
    <form onSubmit={handleSubmit}>

      <div className="auth__alert-error">
        Error
      </div>

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
        name="passsword"
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
