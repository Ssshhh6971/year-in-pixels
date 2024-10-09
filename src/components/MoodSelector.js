// src/components/MoodSelector.js
import React, { useState } from 'react';

const MoodSelector = ({ setSelectedMood, applyMoodToDay }) => {
  const moods = {
    thrilled: 'lightgreen',
    happy: 'green',
    meh: 'blue',
    frustrated: 'magenta',
    sad: 'purple',
    angry: 'red',
  };

  const [activeMood, setActiveMood] = useState(null); // Track the currently selected mood

  const handleMoodClick = (mood) => {
    setSelectedMood(moods[mood]); // Update the selected mood state
    if (applyMoodToDay) {
      applyMoodToDay(moods[mood]); // Apply the mood color to the selected day
    } else {
      console.error("applyMoodToDay is not a function");
    }
    setActiveMood(mood); // Set the active mood for highlighting
  };

  return (
    <div className="mood-selector">
      {Object.keys(moods).map((mood) => (
        <button
          key={mood}
          className={`neumorphic-button ${activeMood === mood ? 'active' : ''}`}
          style={{
            backgroundColor: moods[mood],
            border: 'none',
            padding: '10px 20px',
            margin: '5px',
            borderRadius: '26px',
            cursor: 'pointer',
            color: 'white',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
          }}
          onClick={() => handleMoodClick(mood)}
        >
          {mood.charAt(0).toUpperCase() + mood.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default MoodSelector;