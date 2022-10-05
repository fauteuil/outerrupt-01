import { atom, selector } from 'recoil';

export const orangeTimerState = atom<number>({
  key: 'orangeTimerState',
  default: 20,
});

// TODO: set/get initial time value from LocalStroage / DB.
/**
 * Default to 30 minutes
 */
export const activityTimerState = atom({
  key: 'activityTimerState',
  default: new Date().getTime(),
});

export const elapsedTimeState = selector({
  key: 'currentTimeSelector',
  get: ({ get }) => new Date().getTime() - get(activityTimerState),
});
