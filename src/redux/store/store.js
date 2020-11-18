import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { authReducer, uiReducer, notesReducer } from '../reducers';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  notes: notesReducer
});

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);