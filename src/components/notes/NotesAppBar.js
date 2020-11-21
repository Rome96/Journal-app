import React from 'react';
import { saveNote } from '../../redux/actions/notes';
import { useDispatch, useSelector } from 'react-redux';

const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active:note } = useSelector(state => state.notes)

  const handleSaveNote = () => {
    dispatch(saveNote(note));
  }

  return <div className="notes__appbar">
    <span>6 de noviembre 2020</span>
    <div>
      <button className="btn"> Picture </button>
      <button className="btn" onClick={handleSaveNote}> Save </button>
    </div>
  </div>
};

export default NotesAppBar;
