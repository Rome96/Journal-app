import React from 'react'
import { Link } from 'react-router-dom'

const RegisterScreen = () => {
  return <>
    <h3 className="auth__title mb-5">Register</h3>
    <form>
      <input
        type="text"
        name="name"
        className="auth__input"
        placeholder="Name"
      />
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
        placeholder="Password"
      />
      <input
        type="password"
        name="password2"
        className="auth__input"
        placeholder="Confirm password"
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
