import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../redux/actions/notes';

const JournalEntry = props => {
  const { id, title, body, date, url } = props;
  const noteDate = moment(date);
  const dispatch = useDispatch();

  const handleEntryClick = () => {
    dispatch(activeNote(id,{...props}));
  }

  return <div className="journal__entry pointer" onClick={handleEntryClick}>
    <div
      // className="journal__entry-picture"
      // style={{
      //   backgroundSize: 'cover',
      //   backgroundImage:  'url(https://static2.abc.es/media/play/2018/08/22/homer-simpson-kJU--1248x698@abc.JPG'
      // }}
    >
      {
        url && <img src={`${url}`} alt="avatar" className="journal__entry-picture"/>
      }
    </div>
    <div className="journal__entry-body">
      <p className="journal__entry-title">{ title }</p>
      <p className="journal__entry-content">{ body }</p>
    </div>
    <div className="journal__entry-date-box">
      {/* mostrar el dia de la semana */}
      <span>{ noteDate.format('dddd') }</span> 
      <h4>{ noteDate.format('Do') }</h4>
    </div>
  </div>
};

export default JournalEntry;
