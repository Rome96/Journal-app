import { types } from '../types/types';
import {
  firebase,
  googleAuthProvider,
  // gitHubAuthProvider,
} from "../../firebase/firebase-config";

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
}

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


// const satrtGithubLogin = () => {
//   return () => {
//     firebase.auth().signInWithPopup(gitHubAuthProvider)
//       .then((resut) => {
//         console.log('RES Github =>', resut)
//       })
//       .catch((e) => {
//         console.log('Err Github Auth', e)
//       })
//   }
// }

const login = payload => {
  return {
    type: types.login,
    payload
  };
};

export {
  login,
  startGoogleLogin,
  // satrtGithubLogin,
  startLoginEmailPassword,
  RegisterWithEmailPasswordName,
};