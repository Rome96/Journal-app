import { setError } from './ui';
import { types } from '../types/types';
import { firebase, googleAuthProvider } from "../../firebase/firebase-config";

const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(({user}) => {
        const payload = {
          uid: user.uid,
          displayName: user.displayName,
        };
        dispatch(login(payload));
      })
      .catch(e => {
        console.log(e)
        dispatch(setError(e.message));
        // setTimeout(() => {
        //   dispatch(removeError());
        // }, 3500);
      });
  };
};

const RegisterWithEmailPasswordName = payload => {
  const { email, password, name } = payload;
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async ({user}) => {
        await user.updateProfile({displayName: name})
        const payload = {
          uid: user.uid,
          displayName: user.displayName,
        };
        dispatch(login(payload));
      })
      .catch(e => {
        console.log(e)
        dispatch(setError(e.message));
        // setTimeout(() => {
        //   dispatch(removeError())
        // }, 3500);
      })
  };
};

const startGoogleLogin = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(googleAuthProvider)
      .then(({user}) => {
        const payload = {
          uid: user.uid,
          displayName: user.displayName,
        };
        dispatch(login(payload))
      })
      .catch(e => {
        console.log('Err Google Auth', e)
      })
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
  startGoogleLogin,
  startLoginEmailPassword,
  RegisterWithEmailPasswordName,
};