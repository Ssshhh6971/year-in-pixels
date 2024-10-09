// src/components/CommentModal.js
import React, { useState } from 'react';

const CommentModal = ({ selectedDay, saveComment, comment }) => {
  const [input, setInput] = useState(comment || '');

  const handleSave = () => {
    saveComment(`${selectedDay.monthIndex}-${selectedDay.dayIndex}`, input);
  };

  return (
    <div className="modal">
      <h3>Add Comment for Day {selectedDay.dayIndex + 1}</h3>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSave}>Save Comment</button>
    </div>
  );
};

export default CommentModal;
