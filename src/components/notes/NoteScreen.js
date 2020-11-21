import React from 'react';
import { useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import NotesAppBar from './NotesAppBar';

const NoteScreen = () => {
  const { active:note } = useSelector(state => state.notes);
  const [formValues, handleInputChange] = useForm(note);
  const { body, title } = formValues;

  return <div className="notes__main-content">
    <NotesAppBar />
    <div className="notes__content">
      <input
        value={title}
        type="text"
        autoComplete="off"
        className="notes__title-input"
        placeholder="Some awesome title"
        onChange={handleInputChange}
      />
      <textarea
        value={body}
        placeholder="What happened today"
        className="notes__textarea"
        onChange={handleInputChange}
      />
      <div className="notes__image">
        {
          note.url && <img
            alt="img"
            src="https://sm.ign.com/t/ign_latam/screenshot/default/naruto4_st6s.1280.jpg"
          />
        }
      </div>
    </div>
  </div>
};

export default NoteScreen;
