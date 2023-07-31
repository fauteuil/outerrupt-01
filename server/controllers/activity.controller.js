const Activity = require('../models/activity.model');

/**
 * It's an async function that uses the Activity model to find all activities and then returns a status
 * of 200 with the activities in the response body.
 * @param req - The request object.
 * @param res - the response object
 */
const getActivityList = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.status(200).json(activities);
  } catch (err) {
    console.log(`getActivityList - error: ${err}`);
    res.status(500).json({ message: err.message });
  }
};

const getActivity = async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.id);
    res.status(200).json(activity);
  } catch (err) {
    console.log(`getActivity - error: ${err}`);
    res.status(400).json(`Error: ${err}`);
  }

  // }

  //   const activities = await Activity.find();
  //   res.status(200).json(activities);
  // }
  // catch (err) {
  //   console.log(`getActivityList - error: ${err}`);
  //   res.status(500).json({ message: err.message });
  // }
  // };
};

/**
 * It creates a new activity and saves it to the database.
 * @param req - The request object.
 * @param res - the response object
 */
const addActivity = async (req, res) => {
  const activity = new Activity(req.body);

  try {
    const newActivity = await activity.save();
    // getActivityList();
    const activities = await Activity.find();
    res.status(200).json(activities);
    // res.status(201).json(newActivity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  addActivity,
  getActivityList,
  getActivity,
};
