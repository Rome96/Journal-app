import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../redux/actions/auth';
import { startNewNote } from '../../redux/actions/notes';
import JournalEntries from './JournalEntries';

const Sidebar = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(startLogout());
  };
  
  const handleAddNewNote = () => {
    dispatch(startNewNote())
  };

  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar mt-5">
        <h3>
          <i className="fa fa-moon"></i>
          <span> { name } </span>
        </h3>
        <button className="btn" onClick={handleLogout}>
          Logout 
        </button>
      </div>
      <div className="journal__new-entry" onClick={handleAddNewNote}>
        <i className="far fa-calendar-plus fa-5x"></i>
        <p className="mt-5">New entry </p>
      </div>
      <JournalEntries />
    </aside>
  );
}

export default Sidebar
