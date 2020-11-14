import React, { useEffect, useState } from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AuthRouter } from './AuthRouter';
import { login } from '../redux/actions/auth';
import { firebase } from '../firebase/firebase-config'
import JournalScreen from '../components/journal/JournalScreen';
import Loading from '../components/loading';

export const AppRouter = () => {
  const dispatch = useDispatch();
  const [ checking, setChecking ] = useState(true);
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      };
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn])

  if ( checking ) {
    return (
      <Loading/>
    );
  };

  return <Router>
    <div>
      <Switch>
        <Route path="/auth" component={ AuthRouter }/>
        <Route exact path="/" component={ JournalScreen }/>
        <Redirect to="/auth/login"/>
      </Switch>
    </div>
  </Router>
};
