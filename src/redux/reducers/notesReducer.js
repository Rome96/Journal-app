import { types } from "../types/types";

// active: {
//   id: '',
//   title: '',
//   body: '',
//   imageUrl: '',
//   date: ''
// }

const initialState = {
  notes: [],
  active: null
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.notesActive:
      return {
        ...state,
        active: {
          ...action.payload
        }
      }
    default:
      return state;
  }
}