import { OrangeTimer } from "../../components/timer";
import { ActivityDetails } from "../activities/ActivityDetails";
import { ActivityList } from "../activities/ActivityList";
import { useActivity } from "../activities/useActivity";

export function Dashboard() {
  const { selectNextActivity } = useActivity();

  return (
    <>
      <aside className='aside aside-2'>
        <OrangeTimer handleTimerEnd={selectNextActivity} />
      </aside>
      <article className='main'>
        <ActivityDetails />
      </article>
      <aside className='aside aside-1'>
        <ActivityList />
      </aside>
    </>
  )
}