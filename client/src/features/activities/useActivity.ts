import React, { useCallback, useEffect, useRef } from 'react';

import {
  useRecoilCallback,
  useRecoilState,
  useRecoilStateLoadable,
  useRecoilValue,
  useResetRecoilState,
} from 'recoil';

// import {
//   activityListState,
//   selectedActivityIdState,
//   selectedActivitiestate,
// } from '../components/activity-list/state';
// import { Activities } from '../components/activity-list/types';
import { orangeTimerState } from '../../components/timer/state';
// import { NoOpFunction } from '../../commom/types';
import { useNotification } from '../../common/hooks/useNotification';
import { useRouter } from '../../common/hooks/useRouter';
import {
  activityListState,
  selectedActivityIdState,
  selectedActivityState,
} from './Activity.state';
import { Activity } from './Activity';

const token = localStorage.getItem('token');

export function useActivity() {
  // const [
  //   activityListLoadable,
  //   setActivityListLoadable,
  // ] = useRecoilStateLoadable(activityListState);

  // TODO - replace with service call
  // const activityList: Activity[] = [];

  const [activityList, setActivityList] = useRecoilState(activityListState);

  // activityListLoadable?.state === 'hasValue'
  // activityListLoadable?.valueMaybe() || [];

  const resetTimer = useResetRecoilState(orangeTimerState);
  const { requestAndShowNotification } = useNotification();

  const [selectedActivityId, setSelectedActivityId] = useRecoilState(
    selectedActivityIdState
  );

  const selectedActivity = useRecoilValue(selectedActivityState);

  const { navigate, routerParams } = useRouter();

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
      setActivityList(data);
    };
    fetchData();
  }, [setActivityList]);

  // Set the selected activity id by URL value.
  useEffect(() => {
    const { itemId: activityId = '' } = routerParams;
    if (selectedActivityId !== activityId) {
      setSelectedActivityId(activityId);
      // console.log('setting itemId', activityId);
    }
  }, [routerParams, selectedActivityId, setSelectedActivityId]);

  // Select activity by id and navigate
  // function selectActivity(id: string) {
  // const selectActivity = useCallback(
  const selectActivity = (id: string) => (event: any) => {
    const activities = activityList || [];
    // const activities = [] as Activities;

    // const selectedIndex = activityList.findIndex(
    const selectedIndex = activities.findIndex(
      ({ _id }) => _id === id //selectedActivityId
    );
    const nextSelectedItem = activities[selectedIndex];
    // navigate(`/activity/${nextSelectedItem._id}`);
    window.location.href = `/activity/${nextSelectedItem._id}`;
    // },
    //   [activityList, navigate, selectedActivityId]
    // );
  };

  // increment the selected id and navigate
  function selectNextActivity() {
    const activities = activityList || [];
    // const activities = [] as Activities;

    // const selectedIndex = activityList.findIndex(
    const selectedIndex = activities.findIndex(
      ({ _id }) => _id === selectedActivityId
    );
    console.log('currentIndex', selectedIndex);
    const nextIndex = selectedIndex + 1;
    const nextSelectedIndex = nextIndex > activities.length ? 0 : nextIndex;
    const nextSelectedItem = activities[nextSelectedIndex];
    const newSelectedId = nextSelectedItem
      ? nextSelectedItem._id
      : activities[0]?._id || `no-id-${new Date().valueOf()}`;

    if (newSelectedId !== selectedActivityId) {
      // show notification
      requestAndShowNotification({
        message: `next: ${nextSelectedItem?.name || 'oops'}`,
        title: 'next!',
        link: '/activity',
        activityId: newSelectedId,
      });
      // navigate to next item route.
      // TODO: this should only kick off the next exercise with a url param when the user clicks on the alert or NYI 'start' button
      navigate(`/activity/${newSelectedId}`);
    }
  }

  return {
    activityList,
    selectActivity,
    selectedActivityId,
    selectedActivity,
    selectNextActivity,
    // setActivityListLoadable,
    setSelectedActivityId,
  };
}
