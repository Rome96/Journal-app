import React from 'react';

const JournalEntry = () => {
  return <div className="journal__entry pointer">
    <div
      // className="journal__entry-picture"
      // style={{
      //   backgroundSize: 'cover',
      //   backgroundImage:  'url(https://static2.abc.es/media/play/2018/08/22/homer-simpson-kJU--1248x698@abc.JPG'
      // }}
    >
      <img src="https://static2.abc.es/media/play/2018/08/22/homer-simpson-kJU--1248x698@abc.JPG" alt="avatar" className="journal__entry-picture"/>
    </div>
    <div className="journal__entry-body">
      <p className="journal__entry-title"> Un nuevo día </p>
      <p className="journal__entry-content">
        Lorem ipsum, dolor sit amet consectetur.
      </p>
    </div>
    <div className="journal__entry-date-box">
      <span>Monday</span>
      <h4>24</h4>
    </div>
  </div>
};

export default JournalEntry;
