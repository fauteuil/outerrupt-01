import { Outlet } from "react-router";
import { labels } from "../../common/text";
import { AddActivity } from "../../features/activities/AddActivity";
import { Navigation } from "./Navigation";

export const Layout = () => {
  // const style = ({ isActive }) => ({
  //   fontWeight: isActive ? 'bold' : 'normal',
  // });

  return (
    <>
      <div className='app'>
        <header className='app-header'>
          <h1>{labels.appTitle}</h1>
          <AddActivity />
          {/* <form onSubmit={addActivity}>
            <div>
              <label htmlFor='activity'>Activity:</label>
              <input type='text' id='name' name='name' autoComplete='off' />
            </div>
            <div>
              <label htmlFor='time'>Time Taken:</label>
              <input type='text' id='time' name='time' autoComplete='off' />
            </div>
            <button type='submit'>Add</button>
          </form> */}
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
            {/* <h1>React Router</h1> */}

            {/* <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <NavLink to="/home" style={style}>
          Home
        </NavLink>
        <NavLink to="/about" style={style}>
          About
        </NavLink>
      </nav> */}

            <main style={{ padding: '1rem 0' }}>
              <Outlet />
            </main>
            <footer className='footer'>Footer</footer>
          </div>
        </main>
      </div>
    </>
  );
};