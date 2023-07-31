import { FormEvent } from "react";
import { ActivityAddForm } from "./Activity";

export function AddActivity() {

  const token = localStorage.getItem('token');

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

    const updatedActivities = await fetch(`${process.env.REACT_APP_BACKEND_URL}/activity`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newActivity),
    });

    console.log('updatedActivities', updatedActivities.json());

    // event.target.elements.name.value = '';
    // event.target.elements.time.value = '';

    // window.location.reload();
  };

  return (
    <form onSubmit={addActivity}>
      <div>
        <label htmlFor='activity'>Activity:</label>
        <input type='text' id='name' name='name' autoComplete='off' />
      </div>
      <div>
        <label htmlFor='time'>Time Taken:</label>
        <input type='text' id='time' name='time' autoComplete='off' />
      </div>
      <button type='submit'>Add</button>
    </form>
  )
}