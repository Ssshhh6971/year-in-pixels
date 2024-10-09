// src/pages/Settings.js
import React from 'react';
import ThemeToggle from '../components/ThemeToggle';

const Settings = ({ theme, toggleTheme }) => {
  return (
    <div>
      <h1>Settings</h1>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
};

export default Settings;