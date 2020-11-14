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
  };
};

const startLoading = () => {
  return {
    type: types.uiStartLoading,
  };
};

const finishLoading = () => {
  return {
    type: types.uiFinishLoading
  }
}

export {
  setError,
  removeError,
  startLoading,
  finishLoading,
};