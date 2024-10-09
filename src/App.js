// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Settings from './pages/Settings';
import CalendarPage from './pages/CalendarPage';
import GoogleEvents from './pages/GoogleEvents';
import './App.css';  // Global styles

const App = () => {
  const [theme, setTheme] = useState('light');
  const [selectedMood, setSelectedMood] = useState('');
  const [dayColors, setDayColors] = useState({}); // Store colors for each day

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme;  // Apply the theme globally
  };

  // Function to apply the mood color to the selected day
  const applyMoodToDay = (moodColor, dayKey) => {
    setDayColors((prevColors) => ({
      ...prevColors,
      [dayKey]: moodColor,
    }));
  };

  return (
    <Router>
      <div className={`app ${theme}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/settings"
            element={<Settings theme={theme} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/calendar"
            element={
              <CalendarPage
                selectedMood={selectedMood}
                setSelectedMood={setSelectedMood}
                dayColors={dayColors}
                applyMoodToDay={applyMoodToDay}
              />
            }
          />
          <Route path="/events" element={<GoogleEvents />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;