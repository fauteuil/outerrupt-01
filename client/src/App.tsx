// import { useEffect, useState } from 'react';

import './App.css';
import './Layout.css';
// import { labels } from './common/text.ts';
import { ActivityList } from './features/activities/ActivityList';
import { ActivityDetails } from './features/activities/ActivityDetails';
// import { Navigation } from './components/layout/Navigation';
import { OrangeTimer } from './components/timer/OrangeTimer';
import { labels } from './common/text';
import { useTimer } from './components/timer/useTimer';
import { useNotification } from './common/hooks/useNotification';
import { FormEvent, useMemo } from 'react';
import { useCallback } from 'react';
import { useActivity } from './features/activities/useActivity';
import { ActivityAdd, ActivityAddForm } from './features/activities/Activity';
import { AppRoutes } from './components/layout/Routes';

export function App() {
  // const [activities, setActivities] = useState([]);
  const { selectNextActivity } = useActivity();

  const { requestAndShowNotification } = useNotification();

  const timerNotification = useCallback(() => {
    requestAndShowNotification({
      message: `next: ${'neeexxxxtttttt'}`,
      title: 'next!',
      link: '/activity',
      activityId: '1234',
    });
  }, [requestAndShowNotification]);

  // const { selectNextActivity } = useTimer({
  //   // fullTime: 15000,
  //   // handleTimerEnd: requestAndShowNotification,
  //   handleTimerEnd: timerNotification,
  //   // handleTimerEnd: () => {
  //   //   console.log('wtf?');
  //   // },
  // });

  // const token = localStorage.getItem('token');

  /* Fetching the data from the backend and setting the state of activities to the data. */
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetch(
  //       `${process.env.REACT_APP_BACKEND_URL}/activities`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     const data = await result.json();
  //     setActivities(data);
  //   };
  //   fetchData();
  // }, [token]);


  // function selectNextActivity() {}

  // return (
  //   <aside className='aside aside-2'>
  //               <OrangeTimer handleTimerEnd={selectNextActivity} />
  //             </aside>
  //             <article className='main'>
  //               <ActivityDetails />
  //             </article>
  //             <aside className='aside aside-1'>
  //               <ActivityList />
  //             </aside> )

  return (
    < AppRoutes />
  );
}
