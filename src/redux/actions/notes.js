import { types } from '../types/types';
import { db } from "../../firebase/firebase-config";
import { loadNotes } from '../../helpers/loadNotes';

const startNewNote = () => {
  return async (dispatch, getState) => { //el segundo parametro 'getSatate' me trae todos los datos del store
    const { uid } = getState().auth;
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime()
    };
    try {     
      const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);
      dispatch(activeNote(docRef.id, newNote))
    } catch (error) {
      console.log('Error Add New Note =>', error)
    }
  };
};


const activeNote = (id, note) => {
  return {
    type: types.notesActive,
    payload: {
      id,
      ...note
    }
  };
};

const startLoadingNotes = uid => {
  return async (dispatch) => {
    const notes = await loadNotes(uid)
    dispatch(setNotes(notes));
  };
};

const setNotes = payload => {
  return {
    type: types.notesLoad,
    payload
  };
};

export { startLoadingNotes, startNewNote, activeNote };