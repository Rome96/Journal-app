import { types } from '../types/types';

const setError = payload => {
  return {
    type: types.uiSetError,
    payload,
  };
};

const removeError = () => {
  return {
    type: types.uiRemoveError,
  }
}

export {
  setError,
  removeError
}