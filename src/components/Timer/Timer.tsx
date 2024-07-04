import React, { useEffect } from 'react';

interface Time {
  minutes: number;
  seconds: number;
}

interface TimerProps {
  time: Time;
  setTime: React.Dispatch<React.SetStateAction<Time>>;
}

const Timer: React.FC<TimerProps> = ({ time, setTime }) => {
  useEffect(() => {
    const interval = setInterval(() => {
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
  }, [setTime]);

  return (
    <div>
      <h1>{`${time.minutes.toString().padStart(2, '0')}:${time.seconds
        .toString()
        .padStart(2, '0')}`}</h1>
    </div>
  );
};

export default Timer;
