// src/pages/Home.js
import React, { useState } from 'react';
import MoodSelector from '../components/MoodSelector';
import CalendarGrid from '../components/CalendarGrid';

const Home = () => {
  const [selectedMood, setSelectedMood] = useState('');

  return (
    <div>
      <h1>Year in Pixels</h1>
      <MoodSelector setSelectedMood={setSelectedMood} />
      <CalendarGrid selectedMood={selectedMood} />
    </div>
  );
};

export default Home;