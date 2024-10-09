// src/components/CalendarGrid.js
import React, { useState, useEffect } from 'react';
import '../CalendarGrid.css';

const CalendarGrid = ({ selectedMood }) => {
  const [dayColors, setDayColors] = useState({});
  const [selectedDay, setSelectedDay] = useState(null);

  const months = [
    { name: 'January', days: 31 },
    { name: 'February', days: 28 }, // Handle leap years if needed
    { name: 'March', days: 31 },
    { name: 'April', days: 30 },
    { name: 'May', days: 31 },
    { name: 'June', days: 30 },
    { name: 'July', days: 31 },
    { name: 'August', days: 31 },
    { name: 'September', days: 30 },
    { name: 'October', days: 31 },
    { name: 'November', days: 30 },
    { name: 'December', days: 31 },
  ];

  const handleDayClick = (monthIndex, dayIndex) => {
    setSelectedDay({ monthIndex, dayIndex });
  };

  useEffect(() => {
    if (selectedDay && selectedMood) {
      const dayKey = `${selectedDay.monthIndex}-${selectedDay.dayIndex}`;
      setDayColors((prevDayColors) => ({
        ...prevDayColors,
        [dayKey]: selectedMood,
      }));
    }
  }, [selectedMood, selectedDay]);

  return (
    <div className="calendar-grid">
      <div className="month-row">
        <div className="month-cell"></div>
        {[...Array(31)].map((_, dayIndex) => (
          <div key={dayIndex} className="day-cell day-number">
            {dayIndex + 1}
          </div>
        ))}
      </div>
      {months.map((month, monthIndex) => (
        <div key={monthIndex} className="month-row">
          <div className="month-cell">{month.name.charAt(0)}</div>
          {[...Array(31)].map((_, dayIndex) => {
            const dayKey = `${monthIndex}-${dayIndex}`;
            const isDayValid = dayIndex < month.days;

            return (
              <div
                key={dayIndex}
                className={`day-cell ${isDayValid ? '' : 'disabled'}`}
                style={{
                  backgroundColor: isDayValid ? dayColors[dayKey] || 'lightgray' : '#f0f0f0',
                  cursor: isDayValid ? 'pointer' : 'not-allowed',
                }}
                onClick={() => isDayValid && handleDayClick(monthIndex, dayIndex)}
              >
                {/* No numbers inside the month cells */}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default CalendarGrid;
