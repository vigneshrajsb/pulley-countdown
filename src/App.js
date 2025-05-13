import React, { useEffect, useState } from 'react';
import './App.css';

const targetDate = new Date('2025-05-29T12:00:00-07:00'); // 12PM Pacific Time (PDT)

function getTimeRemaining() {
  const now = new Date();
  const total = targetDate - now;
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
}

function App() {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (timeLeft.total <= 0) {
    return <h1>The countdown is over!</h1>;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20vh', fontFamily: 'sans-serif' }}>
      <h1>pulley.sh</h1>
      <h2>Mark your calendars for May 29th, 12PM</h2>
      <h3>We're coming soon!</h3>
      <div style={{ fontSize: '2rem', margin: '2rem 0' }}>
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </div>
      <p>
        Better than 0env, jigenv!
      </p>
    </div>
  );
}

export default App; 