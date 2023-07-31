import { Activity } from "./Activity";
import { useActivity } from "./useActivity";

export function ActivityListItem(ActivityListItemProps: { activity: Activity }) {
  const { selectActivity } = useActivity();
  const { activity } = ActivityListItemProps;
  return (
    <li
      style={{ cursor: 'pointer' }}
      title={`go to ${activity.name}`}
      key={activity._id}
      // onClick={selectActivity(activity)}
      onClick={selectActivity(activity._id)}
    >
      {activity.name} - {activity.time}
    </li>

    // <p>
    //   Details
    //   <br />
    //   Pellentesque habitant morbi tristique senectus et netus et malesuada fames
    //   ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,
    //   tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
    //   Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
    // </p>
  );
}
