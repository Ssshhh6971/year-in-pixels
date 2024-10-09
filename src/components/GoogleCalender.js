// src/components/GoogleCalendar.js
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const GoogleCalendar = () => {
  const CLIENT_ID = 'YOUR_CLIENT_ID';
  const API_KEY = 'YOUR_API_KEY';
  const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

  useEffect(() => {
    const start = () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        scope: SCOPES,
      });
    };
    gapi.load('client:auth2', start);
  }, []);

  const listEvents = () => {
    gapi.client.calendar.events.list({
      calendarId: 'primary',
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    }).then(response => {
      const events = response.result.items;
      console.log('Events:', events);
    });
  };

  return (
    <div>
      <button onClick={listEvents}>List Google Calendar Events</button>
    </div>
  );
};

export default GoogleCalendar;
