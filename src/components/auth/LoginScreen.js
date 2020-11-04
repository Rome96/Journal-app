import React from 'react'

const LoginScreen = () => {
  return <div>
    <h3>Login</h3>
    <form>
      <input
        type="text"
        placeholder="email@email.com"
        name="email"
      />
      <input
        type="password"
        placeholder="*****"
        name="passsword"
      />
      <button
        type="submit"

      >
        Login
      </button>
      <hr/>
      google
    </form>
  </div>
};

export default LoginScreen;
