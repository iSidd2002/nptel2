import { useState, useEffect } from 'react';

const Timer = ({ minutes, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(minutes * 60);
  
  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }
    
    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);
  
  const formatTime = () => {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  // Determine color based on time left
  const getColorClass = () => {
    if (timeLeft < 60) { // Less than 1 minute
      return 'text-red-600 dark:text-red-400';
    } else if (timeLeft < 300) { // Less than 5 minutes
      return 'text-yellow-600 dark:text-yellow-400';
    } else {
      return 'text-green-600 dark:text-green-400';
    }
  };
  
  return (
    <div className="text-center">
      <div className={`text-xl font-bold ${getColorClass()}`}>
        {formatTime()}
      </div>
      <p className="text-xs text-gray-600 dark:text-gray-400">Time Remaining</p>
    </div>
  );
};

export default Timer;
