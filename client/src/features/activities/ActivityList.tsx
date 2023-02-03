import { useCallback } from 'react';
import { useEffect, useState } from 'react';

import { useActivity } from './useActivity';

export function ActivityList() {
  // const [activities, setActivities] = useState([]);
  const { activityList, selectActivity } = useActivity();
  // const token = localStorage.getItem('token');

  // const selectActivity = useCallback(
  //   (activity) => () => {
  //     console.log(`${activity.name} selected.`);
  //   },
  //   []
  // );

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

  return (
    <div>
      List
      {activityList && activityList.length > 0 ? (
        <ol>
          {activityList.map((activity) => (
            <li
              style={{ cursor: 'pointer' }}
              title={`go to ${activity.name}`}
              key={activity._id}
              // onClick={selectActivity(activity)}
              onClick={selectActivity(activity._id)}
            >
              {activity.name} - {activity.time}
            </li>
          ))}
        </ol>
      ) : (
        <p>No activities yet</p>
      )}
    </div>
  );
}
