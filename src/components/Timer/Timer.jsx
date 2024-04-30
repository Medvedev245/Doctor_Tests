import React from 'react';
import { useEffect } from 'react';

const Timer = props => {
  const { time, setTime } = props;

  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      setTime(prevTime => {
        let seconds = prevTime.seconds + 1;
        let minutes = prevTime.minutes;
        if (seconds === 60) {
          seconds = 0;
          minutes += 1;
        }
        return { minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div>
      <h1>{`${time.minutes.toString().padStart(2, '0')}:${time.seconds
        .toString()
        .padStart(2, '0')}`}</h1>
    </div>
  );
};

export default Timer;
