import { types } from '../types/types';
import { db } from "../../firebase/firebase-config";
import { loadNotes } from '../../helpers/loadNotes';
import Swal from 'sweetalert2';
import { fileUpload } from '../../helpers/fileUpload';

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

const saveNote = note => {
  console.log('NOTE =>', note)
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    if (!note.url) {
      delete note.url
    }

    const noteFireStore = {...note};
    delete noteFireStore.id;

    try {
      await db.doc(`${uid}/journal/notes/${note.id}`).update(noteFireStore);
      dispatch(refreshNote(note.id, noteFireStore));
      Swal.fire("Saved", note.title, 'success');
    } catch (error) {
      console.log(error)
    }
  };
};

const refreshNote = (id, note) => {
  return {
    type: types.notesUpdated,
    payload: {
      id,
      note: {
        id,
        ...note
      }
    }
  }
};

const startUploading = (file) => {
  return async (dispatch, getState) => {
    const { active:noteActive } = getState().notes;
    Swal.fire({
      title: 'Uploading...',
      text: 'Please wait...',
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      }
    });

    const fileUrl = await fileUpload(file);
    noteActive.url = fileUrl;
    dispatch(saveNote(noteActive));

    Swal.close();
  };
};

export {
  saveNote,
  activeNote,
  startNewNote,
  startUploading,
  startLoadingNotes,
};