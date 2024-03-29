import { Activity } from "./Activity";
import { useActivity } from "./useActivity";

export function ActivityDetails() {
  const { selectActivity, selectedActivity } = useActivity();
  return (
    <div
      style={{ cursor: 'pointer' }}
      title={`${selectedActivity.name}`}
      key={selectedActivity._id}
    // onClick={selectActivity(selectedActivity)}
    // onClick={selectActivity(selectedActivity._id)}
    >
      {selectedActivity.name} - {selectedActivity.time}
      <br />
      {selectedActivity.description}
    </div>


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
