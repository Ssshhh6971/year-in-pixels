// src/pages/CalendarPage.js
import React, { useState } from 'react';
import CalendarGrid from '../components/CalendarGrid';
import MoodSelector from '../components/MoodSelector';

const CalendarPage = () => {
  const [selectedMood, setSelectedMood] = useState('');

  return (
    <div>
      <MoodSelector setSelectedMood={setSelectedMood} />
      <CalendarGrid selectedMood={selectedMood} />
    </div>
  );
};

export default CalendarPage;