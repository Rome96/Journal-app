import { types } from '../types/types';

const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    console.log(email, password)
    const payload = {
      uid: "54321",
      displayName: "rome",
    };
    setTimeout(() => {
      dispatch(login(payload))
    }, 3500);
  }
}

const login = payload => {
  return {
    type: types.login,
    payload
  };
};

export {
  login,
  startLoginEmailPassword
};