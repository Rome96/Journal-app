import React from 'react';
import JournalEntry from './JournalEntry';

const JournalEntries = () => {
  
  const entries = [1,2,3,4,5]

  return <div className="journal__entries mt-5">
    <p>Journal screen</p>
    {
      entries.map(item => (
        <JournalEntry key={item} />
      ))
    }
  </div>
};

export default JournalEntries;
