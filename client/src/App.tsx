// import { useEffect, useState } from 'react';

import './App.css';
import './Layout.css';
// import { labels } from './common/text.ts';
import { ActivityList } from './features/activities/ActivityList';
import { ActivityDetails } from './features/activities/ActivityDetails';
import { Navigation } from './components/layout/Navigation';
import { OrangeTimer } from './components/timer/OrangeTimer';
import { labels } from './common/text';
import { useTimer } from './components/timer/useTimer';
import { useNotification } from './common/hooks/useNotification';
import { FormEvent, useMemo } from 'react';
import { useCallback } from 'react';
import { useActivity } from './features/activities/useActivity';
import { ActivityAdd, ActivityAddForm } from './features/activities/Activity';

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

  const token = localStorage.getItem('token');

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

  /**
   * When the user clicks the submit button, the function will prevent the default action of the form,
   * create a new activity object with the name and time values from the form, and then send a POST
   * request to the backend to create a new activity
   */
  const addActivity = async (event: FormEvent<ActivityAddForm>) => {
    event.preventDefault();

    const newActivity = {
      // name: event.target.activity.value,
      // time: event.target.time.value,
      name: event.currentTarget.elements.name.value,
      time: event.currentTarget.elements.time.value,
    };

    await fetch(`${process.env.REACT_APP_BACKEND_URL}/activity`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newActivity),
    });

    // event.target.elements.name.value = '';
    // event.target.elements.time.value = '';

    // window.location.reload();
  };

  // function selectNextActivity() {}

  return (
    <div className='app'>
      <header className='app-header'>
        <h1>{labels.appTitle}</h1>
        <form onSubmit={addActivity}>
          <div>
            <label htmlFor='activity'>Activity:</label>
            <input
              type='text'
              id='name'
              name='name'
              autoComplete='off'
            />
          </div>
          <div>
            <label htmlFor='time'>Time Taken:</label>
            <input type='text' id='time' name='time' autoComplete='off' />
          </div>
          <button type='submit'>Add</button>
        </form>
      </header>
      <main className='app-main'>
        <h2>Today</h2>

        {/* {activities && activities.length > 0 ? (
          <ol>
            {activities.map((activity) => (
              <li key={activity._id}>
                {activity.name} - {activity.time}
              </li>
            ))}
          </ol>
        ) : (
          <p>No activities yet</p>
        )} */}

        {/* FLEX LAYOUT */}
        <div className='wrapper'>
          <div className='header'>
            {/* Header */}
            <div>
              {' '}
              <Navigation />
            </div>
          </div>
          <aside className='aside aside-2'>
            <OrangeTimer handleTimerEnd={selectNextActivity} />
          </aside>
          <article className='main'>
            <ActivityDetails />
          </article>
          <aside className='aside aside-1'>
            <ActivityList />
          </aside>
          <footer className='footer'>Footer</footer>
        </div>
      </main>
    </div>
  );
}
