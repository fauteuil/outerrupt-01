import { createContext, useState, useEffect, FC } from 'react';
import { Activity } from '../features/activities/Activity';

interface AppContextProps {
  activityList: Activity[];
  timeLeft: number;
  isRunning: boolean;
  startTimer: () => void;
  stopTimer: () => void;
}

interface AppProviderProps {
  children: React.ReactNode;
}

const fullTime = 30;

export const AppContext = createContext<AppContextProps | null>(null);

// export const AppProvider: FC<AppProviderProps> = ({ children }) => {
export function AppProvider({ children }: AppProviderProps) {
  const [timeLeft, setTimeLeft] = useState<number>(fullTime);
  const [activityList, setActivityList] = useState<Activity[]>([]);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const startTimer = () => {
    if (timeLeft === 0) {
      setTimeLeft(fullTime);
      // return;
    }
    setIsRunning(true);
  }
  const stopTimer = () => setIsRunning(false);

  useEffect(() => {
    // if (!isRunning || timeLeft === 0) return;
    if (!isRunning) return;
    if (timeLeft === 0) {
      setTimeLeft(fullTime);
      setIsRunning(false);
      return;
    }
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // service call to populate activityList
    // ...

    return () => clearTimeout(timer);
  }, [isRunning, timeLeft]);

  return (
    <AppContext.Provider value={{ activityList, isRunning, startTimer, stopTimer, timeLeft }}>
      {children}
    </AppContext.Provider>
  );
};
