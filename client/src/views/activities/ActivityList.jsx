import { useEffect, useState } from 'react';

export function ActivityList() {
  const [activities, setActivities] = useState([]);
  const token = localStorage.getItem('token');

  /* Fetching the data from the backend and setting the state of activities to the data. */
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/activities`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await result.json();
      setActivities(data);
    };
    fetchData();
  }, [token]);

  return (
    <div>
      List
      {activities && activities.length > 0 ? (
        <ol>
          {activities.map((activity) => (
            <li key={activity._id}>
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
