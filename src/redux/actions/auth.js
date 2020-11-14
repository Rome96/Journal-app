import { finishLoading, setError, startLoading } from './ui';
import { types } from '../types/types';
import { firebase, googleAuthProvider } from "../../firebase/firebase-config";

const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading())
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(({user: {uid, displayName}}) => {
        dispatch(login(uid, displayName));
        dispatch(finishLoading())
      })
      .catch(e => {
        console.log(e)
        dispatch(setError(e.message));
      });
  };
};

const RegisterWithEmailPasswordName = payload => {
  const { email, password, name } = payload;
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async ({user}) => {
        await user.updateProfile({displayName: name})
        dispatch(login(user.uid, user.displayName));
      })
      .catch(e => {
        console.log(e)
        dispatch(setError(e.message));
      })
  };
};

const startGoogleLogin = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(googleAuthProvider)
      .then(({user: {uid, displayName}}) => {
        dispatch(login(uid, displayName))
      })
      .catch(e => {
        console.log('Err Google Auth', e)
      })
  }
}

const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};

export {
  login,
  startGoogleLogin,
  startLoginEmailPassword,
  RegisterWithEmailPasswordName,
};