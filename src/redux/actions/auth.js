import { types } from '../types/types';

const login = payload => {
  return {
    type: types.login,
    payload
  };
};

export {
  login
};