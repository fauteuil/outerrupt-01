import { useEffect, useMemo, useRef, useState } from 'react';
import { DateTimeUnits } from '../../common/defaults';
import { FULL_TIME_DEFAULT } from '../../common/utilities/time';
import { TimerProps } from './types';

const { Hour, Minute, Second } = DateTimeUnits;

export const useTimer = ({
  fullTime = FULL_TIME_DEFAULT,
  handleTimerEnd,
}: TimerProps) => {
  const timerRef = useRef<number>(0);
  const [currentTime, setCurrentTime] = useState(fullTime);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    const timerIntervalID = window.setInterval(() => {
      if (currentTime <= 0) {
        clearTimer();
        setCurrentTime(fullTime);
        handleComplete(handleTimerEnd);
        return;
      } else {
        const newTime = Math.max(0, currentTime - Second);
        setTimerRunning(true);
        setCurrentTime(newTime);
      }
    }, Second);
    timerRef.current = timerIntervalID;
    return () => {
      clearTimer();
    };
  }, [currentTime, handleTimerEnd]);

  function handleComplete(handler?: any) {
    setTimerRunning(false);
    if (handler && typeof handler === 'function') {
      handler();
    }
    console.log("Time's Up!");
  }

  function clearTimer() {
    clearInterval(timerRef.current);
  }

  function toggleTimer() {
    // pause
    if (timerRef.current > 0) {
      // if (timerRunning) {
      clearTimer();
      timerRef.current = 0;
      setTimerRunning(false);
    }
    // play
    else {
      startTimer();
    }
  }

  function startTimer() {
    setCurrentTime(Math.max(0, currentTime - Second));
  }

  function resetTimer() {
    setCurrentTime(fullTime);
  }

  return { toggleTimer, currentTime, resetTimer, startTimer, timerRunning };
};
