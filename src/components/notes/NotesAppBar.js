import React, {useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveNote, startUploading } from '../../redux/actions/notes';

const NotesAppBar = () => {
  const dispatch = useDispatch();
  const inputFileRef = useRef(null);
  const { active:note } = useSelector(state => state.notes);

  const handleSaveNote = () => {
    dispatch(saveNote(note));
  };

  const handlePictureUpload = _ => {
    inputFileRef.current.click();
    // document.querySelector("#fileSelector").click();
  };

  const handleFileChange = e => {
    const file = e.target.files[0];
    if ( file ) {
      dispatch(startUploading(file));
    }
  }

  return <div className="notes__appbar">
    <span>6 de noviembre 2020</span>
    <div>
      <input
        // id='fileSelector'
        name='file'
        type='file'
        ref={inputFileRef}
        style={{display: 'none'}}
        onChange={handleFileChange}
      />
      <button className="btn" onClick={handlePictureUpload}> Picture </button>
      <button className="btn" onClick={handleSaveNote}> Save </button>
    </div>
  </div>
};

export default NotesAppBar;
