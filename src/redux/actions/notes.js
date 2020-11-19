import { db } from "../../firebase/firebase-config";

const startNewNote = () => {
  return async (dispatch, getState) => { //el segundo parametro 'getSatate' me trae todos los datos del store
    const { uid } = getState().auth;
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime()
    };
    const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);
    console.log(docRef)
  };
};

export {
  startNewNote
}