// src/pages/CalendarPage.js
import React, { useState } from 'react';
import CalendarGrid from '../components/CalendarGrid';
import MoodSelector from '../components/MoodSelector';

const CalendarPage = () => {
  const [selectedMood, setSelectedMood] = useState('');
  const [selectedDay, setSelectedDay] = useState(null);
  const [dayColors, setDayColors] = useState({});

  const applyMoodToDay = (mood, dayKey) => {
    setDayColors({ ...dayColors, [dayKey]: mood });
  };

  return (
    <div>
      <MoodSelector setSelectedMood={setSelectedMood} />
      <CalendarGrid
        selectedMood={selectedMood}
        dayColors={dayColors}
        applyMoodToDay={applyMoodToDay}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay} // Ensure setSelectedDay is passed as a prop
      />
    </div>
  );
};

export default CalendarPage;
