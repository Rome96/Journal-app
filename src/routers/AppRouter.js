import React, { useEffect } from 'react';
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

export const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName))
      }
    })
  }, [dispatch])

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
