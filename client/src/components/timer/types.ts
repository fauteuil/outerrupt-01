import { ComponentType } from 'react';
import { NoOpFunction } from '../../types';

export type TimerProps = {
  handleTimerEnd?: any;
  fullTime?: number;
  container?: ComponentType;
};
