import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Loading from '../components/loading';
import { login } from '../redux/actions/auth';
import { loadNotes } from '../helpers/loadNotes';
import { setNotes } from '../redux/actions/notes';
import { firebase } from '../firebase/firebase-config'
import JournalScreen from '../components/journal/JournalScreen';
import { AuthRouter, PrivateRouter, PublicRouter } from "./index";
import { Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';

export const AppRouter = () => {
  const dispatch = useDispatch();
  const [ checking, setChecking ] = useState(true);
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async user => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        const notes = await loadNotes(user.uid)
        dispatch(setNotes(notes))
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
        <PublicRouter
          path="/auth"
          isAuthenticated={ isLoggedIn }
          component={ AuthRouter }
        />
        <PrivateRouter
          exact
          path="/"
          isAuthenticated={ isLoggedIn }
          component={ JournalScreen }
        />
        <Redirect to="/auth/login"/>
      </Switch>
    </div>
  </Router>
};
