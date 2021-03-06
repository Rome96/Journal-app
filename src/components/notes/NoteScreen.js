import React, {useRef, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { activeNote, startDeleting } from '../../redux/actions/notes';
import NotesAppBar from './NotesAppBar';

const NoteScreen = () => {
  const { active:note } = useSelector(state => state.notes);
  const [formValues, handleInputChange, reset] = useForm(note);
  const { body, title, id } = formValues;
  const activeId = useRef(note.id);
  const dispatch = useDispatch();

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note)
      activeId.current = note.id
    };
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, {...formValues}));
  }, [formValues, dispatch]);

  const handleDelete = _ => {
    dispatch(startDeleting(id));
  }

  return <div className="notes__main-content">
    <NotesAppBar />
    <div className="notes__content">
      <input
        name="title"
        value={title}
        type="text"
        autoComplete="off"
        className="notes__title-input"
        placeholder="Some awesome title"
        onChange={handleInputChange}
      />
      <textarea
        name="body"
        value={body}
        placeholder="What happened today"
        className="notes__textarea"
        onChange={handleInputChange}
      />
      <div className="notes__image">
        {
          note.url && <img
            alt="img"
            src={note.url}
          />
        }
      </div>
    </div>
    <button className="btn btn-danger" onClick={handleDelete}>
      Delete
    </button>
  </div>
};

export default NoteScreen;
