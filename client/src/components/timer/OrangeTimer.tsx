import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import styled from 'styled-components';
import { DateTimeUnits } from '../../common/defaults';
import { useActivity } from '../../features/activity/useActivity';
import { PlayButton } from '../button/play-button';
import { PauseButton } from '../button/pause-button';

import { orangeTimerState } from './state';
import {
  OrangeCircle,
  TimerControlToggleWrapper,
  TimerWrapper,
} from './Timer.styles';
import { TimerProps } from './types';
import { useTimer } from './useTimer';
import { formatTime } from '../../common/utilities/time';
// const { Hour, Minute, Second } = DateTimeUnits;

export function OrangeTimer(props: TimerProps) {
  const [showControls, setShowControls] = useState(false);
  const { fullTime, handleTimerEnd } = props;
  const {
    toggleTimer,
    currentTime,
    resetTimer,
    startTimer,
    timerRunning,
  } = useTimer({ fullTime, handleTimerEnd });
  const { selectedActivityId } = useActivity();

  // /** Reset the timer when the selectedActivityId changes */
  useEffect(() => {
    const currentActivityId = selectedActivityId;
    resetTimer();
  }, [selectedActivityId]);

  useEffect(() => {
    console.log('OT mounted');
    document.getElementById('root')?.focus();
  }, []);

  const handleTimerClick = () => toggleTimer();

  const toggleLabel = timerRunning ? 'stop' : 'start';

  const buttonTitle = `Click to ${toggleLabel} the timer!`;

  const toggleControls = useCallback(
    (show: boolean) => () => setShowControls(show),
    []
  );

  return (
    <TimerWrapper onClick={handleTimerClick} onMouseOut={toggleControls(false)}
      onMouseOver={toggleControls(true)}>
      <OrangeCircle
        title={buttonTitle}
      >
        {formatTime(currentTime) || "time's up"}
      </OrangeCircle>

      <TimerControlToggleWrapper visible={showControls}>
        {timerRunning ? (
          <PauseButton color={'red'} title={buttonTitle} />
        ) : (
          <PlayButton color={'red'} title={buttonTitle} />
        )}
      </TimerControlToggleWrapper>
    </TimerWrapper>
  );
}
