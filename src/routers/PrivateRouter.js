import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

// ...rest = demas datos como exact, path, etc
export const PrivateRouter = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {

  return <Route 
    {...rest}
    component={(props) => ( //props = history, location, match etc
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    )}
  />
};

PrivateRouter.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
};

