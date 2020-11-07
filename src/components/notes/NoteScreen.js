import React from 'react';
import NotesAppBar from './NotesAppBar';

const NoteScreen = () => {
  return <div className="notes__main-content">
    <NotesAppBar />
    <div className="notes__content">
      <input
        type="text"
        autoComplete="off"
        className="notes__title-input"
        placeholder="Some awesome title"
      />
      <textarea
        placeholder="What happened today"
        className="notes__textarea"
      />
      <div className="notes__image">
        <img
          alt="img"
          src="https://sm.ign.com/t/ign_latam/screenshot/default/naruto4_st6s.1280.jpg"
        />
      </div>
    </div>
  </div>
};

export default NoteScreen;
