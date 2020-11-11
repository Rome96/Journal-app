import { types } from '../types/types';

const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    const payload = {
      uid: "54321",
      displayName: "rome",
    };
    setTimeout(() => {
      dispatch(login(payload))
    }, 3500);
  }
  // return (dispatch) => {
  //   const res = fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log('res =>', json)
  //     });
  //   return res
  // }
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